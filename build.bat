@echo off

REM Set the compiler paths
set CC=C:/msys64/mingw32/bin/gcc.exe
set CXX=C:/msys64/mingw32/bin/g++.exe

REM Remove the existing build directory for a clean build
if exist build (
    rmdir /s /q build
)
mkdir build
if exist MicroStudioRuntime.exe (
    del MicroStudioRuntime.exe
)

REM Navigate to the build directory
cd build

REM Run CMake to configure the project
cmake -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release ..
if %errorlevel% neq 0 (
    echo CMake configuration failed.
    exit /b %errorlevel%
)

REM Build the project using mingw32-make with parallel jobs
mingw32-make -j %NUMBER_OF_PROCESSORS%
if %errorlevel% neq 0 (
    echo Build failed.
    exit /b %errorlevel%
)

REM Return to the root directory
cd ..

REM Move the resulting executable to the project's root folder
if exist build\MicroStudioRuntime.exe (
    move /Y build\MicroStudioRuntime.exe .
)

echo Build completed successfully.
