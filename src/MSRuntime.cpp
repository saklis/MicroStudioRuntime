﻿#include <cstdio>
#include <cstring>

#include "MSRuntime.h"

#include <spdlog/spdlog.h>

#include "JS_API.h"

#include "helpers.h"

MSRuntime_ReturnValue MSRuntime::Init(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();

    instance->_runtime = JS_NewRuntime();
    if (instance->_runtime == nullptr) {
        errorMsg = "Failed to create QuickJS runtime";
        return ErrorWhileInitializingQuickJS;
    }

    instance->_context = JS_NewContext(instance->_runtime);
    if (instance->_context == nullptr) {
        errorMsg = "Failed to create QuickJS context";
        return ErrorWhileInitializingQuickJS;
    }

    MSRuntime_ReturnValue retVal = instance->RegisterJSAPIFunctions(errorMsg);
    if (retVal != OK) return retVal;

    retVal = instance->RegisterMicroStudioLibraries(errorMsg);
    if (retVal != OK) return retVal;

    return OK;
}

MSRuntime_ReturnValue MSRuntime::LoadAssets(std::string& errorMsg) {
    if (MSAssetsManager::AssetsExists(MSAssetsManager::DefaultAssetsPath)) {
        MSRuntime* instance = MSRuntime::GetInstance();

        // read resource manifest from JS
        spdlog::info("Reading resource manifest");
        if (!instance->_assets->ReadResourceManifest(instance->_context, errorMsg)) {
            return ErrorWhileReadingResourceManifest;
        }

        // load assets
        spdlog::info("Loading assets");
        if (!instance->_assets->LoadAssets(MSAssetsManager::DefaultAssetsPath, errorMsg)) {
            return ErrorWhileLoadingAssets;
        }
    }

    return OK;
}

MSRuntime_ReturnValue MSRuntime::LoadGameSource(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();
    return instance->RegisterGameSource(errorMsg);
}

MSRuntime_ReturnValue MSRuntime::LoadExtraLibraries(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();
    return instance->RegisterExternalLibraries(errorMsg);
}

MSRuntime_ReturnValue MSRuntime::StartGame(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();
    const char* script = "window.player = new Player();";
    JSValue result = JS_Eval(instance->_context, script, strlen(script), "<input>", JS_EVAL_TYPE_GLOBAL);
    if (JS_IsException(result)) {
        JSValue exception = JS_GetException(instance->_context);
        const char* ex_msg = JS_ToCString(instance->_context, exception);
        errorMsg = "Error while starting new game: " + std::string(ex_msg);
        JS_FreeCString(instance->_context, ex_msg);

        JS_FreeValue(instance->_context, exception);
        JS_FreeValue(instance->_context, result);
        return ErrorWhileStartingGame;
    }
    JS_FreeValue(instance->_context, result);
    return OK;
}

MSRuntime_ReturnValue MSRuntime::Free(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();

    if (!instance->_assets->UnloadAssets(errorMsg)) {
        return ErrorWhileUnloadingAssets;
    }

    JS_FreeContext(instance->_context);
    JS_FreeRuntime(instance->_runtime);
    // TODO: crash with Assertion failed: list_empty(&rt->gc_obj_list), file quickjs.c, line 1983

    return OK;
}

MSRuntime_ReturnValue MSRuntime::Render(std::string& errorMsg) {
    MSRuntime* instance = MSRuntime::GetInstance();

    while (!instance->_renderingQueue.IsEmpty()) {
        RenderingTask* task = nullptr;
        if (instance->_renderingQueue.Pop(task)) {
            switch (task->Type) {
                case Type_Empty:
                    break;
                case Type_ClearBackground: {
                    ClearBackground(task->Color);
                }
                break;
                case Type_DrawRectanglePro: {
                    DrawRectanglePro(task->Rec, task->Origin, task->Rotation, task->Color);
                }
                break;
                case Type_DrawTexturePro: {
                    DrawTexturePro(*task->Texture, task->Source, task->Dest, task->Origin, task->Rotation, task->Color);
                }
                break;
                case Type_DrawTextPro: {
                    Vector2 textSize = MeasureTextEx(*task->Font, task->Text, task->FontSize, task->Spacing);

                    rlPushMatrix();
                    rlTranslatef(task->Position.x, task->Position.y, 0); // set position
                    rlRotatef(instance->_currentDrawRotation, 0, 0, 1);
                    rlScalef(instance->_currentDrawScale.x, instance->_currentDrawScale.y, 1);
                    rlTranslatef(-textSize.x / 2, -textSize.y / 2, 0); // center text by moving the origin point

                    DrawTextEx(*task->Font, task->Text, {0, 0}, task->FontSize, task->Spacing, task->Color);

                    rlPopMatrix();
                }
                break;
            }
        } else {
            errorMsg = "Error while rendering: queue not empty, but failed to pop task";
            return ErrorWhileRendering;
        }
    }

    instance->_renderingQueue.Clear();
    return OK;
}

