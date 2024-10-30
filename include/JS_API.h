#pragma once

#include "quickjs.h"
#include "MSRuntime.h"

/////////////////////////////////////////////////////////////////////////////////////////
// JS API BEGIN


static JSValue JS_Break(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* text = JS_ToCString(ctx, argv[0]);
    JS_FreeCString(ctx, text);
    return JS_UNDEFINED;
}

static JSValue JS_Clear(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* colorText = JS_ToCString(ctx, argv[0]);

    MSRuntime::Screen_Clear(colorText);

    JS_FreeCString(ctx, colorText);
    return JS_UNDEFINED;
}

static JSValue JS_SetColor(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* colorText = JS_ToCString(ctx, argv[0]);

    MSRuntime::Screen_SetColor(colorText);

    JS_FreeCString(ctx, colorText);
    return JS_UNDEFINED;
}

static JSValue JS_SetAlpha(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    int alpha;
    JS_ToInt32(ctx, &alpha, argv[0]);
    MSRuntime::Screen_SetAlpha(alpha);
    return JS_UNDEFINED;
}

static JSValue JS_SetFont(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* font = JS_ToCString(ctx, argv[0]);

    MSRuntime::Screen_SetFont(font);

    JS_FreeCString(ctx, font);
    return JS_UNDEFINED;
}

static JSValue JS_DrawSprite(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* sprite = JS_ToCString(ctx, argv[0]);
    double x = 0.0f, y = 0.0f, w = 0.0f, h = 0.0f;
    JS_ToFloat64(ctx, &x, argv[1]);
    JS_ToFloat64(ctx, &y, argv[2]);
    JS_ToFloat64(ctx, &w, argv[3]);
    JS_ToFloat64(ctx, &h, argv[4]);

    MSRuntime::Screen_DrawSprite(sprite, static_cast<float>(x), static_cast<float>(y), static_cast<float>(w),
                                 static_cast<float>(h));

    JS_FreeCString(ctx, sprite);
    return JS_UNDEFINED;
}

static JSValue JS_DrawText(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    double x = 0.0f, y = 0.0f, size = 0.0f;

    const char* text = JS_ToCString(ctx, argv[0]);
    JS_ToFloat64(ctx, &x, argv[1]);
    JS_ToFloat64(ctx, &y, argv[2]);
    JS_ToFloat64(ctx, &size, argv[3]);
    const char* colorText = JS_ToCString(ctx, argv[4]);

    MSRuntime::Screen_DrawText(text, static_cast<float>(x), static_cast<float>(y), static_cast<float>(size), colorText);

    JS_FreeCString(ctx, text);
    JS_FreeCString(ctx, colorText);
    return JS_UNDEFINED;
}

static JSValue JS_IsFontReady(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* fontName = JS_ToCString(ctx, argv[0]);

    bool isReady = MSRuntime::Screen_IsFontReady(fontName);

    JS_FreeCString(ctx, fontName);
    return JS_NewInt32(ctx, isReady ? 1 : 0);
}

static JSValue JS_ConsoleInfo(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* text = JS_ToCString(ctx, argv[0]);
    JS_FreeCString(ctx, text);
    return JS_UNDEFINED;
}

static JSValue JS_ConsoleError(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* text = JS_ToCString(ctx, argv[0]);
    JS_FreeCString(ctx, text);
    return JS_UNDEFINED;
}

static JSValue JS_RuntimeInitialized(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    MSRuntime::RuntimeInitialized();
    return JS_UNDEFINED;
}

static const JSCFunctionListEntry js_raylib_funcs[11] = {
    JS_CFUNC_DEF("CBreak", 1, JS_Break),
    JS_CFUNC_DEF("CConsoleInfo", 1, JS_ConsoleInfo),
    JS_CFUNC_DEF("CConsoleError", 1, JS_ConsoleError),

    JS_CFUNC_DEF("CRuntimeInitialized", 0, JS_RuntimeInitialized),

    // screen
    /* screen.clear() */ JS_CFUNC_DEF("CClear", 1, JS_Clear),
    /* screen.setColor() */ JS_CFUNC_DEF("CSetColor", 1, JS_SetColor),
    /* screen.setAlpha() */ JS_CFUNC_DEF("CSetAlpha", 1, JS_SetAlpha),
    /* screen.setFont() */ JS_CFUNC_DEF("CSetFont", 1, JS_SetFont),
    /* screen.drawSprite() */ JS_CFUNC_DEF("CDrawSprite", 5, JS_DrawSprite),
    /* screen.drawText() */ JS_CFUNC_DEF("CDrawText", 5, JS_DrawText),
    /* screen.isFontReady() */ JS_CFUNC_DEF("CIsFontReady", 1, JS_IsFontReady),
};

// JS API END
///////////////////////////////////////////////////////////////////////////////////////
