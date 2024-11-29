cmake_minimum_required(VERSION 3.29)
project(MicroStudioRuntime)

set(CMAKE_CXX_EXTENSIONS ON)

set(RAYLIB_DIR "C:/raylib/raylib-5.0_win32_mingw-w64")
set(QUICKJS_DIR "C:/quickjs")

set(HEADER_FILES
        "${PROJECT_SOURCE_DIR}/3rd_party/nlohmann/json.hpp"
        "${PROJECT_SOURCE_DIR}/include/AssetsManager.h"
        "${PROJECT_SOURCE_DIR}/include/helpers.h"
        "${PROJECT_SOURCE_DIR}/include/JS_API.h"
        "${PROJECT_SOURCE_DIR}/include/MSRuntime.h"
        "${PROJECT_SOURCE_DIR}/include/MSSprite.h"
        "${PROJECT_SOURCE_DIR}/include/MSMap.h"
        "${PROJECT_SOURCE_DIR}/include/MSSound.h"
        "${PROJECT_SOURCE_DIR}/include/MSAudioStream.h"
        "${PROJECT_SOURCE_DIR}/include/MSMusic.h"
)

set(SOURCE_FILES
        "${PROJECT_SOURCE_DIR}/src/main.cpp"
        "${PROJECT_SOURCE_DIR}/src/AssetsManager.cpp"
        "${PROJECT_SOURCE_DIR}/src/MSRuntime.cpp"
)

add_executable(MicroStudioRuntime ${SOURCE_FILES} ${HEADER_FILES})

target_include_directories(MicroStudioRuntime PRIVATE
        "${PROJECT_SOURCE_DIR}/include"
        "${RAYLIB_DIR}/include"
        "${QUICKJS_DIR}/include/quickjs"
        "${PROJECT_SOURCE_DIR}/3rd_party/nlohmann"
)

target_link_directories(MicroStudioRuntime PRIVATE
        "${RAYLIB_DIR}/lib"
        "${QUICKJS_DIR}/lib/quickjs"
)

target_link_libraries(MicroStudioRuntime PRIVATE raylib winmm gdi32 quickjs)