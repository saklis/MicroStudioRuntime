workspace "MicroStudioRuntime"
   configurations { "Debug", "Release" }
   platforms { "x86" }
   location "build"

project "MicroStudioRuntime"
   kind "ConsoleApp"
   language "C++"
   architecture "x86"
   targetdir "bin/%{cfg.buildcfg}"

   includedirs { "include" }
   files { "src/**.cpp", "include/**.h" }

   includedirs { "C:/msys64/mingw32/include/raylib" }
   libdirs { "C:/msys64/mingw32/lib" }
   links { "raylib", "winmm", "gdi32" }

   includedirs { "C:/quickjs/include/quickjs" }
   libdirs { "C:/quickjs/lib/quickjs" }
   links { "quickjs" }

   filter "configurations:Debug"
      defines { "DEBUG" }
      symbols "On"

   filter "configurations:Release"
      defines { "NDEBUG" }
      optimize "On"
