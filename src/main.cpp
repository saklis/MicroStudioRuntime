#include "raylib.h"

#include "MSRuntime.h"

int main() {
    // Initialization
    int screenWidth = 1200;
    int screenHeight = 720;

    SetConfigFlags(FLAG_WINDOW_RESIZABLE);
    InitWindow(screenWidth, screenHeight, "MicroStudio Runtime");
    SetTargetFPS(60);
    SetExitKey(KEY_NULL);

    // init window
    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawText("Welcome to MicroStudio Runtime! Fees not included!", 160, 200, 20, BLACK);
    EndDrawing();

    // init runtime
    std::string errorMsg;
    MSRuntime_ReturnValue MSRuntimeInitStatus = MSRuntime::Init(errorMsg);
    if (MSRuntimeInitStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Load assets - must be done after InitWindow()!
    MSRuntime_ReturnValue MSRuntimeLoadAssetsStatus = MSRuntime::LoadAssets(errorMsg);
    if (MSRuntimeLoadAssetsStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Load game source
    MSRuntime_ReturnValue MSRuntimeLoadGameSourceStatus = MSRuntime::LoadGameSource(errorMsg);
    if (MSRuntimeLoadGameSourceStatus != OK) {
        CloseWindow();
        return 1;
    }

    // Main game loop
    while (!WindowShouldClose()) // Detect window close button or Exit key
    {
        screenWidth = GetScreenWidth();
        screenHeight = GetScreenHeight();
        MSRuntime::SetScreenSize(screenWidth, screenHeight);

        // update keyboard
        for (int key = KEY_SPACE; key <= KEY_KB_MENU; key++) {
            if (IsKeyPressed(key)) {
                // Key 'key' was pressed
                MSRuntime::UpdateKeyboard(key, true);
            } else if (IsKeyReleased(key)) {
                MSRuntime::UpdateKeyboard(key, false);
            }
        }

        // Draw
        BeginDrawing();

        MSRuntime::Tick();

        EndDrawing();
    }

    MSRuntime_ReturnValue MSRuntimeFreeStatus = MSRuntime::Free(errorMsg);

    CloseWindow();

    if (MSRuntimeFreeStatus != OK) {
        return 1; // check after CloseWindow() to make sure Raylib's window is closed before returning
    }

    return 0;
}
