//
// Created by Sebastian on 24.10.2024.
//
#include <cstdio>
#include <cstring>

#include "MSRuntime.h"
#include "JS_API.h"

#include "helpers.h"

MSRuntime_ReturnValue MSRuntime::Init(std::string& errorMsg)
{
    MSRuntime* instance = MSRuntime::GetInstance();

    instance->_runtime = JS_NewRuntime();
    instance->_context = JS_NewContext(instance->_runtime);

    MSRuntime_ReturnValue retVal;

    retVal = instance->RegisterJSAPIFunctions(errorMsg);
    if (retVal != OK) return retVal;

    retVal = instance->RegisterMicroStudioLibraries(errorMsg);
    if (retVal != OK) return retVal;

    retVal = instance->RegisterGameSource(errorMsg);
    if (retVal != OK) return retVal;

    return OK;
}

MSRuntime_ReturnValue MSRuntime::LoadAssets(std::string &errorMsg)
{
    if (MSAssetsManager::AssetsExists(MSAssetsManager::DefaultAssetsPath))
    {
        MSRuntime* instance = MSRuntime::GetInstance();
        instance->_assets = std::make_unique<MSAssetsManager>();
        if (instance->_assets->LoadAssets(MSAssetsManager::DefaultAssetsPath, errorMsg))
        {
            return OK;
        }
        else
        {
            return ErrorWhileLoadingAssets;
        }
    }

    return OK;
}

MSRuntime_ReturnValue MSRuntime::Free(std::string& errorMsg)
{
    MSRuntime* instance = MSRuntime::GetInstance();

    JS_FreeContext(instance->_context);
    JS_FreeRuntime(instance->_runtime);

    return OK;
}

void MSRuntime::Screen_Clear(const char* colorText)
{
    if (!MSRuntime::GetInstance()->_isRuntimeInitialized) return; // only allow to clear when runtime is initialized
    Color clearColor;
    ParseColor(colorText, &clearColor);
    ClearBackground(clearColor); // raylib
}

void MSRuntime::RuntimeInitialized()
{
    MSRuntime::GetInstance()->_isRuntimeInitialized = true;
}

void MSRuntime::UpdateKeyboard(int keyCode, bool isDown)
{
    MSRuntime* instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return;

    // char code [33];
    // itoa (keyCode,code,10);

    // char key = (char)keyCode;
    // std::string keyStr = std::string(1, key);

    auto& microKey = Ray2MicroKeyMap[keyCode];

    // Create the event object
    JSValue event = JS_NewObject(instance->_context);
    if (isDown) JS_SetPropertyStr(instance->_context, event, "type", JS_NewString(instance->_context, "keydown"));
    else JS_SetPropertyStr(instance->_context, event, "type", JS_NewString(instance->_context, "keyup"));
    JS_SetPropertyStr(instance->_context, event, "code", JS_NewString(instance->_context, microKey.first));
    JS_SetPropertyStr(instance->_context, event, "key", JS_NewString(instance->_context, microKey.second));

    // Get the 'document' object
    JSValue global_obj = JS_GetGlobalObject(instance->_context);
    JSValue document = JS_GetPropertyStr(instance->_context, global_obj, "document");

    // Get the 'dispatchEvent' function
    JSValue dispatchEventFunc = JS_GetPropertyStr(instance->_context, document, "dispatchEvent");

    // Prepare arguments for 'dispatchEvent'
    JSValue args[1] = { event };

    // Call 'dispatchEvent' method
    JS_Call(instance->_context, dispatchEventFunc, document, 1, args);

    // Clean up
    JS_FreeValue(instance->_context, dispatchEventFunc);
    JS_FreeValue(instance->_context, document);
    JS_FreeValue(instance->_context, global_obj);
    JS_FreeValue(instance->_context, event);
}

void MSRuntime::Tick()
{
    MSRuntime* instance = MSRuntime::GetInstance();
    if (instance->_isRuntimeInitialized == false) return;

    // Retrieve the 'update' function
    JSValue global_obj = JS_GetGlobalObject(instance->_context);
    JSValue js_update_func = JS_GetPropertyStr(instance->_context, global_obj, "CGameTick");
    JS_FreeValue(instance->_context, global_obj);

    if (JS_IsFunction(instance->_context, js_update_func))
    {
        JSValue result = JS_Call(instance->_context, js_update_func, JS_UNDEFINED, 0, NULL);

            if (JS_IsException(result)) {
                JSValue exception = JS_GetException(instance->_context);
                const char* error_str = JS_ToCString(instance->_context, exception);
                JS_FreeCString(instance->_context, error_str);
                JS_FreeValue(instance->_context, exception);
            }
            JS_FreeValue(instance->_context, result);
    }
}

void MSRuntime::Screen_DrawSprite(const char *sprite, double x, double y, double w, double h)
{
    MSRuntime* instance = MSRuntime::GetInstance();

    Texture2D* texture = instance->_assets->GetSprite(sprite);
    if (!texture) return; // if the sprite doesn't exist, return

    DrawTexturePro(*texture,
                   { 0, 0, (float)texture->width, (float)texture->height },
                   { (float)(x + 800/2 - texture->width/2), (float)(-y + 450/2 - texture->height/2), (float)w, (float)h }, { 0, 0 },
                   0, WHITE);
}

MSRuntime_ReturnValue MSRuntime::RegisterMicroStudioLibraries(std::string& errorMsg)
{
    MSRuntime_ReturnValue retVal = OK;
    for (auto library : this->MicroStudioLibraries)
    {
        retVal = this->RegisterJSFileInQuickJS(library.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSAPIFunctions(std::string &errorMsg)
{
    JSValue global_obj = JS_GetGlobalObject(this->_context);
    JS_SetPropertyFunctionList(this->_context, global_obj, js_raylib_funcs, sizeof(js_raylib_funcs)/sizeof(JSCFunctionListEntry));
    JSValue exception = JS_GetException(this->_context);

    if (JS_IsUndefined(exception))
    {
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

MSRuntime_ReturnValue MSRuntime::RegisterGameSource(std::string &errorMsg)
{
    MSRuntime_ReturnValue retVal = OK;
    for (auto sourceFile : this->GameSourceFiles)
    {
        retVal = this->RegisterJSFileInQuickJS(sourceFile.c_str(), errorMsg);
        if (retVal != OK) return retVal;
    }

    return retVal;
}

MSRuntime_ReturnValue MSRuntime::RegisterJSFileInQuickJS(const char* filePath, std::string &errorMsg)
{
    FILE* libFile = fopen(filePath, "rb");
        // check if file exists
        if (libFile == nullptr)
        {
            errorMsg = "Required file '" + std::string(filePath) + "' doesn't exists";
            return MSLibraryFileDoesntExist;
        }

        // get file size
        fseek(libFile, 0, SEEK_END);
        size_t fileSize = ftell(libFile);
        fseek(libFile, 0, SEEK_SET);

        // read file's content
        char* fileContent = new char[fileSize + 1];
        fread(fileContent, 1, fileSize, libFile);
        fileContent[fileSize] = 0;

        // close file
        fclose(libFile);

        // register library in context
        JSValue result = JS_Eval(this->_context, fileContent, fileSize, filePath, JS_EVAL_TYPE_GLOBAL);
        if (JS_IsException(result))
        {
            JSValue exception = JS_GetException(this->_context);
            errorMsg = JS_ToCString(this->_context, exception);

            JS_FreeCString(this->_context, errorMsg.c_str());
            JS_FreeValue(this->_context, exception);
            return ErrorEvaluathingJSFile;
        }

        return OK;
}
