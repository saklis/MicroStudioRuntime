// --- Inline Script Code from index.html ---
var orientation = 'any';
var aspect = 'free';
var ms_libs = [];
window.skip_service_worker = true;
window.exported_project = true;
window.ms_use_server = false;

globalThis.microScriptCode = `function()
init = function()
  x = 0
  y = 0
end

update = function()
  if keyboard.W then y += 2  end
  if keyboard.S then y -= 2 end
  if keyboard.A then x -= 2 end
  if keyboard.D then x += 2 end
end

draw = function()
  screen.clear()
  screen.drawSprite("icon", x, y, 50, 50)
end
end()`;

window.player = new Player();
