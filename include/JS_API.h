#pragma once

#include "quickjs.h"
#include "MSRuntime.h"

/////////////////////////////////////////////////////////////////////////////////////////
// JS API BEGIN

// CALLED BY C++
static void JS_UpdateScreenSize(JSContext* ctx, const float screenWidth, const float screenHeight, const char* aspect,
                                const char* orientation) {
    // Retrieve the 'update' function
    JSValue global_obj = JS_GetGlobalObject(ctx);
    JSValue js_update_func = JS_GetPropertyStr(ctx, global_obj, "CUpdateScreenSize");
    JS_FreeValue(ctx, global_obj);

    if (JS_IsFunction(ctx, js_update_func)) {
        JSValue args[4];
        args[0] = JS_NewFloat64(ctx, screenWidth);
        args[1] = JS_NewFloat64(ctx, screenHeight);
        args[2] = JS_NewString(ctx, aspect);
        args[3] = JS_NewString(ctx, orientation);

        JSValue result = JS_Call(ctx, js_update_func, JS_UNDEFINED, 4, args);

        JS_FreeValue(ctx, args[0]);
        JS_FreeValue(ctx, args[1]);
        JS_FreeValue(ctx, args[2]);
        JS_FreeValue(ctx, args[3]);

        if (JS_IsException(result)) {
            const JSValue exception = JS_GetException(ctx);
            const char* error_str = JS_ToCString(ctx, exception);
            JS_FreeCString(ctx, error_str);
            JS_FreeValue(ctx, exception);
        }

        JS_FreeValue(ctx, result);
    }
}

// CALLED BY microengine.js

static JSValue JS_Break(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* text = JS_ToCString(ctx, argv[0]);
    JS_FreeCString(ctx, text);
    return JS_UNDEFINED;
}

static JSValue JS_Exit(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    MSRuntime::Exit();
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
    double alpha;
    JS_ToFloat64(ctx, &alpha, argv[0]);
    MSRuntime::Screen_SetAlpha(static_cast<float>(alpha));
    return JS_UNDEFINED;
}

static JSValue JS_SetFont(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* font = JS_ToCString(ctx, argv[0]);

    MSRuntime::Screen_SetFont(font);

    JS_FreeCString(ctx, font);
    return JS_UNDEFINED;
}

static JSValue JS_SetDrawRotation(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    double rotation;
    JS_ToFloat64(ctx, &rotation, argv[0]);
    MSRuntime::Screen_SetDrawRotation(static_cast<float>(rotation));
    return JS_UNDEFINED;
}

static JSValue JS_SetDrawScale(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    double scaleX, scaleY;
    JS_ToFloat64(ctx, &scaleX, argv[0]);
    JS_ToFloat64(ctx, &scaleY, argv[1]);
    MSRuntime::Screen_SetDrawScale(static_cast<float>(scaleX), static_cast<float>(scaleY));
    return JS_UNDEFINED;
}

static JSValue JS_FillRect(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    double x = 0.0f, y = 0.0f, w = 0.0f, h = 0.0f;
    const char* colorText = JS_ToCString(ctx, argv[4]);
    JS_ToFloat64(ctx, &x, argv[0]);
    JS_ToFloat64(ctx, &y, argv[1]);
    JS_ToFloat64(ctx, &w, argv[2]);
    JS_ToFloat64(ctx, &h, argv[3]);

    MSRuntime::Screen_FillRect(static_cast<float>(x), static_cast<float>(y), static_cast<float>(w),
                               static_cast<float>(h), colorText);

    JS_FreeCString(ctx, colorText);
    return JS_UNDEFINED;
}

static JSValue JS_DrawSprite(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* sprite = JS_ToCString(ctx, argv[0]);
    double x = 0.0f, y = 0.0f, w = 0.0f, h = 0.0f;
    JS_ToFloat64(ctx, &x, argv[1]);
    JS_ToFloat64(ctx, &y, argv[2]);
    JS_ToFloat64(ctx, &w, argv[3]);
    if (!JS_IsUndefined(argv[4])) {
        JS_ToFloat64(ctx, &h, argv[4]);
    } else {
        h = w; // microScript allow for height to be unset, in that case we use width
    }

    MSRuntime::Screen_DrawSprite(sprite, static_cast<float>(x), static_cast<float>(y), static_cast<float>(w),
                                 static_cast<float>(h));

    JS_FreeCString(ctx, sprite);
    return JS_UNDEFINED;
}

