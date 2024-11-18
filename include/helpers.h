#pragma once

#include <stdio.h>
#include <string>
#include <stdlib.h>
#include <ctype.h>
#include <math.h> // For fmodf and fabsf
#include <unordered_map>
#include <utility>

#include <raylib.h>

// Generated with ChatGPT. Can't be bothered to check all those ifs :D
int ParseColor(const char* colorStr, Color* color, int* alpha) {
    if (color == NULL || colorStr == NULL)
        return -1; // Invalid arguments

    *alpha = -1; // set alpha to -1 by default to signal that alpha should not be overwritten with color. This behavior is used in Screen_SetColor

    // Initialize color to default value
    color->r = 0;
    color->g = 0;
    color->b = 0;
    color->a = 255;

    // Skip leading whitespace
    while (isspace(*colorStr)) colorStr++;

    if (*colorStr == '#') {
        // Hex format
        colorStr++; // Skip '#'
        int len = strlen(colorStr);

        // Validate hex digits
        for (int i = 0; i < len; i++) {
            if (!isxdigit(colorStr[i]))
                return -1; // Invalid hex digit
        }

        if (len == 6) // "RRGGBB"
        {
            // Extract RR, GG, BB
            char rr[3] = {colorStr[0], colorStr[1], '\0'};
            char gg[3] = {colorStr[2], colorStr[3], '\0'};
            char bb[3] = {colorStr[4], colorStr[5], '\0'};
            // Convert hex to int
            color->r = (unsigned char) strtol(rr, NULL, 16);
            color->g = (unsigned char) strtol(gg, NULL, 16);
            color->b = (unsigned char) strtol(bb, NULL, 16);
        } else if (len == 3) // "RGB"
        {
            // Duplicate each digit
            char rr[3] = {colorStr[0], colorStr[0], '\0'};
            char gg[3] = {colorStr[1], colorStr[1], '\0'};
            char bb[3] = {colorStr[2], colorStr[2], '\0'};
            // Convert hex to int
            color->r = (unsigned char) strtol(rr, NULL, 16);
            color->g = (unsigned char) strtol(gg, NULL, 16);
            color->b = (unsigned char) strtol(bb, NULL, 16);
        } else {
            // Invalid hex color format
            return -1;
        }
    } else if (strncasecmp(colorStr, "rgb(", 4) == 0) {
        // RGB format
        const char* ptr = colorStr + 4; // Skip "rgb("
        char* endPtr;

        // Extract red value
        int r = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1; // Parsing failed
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract green value
        int g = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract blue value
        int b = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;

        // Check for closing parenthesis
        while (isspace(*endPtr)) endPtr++;
        if (*endPtr != ')') return -1;

        // Range checking
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255)
            return -1; // Invalid RGB value

        // Assign values to the Color struct
        color->r = (unsigned char) r;
        color->g = (unsigned char) g;
        color->b = (unsigned char) b;
    } else if (strncasecmp(colorStr, "rgba(", 5) == 0) {
        // RGBA format with alpha value in 0-1 range
        const char* ptr = colorStr + 5; // Skip "rgba("
        char* endPtr;

        // Extract red value
        int r = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1; // Parsing failed
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract green value
        int g = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract blue value
        int b = (int) strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract alpha value
        float a = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;

        // Check for closing parenthesis
        while (isspace(*endPtr)) endPtr++;
        if (*endPtr != ')') return -1;

        // Range checking
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255 || a < 0.0f || a > 1.0f)
            return -1; // Invalid RGBA value

        // Assign values to the Color struct
        color->r = (unsigned char) r;
        color->g = (unsigned char) g;
        color->b = (unsigned char) b;
        color->a = (unsigned char) (a * 255.0f + 0.5f); // Convert alpha from 0.0-1.0 to 0-255
        *alpha = color->a;
    } else if (strncasecmp(colorStr, "hsl(", 4) == 0) {
        // HSL format
        const char* ptr = colorStr + 4; // Skip "hsl("
        char* endPtr;

        // Extract hue value
        float h = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract saturation value
        float s = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        if (*endPtr == '%') endPtr++; // Skip '%'
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract lightness value
        float l = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        if (*endPtr == '%') endPtr++; // Skip '%'
        ptr = endPtr;

        // Check for closing parenthesis
        while (isspace(*ptr)) ptr++;
        if (*ptr != ')') return -1;

        // Range checking
        h = fmodf(h, 360.0f);
        if (h < 0.0f) h += 360.0f;
        if (s < 0.0f || s > 100.0f || l < 0.0f || l > 100.0f)
            return -1; // Invalid HSL value

        // Convert HSL to RGB
        s /= 100.0f;
        l /= 100.0f;

        float c = (1.0f - fabsf(2.0f * l - 1.0f)) * s;
        float h_prime = h / 60.0f;
        float x = c * (1.0f - fabsf(fmodf(h_prime, 2.0f) - 1.0f));
        float m = l - c / 2.0f;

        float r1, g1, b1;

        if (h_prime >= 0.0f && h_prime < 1.0f) {
            r1 = c;
            g1 = x;
            b1 = 0.0f;
        } else if (h_prime >= 1.0f && h_prime < 2.0f) {
            r1 = x;
            g1 = c;
            b1 = 0.0f;
        } else if (h_prime >= 2.0f && h_prime < 3.0f) {
            r1 = 0.0f;
            g1 = c;
            b1 = x;
        } else if (h_prime >= 3.0f && h_prime < 4.0f) {
            r1 = 0.0f;
            g1 = x;
            b1 = c;
        } else if (h_prime >= 4.0f && h_prime < 5.0f) {
            r1 = x;
            g1 = 0.0f;
            b1 = c;
        } else // h_prime >=5.0f && h_prime <6.0f
        {
            r1 = c;
            g1 = 0.0f;
            b1 = x;
        }

        // Convert to 0-255 RGB values
        color->r = (unsigned char) ((r1 + m) * 255.0f + 0.5f);
        color->g = (unsigned char) ((g1 + m) * 255.0f + 0.5f);
        color->b = (unsigned char) ((b1 + m) * 255.0f + 0.5f);
        color->a = 255;
    } else if (strncasecmp(colorStr, "hsla(", 5) == 0) {
        // HSLA format
        const char* ptr = colorStr + 5; // Skip "hsla("
        char* endPtr;

        // Extract hue value
        float h = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract saturation value
        float s = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        if (*endPtr == '%') endPtr++; // Skip '%'
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract lightness value
        float l = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;
        if (*endPtr == '%') endPtr++; // Skip '%'
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract alpha value
        float a = strtof(ptr, &endPtr);
        if (ptr == endPtr) return -1;

        // Check for closing parenthesis
        while (isspace(*endPtr)) endPtr++;
        if (*endPtr != ')') return -1;

        // Range checking
        h = fmodf(h, 360.0f);
        if (h < 0.0f) h += 360.0f;
        if (s < 0.0f || s > 100.0f || l < 0.0f || l > 100.0f || a < 0.0f || a > 1.0f)
            return -1; // Invalid HSLA value

        // Convert HSL to RGB
        s /= 100.0f;
        l /= 100.0f;

        float c = (1.0f - fabsf(2.0f * l - 1.0f)) * s;
        float h_prime = h / 60.0f;
        float x = c * (1.0f - fabsf(fmodf(h_prime, 2.0f) - 1.0f));
        float m = l - c / 2.0f;

        float r1, g1, b1;

        if (h_prime >= 0.0f && h_prime < 1.0f) {
            r1 = c;
            g1 = x;
            b1 = 0.0f;
        } else if (h_prime >= 1.0f && h_prime < 2.0f) {
            r1 = x;
            g1 = c;
            b1 = 0.0f;
        } else if (h_prime >= 2.0f && h_prime < 3.0f) {
            r1 = 0.0f;
            g1 = c;
            b1 = x;
        } else if (h_prime >= 3.0f && h_prime < 4.0f) {
            r1 = 0.0f;
            g1 = x;
            b1 = c;
        } else if (h_prime >= 4.0f && h_prime < 5.0f) {
            r1 = x;
            g1 = 0.0f;
            b1 = c;
        } else // h_prime >=5.0f && h_prime <6.0f
        {
            r1 = c;
            g1 = 0.0f;
            b1 = x;
        }

        // Convert to 0-255 RGB values
        color->r = (unsigned char) ((r1 + m) * 255.0f + 0.5f);
        color->g = (unsigned char) ((g1 + m) * 255.0f + 0.5f);
        color->b = (unsigned char) ((b1 + m) * 255.0f + 0.5f);
        color->a = (unsigned char) (a * 255.0f + 0.5f); // Alpha from 0.0-1.0 to 0-255
        *alpha = color->a;
    } else {
        // Invalid color format
        return -1;
    }

    return 0; // Success
}

