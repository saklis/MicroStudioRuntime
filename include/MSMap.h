#pragma once

#include <string>
#include <vector>

struct MSMap {
    std::string Name;
    int Width;
    int Height;
    int BlockWidth;
    int BlockHeight;
    std::vector<std::string> Sprites;
    std::vector<unsigned int> Data;
};