static JSValue JS_DrawSpritePart(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* sprite = JS_ToCString(ctx, argv[0]);
    double px = 0.0f, py = 0.0f, pw = 0.0f, ph = 0.0f, x = 0.0f, y = 0.0f, w = 0.0f, h = 0.0f;
    JS_ToFloat64(ctx, &px, argv[1]);
    JS_ToFloat64(ctx, &py, argv[2]);
    JS_ToFloat64(ctx, &pw, argv[3]);
    JS_ToFloat64(ctx, &ph, argv[4]);
    JS_ToFloat64(ctx, &x, argv[5]);
    JS_ToFloat64(ctx, &y, argv[6]);
    JS_ToFloat64(ctx, &w, argv[7]);
    if (!JS_IsUndefined(argv[8])) {
        JS_ToFloat64(ctx, &h, argv[8]);
    } else {
        h = w; // microScript allow for height to be unset, in that case we use width
    }

    MSRuntime::Screen_DrawSpritePart(sprite, static_cast<float>(px), static_cast<float>(py), static_cast<float>(pw),
                                     static_cast<float>(ph),
                                     static_cast<float>(x), static_cast<float>(y), static_cast<float>(w),
                                     static_cast<float>(h));

    JS_FreeCString(ctx, sprite);
    return JS_UNDEFINED;
}