bool MSRuntime::ShouldClose() {
    return MSRuntime::GetInstance()->_shouldClose;
}

void MSRuntime::SetScreenSize(const int screenWidth, const int screenHeight) {
    MSRuntime* instance = MSRuntime::GetInstance();
    instance->_screenWidth = screenWidth;
    instance->_screenWidthHalf = screenWidth / 2;
    instance->_screenHeight = screenHeight;
    instance->_screenHeightHalf = screenHeight / 2;

    const char* aspect = nullptr;
    const char* orientation = nullptr;

    if (screenWidth >= screenHeight) {
        instance->_orientation = LANDSCAPE;
        orientation = "landscape";
        instance->_screenHeightRatio = static_cast<float>(screenHeight) / 200.0f; // in LANDSCAPE y is <-100,100>
        instance->_screenWidthRatio = static_cast<float>(screenWidth) / (
                                          static_cast<float>(screenWidth) / static_cast<float>(screenHeight) * 200.0f);
        aspect = instance->CalculateAspectRatio(instance->_orientation, screenWidth, screenHeight);

        JS_UpdateScreenSize(instance->_context, static_cast<float>(screenWidth) / instance->_screenWidthRatio, 200.0f,
                            aspect, orientation);
    } else {
        instance->_orientation = PORTRAIT;
        orientation = "portrait";
        instance->_screenHeightRatio = static_cast<float>(screenHeight) / (
                                           static_cast<float>(screenHeight) / static_cast<float>(screenWidth) * 200.0f);
        instance->_screenWidthRatio = static_cast<float>(screenWidth) / 200.0f; // in PORTRAIT x is <-100,100>

        aspect = instance->CalculateAspectRatio(instance->_orientation, screenWidth, screenHeight);

        JS_UpdateScreenSize(instance->_context, 200.0f, static_cast<float>(screenHeight) / instance->_screenHeightRatio,
                            aspect, orientation);
    }
}

void MSRuntime::Exit() {
    spdlog::info("Closing the game...");
    MSRuntime::GetInstance()->_shouldClose = true;
}

void MSRuntime::Screen_Clear(const char* colorText) {
    MSRuntime* instance = MSRuntime::GetInstance();
    if (!instance->_isRuntimeInitialized) return; // only allow to clear when runtime is initialized
    Color clearColor;
    if (colorText == nullptr) {
        clearColor = BLACK;
    } else {
        int alpha;
        ParseColor(colorText, &clearColor, &alpha);
    }
    instance->_renderingQueue.Push_ClearBackground(clearColor);
}

void MSRuntime::Screen_SetColor(const char* colorText) {
    MSRuntime* instance = MSRuntime::GetInstance();

    if (colorText == nullptr) {
        instance->_currentColor = WHITE;
    } else {
        Color drawColor;
        int alpha;
        ParseColor(colorText, &drawColor, &alpha);
        instance->_currentColor = drawColor;
        if (alpha != -1) {
            instance->_currentAlpha = alpha;
        }
    }
}

void MSRuntime::Screen_SetAlpha(float alpha) {
    MSRuntime* instance = MSRuntime::GetInstance();
    instance->_currentAlpha = static_cast<uint8_t>(alpha * 255.0f); // microstudio uses alpha in range 0.0-1.0
}

void MSRuntime::Screen_SetFont(const char* font) {
    MSRuntime* instance = MSRuntime::GetInstance();
    instance->_currentFont = font;
}

void MSRuntime::Screen_SetDrawRotation(float rotation) {
    MSRuntime* instance = MSRuntime::GetInstance();
    instance->_currentDrawRotation = -rotation; // negative rotation because microStudio uses anticlockwise rotation
}

