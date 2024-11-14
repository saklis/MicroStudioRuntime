#include "AssetsManager.h"

#include <filesystem>

bool MSAssetsManager::AssetsExists(const std::string& assetsPath) {
    if (std::filesystem::exists(assetsPath)) {
        for (const auto& entry: std::filesystem::recursive_directory_iterator(assetsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                return true;
            }
        }
    }

    return false;
}

bool MSAssetsManager::ReadResourceManifest(JSContext* js_context, std::string& errorMsg) {
    JSValue global_obj = JS_GetGlobalObject(js_context);
    JSValue resources_obj = JS_GetPropertyStr(js_context, global_obj, "resources");
    if (JS_IsException(resources_obj)) {
        JSValue exception = JS_GetException(js_context);
        const char* ex_msg = JS_ToCString(js_context, exception);
        errorMsg = ex_msg;
        JS_FreeCString(js_context, ex_msg);
        JS_FreeValue(js_context, exception);

        JS_FreeValue(js_context, resources_obj);
        JS_FreeValue(js_context, global_obj);
        return false;
    }

    JSValue images_array = JS_GetPropertyStr(js_context, resources_obj, "images");
    if (!JS_IsArray(js_context, images_array)) {
        errorMsg = "Failed to read images array from resources manifest";

        JS_FreeValue(js_context, images_array);
        JS_FreeValue(js_context, resources_obj);
        JS_FreeValue(js_context, global_obj);
        return false;
    }

    uint32_t images_length = 0;
    JSValue images_array_length = JS_GetPropertyStr(js_context, images_array, "length");
    if (JS_IsException(images_array_length)) {
        JSValue exception = JS_GetException(js_context);
        const char* ex_msg = JS_ToCString(js_context, exception);
        errorMsg = ex_msg;
        JS_FreeCString(js_context, ex_msg);
        JS_FreeValue(js_context, exception);

        JS_FreeValue(js_context, images_array_length);
        JS_FreeValue(js_context, images_array);
        JS_FreeValue(js_context, resources_obj);
        JS_FreeValue(js_context, global_obj);
        return false;
    }
    if(JS_ToUint32(js_context, &images_length, images_array_length) < 0) {
        JSValue exception = JS_GetException(js_context);
        const char* ex_msg = JS_ToCString(js_context, exception);
        errorMsg = ex_msg;
        JS_FreeCString(js_context, ex_msg);
        JS_FreeValue(js_context, exception);

        JS_FreeValue(js_context, images_array_length);
        JS_FreeValue(js_context, images_array);
        JS_FreeValue(js_context, resources_obj);
        JS_FreeValue(js_context, global_obj);
        return false;
    }
    JS_FreeValue(js_context, images_array_length);

    // iterate over the images array
    for (uint32_t i = 0; i < images_length; i++) {

        // get item from index
        JSValue item = JS_GetPropertyUint32(js_context, images_array, i);
        if (JS_IsException(item)) {
            JSValue exception = JS_GetException(js_context);
            const char* ex_msg = JS_ToCString(js_context, exception);
            errorMsg = ex_msg;
            JS_FreeCString(js_context, ex_msg);
            JS_FreeValue(js_context, exception);

            JS_FreeValue(js_context, item);

            JS_FreeValue(js_context, images_array);
            JS_FreeValue(js_context, resources_obj);
            JS_FreeValue(js_context, global_obj);
            return false;
        }

        // Extract 'file'
        std::string image_index; // modified 'file' field without extension, used as index for _sprites
        JSValue file_val = JS_GetPropertyStr(js_context, item, "file");
        const char* file_str = JS_ToCString(js_context, file_val);
        if (file_str) {
            image_index = file_str;
            image_index.resize(image_index.length() - 4);
            _sprites[image_index].FileName = file_str; // implicit copy from const char* to std::string
        } else {
            errorMsg = "Failed to read 'file' field from item in resources manifest. Item's index: " + std::to_string(i);

            JS_FreeCString(js_context, file_str);
            JS_FreeValue(js_context, file_val);

            JS_FreeValue(js_context, item);

            JS_FreeValue(js_context, images_array);
            JS_FreeValue(js_context, resources_obj);
            JS_FreeValue(js_context, global_obj);
            return false;
        }

        // Extract 'properties'
        JSValue properties_obj = JS_GetPropertyStr(js_context, item, "properties");
        if (JS_IsObject(properties_obj)) {
            // Extract 'frames'
            JSValue frames_val = JS_GetPropertyStr(js_context, properties_obj, "frames");
            if (!JS_IsUndefined(frames_val)) {
                int32_t frames = 0;
                if (JS_ToInt32(js_context, &frames, frames_val) >= 0) {
                    _sprites[image_index].IsAnimation = frames > 1;
                    _sprites[image_index].Frames = frames;
                }
            }
            JS_FreeValue(js_context, frames_val);

            // Extract 'fps'
            JSValue fps_val = JS_GetPropertyStr(js_context, properties_obj, "fps");
            if (!JS_IsUndefined(fps_val)) {
                int32_t fps = 0;
                if (JS_ToInt32(js_context, &fps, fps_val) >= 0) {
                    _sprites[image_index].FPS = fps;
                    _sprites[image_index].FrameTime = 1.0f / static_cast<float>(fps);
                }
            }
            JS_FreeValue(js_context, fps_val);

        } // no 'else' here, because not all items have 'properties' object

        JS_FreeValue(js_context, properties_obj);
        JS_FreeCString(js_context, file_str);
        JS_FreeValue(js_context, file_val);

        JS_FreeValue(js_context, item);
    }

    // free QuickJS resources
    JS_FreeValue(js_context, images_array);
    JS_FreeValue(js_context, resources_obj);
    JS_FreeValue(js_context, global_obj);

    return true;
}

