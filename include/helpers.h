#pragma once

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h> // For fmodf and fabsf

#include "raylib.h"

// Generated with ChatGPT. Can't be bothered to check all those ifs :D
int ParseColor(const char* colorStr, Color* color)
{
    if (color == NULL || colorStr == NULL)
        return -1; // Invalid arguments

    // Initialize color to default value
    color->r = 0;
    color->g = 0;
    color->b = 0;
    color->a = 255;

    // Skip leading whitespace
    while (isspace(*colorStr)) colorStr++;

    if (*colorStr == '#')
    {
        // Hex format
        colorStr++; // Skip '#'
        int len = strlen(colorStr);

        // Validate hex digits
        for (int i = 0; i < len; i++)
        {
            if (!isxdigit(colorStr[i]))
                return -1; // Invalid hex digit
        }

        if (len == 6) // "RRGGBB"
        {
            // Extract RR, GG, BB
            char rr[3] = { colorStr[0], colorStr[1], '\0' };
            char gg[3] = { colorStr[2], colorStr[3], '\0' };
            char bb[3] = { colorStr[4], colorStr[5], '\0' };
            // Convert hex to int
            color->r = (unsigned char)strtol(rr, NULL, 16);
            color->g = (unsigned char)strtol(gg, NULL, 16);
            color->b = (unsigned char)strtol(bb, NULL, 16);
        }
        else if (len == 3) // "RGB"
        {
            // Duplicate each digit
            char rr[3] = { colorStr[0], colorStr[0], '\0' };
            char gg[3] = { colorStr[1], colorStr[1], '\0' };
            char bb[3] = { colorStr[2], colorStr[2], '\0' };
            // Convert hex to int
            color->r = (unsigned char)strtol(rr, NULL, 16);
            color->g = (unsigned char)strtol(gg, NULL, 16);
            color->b = (unsigned char)strtol(bb, NULL, 16);
        }
        else
        {
            // Invalid hex color format
            return -1;
        }
    }
    else if (strncasecmp(colorStr, "rgb(", 4) == 0)
    {
        // RGB format
        const char* ptr = colorStr + 4; // Skip "rgb("
        char* endPtr;

        // Extract red value
        int r = (int)strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1; // Parsing failed
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract green value
        int g = (int)strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract blue value
        int b = (int)strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;

        // Check for closing parenthesis
        while (isspace(*endPtr)) endPtr++;
        if (*endPtr != ')') return -1;

        // Range checking
        if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255)
            return -1; // Invalid RGB value

        // Assign values to the Color struct
        color->r = (unsigned char)r;
        color->g = (unsigned char)g;
        color->b = (unsigned char)b;
    }
    else if (strncasecmp(colorStr, "rgba(", 5) == 0)
    {
        // RGBA format with alpha value in 0-1 range
        const char* ptr = colorStr + 5; // Skip "rgba("
        char* endPtr;

        // Extract red value
        int r = (int)strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1; // Parsing failed
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract green value
        int g = (int)strtol(ptr, &endPtr, 10);
        if (ptr == endPtr) return -1;
        ptr = endPtr;
        while (*ptr && (*ptr == ',' || isspace(*ptr))) ptr++;

        // Extract blue value
        int b = (int)strtol(ptr, &endPtr, 10);
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
        color->r = (unsigned char)r;
        color->g = (unsigned char)g;
        color->b = (unsigned char)b;
        color->a = (unsigned char)(a * 255.0f + 0.5f); // Convert alpha from 0.0-1.0 to 0-255
    }
    else if (strncasecmp(colorStr, "hsl(", 4) == 0)
    {
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

        if (h_prime >= 0.0f && h_prime < 1.0f)
        {
            r1 = c; g1 = x; b1 = 0.0f;
        }
        else if (h_prime >= 1.0f && h_prime < 2.0f)
        {
            r1 = x; g1 = c; b1 = 0.0f;
        }
        else if (h_prime >= 2.0f && h_prime < 3.0f)
        {
            r1 = 0.0f; g1 = c; b1 = x;
        }
        else if (h_prime >= 3.0f && h_prime < 4.0f)
        {
            r1 = 0.0f; g1 = x; b1 = c;
        }
        else if (h_prime >= 4.0f && h_prime < 5.0f)
        {
            r1 = x; g1 = 0.0f; b1 = c;
        }
        else // h_prime >=5.0f && h_prime <6.0f
        {
            r1 = c; g1 = 0.0f; b1 = x;
        }

        // Convert to 0-255 RGB values
        color->r = (unsigned char)((r1 + m) * 255.0f + 0.5f);
        color->g = (unsigned char)((g1 + m) * 255.0f + 0.5f);
        color->b = (unsigned char)((b1 + m) * 255.0f + 0.5f);
        color->a = 255;
    }
    else if (strncasecmp(colorStr, "hsla(", 5) == 0)
    {
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

        if (h_prime >= 0.0f && h_prime < 1.0f)
        {
            r1 = c; g1 = x; b1 = 0.0f;
        }
        else if (h_prime >= 1.0f && h_prime < 2.0f)
        {
            r1 = x; g1 = c; b1 = 0.0f;
        }
        else if (h_prime >= 2.0f && h_prime < 3.0f)
        {
            r1 = 0.0f; g1 = c; b1 = x;
        }
        else if (h_prime >= 3.0f && h_prime < 4.0f)
        {
            r1 = 0.0f; g1 = x; b1 = c;
        }
        else if (h_prime >= 4.0f && h_prime < 5.0f)
        {
            r1 = x; g1 = 0.0f; b1 = c;
        }
        else // h_prime >=5.0f && h_prime <6.0f
        {
            r1 = c; g1 = 0.0f; b1 = x;
        }

        // Convert to 0-255 RGB values
        color->r = (unsigned char)((r1 + m) * 255.0f + 0.5f);
        color->g = (unsigned char)((g1 + m) * 255.0f + 0.5f);
        color->b = (unsigned char)((b1 + m) * 255.0f + 0.5f);
        color->a = (unsigned char)(a * 255.0f + 0.5f); // Alpha from 0.0-1.0 to 0-255
    }
    else
    {
        // Invalid color format
        return -1;
    }

    return 0; // Success
}
