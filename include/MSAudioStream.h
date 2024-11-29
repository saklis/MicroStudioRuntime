#pragma once
#include <raylib.h>
#include <string>

struct MSAudioStream {
    AudioStream Stream;
    int FramesBufferSize = 1024;
    int Position = 0; // Current position in the wave data
    int TotalFrames = 0;
    int FramesLeft = 0;
    mutable bool Finished = false;
};
