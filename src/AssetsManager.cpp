#include "AssetsManager.h"

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
        errorMsg = ex_msg;
        JS_FreeCString(jsContext, ex_msg);

        JS_FreeValue(jsContext, exception);
        JS_FreeValue(jsContext, evalResult);
        return false;
    }

    const char* jsonString = JS_ToCString(jsContext, evalResult);
    if (!jsonString) {
        errorMsg = "Failed to convert JSValue to string";
        JS_FreeValue(jsContext, evalResult);
        return false;
    }

    JS_FreeValue(jsContext, evalResult);

    nlohmann::json resources_json = nlohmann::json::parse(jsonString);

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
    }

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
    }

    return true;
}

bool MSAssetsManager::LoadAssets(const std::string& assetsPath, std::string& errorMsg) {
    this->_assetsPath = assetsPath;

    std::string spritesPath = assetsPath + "sprites/";
    for (const auto& sprite: this->_sprites) {
        std::string spritePath = spritesPath + sprite.second.FileName;
        if (std::filesystem::exists(spritePath) && std::filesystem::is_regular_file(spritePath)) {
            this->_sprites[sprite.first].Texture = LoadTexture(spritePath.c_str());
            if (this->_sprites[sprite.first].IsAnimation) {
                this->_sprites[sprite.first].FrameHeight =
                        this->_sprites[sprite.first].Texture.height / this->_sprites[sprite.first].Frames;
            }
        } else {
            errorMsg = "Sprite file not found: " + spritePath;
            return false;
        }
    }

    std::string fontsPath = assetsPath + "fonts/";
    if (std::filesystem::exists(fontsPath) && std::filesystem::is_directory(fontsPath)) {
        for (const auto& entry: std::filesystem::directory_iterator(fontsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                // loading font in big size, because Raylib is using stb_truetype, which doesn't support ClearType rasterization
                // Because of this fonts will be rendered blurry if loaded in default size
                this->_fonts[entry.path().stem().string()] = LoadFontEx(entry.path().string().c_str(), 200, NULL, 0);
            }
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

    return true;
}

MSSprite* MSAssetsManager::GetSprite(const std::string& sprite) {
    auto texture = this->_sprites.find(sprite);
    if (texture != this->_sprites.end()) {
        return &(texture->second);
    } else {
        return nullptr;
    }
}

Font* MSAssetsManager::GetFont(const std::string& fontName) {
    auto font = this->_fonts.find(fontName);
    if (font != this->_fonts.end()) {
        return &(font->second);
    } else {
        return nullptr;
    }
}

MSMap* MSAssetsManager::GetMap(const std::string& mapName) {
    auto map = this->_maps.find(mapName);
    if (map != this->_maps.end()) {
        return &(map->second);
    } else {
        return nullptr;
    }
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
}