void MSRuntime::Screen_SetDrawScale(const float scaleX, const float scaleY) {
    MSRuntime* instance = MSRuntime::GetInstance();
    instance->_currentDrawScale.x = scaleX;
    instance->_currentDrawScale.y = scaleY;
}

void MSRuntime::Screen_FillRect(float x, float y, float w, float h, const char* colorText) {
    MSRuntime* instance = MSRuntime::GetInstance();

    float nX, nY, nW, nH;
    instance->CalculateNativeCoordinates(x, y, w, h, &nX, &nY, &nW, &nH);

    Color color;
    int alpha;
    if (colorText != nullptr) {
        ParseColor(colorText, &color, &alpha);
        if (alpha == -1) color.a = instance->_currentAlpha;
    } else {
        color = instance->_currentColor;
        color.a = instance->_currentAlpha;
    }

    Rectangle rec = {nX, nY, nW * instance->_currentDrawScale.x, nH * instance->_currentDrawScale.y};
    Vector2 origin = {nW * instance->_currentDrawScale.x / 2, nH * instance->_currentDrawScale.y / 2};

    instance->_renderingQueue.Push_DrawRectanglePro(rec, origin, instance->_currentDrawRotation, color);
}

void MSRuntime::Screen_DrawSprite(const char* sprite, const float x, const float y, const float w, const float h) {
    MSRuntime* instance = MSRuntime::GetInstance();

    // 'sprite' string may include '.' that separates sprite's name and frame number
    const char* dotPosition = strrchr(sprite, '.');
    char spriteName[strlen(sprite)];
    int frameOverride = -1;
    if (dotPosition) {
        frameOverride = std::stoi(dotPosition + 1);

        size_t spriteNameLength = dotPosition - sprite;
        strncpy(spriteName, sprite, spriteNameLength);
        spriteName[spriteNameLength] = '\0';
    } else {
        strncpy(spriteName, sprite, strlen(sprite) + 1);
    }

    const MSSprite* ms_sprite = instance->_assets->GetSprite(spriteName);
    if (!ms_sprite) return; // if the sprite doesn't exist, return

    float nX, nY, nW, nH;
    instance->CalculateNativeCoordinates(x, y, w, h, &nX, &nY, &nW, &nH);

    Color tint = instance->_currentColor;
    tint.a = instance->_currentAlpha;

    Rectangle sourceRec = {
        0, 0, static_cast<float>(ms_sprite->Texture.width),
        static_cast<float>(ms_sprite->Texture.height)
    };
    if (ms_sprite->IsAnimation == true) {
        const int frameNumber = frameOverride >= 0 ? frameOverride : ms_sprite->CurrentFrame;
        sourceRec.y = static_cast<float>(frameNumber) * static_cast<float>(ms_sprite->FrameHeight);
        sourceRec.height = static_cast<float>(ms_sprite->FrameHeight);
    }

    Rectangle dest = {nX, nY, nW * instance->_currentDrawScale.x, nH * instance->_currentDrawScale.y};
    Vector2 origin = {nW / 2, nH / 2};

    instance->_renderingQueue.Push_DrawTexturePro(&ms_sprite->Texture, sourceRec, dest, origin,
                                                  instance->_currentDrawRotation, tint);
}

void MSRuntime::Screen_DrawSpritePart(const char* sprite, const float px, const float py, const float pw,
                                      const float ph, const float x, const float y, const float w, const float h) {
    MSRuntime* instance = MSRuntime::GetInstance();

    const MSSprite* ms_sprite = instance->_assets->GetSprite(sprite);
    if (!ms_sprite) return; // if the sprite doesn't exist, return

    float nX, nY, nW, nH;
    instance->CalculateNativeCoordinates(x, y, w, h, &nX, &nY, &nW, &nH);

    Color tint = instance->_currentColor;
    tint.a = instance->_currentAlpha;

    Rectangle source = {px, py, pw, ph};
    Rectangle dest = {nX, nY, nW * instance->_currentDrawScale.x, nH * instance->_currentDrawScale.y};
    Vector2 origin = {nW / 2, nH / 2};

    instance->_renderingQueue.Push_DrawTexturePro(&ms_sprite->Texture, source, dest, origin,
                                                  instance->_currentDrawRotation, tint);
}

