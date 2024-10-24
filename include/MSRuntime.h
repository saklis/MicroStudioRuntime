#pragma once

#include <array>
#include <string>
#include <memory>

#include "raylib.h"

#include "quickjs.h"

#include "AssetsManager.h"

enum MSRuntime_ReturnValue
{
    OK = 0,
    MSLibraryFileDoesntExist = 1,
    ErrorEvaluathingJSFile = 2,
    ErrorWhileRegisteringJSFunctions = 3,
    ErrorWhileLoadingAssets = 4
};

class MSRuntime
{
public:
    std::array<std::string, 10> MicroStudioLibraries = {
        "microstudio/compiler.js",
        "microstudio/parser.js",
        "microstudio/processor.js",
        "microstudio/program.js",
        "microstudio/routine.js",
        "microstudio/runner.js",
        "microstudio/token.js",
        "microstudio/tokenizer.js",
        "microstudio/transpiler.js",
        "microstudio/microengine_c.js"
    };

    std::array<std::string, 1> GameSourceFiles = {
        "mstest.js"
    };

    static MSRuntime_ReturnValue Init(std::string& errorMsg);
    static MSRuntime_ReturnValue LoadAssets(std::string& errorMsg);
    static MSRuntime_ReturnValue Free(std::string& errorMsg);

    static void RuntimeInitialized();
    static void UpdateKeyboard(int keyCode, bool isDown);
    static void Tick();

    static void Screen_Clear(const char* colorText);
    static void Screen_DrawSprite(const char* sprite, double x, double y, double w, double h);

    // Static method to provide access to the instance
    static MSRuntime* GetInstance() {
        static MSRuntime instance;
        return &instance;
    }

protected:
    bool _isRuntimeInitialized = false; // switched to true when JS runtime is initialized

    JSRuntime* _runtime = nullptr;
    JSContext* _context = nullptr;

    std::unique_ptr<MSAssetsManager> _assets;

    MSRuntime_ReturnValue RegisterMicroStudioLibraries(std::string& errorMsg);
    MSRuntime_ReturnValue RegisterJSAPIFunctions(std::string& errorMsg);
    MSRuntime_ReturnValue RegisterGameSource(std::string& errorMsg);
    MSRuntime_ReturnValue RegisterJSFileInQuickJS(const char* filePath, std::string& errorMsg);

    // private constructor
    MSRuntime() = default;
    // Delete copy constructor and assignment operator
    MSRuntime(const MSRuntime&) = delete;
    MSRuntime& operator=(const MSRuntime&) = delete;
};