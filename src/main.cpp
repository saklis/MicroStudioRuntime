#include "raylib.h"
#include "quickjs.h"

#include "MSRuntime.h"

int main(void)
{
    // Initialization
    const int screenWidth = 800;
    const int screenHeight = 450;

    InitWindow(screenWidth, screenHeight, "MicroStudio Runtime");
    SetTargetFPS(60);
    BeginDrawing();
    ClearBackground(RAYWHITE);
    DrawText("Welcome to MicroStudio Runtime! Fees not included!", 160, 200, 20, BLACK);
    EndDrawing();

    std::string errorMsg;
    MSRuntime_ReturnValue MSRuntimeInitStatus = MSRuntime::Init(errorMsg);
    if (MSRuntimeInitStatus != OK)
    {
        CloseWindow();
        return 1;
    }

    // Load assets - must be done after InitWindow()!
    MSRuntime_ReturnValue MSRuntimeLoadAssetsStatus = MSRuntime::LoadAssets(errorMsg);
    if (MSRuntimeLoadAssetsStatus != OK)
    {
        CloseWindow();
        return 1;
    }

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        // Update

        // Draw
        BeginDrawing();

        MSRuntime::Tick();

        EndDrawing();
    }

    MSRuntime_ReturnValue MSRuntimeFreeStatus = MSRuntime::Free(errorMsg);

    CloseWindow();

    if (MSRuntimeFreeStatus != OK)
    {
        return 1; // check after CloseWindow() to make sure Raylib is deinitialized before returning
    }

    return 0;
}
