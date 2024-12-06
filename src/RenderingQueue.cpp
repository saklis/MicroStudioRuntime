#include "RenderingQueue.h"

#include <string.h>

bool RenderingQueue::Push_ClearBackground(const Color color) {
    if (tail >= _tasks.capacity()) {
        return false;
    }

    _tasks[tail].Type = Type_ClearBackground;
    _tasks[tail].Color = color;
    tail++;

    return true;
}

bool RenderingQueue::Push_DrawRectanglePro(const Rectangle rec, const Vector2 origin, const float rotation,
    const Color color) {
    if (tail >= _tasks.capacity()) {
        return false;
    }

    _tasks[tail].Type = Type_DrawRectanglePro;
    _tasks[tail].Rec = rec;
    _tasks[tail].Origin = origin;
    _tasks[tail].Rotation = rotation;
    _tasks[tail].Color = color;
    tail++;

    return true;
}

bool RenderingQueue::Push_DrawTexturePro(const Texture2D* texture, Rectangle source, Rectangle dest, Vector2 origin,
    float rotation, Color tint) {
    if (tail >= _tasks.capacity()) {
        return false;
    }

    _tasks[tail].Type = Type_DrawTexturePro;
    _tasks[tail].Texture = texture;
    _tasks[tail].Source = source;
    _tasks[tail].Dest = dest;
    _tasks[tail].Origin = origin;
    _tasks[tail].Rotation = rotation;
    _tasks[tail].Color = tint;
    tail++;

    return true;
}

bool RenderingQueue::Push_DrawTextPro(Font* font, const char* text, Vector2 position, Vector2 origin, float rotation,
    float fontSize, float spacing, Color tint) {
    if (tail >= _tasks.capacity()) {
        return false;
    }

    _tasks[tail].Type = Type_DrawTextPro;
    _tasks[tail].Font = font;

    free(_tasks[tail].Text);
    _tasks[tail].Text = static_cast<char*>(malloc(strlen(text) + 1));
    strcpy(_tasks[tail].Text, text);

    _tasks[tail].Position = position;
    _tasks[tail].Origin = origin;
    _tasks[tail].Rotation = rotation;
    _tasks[tail].FontSize = fontSize;
    _tasks[tail].Spacing = spacing;
    _tasks[tail].Color = tint;
    tail++;

    return true;
}

bool RenderingQueue::Pop(RenderingTask*& task) {
    if (head == tail) {
        return false;
    }

    task = &_tasks[head];
    head++;

    return true;
}

bool RenderingQueue::IsEmpty() const {
    return tail == 0 || head == tail;
}

void RenderingQueue::Clear() {
    head = 0;
    tail = 0;
}
