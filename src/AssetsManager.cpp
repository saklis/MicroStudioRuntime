﻿#include "AssetsManager.h"

#include <spdlog/spdlog.h>

bool MSAssetsManager::AssetsExists(const std::string& assetsPath) {
    if (std::filesystem::exists(assetsPath)) {
        for (const auto& entry: std::filesystem::recursive_directory_iterator(assetsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                return true;
            }
        }
    }

    return false;
}

bool MSAssetsManager::ReadResourceManifest(JSContext* jsContext, std::string& errorMsg) {
    const char* script = "JSON.stringify(resources);";

    JSValue evalResult = JS_Eval(jsContext, script, strlen(script), "<input>", JS_EVAL_TYPE_GLOBAL);
    if (JS_IsException(evalResult)) {
        JSValue exception = JS_GetException(jsContext);
        const char* ex_msg = JS_ToCString(jsContext, exception);
        errorMsg = "Error while getting resources from JS runtime: " + std::string(ex_msg);
        JS_FreeCString(jsContext, ex_msg);

        JS_FreeValue(jsContext, exception);
        JS_FreeValue(jsContext, evalResult);
        return false;
    }

    const char* jsonString = JS_ToCString(jsContext, evalResult);
    if (!jsonString) {
        errorMsg = "Failed to convert 'resources' JS value to string";
        JS_FreeValue(jsContext, evalResult);
        return false;
    }

    JS_FreeValue(jsContext, evalResult);

    nlohmann::json resources_json = nlohmann::json::parse(jsonString);
    spdlog::debug("Resources JSON: {}", resources_json.dump(4));

    spdlog::debug("Reading images manifest:");
    auto images = resources_json.at("images");
    for (const auto& image: images) {
        MSSprite sprite;
        sprite.FileName = image.at("file").get<std::string>();

        if (image.contains("properties")) {
            auto properties = image.at("properties");

            if (properties.contains("frames")) {
                sprite.Frames = properties.at("frames").get<int>();
                sprite.IsAnimation = sprite.Frames >= 2;
            }

            if (properties.contains("fps")) {
                sprite.FPS = properties.at("fps").get<int>();
                sprite.FrameTime = 1.0f / static_cast<float>(sprite.FPS);
            }
        }

        std::string imageIndex; // modified 'FileName' field without extension
        imageIndex = sprite.FileName;
        imageIndex.resize(imageIndex.length() - 4);

        this->_sprites[imageIndex] = sprite;
        spdlog::debug("'" + imageIndex + "' sprite added");
    }

    spdlog::debug("Reading maps manifest:");
    auto maps = resources_json.at("maps");
    for (auto it = maps.begin(); it != maps.end(); ++it) {
        std::string mapName = it.key();
        std::string mapJsonString = it.value().get<std::string>();
        nlohmann::json mapJson = nlohmann::json::parse(mapJsonString);

        MSMap map;
        map.Name = mapName;
        map.Width = mapJson.at("width").get<int>();
        map.Height = mapJson.at("height").get<int>();
        map.BlockWidth = mapJson.at("block_width").get<int>();
        map.BlockHeight = mapJson.at("block_height").get<int>();

        for (const auto& sprite: mapJson.at("sprites")) {
            if (sprite.is_string()) {
                std::string spriteName = sprite.get<std::string>();
                map.Sprites.push_back(sprite.get<std::string>());
            } else if (sprite.is_number()) {
                map.Sprites.push_back(std::to_string(sprite.get<int>()));
            }
        }

        for (const auto& data: mapJson.at("data")) {
            map.Data.push_back(data.get<unsigned int>());
        }

        this->_maps[mapName] = map;
        spdlog::debug("'" + mapName + "' map added");
    }

    spdlog::debug("Reading sounds manifest:");
    auto sounds = resources_json.at("sounds");
    for (const auto& sound_json: sounds) {
        MSSound sound;
        sound.FilePath = sound_json.at("file").get<std::string>();
        std::string name = sound.FilePath;
        name.resize(name.length() - 4);
        sound.Name = name;

        _sounds[name] = sound;
        spdlog::debug("'" + name + "' sound added");
    }

    spdlog::debug("Reading music manifest:");
    auto musics = resources_json.at("music");
    for (const auto& music_json: musics) {
        MSMusic music;
        music.FileName = music_json.at("file").get<std::string>();
        std::string name = music.FileName;
        name.resize(name.length() - 4);
        music.Name = name;

        _musics[name] = music;
        spdlog::debug("'" + name + "' music added");
    }

    return true;
}