void MSRuntime::Screen_DrawMap(const char* name, const float x, const float y, const float w, const float h) {
    MSRuntime* instance = MSRuntime::GetInstance();

    const MSMap* map = instance->_assets->GetMap(name);
    if (!map) return; // if the map doesn't exist, return

    float scaledBlockWidth = w / map->Width;
    float scaledBlockHeight = h / map->Height;

    const float MAP_TO_WORLD_X = x - map->Width * scaledBlockWidth / 2 + scaledBlockWidth / 2;
    const float MAP_TO_WORLD_Y = y - map->Height * scaledBlockHeight / 2 + scaledBlockHeight / 2;

    for (int dataIndex = 0; dataIndex < map->Data.size(); dataIndex++) {
        std::string spriteName = map->Sprites[map->Data[dataIndex]];
        if (spriteName != "0") {
            int mapX = dataIndex % map->Width;
            int mapY = dataIndex / map->Width;

            float worldX = static_cast<float>(mapX) * scaledBlockWidth + MAP_TO_WORLD_X;
            float worldY = static_cast<float>(mapY) * scaledBlockHeight + MAP_TO_WORLD_Y;
            float worldWidth = scaledBlockWidth;
            float worldHeight = scaledBlockHeight;

            uint32_t semicolonIndex = spriteName.find(':');
            if (semicolonIndex == std::string::npos) {
                MSRuntime::Screen_DrawSprite(spriteName.c_str(), worldX, worldY, worldWidth, worldHeight);
            } else {
                // asset:7,3
                std::string assetName = spriteName.substr(0, semicolonIndex);
                std::string assetData = spriteName.substr(semicolonIndex + 1);
                std::string::size_type commaIndex = assetData.find(',');
                if (commaIndex == std::string::npos) {
                    spdlog::warn("Strange state in DrawMap. Asset data doesn't contain comma. Asset: {}", spriteName);
                    MSRuntime::Screen_DrawSprite(assetName.c_str(), worldX, worldY, worldWidth, worldHeight);
                } else {
                    float px = std::stof(assetData.substr(0, commaIndex));
                    float py = std::stof(assetData.substr(commaIndex + 1));
                    MSRuntime::Screen_DrawSpritePart(assetName.c_str(), px * map->BlockWidth, py * map->BlockHeight,
                                                     map->BlockWidth, map->BlockHeight, worldX, worldY, worldWidth,
                                                     worldHeight);
                }
            }
        }
    }
}

void MSRuntime::Screen_DrawText(const char* text, const float x, const float y, const float size,
                                const char* colorText) {
    MSRuntime* instance = MSRuntime::GetInstance();

    Color color;
    int alpha;
    if (colorText != nullptr) {
        ParseColor(colorText, &color, &alpha);
        if (alpha == -1) color.a = instance->_currentAlpha;
    } else {
        color = instance->_currentColor;
        color.a = instance->_currentAlpha;
    }

    Font* font = instance->_assets->GetFont(instance->_currentFont);
    if (font == nullptr) return; // if the font doesn't exist, return

    float n_x = 0.0f, n_y = 0.0f;
    instance->CalculateNativeCoordinates(x, y, &n_x, &n_y);

    float scaledSize;
    if (instance->_orientation == LANDSCAPE) {
        scaledSize = size * instance->_screenHeightRatio;
    } else {
        scaledSize = size * instance->_screenWidthRatio;
    }

    scaledSize *= 1.175; // todo: NO IDEA WHY THIS IS NEEDED!
    // maybe because of the requirement of the clear type fonts to be loaded in big size?
    // font scaling is still not quite correct

    instance->_renderingQueue.Push_DrawTextPro(font, text, {n_x, n_y}, {0, 0}, instance->_currentDrawRotation,
                                               scaledSize, 0, color);
}

bool MSRuntime::Screen_IsFontReady(const char* font_name) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    return instance->_assets->GetFont(font_name) != nullptr;
}

void MSRuntime::Audio_PlaySound(const char* name, int uniqueId, float volume, float pitch, float pan, bool loop) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    MSSoundInstance* soundInstance = instance->_assets->GetIdleSoundInstance(name);
    if (soundInstance == nullptr) return; // if the sound doesn't exist, return

    soundInstance->UniqueId = uniqueId;
    SetSoundVolume(soundInstance->Instance, volume);
    SetSoundPitch(soundInstance->Instance, pitch);
    SetSoundPan(soundInstance->Instance, pan);
    soundInstance->IsLooping = loop;

    PlaySound(soundInstance->Instance);
}

