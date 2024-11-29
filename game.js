// --- Inline Script Code from index.html ---
window.orientation = 'any';
window.aspect = 'free';
var ms_libs = [];
window.skip_service_worker = true;
window.exported_project = true;
window.ms_use_server = false;

window.fonts = ["BitCell","Edunline"];
var resources = {
    "images": [{"file": "icon.png", "version": 0, "size": 0, "properties": {}}],
    "assets": [],
    "maps": {},
    "sounds": [],
    "music": []
};

globalThis.microScriptCode = `function()
init = function()
  screen.loadFont("BitCell")
  screen.loadFont("Edunline")
end

update = function()
end

draw = function()
  screen.clear()
  
  if screen.isFontReady("Edunline") then
    screen.setFont("Edunline")
    screen.drawText("Edunline", -20, 0, 10, "#FFFFFF")
    screen.setFont("BitCell")
    screen.drawText("font ready", 35, 0, 10, "#FFFFFF")
  end
end
end()`;