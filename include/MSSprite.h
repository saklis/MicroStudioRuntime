#pragma once
#include <raylib.h>
#include <string>

struct MSSprite {
    bool IsAnimation = false;
    int Frames = 0;
    int FrameHeight = 0;
    int FPS = 0;
    int CurrentFrame = 0;
    float FrameTime = 0.0f;
    float FrameTimeCounter = 0.0f;
    std::string FileName;
    Texture2D Texture;
};