void MSRuntime::Audio_Sound_SetVolume(const char* soundName, int uniqueId, float volume) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSSoundInstance* sound = instance->_assets->GetSoundInstance(soundName, uniqueId);
    if (sound == nullptr) return; // if the sound doesn't exist, return

    SetSoundVolume(sound->Instance, volume);
}

void MSRuntime::Audio_Sound_SetPitch(const char* soundName, int UniqueId, float pitch) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSSoundInstance* sound = instance->_assets->GetSoundInstance(soundName, UniqueId);
    if (sound == nullptr) return; // if the sound doesn't exist, return

    SetSoundPitch(sound->Instance, pitch);
}

void MSRuntime::Audio_Sound_SetPan(const char* soundName, int uniqueId, float pan) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSSoundInstance* sound = instance->_assets->GetSoundInstance(soundName, uniqueId);
    if (sound == nullptr) return; // if the sound doesn't exist, return

    SetSoundPan(sound->Instance, pan);
}

void MSRuntime::Audio_Sound_Stop(const char* soundName, int uniqueId) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSSoundInstance* sound = instance->_assets->GetSoundInstance(soundName, uniqueId);
    if (sound == nullptr) return; // if the sound doesn't exist, return

    StopSound(sound->Instance);
}

void MSRuntime::Audio_PlayMusic(const char* name, float volume, bool loop) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    MSMusic* music = instance->_assets->GetMusic(name);
    if (music == nullptr) return; // if the music doesn't exist, return

    music->Music.looping = loop;

    PlayMusicStream(music->Music);
}

void MSRuntime::Audio_Music_Play(const char* name) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSMusic* music = instance->_assets->GetMusic(name);
    if (music == nullptr) return; // if the music doesn't exist, return

    ResumeMusicStream(music->Music);
}

void MSRuntime::Audio_Music_Stop(const char* name) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    const MSMusic* music = instance->_assets->GetMusic(name);
    if (music == nullptr) return; // if the music doesn't exist, return

    PauseMusicStream(music->Music);
}

void MSRuntime::CalculateNativeCoordinates(const float x, const float y, float* n_x, float* n_y) const {
    *n_x = x * _screenWidthRatio + static_cast<float>(_screenWidthHalf);
    *n_y = -y * _screenHeightRatio + static_cast<float>(_screenHeightHalf);
}

void MSRuntime::CalculateNativeCoordinates(const float x, const float y, const float w, const float h, float* n_x,
                                           float* n_y, float* n_w, float* n_h) const {
    *n_x = x * _screenWidthRatio + static_cast<float>(_screenWidthHalf);
    *n_y = -y * _screenHeightRatio + static_cast<float>(_screenHeightHalf);
    *n_w = w * _screenWidthRatio;
    *n_h = h * _screenHeightRatio;
}

const char* MSRuntime::CalculateAspectRatio(const MSRuntime_Orientation orientation, const int screen_width,
                                            const int screen_height) {
    float aspect = 0.0f;

    if (orientation == LANDSCAPE) {
        aspect = static_cast<float>(screen_width) / static_cast<float>(screen_height);

        if (aspect > 1.95f) {
            return "2x1";
        } else if (aspect > 1.6f) {
            return "16x9";
        } else if (aspect > 1.2f) {
            return "4x3";
        } else if (aspect > 0.9f) {
            return "1x1";
        }
    } else {
        aspect = static_cast<float>(screen_height) / static_cast<float>(screen_width);

        if (aspect > 1.95f) {
            return "2x1";
        } else if (aspect > 1.6f) {
            return "16x9";
        } else if (aspect > 1.2f) {
            return "4x3";
        } else if (aspect > 0.9f) {
            return "1x1";
        }
    }

    return "16x9"; // fallback to most common aspect ratio
}

void MSRuntime::RuntimeInitialized() {
    MSRuntime::GetInstance()->_isRuntimeInitialized = true;
}

