#pragma once

#include <quickjs.h>
#include <string>
#include <unordered_map>

#include "json.hpp"

#include "MSSprite.h"
#include "MSMap.h"
#include "raylib.h"

class MSAssetsManager {
public:
    inline static const std::string DefaultAssetsPath = "assets/";

    static bool AssetsExists(const std::string& assetsPath);

    bool ReadResourceManifest(JSContext* jsContext, std::string& errorMsg);

    bool LoadAssets(const std::string& assetsPath, std::string& errorMsg);

    bool UnloadAssets(std::string& errorMsg);

    MSSprite* GetSprite(const std::string& sprite);

    Font* GetFont(const std::string& fontName);

    MSMap* GetMap(const std::string& mapName);

    void Update(float deltaTime);

protected:
    std::string _assetsPath;

    std::unordered_map<std::string, MSSprite> _sprites;
    std::unordered_map<std::string, MSMap> _maps;
    std::unordered_map<std::string, Font> _fonts;
};
