// --- Inline Script Code from index.html ---
var orientation = 'any';
var aspect = 'free';
var ms_libs = [];
window.skip_service_worker = true;
window.exported_project = true;
window.ms_use_server = false;

globalThis.microScriptCode = `function()
x = -100

init = function()
end

update = function()
  x += 2
end

draw = function()
  screen.clear()
  screen.drawSprite("icon", x, 0, 50, 50)
end
end()`;

window.player = new Player();
