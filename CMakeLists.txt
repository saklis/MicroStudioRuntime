cmake_minimum_required(VERSION 3.29)
project(MicroStudioRuntime)

# CONFIGURATION SECTION

set(CMAKE_VERBOSE_MAKEFILE ON)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_EXTENSIONS ON)

set(BUILD_SHARED_LIBS ON)

###############################################################################
# 3-rd PARTY
###############################################################################

# RAYLIB
option(BUILD_SHARED "Build raylib as a shared library" ON)
add_subdirectory(3rd_party/raylib)
set_target_properties(raylib PROPERTIES BUILD_SHARED_LIBS ON)

# SPDLOG
option(SPDLOG_BUILD_SHARED "Build spdlog as a shared library" ON)
add_subdirectory(3rd_party/spdlog)
set_target_properties(spdlog PROPERTIES BUILD_SHARED_LIBS ON)

# NLOHMANN JSON
# header only

# QUICKJS
add_library(quickjs SHARED IMPORTED)
set_property(TARGET quickjs PROPERTY IMPORTED_LOCATION "${PROJECT_SOURCE_DIR}/3rd_party/quickjs/win32/lib/quickjs/libquickjs.dll")
set_property(TARGET quickjs PROPERTY IMPORTED_IMPLIB "${PROJECT_SOURCE_DIR}/3rd_party/quickjs/win32/lib/quickjs/libquickjs.a")

# MINGW32 runtime DLLs
# Copied to output on POST_BUILD

###############################################################################
# MICROSTUDIO RUNTIME
###############################################################################

# source
file(GLOB_RECURSE MSR_HEADER_FILES "${PROJECT_SOURCE_DIR}/include/*.h")
file(GLOB_RECURSE MSR_SOURCE_FILES "${PROJECT_SOURCE_DIR}/src/*.cpp")

# executable
add_executable(MicroStudioRuntime
        ${MSR_SOURCE_FILES}
        ${MSR_HEADER_FILES}
)
target_include_directories(MicroStudioRuntime PRIVATE
        "${PROJECT_SOURCE_DIR}/include"
        "${PROJECT_SOURCE_DIR}/3rd_party/raylib/src"
        "${PROJECT_SOURCE_DIR}/3rd_party/spdlog/include"
        "${PROJECT_SOURCE_DIR}/3rd_party/nlohmann_json/include"
        "${PROJECT_SOURCE_DIR}/3rd_party/quickjs/win32/include"
)
target_link_directories(MicroStudioRuntime PRIVATE
        "${PROJECT_SOURCE_DIR}/3rd_party/raylib/lib"
        "${PROJECT_SOURCE_DIR}/3rd_party/quickjs/win32/lib"
)
target_link_libraries(MicroStudioRuntime PRIVATE
        raylib
        spdlog
        quickjs
)

# copy all DLLs to output
add_custom_command(TARGET MicroStudioRuntime POST_BUILD
        # Copy the automatically built raylib.dll
        COMMAND ${CMAKE_COMMAND} -E copy
        "$<TARGET_FILE:raylib>"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"

        # Copy the automatically built spdlog.dll
        COMMAND ${CMAKE_COMMAND} -E copy
        "$<TARGET_FILE:spdlog>"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"

        # Copy prebuilt quickjs.dll
        COMMAND ${CMAKE_COMMAND} -E copy
        "${PROJECT_SOURCE_DIR}/3rd_party/quickjs/win32/lib/quickjs/libquickjs.dll"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"

        # Copy the MinGW runtime DLLs
        COMMAND ${CMAKE_COMMAND} -E copy
        "${CMAKE_SOURCE_DIR}/3rd_party/mingw32-winlibs/LIBSTDC++-6.DLL"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"
        COMMAND ${CMAKE_COMMAND} -E copy
        "${CMAKE_SOURCE_DIR}/3rd_party/mingw32-winlibs/LIBGCC_S_DW2-1.DLL"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"
        COMMAND ${CMAKE_COMMAND} -E copy
        "${CMAKE_SOURCE_DIR}/3rd_party/mingw32-winlibs/LIBWINPTHREAD-1.DLL"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"
        COMMAND ${CMAKE_COMMAND} -E copy
        "${CMAKE_SOURCE_DIR}/3rd_party/mingw32-winlibs/LIBFMT.DLL"
        "$<TARGET_FILE_DIR:MicroStudioRuntime>"

        COMMENT "Copying required DLLs to output directory"
)