bool MSAssetsManager::LoadAssets(const std::string& assetsPath, std::string& errorMsg) {
    this->_assetsPath = assetsPath;

    std::string spritesPath = assetsPath + "sprites/";
    for (auto& [spriteKey, msSprite]: this->_sprites) {
        std::string spritePath = spritesPath + msSprite.FileName;
        if (std::filesystem::exists(spritePath) && std::filesystem::is_regular_file(spritePath)) {
            msSprite.Texture = LoadTexture(spritePath.c_str());
            if (msSprite.Texture.id <= 0) {
                errorMsg = "Unknown error while loading sprite file: " + spritePath;
                return false;

            }
            spdlog::debug("Sprite file loaded: {}", spritePath);
            if (msSprite.IsAnimation) {
                msSprite.FrameHeight = msSprite.Texture.height / msSprite.Frames;
            }
        } else {
            errorMsg = "Sprite file not found: " + spritePath;
            return false;
        }
    }

    //todo: maybe loading fonts should be done through manifest, too?
    std::string fontsPath = assetsPath + "fonts/";
    if (std::filesystem::exists(fontsPath) && std::filesystem::is_directory(fontsPath)) {
        for (const auto& entry: std::filesystem::directory_iterator(fontsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                // loading font in big size, because Raylib is using stb_truetype, which doesn't support ClearType rasterization
                // Because of this fonts will be rendered blurry if loaded in default size
                this->_fonts[entry.path().stem().string()] = LoadFontEx(entry.path().string().c_str(), 200, NULL, 0);
                if (this->_fonts[entry.path().stem().string()].baseSize <= 0) {
                    errorMsg = "Unknown error while loading font file: " + entry.path().string();
                    return false;
                }
                spdlog::debug("Font file loaded: {}", entry.path().string());
            }
        }
    }

    std::string soundsPath = assetsPath + "sounds/";
    for (auto& [soundKey, msSound]: this->_sounds) {
        std::string soundPath = soundsPath + msSound.FilePath;
        if (std::filesystem::exists(soundPath) && std::filesystem::is_regular_file(soundPath)) {
            msSound.Sound = LoadSound(soundPath.c_str());
            if (msSound.Sound.frameCount <= 0) {
                errorMsg = "Unknown error while loading sound file: " + soundPath;
                return false;
            }
            spdlog::debug("Sound file loaded: {}", soundPath);
            for (int i = 0; i < SoundInstancePoolSize; i++) {
                MSSoundInstance soundInstance;
                soundInstance.Instance = LoadSoundAlias(msSound.Sound);
                if (soundInstance.Instance.frameCount <= 0) {
                    errorMsg = "Unknown error while loading sound alias: " + soundPath;
                    return false;
                }
                msSound.SoundInstances.push_back(soundInstance);
                spdlog::debug("Sound alias loaded: {}", soundPath);
            }
        }
    }

    std::string musicsPath = assetsPath + "music/";
    for (auto& [musicKey, msMusic]: this->_musics) {
        std::string musicPath = musicsPath + msMusic.FileName;
        if (std::filesystem::exists(musicPath) && std::filesystem::is_regular_file(musicPath)) {
            msMusic.Music = LoadMusicStream(musicPath.c_str());
            if (msMusic.Music.frameCount <= 0) {
                errorMsg = "Unknown error while loading music file: " + musicPath;
                return false;
            }
            msMusic.Music.looping = false;
            spdlog::debug("Music file loaded: {}", musicPath);
        }
    }

    return true;
}

