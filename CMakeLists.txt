cmake_minimum_required(VERSION 3.29)
project(MicroStudioRuntime)

# CONFIGURATION SECTION

set(RAYLIB_DIR "C:/raylib/raylib-5.0_win32_mingw-w64")
set(QUICKJS_DIR "C:/quickjs")

set(MSYS_MINGW32_BIN_DIR "C:/msys64/mingw32/bin")
set(MSYS_DLLS
        "${MSYS_MINGW32_BIN_DIR}/LIBSTDC++-6.DLL"
        "${MSYS_MINGW32_BIN_DIR}/LIBGCC_S_DW2-1.DLL"
        "${MSYS_MINGW32_BIN_DIR}/LIBWINPTHREAD-1.DLL"
        "${MSYS_MINGW32_BIN_DIR}/LIBFMT-11.DLL"
        "${MSYS_MINGW32_BIN_DIR}/LIBSPDLOG.DLL"
)

# CONFIGURATION SECTION END

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_EXTENSIONS ON)

find_package(spdlog REQUIRED)

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
        "${PROJECT_SOURCE_DIR}/include/RenderingQueue.h"
)

set(SOURCE_FILES
        "${PROJECT_SOURCE_DIR}/src/main.cpp"
        "${PROJECT_SOURCE_DIR}/src/AssetsManager.cpp"
        "${PROJECT_SOURCE_DIR}/src/MSRuntime.cpp"
        "${PROJECT_SOURCE_DIR}/src/RenderingQueue.cpp"
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

target_link_libraries(MicroStudioRuntime PRIVATE raylib winmm gdi32 quickjs spdlog::spdlog)

foreach(dll_file IN LISTS MSYS_DLLS)
    add_custom_command(TARGET MicroStudioRuntime POST_BUILD
            COMMAND ${CMAKE_COMMAND} -E copy_if_different
            "${dll_file}"
            "$<TARGET_FILE_DIR:MicroStudioRuntime>/"
            VERBATIM
    )
endforeach()