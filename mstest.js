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
end

update = function()
  if keyboard.KEY_A then
    audio.playSound("jingles_sax03", 0.5, 1, 0, 0)
  end
end

draw = function()
  screen.clear()
  
  screen.drawMap("secondmap", 0, 0, 200, 200)
  
  local map = maps["secondmap"]
  screen.drawText(map.get(0,3), -75, 75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(1,3), -25, 75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(2,3), 25, 75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(3,3), 75, 75, 20, "rgb(255,0,0)")
  
  screen.drawText(map.get(0,2), -75, 25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(1,2), -25, 25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(2,2), 25, 25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(3,2), 75, 25, 20, "rgb(255,0,0)")
  
  screen.drawText(map.get(0,1), -75, -25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(1,1), -25, -25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(2,1), 25, -25, 20, "rgb(255,0,0)")
  screen.drawText(map.get(3,1), 75, -25, 20, "rgb(255,0,0)")
  
  screen.drawText(map.get(0,0), -75, -75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(1,0), -25, -75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(2,0), 25, -75, 20, "rgb(255,0,0)")
  screen.drawText(map.get(3,0), 75, -75, 20, "rgb(255,0,0)")
end
end()`;