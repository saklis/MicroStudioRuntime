#pragma once

#include <array>
#include <cmath>
#include <string>
#include <memory>

#include "raylib.h"
#include "rlgl.h"

#include <quickjs/quickjs.h>

#include "AssetsManager.h"
#include "RenderingQueue.h"

enum MSRuntime_ReturnValue {
    OK = 0,
    ErrorWhileInitializingQuickJS = 1,
    MSLibraryFileDoesntExist = 2,
    ErrorEvaluatingJSFile = 3,
    ErrorWhileRegisteringJSFunctions = 4,
    ErrorWhileReadingResourceManifest = 5,
    ErrorWhileLoadingAssets = 6,
    ErrorWhileUnloadingAssets = 7,
    ErrorWhileStartingGame = 8,
    ErrorWhileCallingGameTick = 9,
    ErrorWhileRegisteringExternalLibraries = 10,
    ErrorWhileRendering = 11
};

enum MSRuntime_Orientation {
    LANDSCAPE = 0,
    PORTRAIT = 1
};

class MSRuntime {
public:
    const std::array<std::string, 10> MicroStudioLibraries = {
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

    const std::unordered_map<std::string, std::string> KnownExternalLibraries = {
        {"matterjs", "microstudio/matter.min.js"}
    };

    const std::array<std::string, 1> GameSourceFiles = {
        "game.js"
    };

    std::vector<std::string> ExtraLibraries = {};

    // Initialize the runtime
    static MSRuntime_ReturnValue Init(std::string& errorMsg);

    static MSRuntime_ReturnValue LoadAssets(std::string& errorMsg);

    static MSRuntime_ReturnValue LoadGameSource(std::string& errorMsg);

    static MSRuntime_ReturnValue LoadExtraLibraries(std::string& errorMsg);

    static MSRuntime_ReturnValue StartGame(std::string& string);

    static MSRuntime_ReturnValue Free(std::string& errorMsg);

    static MSRuntime_ReturnValue Render(std::string& errorMsg);

    static bool ShouldClose();

    // Set the screen size and orientation
    static void SetScreenSize(int screenWidth, int screenHeight);

    // Called from JS when the runtime is initialized
    static void RuntimeInitialized();

    // Sends info about key events to microstudio
    static void UpdateKeyboard(int keyCode, bool isDown);

    // Called every frame
    static MSRuntime_ReturnValue Tick(float deltaTime, std::string& errorMsg);

    // Get specific image from assets
    static const MSSprite* GetImage(const std::string& imageName);

    //////////////////////////////////////////////////////////////////////////////////////////
    // MICROSTUDIO API

    // SYSTEM
    static void Exit();

    // SCREEN
    static void Screen_Clear(const char* colorText);

    static void Screen_SetColor(const char* colorText);

    static void Screen_SetAlpha(float alpha);

    static void Screen_SetFont(const char* font);

    static void Screen_SetDrawRotation(float rotation);

    static void Screen_SetDrawScale(float scaleX, float scaleY);

    static void Screen_FillRect(float x, float y, float w, float h, const char* colorText);

    static void Screen_DrawSprite(const char* sprite, float x, float y, float w, float h);

    static void Screen_DrawSpritePart(const char* sprite, float px, float py, float pw, float ph,
                                      float x, float y, float w, float h);

    static void Screen_DrawMap(const char* name, float x, float y, float w, float h);

    static void Screen_DrawText(const char* text, float x, float y, float size, const char* colorText);

    static bool Screen_IsFontReady(const char* font_name);

    // AUDIO
    static void Audio_PlaySound(const char* name, int uniqueId, float volume, float pitch, float pan, bool loop);

    static void Audio_Sound_SetVolume(const char* soundName, int uniqueId, float volume);

    static void Audio_Sound_SetPitch(const char* soundName, int UniqueId, float pitch);

    static void Audio_Sound_SetPan(const char* soundName, int uniqueId, float pan);

    static void Audio_Sound_Stop(const char* soundName, int uniqueId);

    static void Audio_PlayMusic(const char* name, float volume, bool loop);

    static void Audio_Music_Play(const char* name);

    static void Audio_Music_Stop(const char* name);

    // END OF MICROSTUDIO API
    //////////////////////////////////////////////////////////////////////////////////////////

    // Static method to provide access to the instance
    static MSRuntime* GetInstance() {
        static MSRuntime instance;
        return &instance;
    }

protected:
    bool _isRuntimeInitialized = false; // switched to true when JS runtime is initialized
    bool _shouldClose = false;

    // QuickJS runtime - those are initialized in MSRuntime::Init. App SHOULD close, if initialization fails.
    JSRuntime* _runtime = nullptr;
    JSContext* _context = nullptr;

    // Native screen properties
    MSRuntime_Orientation _orientation = MSRuntime_Orientation::LANDSCAPE;
    int _screenWidth;
    int _screenHeight;
    int _screenWidthHalf;
    int _screenHeightHalf;
    float _screenWidthRatio;
    float _screenHeightRatio;

    // Current draw color - set by Screen_SetColor and used as drawing color and to tint sprites
    Color _currentColor = WHITE;

    // Current draw alpha - set by Screen_SetColor and directly by Screen_SetAlpha
    uint8_t _currentAlpha = 255;

    // Current font for drawing text
    std::string _currentFont = "BitCell";

    // Current draw rotation in degrees
    float _currentDrawRotation = 0.0f;

    // Current draw scale
    Vector2 _currentDrawScale = {1.0f, 1.0f};

    RenderingQueue _renderingQueue = RenderingQueue(1024);

    // Calculates native coordinates from coords in microstudio
    void CalculateNativeCoordinates(float x, float y, float* n_x, float* n_y) const;

    void CalculateNativeCoordinates(float x, float y, float w, float h, float* n_x,
                                    float* n_y, float* n_w, float* n_h) const;

    const char* CalculateAspectRatio(MSRuntime_Orientation orientation, int screen_width, int screen_height);

    // Asset library
    std::unique_ptr<MSAssetsManager> _assets = std::make_unique<MSAssetsManager>();

    // Functions for registering JS files
    MSRuntime_ReturnValue RegisterMicroStudioLibraries(std::string& errorMsg) const;

    MSRuntime_ReturnValue RegisterJSAPIFunctions(std::string& errorMsg) const;

    MSRuntime_ReturnValue RegisterGameSource(std::string& errorMsg) const;

    MSRuntime_ReturnValue RegisterExternalLibraries(std::string& erroMsg);

    MSRuntime_ReturnValue RegisterJSFileInQuickJS(const char* filePath, std::string& errorMsg) const;

    // private constructor
    MSRuntime() = default;

    // Delete copy constructor and assignment operator
    MSRuntime(const MSRuntime&) = delete;

    MSRuntime& operator=(const MSRuntime&) = delete;
};
