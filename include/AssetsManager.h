#pragma once

#include <vector>
#include <string>
#include <unordered_map>

#include "raylib.h"

class MSAssetsManager {
public:
    inline static const std::string DefaultAssetsPath = "assets/";

    static bool AssetsExists(const std::string &assetsPath);

    bool LoadAssets(const std::string &assetsPath, std::string &errorMsg);

    bool UnloadAssets(std::string &errorMsg);

    Texture2D *GetSprite(const std::string &sprite);

    Font *GetFont(const std::string &fontName);

protected:
    std::string _assetsPath;

    std::unordered_map<std::string, Texture2D> _sprites;
    std::unordered_map<std::string, Font> _fonts;
};
