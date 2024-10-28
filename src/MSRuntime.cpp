//
// Created by Sebastian on 24.10.2024.
//
#include <cstdio>
#include <cstring>

#include "MSRuntime.h"

#include "JS_API.h"

#include "helpers.h"

MSRuntime_ReturnValue MSRuntime::Init(std::string &errorMsg) {
    MSRuntime *instance = MSRuntime::GetInstance();

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

MSRuntime_ReturnValue MSRuntime::LoadAssets(std::string &errorMsg) {
    if (MSAssetsManager::AssetsExists(MSAssetsManager::DefaultAssetsPath)) {
        MSRuntime *instance = MSRuntime::GetInstance();
        if (instance->_assets->LoadAssets(MSAssetsManager::DefaultAssetsPath, errorMsg)) {
            return OK;
        } else {
            return ErrorWhileLoadingAssets;
        }
    }

    return OK;
}

MSRuntime_ReturnValue MSRuntime::LoadGameSource(std::string &errorMsg) {
    MSRuntime *instance = MSRuntime::GetInstance();
    return instance->RegisterGameSource(errorMsg);
}

MSRuntime_ReturnValue MSRuntime::Free(std::string &errorMsg) {
    MSRuntime *instance = MSRuntime::GetInstance();

    JS_FreeContext(instance->_context);
    JS_FreeRuntime(instance->_runtime);
    // TODO: crash with Assertion failed: list_empty(&rt->gc_obj_list), file quickjs.c, line 1983

    return OK;
}

void MSRuntime::SetScreenSize(const int screenWidth, const int screenHeight) {
    MSRuntime *instance = MSRuntime::GetInstance();
    instance->_screenWidth = screenWidth;
    instance->_screenWidthHalf = screenWidth / 2;
    instance->_screenHeight = screenHeight;
    instance->_screenHeightHalf = screenHeight / 2;

    if (screenWidth >= screenHeight) {
        instance->_orientation = LANDSCAPE;
        instance->_screenHeightRatio = static_cast<float>(screenHeight) / 200.0f; // in LANDSCAPE y is <-100,100>
        instance->_screenWidthRatio = static_cast<float>(screenWidth) / (
                                          static_cast<float>(screenWidth) / static_cast<float>(screenHeight) * 200.0f);
    } else {
        instance->_orientation = PORTRAIT;
        instance->_screenHeightRatio = static_cast<float>(screenHeight) / (
                                          static_cast<float>(screenHeight) / static_cast<float>(screenWidth) * 200.0f);
        instance->_screenWidthRatio = static_cast<float>(screenWidth) / 200.0f; // in PORTRAIT x is <-100,100>
    }
}

void MSRuntime::Screen_Clear(const char *colorText) {
    if (!MSRuntime::GetInstance()->_isRuntimeInitialized) return; // only allow to clear when runtime is initialized
    Color clearColor;
    if (colorText == nullptr) {
        clearColor = BLACK;
    } else {
        ParseColor(colorText, &clearColor);
    }
    ClearBackground(clearColor); // raylib
}

void MSRuntime::Screen_SetColor(const char *colorText) {
    MSRuntime *instance = MSRuntime::GetInstance();

    if (colorText == nullptr) {
        instance->_drawColor = WHITE;
    } else {
        Color drawColor;
        ParseColor(colorText, &drawColor);
        instance->_drawColor = drawColor;
    }
}

void MSRuntime::Screen_DrawSprite(const char *sprite, const float x, const float y, const float w, const float h) {
    const MSRuntime *instance = MSRuntime::GetInstance();

    const Texture2D *texture = instance->_assets->GetSprite(sprite);
    if (!texture) return; // if the sprite doesn't exist, return

    float nX, nY, nW, nH;
    instance->CalculateNativeCoordinates(x, y, w, h, &nX, &nY, &nW, &nH);

    DrawTexturePro(*texture,
                   {0, 0, static_cast<float>(texture->width), static_cast<float>(texture->height)},
                   {
                       nX, nY,
                       nW, nH,
                   },
                   {nW / 2, nH / 2},
                   0, instance->_drawColor);
}

void MSRuntime::CalculateNativeCoordinates(const float x, const float y, const float w, const float h, float *n_x, float *n_y, float *n_w, float *n_h) const {
    *n_x = x * _screenWidthRatio + static_cast<float>(_screenWidthHalf);
    *n_y = -y * _screenHeightRatio + static_cast<float>(_screenHeightHalf);
    *n_w = w * _screenWidthRatio;
    *n_h = h * _screenHeightRatio;
}

void MSRuntime::RuntimeInitialized() {
    MSRuntime::GetInstance()->_isRuntimeInitialized = true;
}

void MSRuntime::UpdateKeyboard(const int keyCode, const bool isDown) {
    MSRuntime *instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return;

    auto &[code, key] = Ray2MicroKeyMap[keyCode];

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

void MSRuntime::Tick() {
    MSRuntime *instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return;

    // Retrieve the 'update' function
    JSValue global_obj = JS_GetGlobalObject(instance->_context);
    JSValue js_update_func = JS_GetPropertyStr(instance->_context, global_obj, "CGameTick");
    JS_FreeValue(instance->_context, global_obj);

    if (JS_IsFunction(instance->_context, js_update_func)) {
        JSValue result = JS_Call(instance->_context, js_update_func, JS_UNDEFINED, 0, nullptr);

        if (JS_IsException(result)) {
            const JSValue exception = JS_GetException(instance->_context);
            const char *error_str = JS_ToCString(instance->_context, exception);
            JS_FreeCString(instance->_context, error_str);
            JS_FreeValue(instance->_context, exception);
        }
        JS_FreeValue(instance->_context, result);
    }
}

MSRuntime_ReturnValue MSRuntime::RegisterMicroStudioLibraries(std::string &errorMsg) const {
    MSRuntime_ReturnValue retVal = OK;
    for (const auto &library: this->MicroStudioLibraries) {
        retVal = this->RegisterJSFileInQuickJS(library.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSAPIFunctions(std::string &errorMsg) const {
    JSValue global_obj = JS_GetGlobalObject(this->_context);
    JS_SetPropertyFunctionList(this->_context, global_obj, js_raylib_funcs,
                               sizeof(js_raylib_funcs) / sizeof(JSCFunctionListEntry));
    const JSValue exception = JS_GetException(this->_context);

    if (JS_IsUndefined(exception)) {
        errorMsg = JS_ToCString(this->_context, exception);
        JS_FreeCString(this->_context, errorMsg.c_str());
        JS_FreeValue(this->_context, exception);
        JS_FreeValue(this->_context, global_obj);
        return ErrorWhileRegisteringJSFunctions;
    }

    JS_FreeValue(this->_context, exception);
    JS_FreeValue(this->_context, global_obj);

    return OK;
}

MSRuntime_ReturnValue MSRuntime::RegisterGameSource(std::string &errorMsg) const {
    MSRuntime_ReturnValue retVal = OK;
    for (const auto &sourceFile: this->GameSourceFiles) {
        retVal = this->RegisterJSFileInQuickJS(sourceFile.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSFileInQuickJS(const char *filePath, std::string &errorMsg) const {
    FILE *libFile = fopen(filePath, "rb");
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
    char *fileContent = new char[fileSize + 1];
    fread(fileContent, 1, fileSize, libFile);
    fileContent[fileSize] = 0;

    // close file
    fclose(libFile);

    // register library in context
    if (const JSValue result = JS_Eval(this->_context, fileContent, fileSize, filePath, JS_EVAL_TYPE_GLOBAL);
        JS_IsException(result)) {
        const JSValue exception = JS_GetException(this->_context);
        errorMsg = JS_ToCString(this->_context, exception);

        JS_FreeCString(this->_context, errorMsg.c_str());
        JS_FreeValue(this->_context, exception);
        return ErrorEvaluathingJSFile;
    }

    return OK;
}
