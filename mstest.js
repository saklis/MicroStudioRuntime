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
    }],
    "assets": [],
    "maps": {
        "secondmap": "{\"width\":4,\"height\":4,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"icon\",\"animicon\"],\"data\":[1,0,0,1,0,2,2,0,0,2,2,0,1,0,0,1]}",
        "testmap": "{\"width\":4,\"height\":4,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"icon\"],\"data\":[1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0]}"
    },
    "sounds": [{
        "file": "jingles_pizzi10.ogg",
        "version": 1,
        "size": 14004,
        "properties": {}
    }, {"file": "jingles_sax03.ogg", "version": 1, "size": 19785, "properties": {}}],
    "music": []
};

globalThis.microScriptCode = `function()
init = function()
  x = 0
  y = 0
end

update = function()
  if keyboard.KEY_W then
    y += 2
  end
  
  if keyboard.KEY_A then
    x -= 2
  end
  
  if keyboard.KEY_S then
    y -= 2
  end
  
  if keyboard.KEY_D then
    x += 2
  end
end

draw = function()
  screen.clear()
  
  screen.drawSprite("icon", x, y, 20, 20)
end
end()`;