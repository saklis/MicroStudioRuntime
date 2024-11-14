#pragma once

#include <quickjs.h>
#include <vector>
#include <string>
#include <unordered_map>

#include "MSSprite.h"
#include "raylib.h"

class MSAssetsManager {
public:
    inline static const std::string DefaultAssetsPath = "assets/";

    static bool AssetsExists(const std::string& assetsPath);

    bool ReadResourceManifest(JSContext* js_context, std::string& errorMsg);

    bool LoadAssets(const std::string& assetsPath, std::string& errorMsg);

    bool UnloadAssets(std::string& errorMsg);

    MSSprite* GetSprite(const std::string& sprite);

    Font* GetFont(const std::string& fontName);

    void Update(float deltaTime);

protected:
    std::string _assetsPath;

    std::unordered_map<std::string, MSSprite> _sprites;
    std::unordered_map<std::string, Font> _fonts;
};
