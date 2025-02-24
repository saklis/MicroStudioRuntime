# MicroStudio Native Runtime

MicroStudio Native Runtime executes MicroStudio game (exported as HTML) locally using QuickJS and then outputs result using Raylib.

## Project setup
Project comes with runtime DLLs from [MinGW-w64 - winlibs standalone build](https://github.com/brechtsanders/winlibs_mingw) version 14.2.0 for win32.
If you're using different compiler, you need to use different runtime DLLs.

To compile:
1. For Windows, install GNU Make for Windows https://gnuwin32.sourceforge.net/packages/make.htm
2. Install CMake
3. Clone MicroStudioRuntime
4. Build. You can use build.bat, but you need to update paths in it to point to your compilations directories.

Or use compiled binaries from [Releases](https://github.com/saklis/MicroStudioRuntime/releases/latest/).

Export your project from MicroStudio as HTML. You need to prepare those files:
* Put all js files into /microstudio directory.
* Take a look at included game.js to see how to change your index.html file. Crucially, you need to get `resources` and `globalThis.microScriptCode` assignments correctly.
* Copy all assets folders into /assets directory

MicroStudio Runtime is in very early stages and only very few features work! To see currently supported API check include/JS_API.h and `js_raylib_funcs` array at the bottom of the file.
Using any function outside the supported list will:
1) do nothing
2) crash the Runtime
3) erase your PC from existence

So have fun with that ;)

Please visit MicroStudio's official Discord if you want to complain or help me with this thing :)

3rd Party:
* [Raylib](https://www.raylib.com/)
* [QuickJS](https://bellard.org/quickjs/)
* [QuickJS Windows Build](https://github.com/mengmo/QuickJS-Windows-Build/)
* [Nlohmann JSON](https://github.com/nlohmann/json)
* [SPDLog](https://github.com/gabime/spdlog)