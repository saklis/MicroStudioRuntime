#pragma once

#include <string>
#include <vector>

struct MSSoundInstance {
    int UniqueId = 0;
    mutable bool IsLooping = false;
    Sound Instance;
};

struct MSSound {
    std::string Name;
    std::string FilePath;
    Sound Sound;
    std::vector<MSSoundInstance> SoundInstances;
};