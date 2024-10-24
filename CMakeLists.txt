cmake_minimum_required(VERSION 3.29)
project(MicroStudioRuntime)

set(CMAKE_CXX_EXTENSIONS ON)

set(RAYLIB_DIR "C:/raylib/raylib-5.0_win32_mingw-w64")
set(QUICKJS_DIR "C:/quickjs")

add_executable(MicroStudioRuntime src/main.cpp src/AssetsManager.cpp src/MSRuntime.cpp)

target_include_directories(MicroStudioRuntime PRIVATE
        "${PROJECT_SOURCE_DIR}/include"
        "${RAYLIB_DIR}/include"
        "${QUICKJS_DIR}/include/quickjs"
)

target_link_directories(MicroStudioRuntime PRIVATE
        "${RAYLIB_DIR}/lib"
        "${QUICKJS_DIR}/lib/quickjs"
)

target_link_libraries(MicroStudioRuntime PRIVATE raylib winmm gdi32 quickjs)