#include "raylib.h"

#include "MSRuntime.h"

int main() {
    // Initialization
    int screenWidth = 1368;
    int screenHeight = 720;

    SetConfigFlags(FLAG_WINDOW_RESIZABLE);
    InitWindow(screenWidth, screenHeight, "MicroStudio Runtime");
    SetTargetFPS(60);
    SetExitKey(KEY_NULL);
    InitAudioDevice();

    // init window by drawing a single frame. Should be replaced with something more cool.
    // Maybe loading screen with microStudio logo?
    BeginDrawing();
    ClearBackground(BLACK);
    DrawText("Welcome to MicroStudio Runtime! Fees not included!", 160, 200, 20, RAYWHITE);
    EndDrawing();

    // init runtime
    std::string errorMsg;
    MSRuntime_ReturnValue initStatus = MSRuntime::Init(errorMsg);
    if (initStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Load game source
    MSRuntime_ReturnValue loadGameSourceStatus = MSRuntime::LoadGameSource(errorMsg);
    if (loadGameSourceStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Load assets - must be done after InitWindow()!
    MSRuntime_ReturnValue loadAssetsStatus = MSRuntime::LoadAssets(errorMsg);
    if (loadAssetsStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Start the game - creates Player object in JS context
    MSRuntime_ReturnValue startGameStatus = MSRuntime::StartGame(errorMsg);
    if (startGameStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Main game loop
    MSRuntime_ReturnValue tickStatus = OK;
    while (!WindowShouldClose()) // Detect window close button or Exit key
    {
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

        // tick MicroStudio
        BeginDrawing();
        tickStatus = MSRuntime::Tick(GetFrameTime(), errorMsg);
        EndDrawing();

        if (tickStatus != OK) {
            break;
        }
    }

    MSRuntime_ReturnValue MSRuntimeFreeStatus = MSRuntime::Free(errorMsg);

    CloseAudioDevice();
    CloseWindow();

    if (MSRuntimeFreeStatus != OK) {
        return 1; // check after CloseWindow() to make sure Raylib's window is closed before returning
    }

    return 0;
}
