# MicroStudio Native Runtime

MicroStudio Native Runtime executes MicroStudio game (exported as HTML) localy using QuickJS and then outputs result using Raylib.

## Project setup
Project is configured to use CMake and MINGW G++ i686 compiler from MSYS2.

To compile:
1. Install MSYS2
2. Install MINGW 32bit
3. Compile or download Raylib binaries for MINGW.
4. Compile or download binaries for QuickJS. For Windows, you can use https://github.com/mengmo/QuickJS-Windows-Build
5. Install CMake
6. For Windows, install GNU Make for Windows https://gnuwin32.sourceforge.net/packages/make.htm
7. Clone MicroStudioRuntime
8. Update `CMakeLists.txt` and `build.bat` to match your environment
9. Build. For Windows, you can execute `build.bat` for automated build.
10. Run

After you export your project from MicroStudio as HTML, you need to prepare files:
* Put all js files into /microstudio directory.
* Take a look at included game.js to see how to change your index.html file.
* Copy all assets folders into /assets directory

MicroStudio Runtime is in very early stages and only very few features work! To see currently supported API check include/JS_API.h and `js_raylib_funcs` array.
Using any function outside the supported list will:
1) do nothing
2) crash the Runtime
3) Erase your PC from existance

Please visit MicroStudio's official Discord if you want to complain or help me with this thing :)
