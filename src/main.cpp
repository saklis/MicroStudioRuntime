// definitions required for compatibility between Raylib and spdlog
#define WIN32_LEAN_AND_MEAN
#define NOMINMAX
#define NOGDI
#define NOUSER

#include "raylib.h"
#include <spdlog/spdlog.h>
#include <spdlog/sinks/basic_file_sink.h>

#include "MSRuntime.h"

void Exit(int code) {
    CloseAudioDevice();
    CloseWindow();
    spdlog::shutdown();
    exit(code);
}

int main() {
    // spdlog setup
    auto logger = spdlog::basic_logger_mt("basic_logger", "microstudio.log", true);
    spdlog::set_default_logger(logger);
    spdlog::set_level(spdlog::level::debug);
    spdlog::set_pattern("[%Y-%m-%d %H:%M:%S] [%l] %v");

    spdlog::info("Starting MicroStudio Runtime");

    // Initialization
    int screenWidth = 1280;
    int screenHeight = 720;

    spdlog::info("Initializing window with size {}x{}", screenWidth, screenHeight);

    SetConfigFlags(FLAG_WINDOW_RESIZABLE);
    InitWindow(screenWidth, screenHeight, "MicroStudio Runtime");
    spdlog::info("Window initialized");

    SetTargetFPS(60);
    SetExitKey(KEY_NULL);

    InitAudioDevice();
    spdlog::info("Audio device initialized");

    // init window by drawing a single frame. Should be replaced with something more cool.
    // Maybe loading screen with microStudio logo?
    BeginDrawing();
    ClearBackground(BLACK);
    DrawText("Welcome to MicroStudio Runtime! Fees not included ;p", 160, 200, 20, RAYWHITE);
    EndDrawing();
    spdlog::info("Frame buffer initialized");

    // init runtime
    std::string errorMsg;
    MSRuntime_ReturnValue initStatus = MSRuntime::Init(errorMsg);
    if (initStatus != OK) {
        spdlog::error("Failed to initialize runtime: {}", errorMsg);
        Exit(1);
    }
    spdlog::info("Runtime initialized");

    // Load game source
    MSRuntime_ReturnValue loadGameSourceStatus = MSRuntime::LoadGameSource(errorMsg);
    if (loadGameSourceStatus != OK) {
        spdlog::error("Failed to load game source: {}", errorMsg);
        Exit(1);
    }
    spdlog::info("Game source loaded");

    MSRuntime_ReturnValue loadExtraLibrariesStatus = MSRuntime::LoadExtraLibraries(errorMsg);
    if (loadExtraLibrariesStatus != OK) {
        spdlog::error("Failed to load extra libraries: {}", errorMsg);
        Exit(1);
    }
    spdlog::info("Extra libraries loaded");

    // Load assets - must be done after InitWindow()!
    MSRuntime_ReturnValue loadAssetsStatus = MSRuntime::LoadAssets(errorMsg);
    if (loadAssetsStatus != OK) {
        spdlog::error("Failed to load assets: {}", errorMsg);
        Exit(1);
    }
    spdlog::info("Assets loaded");

    // Start the game - creates Player object in JS context
    MSRuntime_ReturnValue startGameStatus = MSRuntime::StartGame(errorMsg);
    if (startGameStatus != OK) {
        spdlog::error("Failed to start game: {}", errorMsg);
        Exit(1);
    }
    spdlog::info("Game started");

    BeginDrawing();
    ClearBackground(BLACK);
    EndDrawing();

    // Main game loop
    while (!WindowShouldClose() && !MSRuntime::ShouldClose()) // Detect window close button or Exit key
    {
        if (IsKeyPressed(KEY_ENTER) && (IsKeyDown(KEY_LEFT_ALT) || IsKeyDown(KEY_RIGHT_ALT))) {
            int display = GetCurrentMonitor();
            if (IsWindowFullscreen()) {
                SetWindowSize(1280, 720);
                SetWindowPosition(GetMonitorWidth(display) / 2 - 640, GetMonitorHeight(display) / 2 - 360);
                ClearWindowState(FLAG_FULLSCREEN_MODE);
            } else {
                SetWindowSize(GetMonitorWidth(display), GetMonitorHeight(display));
                SetWindowPosition(0, 0);
                SetWindowState(FLAG_FULLSCREEN_MODE);
            }
        }
        // update screen size
        screenWidth = GetScreenWidth();
        screenHeight = GetScreenHeight();
        MSRuntime::SetScreenSize(screenWidth, screenHeight);

        // update keyboard
        for (int key = KEY_SPACE; key <= KEY_KB_MENU; key++) {
            if (IsKeyPressed(key)) {
                MSRuntime::UpdateKeyboard(key, true);
            } else if (IsKeyReleased(key)) {
                MSRuntime::UpdateKeyboard(key, false);
            }
        }

        // update
        if (MSRuntime::Tick(GetFrameTime(), errorMsg) != OK) {
            spdlog::error("Failed to tick runtime: {}", errorMsg);
            break;
        }

        //draw
        BeginDrawing();
        if (MSRuntime::Render(errorMsg) != OK) {
            spdlog::error("Error during rendering: {}", errorMsg);
            break;
        }
        EndDrawing();
    }

    spdlog::info("Exiting main loop");

    MSRuntime_ReturnValue MSRuntimeFreeStatus = MSRuntime::Free(errorMsg);
    if (MSRuntimeFreeStatus != OK) {
        spdlog::error("Failed to free runtime: {}", errorMsg);
        Exit(1);
    }

    spdlog::info("Exiting MicroStudio Runtime");

    Exit(0);
}