bool MSAssetsManager::LoadAssets(const std::string& assetsPath, std::string& errorMsg) {
    this->_assetsPath = assetsPath;

    std::string spritesPath = assetsPath + "sprites/";
    for (const auto& sprite: this->_sprites) {
        std::string spritePath = spritesPath + sprite.second.FileName;
        if (std::filesystem::exists(spritePath) && std::filesystem::is_regular_file(spritePath)) {
            this->_sprites[sprite.first].Texture = LoadTexture(spritePath.c_str());
            if (this->_sprites[sprite.first].IsAnimation) {
                this->_sprites[sprite.first].FrameHeight = this->_sprites[sprite.first].Texture.height / this->_sprites[sprite.first].Frames;
            }
        } else {
            errorMsg = "Sprite file not found: " + spritePath;
            return false;
        }
    }

    std::string fontsPath = assetsPath + "fonts/";
    if (std::filesystem::exists(fontsPath) && std::filesystem::is_directory(fontsPath)) {
        for (const auto& entry: std::filesystem::directory_iterator(fontsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                // loading font in big size, because Raylib is using stb_truetype, which doesn't support ClearType rasterization
                // Because of this fonts will be rendered blurry if loaded in default size
                this->_fonts[entry.path().stem().string()] = LoadFontEx(entry.path().string().c_str(), 200, NULL, 0);
            }
        }
    }

    return true;
}

bool MSAssetsManager::UnloadAssets(std::string& errorMsg) {
    for (auto& [name, texture]: this->_sprites) {
        UnloadTexture(texture.Texture);
    }
    this->_sprites.clear();

    for (auto& [name, font]: this->_fonts) {
        UnloadFont(font);
    }
    this->_fonts.clear();

    return true;
}

MSSprite* MSAssetsManager::GetSprite(const std::string& sprite) {
    auto texture = this->_sprites.find(sprite);
    if (texture != this->_sprites.end()) {
        return &(texture->second);
    } else {
        return nullptr;
    }
}

Font* MSAssetsManager::GetFont(const std::string& fontName) {
    auto font = this->_fonts.find(fontName);
    if (font != this->_fonts.end()) {
        return &(font->second);
    } else {
        return nullptr;
    }
}

void MSAssetsManager::Update(float deltaTime) {
    for (auto& [name, sprite]: this->_sprites) {
        if (sprite.IsAnimation) {
            sprite.FrameTimeCounter += deltaTime;
            if (sprite.FrameTimeCounter >= sprite.FrameTime) {
                sprite.FrameTimeCounter = 0.0f;
                sprite.CurrentFrame++;
                if (sprite.CurrentFrame >= sprite.Frames) {
                    sprite.CurrentFrame = 0;
                }
            }
        }
    }
}
