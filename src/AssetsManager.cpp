#include "AssetsManager.h"

#include <filesystem>

bool MSAssetsManager::AssetsExists(const std::string assetsPath)
{
    if (std::filesystem::exists(assetsPath))
    {
        for (const auto& entry : std::filesystem::recursive_directory_iterator(assetsPath))
        {
            if (std::filesystem::is_regular_file(entry.status())){
                return true;
            }
        }
    }

    return false;
}

bool MSAssetsManager::LoadAssets(const std::string assetsPath, std::string& errorMsg)
{
    this->_assetsPath = assetsPath;

    std::string spritesPath = assetsPath + "sprites/";
    if (std::filesystem::exists(spritesPath) && std::filesystem::is_directory(spritesPath))
    {
        for (const auto& entry : std::filesystem::directory_iterator(spritesPath))
        {
            if (std::filesystem::is_regular_file(entry.status()))
            {
                this->_sprites[entry.path().stem().string()] = LoadTexture(entry.path().string().c_str());
            }
        }
    }
    return true;
}

Texture2D* MSAssetsManager::GetSprite(std::string sprite)
{
    auto texture = this->_sprites.find(sprite);
    if (texture != this->_sprites.end())
    {
        return &(texture->second); // return the Texture2D
    }
    else
    {
        return nullptr;
    }
}
