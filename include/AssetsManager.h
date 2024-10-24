#pragma once

#include <vector>
#include <string>
#include <unordered_map>

#include "raylib.h"

class MSAssetsManager
{
public:
    inline static const std::string DefaultAssetsPath = "assets/";
    static bool AssetsExists(const std::string assetsPath);

    bool LoadAssets(const std::string assetsPath, std::string& errorMsg);

    Texture2D* GetSprite(std::string sprite);
protected:
    std::string _assetsPath;

    std::unordered_map<std::string, Texture2D> _sprites;

    bool LoadSprite(std::string& errorMsg);
};