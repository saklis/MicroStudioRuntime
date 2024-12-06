#pragma once

#include <cstdint>
#include <vector>

#include "raylib.h"

#include "MSSprite.h"

enum RenderingTaskType {
    Type_Empty,
    Type_ClearBackground,
    Type_DrawRectanglePro,
    Type_DrawTexturePro,
    Type_DrawTextPro,
};

struct RenderingTask {
    RenderingTaskType Type;

    // ClearBackground
    Color Color;

    // DrawRectanglePro
    Rectangle Rec;
    Vector2 Origin;
    float Rotation;

    // DrawTexturePro
    const Texture2D* Texture;
    Rectangle Source;
    Rectangle Dest;

    // DrawTextPro
    Font* Font;
    char* Text;
    Vector2 Position;
    float FontSize;
    float Spacing;
};

class RenderingQueue {
public:
    explicit RenderingQueue(uint32_t capacity) : _tasks(capacity) {};

    bool Push_ClearBackground(Color color);
    bool Push_DrawRectanglePro(Rectangle rec, Vector2 origin, float rotation, Color color);
    bool Push_DrawTexturePro(const Texture2D* texture, Rectangle source, Rectangle dest, Vector2 origin, float rotation, Color tint);
    bool Push_DrawTextPro(Font* font, const char* text, Vector2 position, Vector2 origin, float rotation, float fontSize, float spacing, Color tint);

    bool Pop(RenderingTask*& task);

    [[nodiscard]] bool IsEmpty() const;

    void Clear();

private:
    std::vector<RenderingTask> _tasks;
    uint32_t head = 0;
    uint32_t tail = 0;
};
