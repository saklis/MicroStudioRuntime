#pragma once

#include <quickjs.h>
#include <string>
#include <unordered_map>
#include <vector>

#include "json.hpp"
#include "MSAudioStream.h"

#include "MSSprite.h"
#include "MSMap.h"
#include "MSMusic.h"
#include "MSSound.h"
#include "raylib.h"

class MSAssetsManager {
public:
    inline static const std::string DefaultAssetsPath = "assets/";
    static constexpr uint32_t SoundInstancePoolSize = 10;

    static bool AssetsExists(const std::string& assetsPath);

    bool ReadResourceManifest(JSContext* jsContext, std::string& errorMsg);

    bool LoadAssets(const std::string& assetsPath, std::string& errorMsg);

    bool UnloadAssets(std::string& errorMsg);

    const MSSprite* GetSprite(const std::string& sprite);

    Font* GetFont(const std::string& fontName);

    const MSMap* GetMap(const std::string& mapName);

    MSSound* GetSound(const std::string& soundName);

    MSMusic* GetMusic(const std::string& name);

    MSSoundInstance* GetSoundInstance(const std::string& soundName, int uniqueId);
    MSSoundInstance* GetIdleSoundInstance(const std::string& soundName);

    void Update(float deltaTime);

protected:
    std::string _assetsPath;

    std::unordered_map<std::string, MSSprite> _sprites;
    std::unordered_map<std::string, MSMap> _maps;
    std::unordered_map<std::string, Font> _fonts;
    std::unordered_map<std::string, MSSound> _sounds;
    std::unordered_map<std::string, MSMusic> _musics;
};