static JSValue JS_DrawMap(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* name = JS_ToCString(ctx, argv[0]);
    double x = 0.0f, y = 0.0f, w = 0.0f, h = 0.0f;
    JS_ToFloat64(ctx, &x, argv[1]);
    JS_ToFloat64(ctx, &y, argv[2]);
    JS_ToFloat64(ctx, &w, argv[3]);
    if (!JS_IsUndefined(argv[4])) {
        JS_ToFloat64(ctx, &h, argv[4]);
    } else {
        h = w; // microScript allow for height to be unset, in that case we use width
    }

    MSRuntime::Screen_DrawMap(name, static_cast<float>(x), static_cast<float>(y), static_cast<float>(w),
                              static_cast<float>(h));

    JS_FreeCString(ctx, name);
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

static JSValue JS_PlaySound(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* name = JS_ToCString(ctx, argv[0]);
    int uniqueId = 0 ;
    double volume = 1.0f, pitch = 1.0f, pan = 0.0f;
    JS_ToInt32(ctx, &uniqueId, argv[1]);
    if (!JS_IsUndefined(argv[2])) JS_ToFloat64(ctx, &volume, argv[2]);
    if (!JS_IsUndefined(argv[3])) JS_ToFloat64(ctx, &pitch, argv[3]);
    if (!JS_IsUndefined(argv[4])) JS_ToFloat64(ctx, &pan, argv[4]);
    bool loop = JS_ToBool(ctx, argv[5]);

    MSRuntime::Audio_PlaySound(name, uniqueId, static_cast<float>(volume), static_cast<float>(pitch), static_cast<float>(pan), loop);

    JS_FreeCString(ctx, name);
    return JS_UNDEFINED;
}

static JSValue JS_Sound_SetVolume(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* soundName = JS_ToCString(ctx, argv[0]);
    int uniqueId = 0;
    double volume;
    JS_ToInt32(ctx, &uniqueId, argv[1]);
    JS_ToFloat64(ctx, &volume, argv[2]);
    MSRuntime::Audio_Sound_SetVolume(soundName, uniqueId, static_cast<float>(volume));
    JS_FreeCString(ctx, soundName);
    return JS_UNDEFINED;
}

static JSValue JS_Sound_SetPitch(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* soundName = JS_ToCString(ctx, argv[0]);
    int uniqueId = 0;
    double pitch;
    JS_ToInt32(ctx, &uniqueId, argv[1]);
    JS_ToFloat64(ctx, &pitch, argv[2]);
    MSRuntime::Audio_Sound_SetPitch(soundName, uniqueId, static_cast<float>(pitch));
    JS_FreeCString(ctx, soundName);
    return JS_UNDEFINED;
}

static JSValue JS_Sound_SetPan(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* soundName = JS_ToCString(ctx, argv[0]);
    int uniqueId = 0;
    double pan;
    JS_ToInt32(ctx, &uniqueId, argv[1]);
    JS_ToFloat64(ctx, &pan, argv[2]);
    MSRuntime::Audio_Sound_SetPan(soundName, uniqueId, static_cast<float>(pan));
    JS_FreeCString(ctx, soundName);
    return JS_UNDEFINED;
}

static JSValue JS_Sound_Stop(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* soundName = JS_ToCString(ctx, argv[0]);
    int uniqueId = 0;
    JS_ToInt32(ctx, &uniqueId, argv[1]);
    MSRuntime::Audio_Sound_Stop(soundName, uniqueId);
    JS_FreeCString(ctx, soundName);
    return JS_UNDEFINED;
}

static JSValue JS_PlayMusic(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* name = JS_ToCString(ctx, argv[0]);
    double volume = 1.0f;
    if (!JS_IsUndefined(argv[1])) JS_ToFloat64(ctx, &volume, argv[1]);

    bool loop = false;
    if (!JS_IsUndefined(argv[2])) loop = JS_ToBool(ctx, argv[2]);

    MSRuntime::Audio_PlayMusic(name, static_cast<float>(volume), loop);

    JS_FreeCString(ctx, name);
    return JS_UNDEFINED;
}

static JSValue JS_Music_Play(JSContext* ctx, JSValue this_val, int argc, JSValue* argv) {
    const char* name = JS_ToCString(ctx, argv[0]);

    MSRuntime::Audio_Music_Play(name);

    JS_FreeCString(ctx, name);
    return JS_UNDEFINED;
}

static JSValue JS_Music_Stop(JSContext* ctx, JSValue this_val, int argc, JSValue* argv){
    const char* name = JS_ToCString(ctx, argv[0]);

    MSRuntime::Audio_Music_Stop(name);

    JS_FreeCString(ctx, name);
    return JS_UNDEFINED;
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

static JSValue JS_GetImage(JSContext* ctx, JSValueConst this_val, int argc, JSValueConst* argv) {
    const char* imageFileName = JS_ToCString(ctx, argv[0]);

    // modified 'FileName' field without extension
    std::string imageIndex = imageFileName;
    imageIndex.resize(imageIndex.length() - 4);

    JS_FreeCString(ctx, imageFileName);

    const MSSprite* sprite = MSRuntime::GetImage(imageIndex);
    if (sprite == nullptr) {
        return JS_ThrowReferenceError(ctx, ("Requested file '" + imageIndex + "' not found").c_str());
    }

    JSValue globalObj = JS_GetGlobalObject(ctx);
    JSValue imageConstructor = JS_GetPropertyStr(ctx, globalObj, "Image");
    JS_FreeValue(ctx, globalObj);

    if (JS_IsUndefined(imageConstructor)) {
        return JS_ThrowReferenceError(ctx, "Image constructor not found");
    }

    JSValue args[2];
    args[0] = JS_NewInt32(ctx, sprite->Texture.width);
    args[1] = JS_NewInt32(ctx, sprite->Texture.height);

    JSValue image = JS_CallConstructor(ctx, imageConstructor, 2, args);

    JS_FreeValue(ctx, imageConstructor);
    JS_FreeValue(ctx, args[0]);
    JS_FreeValue(ctx, args[1]);

    return image; // if image is an exception, it'll get propagated to the caller
}

static const JSCFunctionListEntry js_raylib_funcs[26] = {
    JS_CFUNC_DEF("CBreak", 1, JS_Break),
    JS_CFUNC_DEF("CConsoleInfo", 1, JS_ConsoleInfo),
    JS_CFUNC_DEF("CConsoleError", 1, JS_ConsoleError),

    JS_CFUNC_DEF("CRuntimeInitialized", 0, JS_RuntimeInitialized),
    JS_CFUNC_DEF("CGetImage", 1, JS_GetImage),

    // system
    JS_CFUNC_DEF("CExit", 0, JS_Exit),

    // screen
    JS_CFUNC_DEF("CClear", 1, JS_Clear),
    JS_CFUNC_DEF("CSetColor", 1, JS_SetColor),
    JS_CFUNC_DEF("CSetAlpha", 1, JS_SetAlpha),
    JS_CFUNC_DEF("CSetFont", 1, JS_SetFont),
    JS_CFUNC_DEF("CSetDrawRotation", 1, JS_SetDrawRotation),
    JS_CFUNC_DEF("CSetDrawScale", 2, JS_SetDrawScale),
    JS_CFUNC_DEF("CFillRect", 5, JS_FillRect),
    JS_CFUNC_DEF("CDrawSprite", 5, JS_DrawSprite),
    JS_CFUNC_DEF("CDrawSpritePart", 9, JS_DrawSpritePart),
    JS_CFUNC_DEF("CDrawMap", 5, JS_DrawMap),
    JS_CFUNC_DEF("CDrawText", 5, JS_DrawText),
    JS_CFUNC_DEF("CIsFontReady", 1, JS_IsFontReady),

    //audio
    JS_CFUNC_DEF("CPlaySound", 6, JS_PlaySound),
    JS_CFUNC_DEF("CSound_SetVolume", 3, JS_Sound_SetVolume),
    JS_CFUNC_DEF("CSound_SetPitch", 3, JS_Sound_SetPitch),
    JS_CFUNC_DEF("CSound_SetPan", 3, JS_Sound_SetPan),
    JS_CFUNC_DEF("CSound_Stop", 3, JS_Sound_Stop),
    JS_CFUNC_DEF("CPlayMusic", 3, JS_PlayMusic),
    JS_CFUNC_DEF("CMusic_Play", 1, JS_Music_Play),
    JS_CFUNC_DEF("CMusic_Stop", 1, JS_Music_Stop),
};

// JS API END
///////////////////////////////////////////////////////////////////////////////////////