void MSRuntime::UpdateKeyboard(const int keyCode, const bool isDown) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return;

    auto& [code, key] = Ray2MicroKeyMap[keyCode];

    // Create the event object
    const JSValue event = JS_NewObject(instance->_context);
    if (isDown) JS_SetPropertyStr(instance->_context, event, "type", JS_NewString(instance->_context, "keydown"));
    else JS_SetPropertyStr(instance->_context, event, "type", JS_NewString(instance->_context, "keyup"));
    JS_SetPropertyStr(instance->_context, event, "code", JS_NewString(instance->_context, code));
    JS_SetPropertyStr(instance->_context, event, "key", JS_NewString(instance->_context, key));

    // Get the 'document' object
    JSValue global_obj = JS_GetGlobalObject(instance->_context);
    JSValue document = JS_GetPropertyStr(instance->_context, global_obj, "document");

    // Get the 'dispatchEvent' function
    JSValue dispatchEventFunc = JS_GetPropertyStr(instance->_context, document, "dispatchEvent");

    // Prepare arguments for 'dispatchEvent'
    JSValue args[1] = {event};

    // Call 'dispatchEvent' method
    JS_Call(instance->_context, dispatchEventFunc, document, 1, args);

    // Clean up
    JS_FreeValue(instance->_context, dispatchEventFunc);
    JS_FreeValue(instance->_context, document);
    JS_FreeValue(instance->_context, global_obj);
    JS_FreeValue(instance->_context, event);
}

MSRuntime_ReturnValue MSRuntime::Tick(const float deltaTime, std::string& errorMsg) {
    const MSRuntime* instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return OK; // skip tick if runtime is not initialized

    // update assets
    // - update animation's current frame
    // - restart playing sound if it's looped
    instance->_assets->Update(deltaTime);

    // Retrieve the 'update' function
    JSValue global_obj = JS_GetGlobalObject(instance->_context);
    JSValue js_update_func = JS_GetPropertyStr(instance->_context, global_obj, "CGameTick");

    if (JS_IsFunction(instance->_context, js_update_func)) {
        JSValue result = JS_Call(instance->_context, js_update_func, JS_UNDEFINED, 0, nullptr);

        if (JS_IsException(result)) {
            const JSValue exception = JS_GetException(instance->_context);
            const char* ex_msg = JS_ToCString(instance->_context, exception);
            errorMsg = ex_msg;
            JS_FreeCString(instance->_context, ex_msg);
            JS_FreeValue(instance->_context, exception);

            JS_FreeValue(instance->_context, result);
            JS_FreeValue(instance->_context, js_update_func);
            JS_FreeValue(instance->_context, global_obj);
            return ErrorWhileCallingGameTick;
        }
        JS_FreeValue(instance->_context, result);
    }

    JS_FreeValue(instance->_context, js_update_func);
    JS_FreeValue(instance->_context, global_obj);

    return OK;
}

const MSSprite* MSRuntime::GetImage(const std::string& imageName) {
    return MSRuntime::GetInstance()->_assets->GetSprite(imageName);
}

