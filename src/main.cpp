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
    spdlog::flush_on(spdlog::level::trace);

    spdlog::info("Starting MicroStudio Runtime");

    // Initialization
    int defaultScreenWidth = 1280;
    int defaultScreenHeight = 720;

    spdlog::info("Initializing window with size {}x{}", defaultScreenWidth, defaultScreenHeight);

    SetConfigFlags(FLAG_WINDOW_RESIZABLE);
    InitWindow(defaultScreenWidth, defaultScreenHeight, "MicroStudio Runtime");
    spdlog::info("Window initialized");

    SetTargetFPS(60);
    SetExitKey(KEY_NULL);

    InitAudioDevice();
    spdlog::info("Audio device initialized");

    // init window by drawing a single frame. Should be replaced with something more cool.
    // Maybe loading screen with microStudio logo?
    BeginDrawing();
    ClearBackground(BLACK);
    DrawText("Welcome to MicroStudio Runtime! Fees not included", 250, 250, 30, RAYWHITE);
    DrawText("Loading...", 250, 300, 20, RAYWHITE);
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
                ToggleFullscreen();
                SetWindowSize(defaultScreenWidth, defaultScreenHeight);
                SetWindowPosition(GetMonitorWidth(display) / 2 - defaultScreenWidth / 2,
                                  GetMonitorHeight(display) / 2 - defaultScreenHeight / 2);
                spdlog::debug("Toggle fullscreen OFF. Window size: {}x{}", defaultScreenWidth, defaultScreenHeight);
            } else {
                SetWindowSize(GetMonitorWidth(display), GetMonitorHeight(display));
                //SetWindowPosition(0, 0);
                ToggleFullscreen();
                spdlog::debug("Toggle fullscreen ON. Monitor size: {}x{}", GetMonitorWidth(display),
                              GetMonitorHeight(display));
            }
        }

        // update screen size
        int screenWidth = GetScreenWidth();
        int screenHeight = GetScreenHeight();
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
