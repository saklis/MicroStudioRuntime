// --- Inline Script Code from index.html ---
window.orientation = 'any';
window.aspect = 'free';
var ms_libs = [];
window.skip_service_worker = true;
window.exported_project = true;
window.ms_use_server = false;
var resources = {
    "images": [{
        "file": "animicon.png",
        "version": 8,
        "size": 1133,
        "properties": {"frames": 4, "fps": 5}
    }, {"file": "icon.png", "version": 0, "size": 0, "properties": {}}, {
        "file": "manyicon.png",
        "version": 18,
        "size": 521,
        "properties": {"frames": 1, "fps": 5}
    }], "assets": [], "maps": {}, "sounds": [], "music": []
};

globalThis.microScriptCode = `function()
init = function()
  x = 0
  y = 0
end

update = function()
  if keyboard.UP then y += 2  end
  if keyboard.DOWN then y -= 2 end
  if keyboard.LEFT then x -= 2 end
  if keyboard.RIGHT then x += 2 end
end

draw = function()
  screen.clear()
  //screen.setColor( "rgba(255,0,0,1)" )
  //screen.setAlpha(50)
  
  //screen.drawSprite("animicon", x, y, 200, 200)
  screen.drawSpritePart("manyicon", 16, 16, 32, 32, x, y, 200)
  
  screen.setFont("BitCell")
  if screen.isFontReady("BitCell") then
    //screen.drawText("Font BitCell found!", 0, 0, 50, "#FFFFFF")
    screen.drawText("screen width: " + screen.width, 0, 10, 20, "#FFFFFF")
    screen.drawText("screen height: " + screen.height, 0, -10, 20, "#FFFFFF")
  end
end
end()`;