MSRuntime_ReturnValue MSRuntime::RegisterMicroStudioLibraries(std::string& errorMsg) const {
    MSRuntime_ReturnValue retVal = OK;
    for (const auto& library: this->MicroStudioLibraries) {
        retVal = this->RegisterJSFileInQuickJS(library.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSAPIFunctions(std::string& errorMsg) const {
    JSValue global_obj = JS_GetGlobalObject(this->_context);
    JS_SetPropertyFunctionList(this->_context, global_obj, js_raylib_funcs,
                               sizeof(js_raylib_funcs) / sizeof(JSCFunctionListEntry));
    JSValue exception = JS_GetException(this->_context);

    if (!JS_IsNull(exception)) {
        const char* ex_msg = JS_ToCString(this->_context, exception);
        errorMsg = "Error while registering JS API functions: " + std::string(ex_msg);
        JS_FreeCString(this->_context, ex_msg);

        JS_FreeValue(this->_context, exception);
        JS_FreeValue(this->_context, global_obj);
        return ErrorWhileRegisteringJSFunctions;
    }

    JS_FreeValue(this->_context, exception);
    JS_FreeValue(this->_context, global_obj);

    return OK;
}

MSRuntime_ReturnValue MSRuntime::RegisterGameSource(std::string& errorMsg) const {
    MSRuntime_ReturnValue retVal = OK;
    for (const auto& sourceFile: this->GameSourceFiles) {
        retVal = this->RegisterJSFileInQuickJS(sourceFile.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterExternalLibraries(std::string& erroMsg) {
    // read list of external libraries from game.js file and store them in ExtraLibraries vector

    JSValue globalObj = JS_GetGlobalObject(_context);

    JSValue msLibs = JS_GetPropertyStr(_context, globalObj, "ms_libs");
    JS_FreeValue(_context, globalObj);

    if (!JS_IsArray(_context, msLibs)) {
        JS_FreeValue(_context, msLibs);
        erroMsg = "Syntax error in game.js file: ms_libs is not an array.";
        return ErrorWhileRegisteringExternalLibraries;
    }

    JSValue lenVal = JS_GetPropertyStr(_context, msLibs, "length");
    if (JS_IsException(lenVal)) {
        JS_FreeValue(_context, lenVal);
        JS_FreeValue(_context, msLibs);
        erroMsg = "Error while getting length of ms_libs array.";
        return ErrorWhileRegisteringExternalLibraries;
    }

    uint32_t msLibsLen = 0;
    if (JS_ToUint32(_context, &msLibsLen, lenVal)) {
        JS_FreeValue(_context, lenVal);
        JS_FreeValue(_context, msLibs);
        erroMsg = "Error while converting length of ms_libs array to uint32.";
        return ErrorWhileRegisteringExternalLibraries;
    }
    JS_FreeValue(_context, lenVal);

    for (uint32_t i = 0; i < msLibsLen; i++) {
        JSValue element = JS_GetPropertyUint32(_context, msLibs, i);
        if (JS_IsException(element)) {
            JS_FreeValue(_context, msLibs);
            erroMsg = "Error while getting ms_libs[" + std::to_string(i) + "].";
            return ErrorWhileRegisteringExternalLibraries;
        }

        if (JS_IsString(element)) {
            const char* value = JS_ToCString(_context, element);
            if (value) {
                this->ExtraLibraries.push_back(value);
                JS_FreeCString(_context, value);
            } else {
                JS_FreeCString(_context, value);
                JS_FreeValue(_context, element);
                JS_FreeValue(_context, msLibs);
                erroMsg = "Syntax error in game.js file: ms_libs[" + std::to_string(i) + "] is not a string.";
                return ErrorWhileRegisteringExternalLibraries;
            }
        } else {
            JS_FreeValue(_context, element);
            JS_FreeValue(_context, msLibs);
            erroMsg = "Syntax error in game.js file: ms_libs[" + std::to_string(i) + "] is not a string.";
            return ErrorWhileRegisteringExternalLibraries;
        }

        JS_FreeValue(_context, element);
    }

    JS_FreeValue(_context, msLibs);

    // list of external libraries stored in ExtraLibraries vector. Register them in QuickJS
    for (const auto& libName: this->ExtraLibraries) {
        auto knownLib = KnownExternalLibraries.find(libName);
        if (knownLib != KnownExternalLibraries.end()) {
            MSRuntime_ReturnValue retVal = RegisterJSFileInQuickJS(knownLib->second.c_str(), erroMsg);
            if (retVal != OK) return retVal;
        }
    }

    return OK;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSFileInQuickJS(const char* filePath, std::string& errorMsg) const {
    FILE* libFile = fopen(filePath, "rb");
    // check if file exists
    if (libFile == nullptr) {
        errorMsg = "Required file '" + std::string(filePath) + "' doesn't exists";
        return MSLibraryFileDoesntExist;
    }

    // get file size
    fseek(libFile, 0, SEEK_END);
    const size_t fileSize = ftell(libFile);
    fseek(libFile, 0, SEEK_SET);

    // read file's content
    char* fileContent = new char[fileSize + 1];
    fread(fileContent, 1, fileSize, libFile);
    fileContent[fileSize] = 0;

    // close file
    fclose(libFile);

    // register library in context
    const JSValue result = JS_Eval(this->_context, fileContent, fileSize, filePath, JS_EVAL_TYPE_GLOBAL);
    if (JS_IsException(result)) {
        const JSValue exception = JS_GetException(this->_context);
        const char* ex_msg = JS_ToCString(this->_context, exception);
        errorMsg = "Error while registering file " + std::string(filePath) + " functions: " + std::string(ex_msg);
        JS_FreeCString(this->_context, ex_msg);

        JS_FreeValue(this->_context, exception);
        JS_FreeValue(this->_context, result);
        return ErrorEvaluatingJSFile;
    }

    JS_FreeValue(this->_context, result);

    return OK;
}
