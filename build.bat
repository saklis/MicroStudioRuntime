@echo off

REM ----------------------------------------------------------------------------
REM  build.bat
REM
REM  1. Creates a "build" directory if it doesn't already exist.
REM  2. Runs CMake to configure the project with the chosen generator.
REM  3. Builds the project in the specified configuration (Debug by default).
REM ----------------------------------------------------------------------------

echo === Building MicroStudioRuntime with CMake ===

REM Step 1: Create and enter the build directory
if not exist build (
    mkdir build
)
cd build

REM Step 2: Configure the project
cmake -G "MinGW Makefiles" ^
  -DCMAKE_C_COMPILER="C:/cpp/mingw32-winlibs/bin/gcc.exe" ^
  -DCMAKE_CXX_COMPILER="C:/cpp/mingw32-winlibs/bin/g++.exe" ^
  -DCMAKE_BUILD_TYPE=Debug ..

REM Step 3: Build the project
cmake --build . --config Debug

cd ..
echo === Build finished ===

REM Keep the window open if running by double-click
pause
