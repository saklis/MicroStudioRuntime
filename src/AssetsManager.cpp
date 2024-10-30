#include "AssetsManager.h"

#include <filesystem>

bool MSAssetsManager::AssetsExists(const std::string &assetsPath) {
    if (std::filesystem::exists(assetsPath)) {
        for (const auto &entry: std::filesystem::recursive_directory_iterator(assetsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                return true;
            }
        }
    }

    return false;
}

bool MSAssetsManager::LoadAssets(const std::string &assetsPath, std::string &errorMsg) {
    this->_assetsPath = assetsPath;

    std::string spritesPath = assetsPath + "sprites/";
    if (std::filesystem::exists(spritesPath) && std::filesystem::is_directory(spritesPath)) {
        for (const auto &entry: std::filesystem::directory_iterator(spritesPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                this->_sprites[entry.path().stem().string()] = LoadTexture(entry.path().string().c_str());
            }
        }
    }

    std::string fontsPath = assetsPath + "fonts/";
    if (std::filesystem::exists(fontsPath) && std::filesystem::is_directory(fontsPath)) {
        for (const auto &entry: std::filesystem::directory_iterator(fontsPath)) {
            if (std::filesystem::is_regular_file(entry.status())) {
                // loading font in big size, because Raylib is using stb_truetype, which doesn't support ClearType rasterization
                // Because of this fonts will be rendered blurry if loaded in default size
                this->_fonts[entry.path().stem().string()] = LoadFontEx(entry.path().string().c_str(), 200, NULL, 0);
            }
        }
    }

    return true;
}

bool MSAssetsManager::UnloadAssets(std::string &errorMsg) {
    for (auto &[name, texture]: this->_sprites) {
        UnloadTexture(texture);
    }
    this->_sprites.clear();

    for (auto &[name, font]: this->_fonts) {
        UnloadFont(font);
    }
    this->_fonts.clear();

    return true;
}

Texture2D *MSAssetsManager::GetSprite(const std::string &sprite) {
    auto texture = this->_sprites.find(sprite);
    if (texture != this->_sprites.end()) {
        return &(texture->second); // return the Texture2D
    } else {
        return nullptr;
    }
}

Font *MSAssetsManager::GetFont(const std::string &fontName) {
    auto font = this->_fonts.find(fontName);
    if (font != this->_fonts.end()) {
        return &(font->second); // return the Font
    } else {
        return nullptr;
    }
}
