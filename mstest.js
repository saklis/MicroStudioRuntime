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
  if keyboard.UP then y += 2  end
  if keyboard.DOWN then y -= 2 end
  if keyboard.LEFT then x -= 2 end
  if keyboard.RIGHT then x += 2 end
end

draw = function()
  screen.clear()
  screen.setColor( "rgba(255,255,255,0.5)" )
  screen.drawSprite("icon", x, y, 200, 200)
end
end()`;

window.player = new Player();