bool MSAssetsManager::UnloadAssets(std::string& errorMsg) {
    for (auto& [name, texture]: this->_sprites) {
        UnloadTexture(texture.Texture);
    }
    this->_sprites.clear();

    for (auto& [name, font]: this->_fonts) {
        UnloadFont(font);
    }
    this->_fonts.clear();

    for (auto& [name, sound]: this->_sounds) {
        for (auto& soundInstance: sound.SoundInstances) {
            StopSound(soundInstance.Instance);
            UnloadSoundAlias(soundInstance.Instance);
        }
        UnloadSound(sound.Sound);
    }
    this->_sounds.clear();

    for (auto& [name, music]: this->_musics) {
        StopMusicStream(music.Music);
        UnloadMusicStream(music.Music);
    }
    this->_musics.clear();

    return true;
}

const MSSprite* MSAssetsManager::GetSprite(const std::string& sprite) {
    auto texture = this->_sprites.find(sprite);
    if (texture != this->_sprites.end()) {
        return &(texture->second);
    } else {
        spdlog::error("Sprite '{}' not found", sprite);
        return nullptr;
    }
}

Font* MSAssetsManager::GetFont(const std::string& fontName) {
    auto font = this->_fonts.find(fontName);
    if (font != this->_fonts.end()) {
        return &(font->second);
    } else {
        spdlog::error("Font '{}' not found", fontName);
        return nullptr;
    }
}

const MSMap* MSAssetsManager::GetMap(const std::string& mapName) {
    auto map = this->_maps.find(mapName);
    if (map != this->_maps.end()) {
        return &(map->second);
    } else {
        spdlog::error("Map '{}' not found", mapName);
        return nullptr;
    }
}

MSSound* MSAssetsManager::GetSound(const std::string& soundName) {
    auto sound = this->_sounds.find(soundName);
    if (sound != this->_sounds.end()) {
        return &(sound->second);
    } else {
        spdlog::error("Sound '{}' not found", soundName);
        return nullptr;
    }
}

MSMusic* MSAssetsManager::GetMusic(const std::string& name) {
    auto music = this->_musics.find(name);
    if (music != this->_musics.end()) {
        return &music->second;
    } else {
        spdlog::error("Music '{}' not found", name);
        return nullptr;
    }
}

MSSoundInstance* MSAssetsManager::GetSoundInstance(const std::string& soundName, int uniqueId) {
    auto sound = this->_sounds.find(soundName);
    if (sound != this->_sounds.end()) {
        for (int i = 0; i < SoundInstancePoolSize; i++) {
            if (sound->second.SoundInstances[i].UniqueId == uniqueId) {
                return &sound->second.SoundInstances[i];
            }
        }
    }
    spdlog::error("Sound instance '{}' with unique ID '{}' not found", soundName, uniqueId);
    return nullptr;
}

MSSoundInstance* MSAssetsManager::GetIdleSoundInstance(const std::string& soundName) {
    auto sound = this->_sounds.find(soundName);
    if (sound != this->_sounds.end()) {
        for (auto& soundInstance: sound->second.SoundInstances) {
            if (!IsSoundPlaying(soundInstance.Instance)) {
                return &soundInstance;
            }
        }
    }
    spdlog::error("Idle sound instance '{}' not found", soundName);
    return nullptr;
}

void MSAssetsManager::Update(float deltaTime) {
    for (auto& [name, sprite]: this->_sprites) {
        if (sprite.IsAnimation) {
            sprite.FrameTimeCounter += deltaTime;
            if (sprite.FrameTimeCounter >= sprite.FrameTime) {
                sprite.FrameTimeCounter = 0.0f;
                sprite.CurrentFrame++;
                if (sprite.CurrentFrame >= sprite.Frames) {
                    sprite.CurrentFrame = 0;
                }
            }
        }
    }

    for (auto& [name, sound]: this->_sounds) {
        for (auto& soundInstance: sound.SoundInstances) {
            if (soundInstance.IsLooping && !IsSoundPlaying(soundInstance.Instance)) {
                PlaySound(soundInstance.Instance);
            }
        }
    }

    for (auto& [name, music]: this->_musics) {
        if (IsMusicStreamPlaying(music.Music)) {
            UpdateMusicStream(music.Music);
        }
    }
}