std::unordered_map<int32_t, std::pair<const char *, const char *> > Ray2MicroKeyMap = {
    {KEY_NULL, {"UNIDENTIFIED", "UNIDENTIFIED"}}, // Key: NULL, used for no key pressed
    // Alphanumeric keys
    {KEY_APOSTROPHE, {"'", "QUOTE"}}, // Key: '
    {KEY_COMMA, {",", "COMMA"}}, // Key: ,
    {KEY_MINUS, {"-", "MINUS"}}, // Key: -
    {KEY_PERIOD, {".", "PERIOD"}}, // Key: .
    {KEY_SLASH, {"/", "SLASH"}}, // Key: /
    {KEY_ZERO, {"0", "DIGIT_0"}}, // Key: 0
    {KEY_ONE, {"1", "DIGIT_1"}}, // Key: 1
    {KEY_TWO, {"2", "DIGIT_2"}}, // Key: 2
    {KEY_THREE, {"3", "DIGIT_3"}}, // Key: 3
    {KEY_FOUR, {"4", "DIGIT_4"}}, // Key: 4
    {KEY_FIVE, {"5", "DIGIT_5"}}, // Key: 5
    {KEY_SIX, {"6", "DIGIT_6"}}, // Key: 6
    {KEY_SEVEN, {"7", "DIGIT_7"}}, // Key: 7
    {KEY_EIGHT, {"8", "DIGIT_8"}}, // Key: 8
    {KEY_NINE, {"9", "DIGIT_9"}}, // Key: 9
    {KEY_SEMICOLON, {";", "SEMICOLON"}}, // Key: ;
    {KEY_EQUAL, {"=", "EQUAL"}}, // Key: =
    {KEY_A, {"A", "KEY_A"}}, // Key: A | a
    {KEY_B, {"B", "KEY_B"}}, // Key: B | b
    {KEY_C, {"C", "KEY_C"}}, // Key: C | c
    {KEY_D, {"D", "KEY_D"}}, // Key: D | d
    {KEY_E, {"E", "KEY_E"}}, // Key: E | e
    {KEY_F, {"F", "KEY_F"}}, // Key: F | f
    {KEY_G, {"G", "KEY_G"}}, // Key: G | g
    {KEY_H, {"H", "KEY_H"}}, // Key: H | h
    {KEY_I, {"I", "KEY_I"}}, // Key: I | i
    {KEY_J, {"J", "KEY_J"}}, // Key: J | j
    {KEY_K, {"K", "KEY_K"}}, // Key: K | k
    {KEY_L, {"L", "KEY_L"}}, // Key: L | l
    {KEY_M, {"M", "KEY_M"}}, // Key: M | m
    {KEY_N, {"N", "KEY_N"}}, // Key: N | n
    {KEY_O, {"O", "KEY_O"}}, // Key: O | o
    {KEY_P, {"P", "KEY_P"}}, // Key: P | p
    {KEY_Q, {"Q", "KEY_Q"}}, // Key: Q | q
    {KEY_R, {"R", "KEY_R"}}, // Key: R | r
    {KEY_S, {"S", "KEY_S"}}, // Key: S | s
    {KEY_T, {"T", "KEY_T"}}, // Key: T | t
    {KEY_U, {"U", "KEY_U"}}, // Key: U | u
    {KEY_V, {"V", "KEY_V"}}, // Key: V | v
    {KEY_W, {"W", "KEY_W"}}, // Key: W | w
    {KEY_X, {"X", "KEY_X"}}, // Key: X | x
    {KEY_Y, {"Y", "KEY_Y"}}, // Key: Y | y
    {KEY_Z, {"Z", "KEY_Z"}}, // Key: Z | z
    {KEY_LEFT_BRACKET, {"[", "BRACKET_LEFT"}}, // Key: [
    {KEY_BACKSLASH, {"\\", "BACKSLASH"}}, // Key: '\'
    {KEY_RIGHT_BRACKET, {"]", "BRACKET_RIGHT"}}, // Key: ]
    {KEY_GRAVE, {"`", "BACKQUOTE"}}, // Key: `
    // Function keys
    {KEY_SPACE, {" ", "SAPCE"}}, // Key: Space
    {KEY_ESCAPE, {"ESCAPE", "ESCAPE"}}, // Key: Esc
    {KEY_ENTER, {"ENTER", "ENTER"}}, // Key: Enter
    {KEY_TAB, {"TAB", "TAB"}}, // Key: Tab
    {KEY_BACKSPACE, {"BACKSPACE", "BACKSPACE"}}, // Key: Backspace
    {KEY_INSERT, {"INSERT", "INSERT"}}, // Key: Ins
    {KEY_DELETE, {"DELETE", "DELETE"}}, // Key: Del
    {KEY_RIGHT, {"ARROWRIGHT", "ARROW_RIGHT"}}, // Key: Cursor right
    {KEY_LEFT, {"ARROWLEFT", "ARROW_LEFT"}}, // Key: Cursor left
    {KEY_DOWN, {"ARROWDOWN", "ARROW_DOWN"}}, // Key: Cursor down
    {KEY_UP, {"ARROWUP", "ARROW_UP"}}, // Key: Cursor up
    {KEY_PAGE_UP, {"PAGEUP", "PAGE_UP"}}, // Key: Page up
    {KEY_PAGE_DOWN, {"PAGEDOWN", "PAGE_DOWN"}}, // Key: Page down
    {KEY_HOME, {"HOME", "HOME"}}, // Key: Home
    {KEY_END, {"END", "END"}}, // Key: End
    {KEY_CAPS_LOCK, {"CAPSLOCK", "CAPS_LOCK"}}, // Key: Caps lock
    {KEY_SCROLL_LOCK, {"TAB", "TAB"}}, // Key: Scroll down
    {KEY_NUM_LOCK, {"", ""}}, // Key: Num lock
    {KEY_PRINT_SCREEN, {"PRINTSCREEN", "PRINT_SCREEN"}}, // Key: Print screen
    {KEY_PAUSE, {"PAUSE", "PAUSE"}}, // Key: Pause
    {KEY_F1, {"F1", "F_1"}}, // Key: F1
    {KEY_F2, {"F2", "F_2"}}, // Key: F2
    {KEY_F3, {"F3", "F_3"}}, // Key: F3
    {KEY_F4, {"F4", "F_4"}}, // Key: F4
    {KEY_F5, {"F5", "F_5"}}, // Key: F5
    {KEY_F6, {"F6", "F_6"}}, // Key: F6
    {KEY_F7, {"F7", "F_7"}}, // Key: F7
    {KEY_F8, {"F8", "F_8"}}, // Key: F8
    {KEY_F9, {"F9", "F_9"}}, // Key: F9
    {KEY_F10, {"F10", "F_10"}}, // Key: F10
    {KEY_F11, {"F11", "F_11"}}, // Key: F11
    {KEY_F12, {"F12", "F_12"}}, // Key: F12
    {KEY_LEFT_SHIFT, {"SHIFT", "SHIFT_LEFT"}}, // Key: Shift left
    {KEY_LEFT_CONTROL, {"CONTROL", "CONTROL_LEFT"}}, // Key: Control left
    {KEY_LEFT_ALT, {"ALT", "ALT_LEFT"}}, // Key: Alt left
    {KEY_LEFT_SUPER, {"META", "META_LEFT"}}, // Key: Super left
    {KEY_RIGHT_SHIFT, {"SHIFT", "SHIFT_RIGHT"}}, // Key: Shift right
    {KEY_RIGHT_CONTROL, {"CONTROL", "CONTROL_RIGHT"}}, // Key: Control right
    {KEY_RIGHT_ALT, {"ALTGRAPH", "ALT_RIGHT"}}, // Key: Alt right
    {KEY_RIGHT_SUPER, {"CONTEXTMENU", "CONTEXT_MENU"}}, // Key: Super right
    {KEY_KB_MENU, {"", ""}}, // Key: KB menu
    // Keypad keys
    {KEY_KP_0, {"0", "NUMPAD_0"}}, // Key: Keypad 0
    {KEY_KP_1, {"1", "NUMPAD_1"}}, // Key: Keypad 1
    {KEY_KP_2, {"2", "NUMPAD_2"}}, // Key: Keypad 2
    {KEY_KP_3, {"3", "NUMPAD_3"}}, // Key: Keypad 3
    {KEY_KP_4, {"4", "NUMPAD_4"}}, // Key: Keypad 4
    {KEY_KP_5, {"5", "NUMPAD_5"}}, // Key: Keypad 5
    {KEY_KP_6, {"6", "NUMPAD_6"}}, // Key: Keypad 6
    {KEY_KP_7, {"7", "NUMPAD_7"}}, // Key: Keypad 7
    {KEY_KP_8, {"8", "NUMPAD_8"}}, // Key: Keypad 8
    {KEY_KP_9, {"9", "NUMPAD_9"}}, // Key: Keypad 9
    {KEY_KP_DECIMAL, {",", "NUMPAD_DECIMAL"}}, // Key: Keypad .
    {KEY_KP_DIVIDE, {"/", "NUMPAD_DIVIDE"}}, // Key: Keypad /
    {KEY_KP_MULTIPLY, {"*", "NUMPAD_MULTIPLY"}}, // Key: Keypad *
    {KEY_KP_SUBTRACT, {"-", "NUMPAD_SUBTRACT"}}, // Key: Keypad -
    {KEY_KP_ADD, {"+", "NUMPAD_ADD"}}, // Key: Keypad +
    {KEY_KP_ENTER, {"ENTER", "NUMPAD_ENTER"}}, // Key: Keypad Enter
    {KEY_KP_EQUAL, {"", ""}}, // Key: Keypad =
    // Android key buttons
    {KEY_BACK, {"", ""}}, // Key: Android back button
    {KEY_MENU, {"", ""}}, // Key: Android menu button
    {KEY_VOLUME_UP, {"", ""}}, // Key: Android volume up button
    {KEY_VOLUME_DOWN, {"", ""}} // Key: Android volume down button
};
