#pragma once

#include <array>
#include <cmath>
#include <string>
#include <memory>

#include "raylib.h"

#include "quickjs.h"

#include "AssetsManager.h"

enum MSRuntime_ReturnValue {
    OK = 0,
    ErrorWhileInitializingQuickJS = 1,
    MSLibraryFileDoesntExist = 3,
    ErrorEvaluathingJSFile = 4,
    ErrorWhileRegisteringJSFunctions = 5,
    ErrorWhileLoadingAssets = 6
};

enum MSRuntime_Orientation {
    LANDSCAPE = 0,
    PORTRAIT = 1
};

class MSRuntime {
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
        "microstudio/microengine_c.js" // modified version of microengine.js
    };

    std::array<std::string, 1> GameSourceFiles = {
        "mstest.js"
    };

    // Initialize the runtime
    static MSRuntime_ReturnValue Init(std::string &errorMsg);

    static MSRuntime_ReturnValue LoadAssets(std::string &errorMsg);

    static MSRuntime_ReturnValue LoadGameSource(std::string &errorMsg);

    static MSRuntime_ReturnValue Free(std::string &errorMsg);

    // Set the screen size and orientation
    static void SetScreenSize(int screenWidth, int screenHeight);

    // Called from JS when the runtime is initialized
    static void RuntimeInitialized();

    // Sends info about key events to microstudio
    static void UpdateKeyboard(int keyCode, bool isDown);

    // Called every frame
    static void Tick();

    //////////////////////////////////////////////////////////////////////////////////////////
    // MICROSTUDIO API

    // SCREEN
    static void Screen_Clear(const char *colorText);
    static void Screen_SetColor(const char * colorText);
    static void Screen_DrawSprite(const char *sprite, float x, float y, float w, float h);

    // END OF MICROSTUDIO API
    //////////////////////////////////////////////////////////////////////////////////////////

    // Static method to provide access to the instance
    static MSRuntime *GetInstance() {
        static MSRuntime instance;
        return &instance;
    }

protected:
    bool _isRuntimeInitialized = false; // switched to true when JS runtime is initialized

    // QuickJS runtime - those are initialized in MSRuntime::Init. App SHOULD close, if initialization fails.
    JSRuntime *_runtime = nullptr;
    JSContext *_context = nullptr;

    // Native screen properties
    MSRuntime_Orientation _orientation = MSRuntime_Orientation::LANDSCAPE;
    int _screenWidth;
    int _screenHeight;
    int _screenWidthHalf;
    int _screenHeightHalf;
    float _screenWidthRatio;
    float _screenHeightRatio;

    // Current draw color - set by Screen_SetColor and used as drawing color and to tint sprites
    Color _drawColor = WHITE;

    // Calculates native coordinates from coords in microstudio
    void CalculateNativeCoordinates(float x, float y, float w, float h, float *n_x,
                                    float *n_y, float *n_w, float *n_h) const;

    // Asset library
    std::unique_ptr<MSAssetsManager> _assets = std::make_unique<MSAssetsManager>();

    // Functions for registering JS files
    MSRuntime_ReturnValue RegisterMicroStudioLibraries(std::string &errorMsg) const;

    MSRuntime_ReturnValue RegisterJSAPIFunctions(std::string &errorMsg) const;

    MSRuntime_ReturnValue RegisterGameSource(std::string &errorMsg) const;

    MSRuntime_ReturnValue RegisterJSFileInQuickJS(const char *filePath, std::string &errorMsg) const;

    // private constructor
    MSRuntime() = default;

    // Delete copy constructor and assignment operator
    MSRuntime(const MSRuntime &) = delete;

    MSRuntime &operator=(const MSRuntime &) = delete;
};
