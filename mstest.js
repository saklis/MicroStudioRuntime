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
  
  screen.setDrawRotation(40)
  screen.setDrawScale(2,1)
end

update = function()
  if keyboard.UP then y += 2  end
  if keyboard.DOWN then y -= 2 end
  if keyboard.LEFT then x -= 2 end
  if keyboard.RIGHT then x += 2 end
end

draw = function()
  screen.clear()
  
  screen.fillRect(0,0,50,50, "rgb(200,200,200)")
end
end()`;