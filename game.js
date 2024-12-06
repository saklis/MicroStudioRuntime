// --- Inline Script Code from index.html ---
var orientation = 'landscape' ;
var aspect = '>16x9' ;
var graphics = "M1";
var ms_libs = ["matterjs"] ;
window.skip_service_worker = true;
window.exported_project = true;
window.ms_use_server = false ;

// deprecated extra global variables?
window.orientation = orientation;
window.aspect = aspect;
window.ms_libs = ms_libs;

window.fonts = ["BitCell","Edunline","EnterCommand","Pixellari","Pixolde","PressStart2P","RetroGaming","Romulus"];
var resources = {
    "images": [{
        "file": "assets.png",
        "version": 4,
        "size": 31596,
        "properties": {"frames": 1, "fps": 5}
    }, {"file": "bunker.png", "version": 8, "size": 224, "properties": {"frames": 1, "fps": 5}}, {
        "file": "cursor.png",
        "version": 18,
        "size": 3696,
        "properties": {"frames": 7, "fps": 6}
    }, {
        "file": "damage_01.png",
        "version": 18,
        "size": 176,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "damage_02.png",
        "version": 15,
        "size": 218,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "dpad.png",
        "version": 1,
        "size": 2155,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "enemy_explo.png",
        "version": 4,
        "size": 1455395,
        "properties": {"frames": 64, "fps": 30}
    }, {
        "file": "enemystart.png",
        "version": 10,
        "size": 128,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "fire_icon.png",
        "version": 1,
        "size": 774,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "fire_icon2.png",
        "version": 1,
        "size": 2031,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "firework.png",
        "version": 4,
        "size": 791281,
        "properties": {"frames": 30, "fps": 29}
    }, {
        "file": "gamepad_icon.png",
        "version": 1,
        "size": 2295,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "goalstar.png",
        "version": 28,
        "size": 392,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "grenade.png",
        "version": 1,
        "size": 18463,
        "properties": {"frames": 24, "fps": 25}
    }, {
        "file": "gun_a_01.png",
        "version": 3,
        "size": 1764,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_02.png",
        "version": 2,
        "size": 1608,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_03.png",
        "version": 2,
        "size": 1353,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_04.png",
        "version": 2,
        "size": 1607,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_05.png",
        "version": 2,
        "size": 1383,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_06.png",
        "version": 2,
        "size": 1501,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_07.png",
        "version": 2,
        "size": 1775,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_a_08.png",
        "version": 2,
        "size": 1700,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_01.png",
        "version": 2,
        "size": 1782,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_02.png",
        "version": 2,
        "size": 1613,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_03.png",
        "version": 2,
        "size": 1363,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_04.png",
        "version": 2,
        "size": 1588,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_05.png",
        "version": 2,
        "size": 1430,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_06.png",
        "version": 2,
        "size": 1498,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_07.png",
        "version": 2,
        "size": 1804,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_c_08.png",
        "version": 2,
        "size": 1729,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_01.png",
        "version": 2,
        "size": 1764,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_02.png",
        "version": 2,
        "size": 1621,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_03.png",
        "version": 2,
        "size": 1364,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_04.png",
        "version": 2,
        "size": 1592,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_05.png",
        "version": 2,
        "size": 1417,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_06.png",
        "version": 2,
        "size": 1501,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_07.png",
        "version": 2,
        "size": 1767,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "gun_d_08.png",
        "version": 2,
        "size": 1709,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "heart.png",
        "version": 9,
        "size": 121,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "heavy_shell.png",
        "version": 2,
        "size": 808,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_01.png",
        "version": 1,
        "size": 3377,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_02.png",
        "version": 2,
        "size": 4449,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_03.png",
        "version": 2,
        "size": 3287,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_04.png",
        "version": 2,
        "size": 2610,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_05.png",
        "version": 2,
        "size": 3367,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_06.png",
        "version": 2,
        "size": 3945,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_07.png",
        "version": 2,
        "size": 2667,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_a_08.png",
        "version": 2,
        "size": 2425,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_01.png",
        "version": 3,
        "size": 3371,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_02.png",
        "version": 2,
        "size": 4474,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_03.png",
        "version": 2,
        "size": 3252,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_04.png",
        "version": 2,
        "size": 2621,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_05.png",
        "version": 2,
        "size": 3372,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_06.png",
        "version": 2,
        "size": 3874,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_07.png",
        "version": 2,
        "size": 2680,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_c_08.png",
        "version": 2,
        "size": 2482,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_01.png",
        "version": 2,
        "size": 3401,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_02.png",
        "version": 2,
        "size": 4444,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_03.png",
        "version": 2,
        "size": 3239,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_04.png",
        "version": 2,
        "size": 2603,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_05.png",
        "version": 2,
        "size": 3397,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_06.png",
        "version": 2,
        "size": 3903,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_07.png",
        "version": 2,
        "size": 2675,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "hull_d_08.png",
        "version": 2,
        "size": 2448,
        "properties": {"frames": 1, "fps": 5}
    }, {"file": "icon.png", "version": 2, "size": 71226, "properties": {"frames": 1, "fps": 5}}, {
        "file": "icon256.png",
        "version": 1,
        "size": 71226,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "keyboard_icon.png",
        "version": 1,
        "size": 1896,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "light_shell.png",
        "version": 1,
        "size": 626,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "map_explo.png",
        "version": 3,
        "size": 957371,
        "properties": {"frames": 64, "fps": 60}
    }, {
        "file": "menu_icon.png",
        "version": 1,
        "size": 489,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "muzzle_explo.png",
        "version": 2,
        "size": 1048742,
        "properties": {"frames": 64, "fps": 60}
    }, {"file": "ocean.png", "version": 5, "size": 5063, "properties": {"frames": 16, "fps": 9}}, {
        "file": "plasma.png",
        "version": 2,
        "size": 390,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "player1start.png",
        "version": 51,
        "size": 136,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "player2start.png",
        "version": 1,
        "size": 180,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "poof.png",
        "version": 9,
        "size": 360492,
        "properties": {"frames": 30, "fps": 25}
    }, {"file": "poster.png", "version": 1, "size": 416652, "properties": {}}, {
        "file": "projectile_explo.png",
        "version": 3,
        "size": 956043,
        "properties": {"frames": 64, "fps": 60}
    }, {
        "file": "tank_icon.png",
        "version": 1,
        "size": 121,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "targetexplosion.png",
        "version": 5,
        "size": 1192490,
        "properties": {"frames": 64, "fps": 30}
    }, {
        "file": "targetpoint.png",
        "version": 1,
        "size": 127,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "touchscreen_icon.png",
        "version": 4,
        "size": 1520,
        "properties": {"frames": 1, "fps": 5}
    }, {
        "file": "track_01.png",
        "version": 5,
        "size": 1911,
        "properties": {"frames": 2, "fps": 10}
    }, {
        "file": "track_02.png",
        "version": 4,
        "size": 2645,
        "properties": {"frames": 2, "fps": 10}
    }, {
        "file": "track_03.png",
        "version": 5,
        "size": 2063,
        "properties": {"frames": 2, "fps": 10}
    }, {
        "file": "track_04.png",
        "version": 4,
        "size": 1834,
        "properties": {"frames": 2, "fps": 10}
    }, {"file": "upgrade.png", "version": 36, "size": 680, "properties": {"frames": 4, "fps": 5}}, {
        "file": "vines.png",
        "version": 1,
        "size": 427,
        "properties": {"frames": 1, "fps": 5}
    }, {"file": "wall.png", "version": 45, "size": 223, "properties": {"frames": 1, "fps": 5}}],
    "assets": [],
    "maps": {
        "bg_intermission": "{\"width\":32,\"height\":20,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"wall\"],\"data\":[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]}",
        "bg_mainmenu": "{\"width\":32,\"height\":20,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:7,3\",\"assets:8,3\",\"assets:2,3\",\"assets:3,3\",\"assets:4,3\",\"wall\",\"assets:7,2\",\"assets:8,2\",\"assets:2,2\",\"assets:3,2\",\"assets:4,2\",\"assets:6,3\",\"vines\",\"assets:11,9\",\"assets:5,23\",\"assets:6,23\",\"assets:7,23\",\"assets:8,23\",\"assets:4,23\",\"assets:5,22\",\"assets:6,22\",\"assets:7,22\",\"assets:8,22\",\"assets:4,22\",\"assets:5,21\",\"assets:6,21\",\"assets:7,21\",\"assets:8,21\",\"assets:4,21\",\"assets:5,20\",\"assets:6,20\",\"assets:7,20\",\"assets:8,20\",\"assets:4,20\",\"assets:5,19\",\"assets:6,19\",\"assets:7,19\",\"assets:8,19\"],\"data\":[1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,4,5,1,2,7,8,9,10,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,9,10,11,7,8,0,0,0,0,4,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,4,0,0,0,0,12,12,12,12,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,12,12,12,12,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,12,12,12,12,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,12,12,12,12,13,13,13,13,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,13,13,13,13,13,13,13,13,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,13,13,13,13,14,14,14,14,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,14,14,14,14,15,16,17,18,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,19,15,16,17,20,21,22,23,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,24,20,21,22,25,26,27,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,29,25,26,27,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,30,31,32,35,36,37,38,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,36,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,12,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,1,2,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,1,2,7,8,0,12,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,12,0,7,8]}",
        "bg_pause": "{\"width\":32,\"height\":20,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"wall\"],\"data\":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}",
        "level_01": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"player1start\",\"targetpoint\",\"player2start\",\"assets:6,3\",\"enemystart\"],\"data\":[0,0,0,0,0,0,1,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,4,4,4,0,4,4,4,4,4,4,4,4,4,4,0,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,0,4,0,4,4,4,4,4,4,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,0,4,4,4,4,4,4,4,4,0,4,4,4,4,4,5,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,5]}",
        "level_02": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:4,16\",\"assets:5,16\",\"player1start\",\"targetpoint\",\"player2start\",\"assets:1,16\",\"assets:2,16\",\"assets:4,15\",\"assets:2,15\",\"assets:12,9\",\"assets:13,9\",\"assets:12,8\",\"assets:13,8\",\"assets:3,3\",\"assets:4,4\",\"assets:1,18\",\"assets:3,4\",\"assets:7,23\",\"assets:1,12\",\"assets:5,2\",\"assets:2,0\",\"assets:3,0\",\"assets:4,0\",\"assets:2,12\",\"assets:7,22\",\"assets:8,22\",\"assets:1,2\",\"assets:4,20\",\"assets:8,0\",\"assets:3,15\",\"assets:7,19\",\"assets:7,3\",\"assets:8,3\",\"assets:6,3\",\"assets:7,2\",\"assets:8,2\",\"enemystart\"],\"data\":[1,2,0,0,0,0,3,0,0,4,0,0,5,0,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,13,14,15,0,16,17,17,15,0,10,11,18,0,0,19,20,0,0,0,21,22,22,23,0,21,24,14,20,0,12,13,25,26,0,27,20,0,0,0,0,0,0,0,0,0,28,22,2,0,6,29,30,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,33,0,34,34,34,0,32,33,32,33,32,33,0,34,34,34,0,32,33,35,36,0,0,34,0,0,35,36,35,36,35,36,0,0,34,0,0,35,36,0,0,0,0,34,0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,37,0,0,0,34,0,0,0,0,37,0,0,0,0,0,34,0,0,0,37]}",
        "level_03": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"player1start\",\"targetpoint\",\"player2start\",\"assets:6,3\",\"assets:5,23\",\"assets:6,23\",\"assets:7,23\",\"assets:4,22\",\"assets:5,22\",\"assets:6,22\",\"assets:7,22\",\"assets:8,22\",\"assets:4,21\",\"assets:5,21\",\"assets:6,21\",\"assets:7,21\",\"assets:8,21\",\"assets:4,20\",\"assets:5,20\",\"assets:6,20\",\"assets:7,20\",\"assets:8,20\",\"assets:5,19\",\"assets:6,19\",\"assets:7,19\",\"enemystart\",\"assets:3,3\"],\"data\":[0,0,0,0,0,0,1,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,4,4,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,7,0,0,0,4,4,0,4,4,0,4,4,4,0,0,0,0,8,9,10,11,12,0,0,4,4,0,0,0,0,4,4,4,4,4,0,0,13,14,15,16,17,0,0,4,4,4,0,4,4,4,4,4,0,0,0,0,18,19,20,21,22,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,23,24,25,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,4,0,0,26,0,4,27,27,27,27,4,0,26,0,4,27,27,27,27,27,4,0,26]}",
        "level_04": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"assets:1,18\",\"assets:2,3\",\"player1start\",\"targetpoint\",\"assets:11,9\",\"assets:3,12\",\"assets:1,17\",\"assets:12,9\",\"assets:13,9\",\"assets:1,16\",\"assets:3,0\",\"assets:12,8\",\"assets:13,8\",\"assets:4,20\",\"assets:5,20\",\"player2start\",\"assets:6,3\",\"assets:5,19\",\"assets:5,18\",\"assets:7,3\",\"assets:8,3\",\"assets:7,2\",\"assets:8,2\",\"assets:1,1\",\"assets:5,1\",\"assets:9,0\"],\"data\":[1,0,0,0,0,0,0,0,0,0,0,0,0,2,3,0,4,0,0,5,0,0,0,6,6,6,0,7,7,0,0,0,0,8,3,0,0,0,0,0,0,0,9,10,6,0,0,11,7,7,0,0,0,11,12,0,0,0,0,0,0,0,13,14,0,0,0,0,15,16,7,0,0,0,0,0,0,0,0,17,0,0,0,18,18,0,0,0,0,19,7,0,0,0,2,20,0,0,0,0,0,0,21,22,18,0,0,3,3,0,0,0,0,0,8,3,0,3,3,3,0,0,23,24,0,0,0,3,3,0,0,0,0,0,25,26,0,27,27,27,0,0,21,22,21,22,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,23,24,23,24,0,0,0,7,7,7,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}",
        "level_05": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"player1start\",\"targetpoint\",\"player2start\",\"assets:7,3\",\"assets:8,3\",\"assets:7,2\",\"assets:8,2\",\"assets:4,19\",\"assets:6,3\",\"assets:4,18\",\"assets:5,18\",\"assets:4,17\",\"assets:5,17\",\"assets:5,23\",\"assets:4,16\",\"assets:5,16\",\"assets:4,22\",\"assets:5,22\",\"assets:4,15\",\"assets:4,21\",\"assets:5,21\",\"assets:4,20\",\"assets:5,20\",\"assets:12,9\",\"assets:13,9\",\"assets:5,19\",\"assets:12,8\",\"assets:13,8\",\"assets:3,3\",\"enemystart\",\"assets:1,1\",\"assets:2,1\",\"assets:4,1\",\"assets:5,1\"],\"data\":[1,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,4,5,0,0,10,11,0,0,0,0,0,0,0,0,0,9,0,0,0,0,6,7,0,0,12,13,0,0,0,0,0,0,0,0,0,9,0,0,4,5,0,0,0,14,15,16,0,0,4,5,0,0,0,0,0,0,0,0,6,7,0,0,17,18,19,0,0,0,6,7,0,0,9,0,0,0,0,0,0,0,0,0,20,21,0,0,4,5,0,0,0,0,9,0,0,0,0,0,0,0,0,0,22,23,0,0,6,7,0,0,9,9,9,0,0,24,25,0,0,0,0,0,0,26,4,5,0,0,0,0,0,0,0,0,0,27,28,0,29,29,0,0,0,0,6,7,0,0,0,0,0,0,0,0,0,0,0,30,31,32,30,33,34,30]}",
        "level_06": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:6,3\",\"player1start\",\"targetpoint\",\"player2start\",\"vines\",\"assets:7,3\",\"assets:8,3\",\"assets:12,9\",\"assets:13,9\",\"assets:7,2\",\"assets:8,2\",\"assets:12,8\",\"assets:13,8\",\"enemystart\"],\"data\":[1,0,0,0,0,0,2,0,0,3,0,0,4,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,5,5,5,0,0,0,0,5,5,1,1,1,1,1,1,1,1,1,1,1,5,5,6,7,8,9,6,7,5,1,1,1,1,1,1,1,1,1,1,1,5,5,10,11,12,13,10,11,5,1,1,1,1,1,1,1,1,1,1,1,5,5,5,0,0,0,0,5,5,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,14,0,0,0,14,0,0,0,14,0,0,0,1,1,1]}",
        "level_07": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:8,22\",\"player1start\",\"targetpoint\",\"player2start\",\"assets:7,3\",\"assets:8,3\",\"assets:6,3\",\"enemystart\",\"assets:8,21\",\"vines\",\"assets:7,2\",\"assets:8,2\",\"assets:8,20\",\"ocean\",\"assets:12,9\",\"assets:13,9\",\"assets:12,8\",\"assets:13,8\",\"assets:2,19\",\"assets:3,19\",\"assets:4,19\",\"assets:3,13\",\"assets:1,18\",\"assets:2,18\",\"assets:3,18\",\"assets:4,18\",\"assets:5,18\",\"assets:1,17\",\"assets:2,17\",\"assets:4,17\",\"assets:5,17\",\"assets:1,16\",\"assets:2,16\",\"assets:3,16\",\"assets:4,16\",\"assets:5,16\"],\"data\":[1,2,0,0,3,0,0,4,0,0,5,6,7,7,7,0,7,0,0,8,9,0,0,0,0,0,0,0,0,10,11,12,7,7,0,7,0,0,0,0,13,0,0,0,0,0,0,0,0,10,5,6,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,11,12,7,7,0,0,10,10,0,0,0,0,14,14,14,14,14,14,14,14,5,6,7,0,0,15,16,10,0,0,0,10,14,14,14,14,14,14,14,14,11,12,0,0,0,17,18,0,0,8,0,10,10,0,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,19,20,21,0,0,0,0,0,0,0,0,0,0,22,22,0,0,0,0,23,24,25,26,27,0,0,0,0,7,0,0,0,0,22,22,22,22,0,0,28,29,29,30,31,0,0,0,7,7,7,0,0,0,22,22,22,22,22,0,32,33,34,35,36,0,0,7,7,7,7,0,0,8]}",
        "level_08": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"assets:12,9\",\"assets:13,9\",\"assets:6,3\",\"vines\",\"assets:12,8\",\"assets:13,8\",\"assets:7,3\",\"assets:8,3\",\"ocean\",\"assets:7,2\",\"assets:8,2\",\"assets:11,9\",\"player1start\",\"targetpoint\",\"player2start\"],\"data\":[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,3,0,4,4,0,0,5,5,5,5,0,0,4,4,0,2,3,0,0,6,7,8,9,8,9,0,5,10,10,5,0,8,9,8,9,6,7,0,0,0,0,11,12,11,12,0,5,5,5,5,0,11,12,11,12,0,0,0,0,13,5,5,5,0,0,0,0,0,0,0,0,0,0,5,5,5,13,0,13,13,5,10,5,0,14,0,0,15,0,0,16,0,0,5,10,5,13,13,0,13,5,5,5,0,0,0,0,0,0,0,0,0,0,5,5,5,13,0,0,0,0,8,9,8,9,0,5,5,5,5,0,8,9,8,9,0,0,0,0,2,3,11,12,11,12,0,5,10,10,5,0,11,12,11,12,2,3,0,0,6,7,0,4,4,0,0,5,5,5,5,0,0,4,4,0,6,7,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]}",
        "level_09": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"assets:6,3\",\"ocean\",\"assets:7,3\",\"assets:8,3\",\"assets:7,2\",\"assets:8,2\",\"assets:5,23\",\"assets:6,23\",\"assets:7,23\",\"assets:6,2\",\"assets:13,15\",\"assets:12,2\",\"vines\",\"assets:6,1\",\"assets:7,1\",\"assets:11,1\",\"assets:12,1\",\"assets:2,3\",\"assets:7,0\",\"assets:11,0\",\"player1start\",\"targetpoint\",\"player2start\"],\"data\":[1,0,0,2,2,0,0,0,1,0,0,0,1,0,0,2,2,0,0,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,2,2,0,0,2,2,2,2,2,2,2,0,2,2,0,0,0,0,0,0,2,2,0,0,0,2,3,3,2,0,0,0,2,2,0,0,0,0,0,4,5,4,5,0,0,0,2,2,0,0,0,4,5,4,5,0,0,0,0,6,7,6,7,0,0,0,0,0,0,0,0,6,7,6,7,0,0,0,0,8,9,9,10,0,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,11,12,12,13,0,2,2,2,0,2,2,0,0,0,14,14,14,0,0,0,15,16,17,18,0,0,0,0,0,0,0,0,0,19,19,19,14,0,0,0,0,20,21,0,0,0,0,0,0,0,0,0,0,19,14,14,14,0,0,0,0,0,0,0,22,0,0,23,0,0,24,0,0,0,0,0,0,0]}",
        "level_10": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"vines\",\"assets:3,3\",\"assets:6,3\",\"assets:7,3\",\"assets:8,3\",\"assets:7,2\",\"assets:8,2\",\"player1start\",\"targetpoint\",\"player2start\"],\"data\":[1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,2,2,2,2,0,0,2,2,2,2,0,0,1,0,2,3,3,3,0,0,0,0,0,0,0,3,3,2,2,2,0,1,0,0,2,3,3,0,0,0,0,4,0,0,0,3,3,0,0,2,0,0,0,0,0,3,2,2,2,5,6,0,5,6,0,0,3,3,0,2,0,0,1,0,0,0,0,0,0,7,8,0,7,8,0,0,0,3,0,2,0,1,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,5,6,0,0,0,0,0,0,0,5,6,0,0,2,0,0,1,0,2,0,7,8,0,0,0,0,0,0,0,7,8,0,0,0,0,1,0,0,2,2,2,0,9,0,0,10,0,0,11,0,0,0,2,2,2,2]}",
        "level_11": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"ocean\",\"vines\",\"player1start\",\"targetpoint\",\"player2start\",\"assets:7,3\",\"assets:8,3\",\"assets:7,2\",\"assets:8,2\",\"assets:6,3\",\"assets:3,3\",\"enemystart\"],\"data\":[1,1,2,0,0,0,3,0,0,4,0,0,5,0,0,0,0,2,1,1,1,2,2,0,0,6,7,0,0,0,0,0,6,7,0,0,0,2,2,1,2,2,0,0,0,8,9,0,0,0,0,0,8,9,0,0,0,0,2,2,0,0,0,0,0,0,0,0,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,10,0,0,0,0,0,0,0,0,0,0,11,11,11,11,0,0,2,2,2,2,2,0,0,11,11,11,11,11,0,0,11,2,2,11,0,0,2,1,1,1,2,0,0,11,2,2,2,11,0,0,11,11,11,11,0,0,2,1,1,1,2,0,0,11,11,11,11,11,0,0,0,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,0,0,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,0,2,2,2,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,2,2]}",
        "level_12": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"vines\",\"assets:3,3\",\"player1start\",\"targetpoint\",\"player2start\",\"enemystart\"],\"data\":[1,1,2,1,1,1,1,3,0,0,4,0,0,5,1,2,2,2,2,2,1,1,1,1,1,2,1,1,0,0,0,0,0,1,1,2,2,2,2,2,1,2,2,2,2,2,1,2,1,0,0,0,1,1,1,1,1,1,2,2,1,1,1,2,2,1,1,2,1,2,2,2,2,2,1,2,1,1,2,2,1,2,1,2,2,1,2,2,2,2,2,2,1,1,1,2,1,2,2,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,1,1,2,2,1,2,2,2,1,1,1,1,1,2,1,1,1,1,2,2,1,1,1,2,1,2,2,2,2,2,2,2,1,2,1,1,2,1,1,1,1,2,2,2,1,2,2,1,1,1,1,1,1,2,1,2,2,2,2,2,2,6,1,1,1,2,1,1,1,1,1,6,1,2,1,1,1,1,1,1,6]}",
        "level_13": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:12,14\",\"player1start\",\"targetpoint\",\"player2start\",\"assets:12,9\",\"assets:13,9\",\"vines\",\"assets:12,8\",\"assets:13,8\",\"assets:11,9\",\"ocean\",\"enemystart\"],\"data\":[1,1,0,0,0,0,0,2,0,0,3,0,0,4,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,6,0,0,0,0,0,0,0,0,0,0,0,0,5,6,0,0,7,7,8,9,10,10,10,10,7,7,7,10,10,10,10,10,8,9,0,0,7,11,11,11,11,11,11,11,11,11,11,7,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,7,11,11,11,11,11,11,11,11,11,7,0,1,0,0,1,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,1,1,0,5,6,11,11,11,11,11,11,11,7,0,1,0,0,5,6,0,1,0,0,8,9,10,10,10,10,0,0,0,10,10,0,10,10,8,9,0,0,0,0,12,0,0,0,0,0,0,12,0,0,0,0,0,12,0,0,0]}",
        "level_14": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"player1start\",\"targetpoint\",\"player2start\",\"vines\",\"assets:21,6\",\"assets:22,6\",\"assets:11,9\",\"ocean\",\"enemystart\"],\"data\":[0,0,0,0,0,0,0,1,0,0,2,0,0,3,0,0,0,0,0,4,0,5,5,5,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,5,6,5,7,0,0,0,0,0,0,5,5,0,7,5,0,0,4,4,0,5,6,6,6,5,0,0,5,6,5,5,6,5,5,6,5,0,4,4,4,8,5,5,6,5,0,0,4,8,4,5,5,6,6,6,5,0,4,4,4,4,0,0,5,5,5,5,4,4,4,0,0,4,6,6,0,0,4,4,0,0,5,6,6,5,5,0,0,5,0,0,5,5,6,6,5,0,0,0,0,5,5,5,5,5,0,0,5,6,5,0,0,5,5,5,5,0,0,0,7,0,4,4,4,7,0,0,0,5,0,0,0,7,0,0,7,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,7,7,7,7,0,0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,9]}",
        "level_15": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:6,3\",\"enemystart\",\"assets:7,3\",\"assets:8,3\",\"assets:5,23\",\"assets:6,23\",\"assets:7,23\",\"player2start\",\"assets:7,2\",\"assets:8,2\",\"vines\",\"assets:4,21\",\"assets:6,21\",\"assets:8,21\",\"assets:4,22\",\"assets:5,22\",\"assets:7,22\",\"assets:8,22\",\"targetpoint\",\"ocean\",\"assets:4,20\",\"assets:6,19\",\"assets:5,20\",\"assets:7,20\",\"assets:8,20\",\"player1start\",\"assets:7,19\",\"assets:5,19\"],\"data\":[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,0,3,4,0,3,4,0,3,4,0,5,6,7,0,0,0,0,8,0,1,0,9,10,11,9,10,11,9,10,11,12,13,14,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,12,13,14,0,0,0,0,0,0,0,0,0,15,6,6,6,6,6,6,6,16,13,17,18,0,0,0,19,0,0,1,1,12,13,13,20,13,13,20,13,13,20,13,14,0,0,2,0,0,0,0,0,21,22,23,20,24,22,22,22,23,13,24,25,0,0,0,0,0,0,0,15,6,6,16,20,14,0,11,0,12,13,14,0,0,0,0,26,0,1,0,12,20,20,20,20,14,0,1,0,12,13,14,0,0,0,0,0,0,1,0,21,22,22,22,22,27,0,1,0,28,22,25,0,0,0,0,0,0,1,0,11,11,11,11,11,11,0,1,0,0,0,0,0,0,0,2]}",
        "level_16": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"vines\",\"ocean\",\"enemystart\",\"assets:9,18\",\"assets:10,18\",\"assets:6,3\",\"assets:2,3\",\"player2start\",\"assets:9,17\",\"assets:10,17\",\"assets:5,2\",\"assets:2,14\",\"assets:3,14\",\"assets:4,14\",\"assets:2,13\",\"assets:3,13\",\"assets:4,13\",\"targetpoint\",\"assets:2,12\",\"assets:3,12\",\"assets:4,12\",\"assets:3,3\",\"assets:4,3\",\"player1start\",\"assets:2,2\",\"assets:3,2\",\"assets:4,2\"],\"data\":[0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,2,0,3,0,0,0,4,5,6,0,0,0,0,7,7,0,0,0,0,0,2,0,0,8,0,0,9,10,6,0,0,0,0,0,7,0,0,0,11,0,2,0,0,0,0,0,9,10,6,0,0,12,13,14,0,7,7,1,11,0,2,0,0,0,0,0,4,5,6,0,1,15,16,17,0,7,7,1,11,0,2,0,0,18,0,0,9,10,6,0,1,19,20,21,1,7,7,0,11,0,0,0,3,0,0,0,4,5,6,0,1,1,1,0,1,7,0,0,11,0,2,0,0,0,0,0,9,10,6,0,1,7,22,23,1,7,7,1,11,0,2,0,0,24,0,0,4,5,6,0,1,25,26,27,0,7,7,1,11,0,2,0,0,0,0,0,9,10,6,0,0,0,0,0,0,7,0,0,0,0,2,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,2,0,3]}",
        "level_17": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"assets:6,3\",\"enemystart\",\"ocean\",\"vines\",\"player2start\",\"targetpoint\",\"player1start\"],\"data\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,2,0,2,0,0,1,1,0,0,0,1,0,1,3,1,0,1,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,3,4,0,0,0,0,0,0,0,2,1,0,0,1,3,1,0,1,0,1,3,1,1,0,1,1,1,1,0,0,0,0,0,4,3,4,0,0,0,4,3,4,0,0,0,0,0,0,0,0,0,1,0,1,3,4,1,1,1,4,3,1,1,0,0,1,0,1,1,0,0,0,0,4,3,4,0,0,0,4,4,0,0,4,4,4,0,0,0,0,5,0,0,1,3,1,1,0,1,1,0,1,1,4,3,1,0,0,0,0,0,0,0,4,3,4,0,0,0,0,0,0,0,4,3,4,0,0,0,0,0,0,0,4,4,4,1,1,1,0,1,1,1,1,3,1,1,0,1,0,6,0,0,7,0,0,0,0,0,0,0,0,0,4,3,4,0,0,0,0]}",
        "level_18": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"vines\",\"assets:6,3\",\"player2start\",\"targetpoint\",\"player1start\"],\"data\":[1,0,2,0,0,0,2,0,2,0,2,0,0,0,2,0,0,0,0,0,0,0,0,3,0,2,0,3,0,3,0,0,0,0,0,3,2,0,0,2,2,0,2,0,3,0,2,0,3,2,0,0,0,0,0,2,3,2,3,0,0,3,0,2,0,3,0,3,2,0,0,0,4,0,0,0,2,3,0,2,2,0,3,0,2,0,3,2,0,0,0,0,0,0,0,2,3,0,2,0,0,2,0,3,0,3,2,0,0,0,5,0,0,0,2,3,0,3,0,2,2,0,2,0,3,2,0,0,0,0,0,0,0,2,3,0,2,0,3,0,0,3,0,3,2,0,0,0,6,0,0,0,2,3,0,3,0,2,0,2,2,0,3,0,3,2,0,0,0,0,0,2,3,0,2,0,3,0,2,0,0,3,0,2,2,3,0,0,0,0,0,3,0,3,0,2,0,3,0,0,2,0,2,0,0,0,2,0,0,0,2,0,2,0,2,0,2,0,2,1]}",
        "level_19": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"vines\",\"assets:6,3\",\"ocean\",\"player2start\",\"targetpoint\",\"player1start\"],\"data\":[1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,3,0,3,0,2,4,4,4,2,4,4,4,2,3,0,3,0,0,0,3,3,0,3,0,2,3,3,3,2,3,3,3,2,3,0,3,3,0,0,0,0,0,3,0,2,3,0,0,2,0,5,3,2,3,0,0,0,0,0,3,3,3,3,0,2,3,0,0,0,0,0,3,2,3,3,3,3,0,2,2,2,2,2,2,2,2,2,0,6,0,2,2,2,2,2,2,2,2,0,3,3,3,3,0,2,3,0,0,0,0,0,3,2,3,3,3,3,0,0,0,0,0,3,0,2,3,7,0,2,0,0,3,2,3,0,0,0,0,0,3,3,0,3,0,2,3,3,3,2,3,3,3,2,3,0,3,3,0,0,0,3,0,3,0,2,4,4,4,2,4,4,4,2,3,0,3,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1]}",
        "level_20": "{\"width\":20,\"height\":11,\"block_width\":16,\"block_height\":16,\"sprites\":[0,\"enemystart\",\"vines\",\"assets:7,3\",\"assets:8,3\",\"assets:6,3\",\"assets:7,2\",\"assets:8,2\",\"ocean\",\"player2start\",\"targetpoint\",\"player1start\"],\"data\":[1,0,2,2,0,0,0,0,2,0,1,0,0,2,0,0,0,0,0,1,0,0,3,4,0,5,0,5,5,5,3,4,5,5,5,0,3,4,0,0,0,0,6,7,2,5,0,0,0,0,6,7,0,0,0,0,6,7,0,8,0,0,0,0,2,5,0,5,0,0,0,0,9,5,0,0,0,0,0,8,0,0,3,4,2,5,0,5,0,0,0,0,0,5,2,5,3,4,0,0,1,0,6,7,2,5,0,5,0,0,10,0,0,5,2,5,6,7,0,1,0,0,0,0,2,5,0,5,0,0,0,0,0,5,2,0,0,0,0,0,8,0,3,4,0,5,0,5,11,0,0,0,0,5,0,5,3,4,0,0,8,0,6,7,0,0,0,0,0,3,4,0,0,0,0,5,6,7,0,0,0,0,2,2,0,0,5,5,5,6,7,5,5,5,0,5,2,2,0,0,1,0,8,2,0,0,2,2,0,0,1,0,2,0,0,0,2,8,0,1]}"
    },
    "sounds": [{"file": "explosion.wav", "version": 1, "size": 123140, "properties": {}}, {
        "file": "grenade2.wav",
        "version": 1,
        "size": 81126,
        "properties": {}
    }, {"file": "grenade3.wav", "version": 1, "size": 67046, "properties": {}}, {
        "file": "jingle_lose_00.wav",
        "version": 1,
        "size": 1064068,
        "properties": {}
    }, {"file": "jingle_win_00.wav", "version": 1, "size": 756868, "properties": {}}, {
        "file": "jumppad.wav",
        "version": 1,
        "size": 145324,
        "properties": {}
    }, {"file": "pickup_01.wav", "version": 1, "size": 23290, "properties": {}}, {
        "file": "quaddamage_shoot.wav",
        "version": 1,
        "size": 303232,
        "properties": {}
    }, {"file": "ren.wav", "version": 1, "size": 224032, "properties": {}}, {
        "file": "ren3.wav",
        "version": 1,
        "size": 224032,
        "properties": {}
    }, {"file": "rlauncher.wav", "version": 1, "size": 246786, "properties": {}}, {
        "file": "teleport.wav",
        "version": 1,
        "size": 74196,
        "properties": {}
    }],
    "music": [{"file": "ending.mp3", "version": 1, "size": 1134317, "properties": {}}, {
        "file": "level1.mp3",
        "version": 1,
        "size": 2131380,
        "properties": {}
    }, {"file": "level2.mp3", "version": 1, "size": 1825757, "properties": {}}, {
        "file": "level3.mp3",
        "version": 1,
        "size": 1926256,
        "properties": {}
    }, {"file": "titlescreen.mp3", "version": 1, "size": 393539, "properties": {}}]
};

globalThis.microScriptCode = `
function()
// AI Component that controls specific Entity

AiControllerComponent = class extends Component
//// constructor
  // @huntTarget:string - what this AI controller should attack. Available values: TARGET, PLAYER, ENEMYFIRST, ENEMYLAST
  // @moveSpeed:number - movement speed
  // @maxObstacklesBeforeFire:int - number of colliders through which controller start shooting
  // @prefPlayerNumber:int<0,2> - player number that this AI controller will hunt. 0 means player will be selected at random
  constructor = function(huntTarget, moveSpeed, maxObstacklesBeforeFire, prefPlayerNumber = 0)
    super()
    
    // current state. Available: WAIT, IDLE, MOVE, ATTACK
    this.State = "IDLE"
    
    // hunt target for this AI controller. Can go after Target or after Player. Available values: TARGET, PLAYER, ENEMYFIRST, ENEMYLAST
    // ENEMYFIRST and ENEMYLAST are special hunt targets assigned to Player entities during demo mode. They alwasy hunt first and last enemy in the list
    this.HuntTarget = huntTarget
    
    // number of player this controller will hunt.
    this.PrefPlayerNumber = prefPlayerNumber
    if this.PrefPlayerNumber == 0 then 
      if Game.Player2 != 0 then
        this.PrefPlayerNumber = random.nextInt(2) + 1
      else
        this.PrefPlayerNumber = 1
      end
    end
    
    // number of obstackles before AI controller will fire at target
    // this is compared to result of Trace to check how many colliders on line of fire this AI should ignore
    // Must be set to 2 or more - MapManager adds bunker around the Target, so it's almost never that the target is not behind the cover
    this.MaxObstacklesBeforeFire = maxObstacklesBeforeFire
    
    // move destination - AI will move here if in "move" state
    this.MoveDestination = 0
    // speed with which AI moves
    this.MoveSpeed = moveSpeed
    
    // ref to Entity that is an attack target. If equal to 0 then there's no attack target selected
    this.AttackTarget = 0
  end

//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    // State Machine update
    
    // IDLE state - AI does nothing. This is the spot where decision on next action is taken
    if State == "IDLE" then
      local transform = Owner.Transform
      
      local player1Pos = Game.Player1.Transform.Position
      local player2Pos = 0
      if Game.Player2 != 0 then player2Pos = Game.Player2.Transform.Position end
      
      local p1TraceLength = 1000
      local p2TraceLength = 1000
      
      // AI decision priority list
      // 0. if HuntTarget == ENEMYFIRST or ENEMYLAST then it's a demo mode and should target enemies
      // 1. attack player without cover
      // 2. attack hunt target through cover
      // 3. move to hunt target
      
      // ###### DEMO MODE ####################################################################################
      // handle special case of demo mode
      // this is very buggy and francly, quite pointless
      if HuntTarget == "ENEMYFIRST" or HuntTarget == "ENEMYLAST" then
        local enemy = 0
        if Game.Ai.Enemies.length > 0 then
          if HuntTarget == "ENEMYFIRST" then enemy = Game.Ai.Enemies[0] end
          if HuntTarget == "ENEMYLAST" then enemy = Game.Ai.Enemies[Game.Ai.Enemies.length - 1] end
        end
        if enemy == 0 then return 0 end // premature return, as ther's no enemy AI to attack
        local enemyPos = enemy.Transform.Position
        local enemyTraceLen = Game.Physics.Trace(transform.Position, enemyPos).length
        if enemyTraceLen <= 2 then
          AttackTarget = enemy
          State = "ATTACK"
        else
          // can't attack. Move to enemy
          local navGridX = floor((transform.Position.X + 160) / Game.Map.CurrentMap.block_width)
          local navGridY = floor((transform.Position.Y + 84) / Game.Map.CurrentMap.block_height)
          local nextStep = Game.Ai.GetNextStepToEnemy(enemy, navGridX, navGridY)
          if nextStep != 0 or nextStep != 1 then
            // translate to world coords
            local x = nextStep.X * Game.Map.CurrentMap.block_width - 160 + 8
            local y = nextStep.Y * Game.Map.CurrentMap.block_height - 84 + 8
            
            MoveDestination = new Vector2D(x, y)
            // check if MoveDestination is very far - this can happen sometimes XD
            if transform.Position.Subtract(MoveDestination).GetLength() > 32 then return 0 end
            State = "MOVE"
          end
        end
        return 0 // when in demo mode don't perform any standard AI logic
      end
      // ###### DEMO MODE END ################################################################################
      
      // Attack preffered player if not behind cover
      AttackTarget = 0
      if player2Pos == 0 then // only Player 1 exists / single player game
        p1TraceLength = Game.Physics.Trace(transform.Position, player1Pos).length
        // 2 colliders are collider of the player and collider of the AI itself. There's no other colliders between them
        if p1TraceLength <= 2 then AttackTarget = Game.Player1 end
      else // Player 2 exists / multiplayer game
        // in multiplayer each AI need to check if any of the players are out of cover
        p1TraceLength = Game.Physics.Trace(transform.Position, player1Pos).length
        p2TraceLength = Game.Physics.Trace(transform.Position, player2Pos).length
        
        if PrefPlayerNumber == 1 then // preffering attack Player 1
          if p1TraceLength <= 2 then AttackTarget = Game.Player1
          elsif p2TraceLength <= 2 then AttackTarget = Game.Player2 end
        else // preffering attack Player 2
          if p2TraceLength <= 2 then AttackTarget = Game.Player2
          elsif p1TraceLength <= 2 then AttackTarget = Game.Player1 end
        end
      end
      
      // if AttackTarget is set then a player is out of cover and should be attacked
      if AttackTarget != 0 then
        State = "ATTACK"
      else
        // attack hunt target through cover
        if HuntTarget == "TARGET" then
          // check if target is within allowed number of obstacles to shoot
          local targetPos = Game.Target.Transform.Position
          local targetTraceLength = Game.Physics.TraceAiToTarget(transform.Position, targetPos).length
          if targetTraceLength <= MaxObstacklesBeforeFire then
            AttackTarget = Game.Target
          end
        else // if hunt target is PLAYER
          // check if player is within allowed number of obstacles to shoot
          if PrefPlayerNumber == 1 then // pref player number is 1
            if p1TraceLength <= MaxObstacklesBeforeFire then
              AttackTarget = Game.Player1
            end
          else // pref player number is 2
            if p2TraceLength <= MaxObstacklesBeforeFire then
              AttackTarget = Game.Player2
            end
          end
        end
        
        // if AttackTarget is set then Target or preffered Player is within allowed number of obstacles to attack
        if AttackTarget != 0 then
          State = "ATTACK"
        else 
          // otherwise - move closer to target
          // translate current position into NavGrid coords
          local navGridX = floor((transform.Position.X + 160) / Game.Map.CurrentMap.block_width)
          local navGridY = floor((transform.Position.Y + 84) / Game.Map.CurrentMap.block_height)
          
          // figure out next step on the path, depending if AI is hunting Target or Players
          local nextStep = 0
          if HuntTarget == "TARGET" then
            nextStep = Game.Ai.GetNextStepToTarget(navGridX, navGridY)
          elsif HuntTarget == "PLAYER" then
            if PrefPlayerNumber == 1 then
              nextStep = Game.Ai.GetNextStepToPlayer1(navGridX, navGridY)
            else
              nextStep = Game.Ai.GetNextStepToPlayer2(navGridX, navGridY)
            end
          end
          if nextStep != 0 then
            // translate to world coords
            local x = nextStep.X * Game.Map.CurrentMap.block_width - 160 + 8
            local y = nextStep.Y * Game.Map.CurrentMap.block_height - 84 + 8
            
            MoveDestination = new Vector2D(x, y)
            State = "MOVE"
          else
            // no next step on the path to target
            if HuntTarget == "PLAYER" then
              if PrefPlayerNumber == 1 then
                Game.Ai.BuildVectorFieldToPlayer1()
              else
                Game.Ai.BuildVectorFieldToPlayer2()
              end
            end
          end
        end
      end
    end
    
    // MOVE state - move closer to hunt target
    if State == "MOVE" then
      local transform = Owner.Transform
      local movement = MoveDestination.Subtract(transform.Position)
      if movement.GetLength() > 0.3 then // 0.3 is an trial-and-error value that makes AI not cut corners and stop "close enough" to middle of the cell
        //if HuntTarget == "ENEMYFIRST" then print("moveLen=" + movement.GetLength()) end
        transform.IsMoving = true
        
        // normalize movement vector for corect diagonal speed
        normalized = movement.GetNormalized()
        
        transform.MovementDirection = normalized
        // apply movement to entity's transform
        transform.Position.X += normalized.X * MoveSpeed
        transform.Position.Y += normalized.Y * MoveSpeed
        transform.Rotation = normalized.ToAngle()
      else
        // if length to target is small enough, stop and go back to IDLE state
        transform.IsMoving = false
        State = "IDLE"
      end
    end
    
    // ATTACK state - attack entity referenced in AttackTarget
    if State == "ATTACK" then
      local attack = Owner.GetComponent(AttackComponent)
      if attack.CanAttack() then // CanAttack() just tracks weapon cooldown
        attack.AttackTarget(AttackTarget)
        State = "WAIT" // wait for weapon cooldown to pass before next action
      end
    end
    
    // WAIT state
    if State == "WAIT" then
      local attack = Owner.GetComponent(AttackComponent)
      if attack.CanAttack() then
        State = "IDLE"
      end
    end
  end
end
end()



function()
// represents AI overseer that coordinates AI components

AiOverseer = class
  
//// constructor
  constructor = function()
    
    // 2D list of vectors. Holds next move from current position on the way to target
    TargetVectorField = 0
    // 2D list of vectors. Holds next move from current position on the way to Player 1
    Player1VectorField = 0
    // 2D list of vectors. Holds next move from current position on the way to Player 2
    Player2VectorField = 0
    // list of EnemyVectorFieldTuple used in demo mode
    EnemiesVectorFields = []
    
    // Number of enemies left. When reach 0 AI Overseer is not allowed to spawn more
    EnemiesPool = Database.GetEnemiesPool()
    
    // Max number of enemies alive at the same time
    MaxEnemies = Database.GetMaxEnemies()
    
    // List of enemies currently on the map 
    Enemies = []
    
    // list of Vector2D of enemy spawn points
    EnemySpawnPoints = []
    
    // cooldown in seconds between spawns of enemies
    EnemySpawnCooldown = Database.GetEnemySpawnCooldown()
    EnemySpawnCooldownTimer = 0 // timer incereased in Update(). When equals 0, then next enemy can be spawn
    
    // flag that tells if Update() for AI Overseer is performed. Used to diable Update when in game over state
    IsUpdateDisabled = false
  end
  
//// SpawnNextEnemy - spawns next enemy 
  SpawnNextEnemy = function()
    if EnemySpawnPoints.length > 0 then
      // get enemy data from Database
      local enemyData = Database.GetEnemy()
      
      local enemy = new Entity("enemy")
      local spawnPointIndex = random.nextInt(EnemySpawnPoints.length)
      enemy.AddComponent(new TransformComponent(EnemySpawnPoints[spawnPointIndex].X, EnemySpawnPoints[spawnPointIndex].Y))
      enemy.AddComponent(new TankSpriteComponent(enemyData.HullSprite, enemyData.GunSprite, enemyData.TrackSprite, enemyData.TrackOffset))
      enemy.AddComponent(new AiControllerComponent(enemyData.HuntTarget, enemyData.MoveSpeed, enemyData.MaxObstacklesBeforeFire, enemyData.PrefPlayerNumber))
      enemy.AddComponent(new AttackComponent(enemyData.ProjectileType, enemyData.AttackDamage, enemyData.ProjectileSpeed, enemyData.Cooldown))
      enemy.AddComponent(new HealthComponent(enemyData.Health))
      enemy.AddComponent(new CollisionComponent("ENEMY", EnemySpawnPoints[spawnPointIndex].X, EnemySpawnPoints[spawnPointIndex].Y, 16, 16, true, false))
      Game.Spawn(enemy)
      
      // enemy spawn VFX and SFX
      Game.SpawnEffect("poof", EnemySpawnPoints[spawnPointIndex].X, EnemySpawnPoints[spawnPointIndex].Y, 60, 60, 0, 1.16)
      Noise.EnemySpawned()
      
      Enemies.push(enemy) // add enemy to list of alive enemies
      EnemiesPool -= 1 // decrease number of enemies that are still waiting to be spawned
    end
  end
  
//// EnemyDestroyed - called by GameManager, informs Ai Overseer that one of the enemies was destroyed
  // @enemyEntity:Entity - enemy that was destroyed
  EnemyDestroyed = function(enemyEntity)
    // remove enemy from the list of alive enemies
    Enemies.removeElement(enemyEntity)
  end
  
//// GetNextStepToTarget - Get NavGrid cell coords for next step on the path to target
  // @currentX:int - X element of coords of current location
  // @currentY:int - Y element of coords of current location
  // @returns:Vector2D - vector with coords of next step on path to target. Returns 0 if no path available or already on target
  GetNextStepToTarget = function(currentX, currentY)
    local next = TargetVectorField[currentX][currentY]
    if next == 0 or next == 1 then return 0
    else return next end
  end
  
//// GetNextStepToPlayer1 - Get NavGrid cell coords for next step on the path to Player 1
  // @currentX:int - X element of coords of current location
  // @currentY:int - Y element of coords of current location
  // @returns:Vector2D - vector with coords of next step on path to Player 1. Returns 0 if no path available or already on Player 1 position  
  GetNextStepToPlayer1 = function(currentX, currentY)
    if Player1VectorField == 0 then return 0 end
      
    local next = Player1VectorField[currentX][currentY]
    if next == 0 or next == 1 then return 0
    else return next end
  end
  
//// GetNextStepToPlayer2 - Get NavGrid cell coords for next step on the path to Player 2
  // @currentX:int - X element of coords of current location
  // @currentY:int - Y element of coords of current location
  // @returns:Vector2D - vector with coords of next step on path to Player 1. Returns 0 if no path available or already on Player 1 position  
  GetNextStepToPlayer2 = function(currentX, currentY)
    if Player2VectorField == 0 then return 0 end
      
    local next = Player2VectorField[currentX][currentY]
    if next == 0 or next == 1 then return 0
    else return next end
  end
  
//// GetNextStepToEnemy - Get NavGrid cell coords for next step on the path to supplied enemy
  //                      This is only used in demo mode and additionally can rebuild VectorField if it's needed.
  // @enemy:Entity - reference to enemy
  // @currentX:int - X element of coords of current location
  // @currentY:int - Y element of coords of current location
  // @returns:Vector2D - vector with coords of next step on path to enemy. Returns 0 if already on enemy position  
  GetNextStepToEnemy = function(enemy, currentX, currentY)
    local field = 0
    for tuple in EnemiesVectorFields
      if tuple.EnemyId == enemy.Id then field = tuple.VectorField end
    end
    if field == 0 then
      local enemyPos = enemy.Transform.Position
      field = BuildVectorField(enemyPos)
      EnemiesVectorFields.push(new EnemyVectorFieldTuple(enemy.Id, field))
    end
      
    local next = field[currentX][currentY]
    if next == 0 or next == 1 then 
      // if 0 or 1 then target moved and new VectorField needs to be generated
      for tuple in EnemiesVectorFields
        if tuple.EnemyId == enemy.Id then 
          local enemyPos = enemy.Transform.Position
          tuple.VectorField = BuildVectorField(enemyPos)
          return tuple.VectorField[currentX][currentY]
        end
      end
    else return next end
  end
  
//// BuildVectorFieldToTarget - Generates Vector Field to Target Entity using Breadth First Search.
  BuildVectorFieldToTarget = function()
    if Game.Target != 0 then
      local targetPosition = Game.Target.Transform.Position
      TargetVectorField = BuildVectorField(targetPosition, false)
    end
  end

//// BuildVectorFieldToPlayer1 - Generates Vector Field to Player 1 Entity using Breadth First Search.  
  BuildVectorFieldToPlayer1 = function()
    if Game.Player1 != 0 then
      local player1Position = Game.Player1.Transform.Position
      Player1VectorField = BuildVectorField(player1Position, true)
    end
  end
  
//// BuildVectorFieldToPlayer2 - Generates Vector Field to Player 2 Entity using Breadth First Search.  
  BuildVectorFieldToPlayer2 = function()
    if Game.Player2 != 0 then
      local player2Position = Game.Player2.Transform.Position
      Player2VectorField = BuildVectorField(player2Position, true)
    end
  end
  
//// BuildVectorField - generates Vector Field to supplied position using Breadth First Search
  //                    Based on https://www.redblobgames.com/pathfinding/tower-defense/
  // @targetPosition:Vector2D - position that is target of pathfinding
  // @includeBunker:bool - if set to 'true' then constructed vector field will include bunker entities as impassable
  // @returns:Vector2D[][] - 2D list of Vector2D objects, that holds next step on path to target
  BuildVectorField = function(targetPosition, includeBunker)
    local blockWidth = Game.Map.CurrentMap.block_width
    local blockHeight = Game.Map.CurrentMap.block_height
    
    // target coords in GridNav system
    local targetNavX = floor((targetPosition.X + 160) / blockWidth)
    local targetNavY = floor((targetPosition.Y + 84) / blockHeight)
    
    // init vectorField - fill with 0
    local vectorField = []
    for x = 0 to Game.Map.CurrentMap.width - 1
      vectorField.push([])
      for y = 0 to Game.Map.CurrentMap.height - 1
        vectorField[x].push(0)
      end
    end
    
    // set 1 in the location of target
    vectorField[targetNavX][targetNavY] = 1
    
    // get frontier - all nodes that borders current one
    local frontier = GetFrontier(targetNavX, targetNavY, vectorField, includeBunker) // on first iteration find frontier for target
    while frontier.length > 0 // until frontier is empty
      // add all nodes from frontier to TargetVectorField
      for node in frontier
        vectorField[node.PositionX][node.PositionY] = new Vector2D(node.ComeFromX, node.ComeFromY)
      end
      
      // select next node to act as center to find frontier for
      local nextNode = frontier[0]
      frontier.removeAt(0)
      
      // include frontier for this new node into existing frontier
      frontier = frontier.concat(GetFrontier(nextNode.PositionX, nextNode.PositionY, vectorField, includeBunker))
    end // while
    
    return vectorField
  end

//// GetFrontier - Search map's NavGrid. Get all traversable nodes neighbouring provided coords
  // @x:int - X element of provided coords
  // @y:int - Y element of provided coords
  // @vectorField:Vector2D[][] - current state of vector field being build
  // @includeBunker:bool - if set to 'true' it will check if cell contains bunker entity and mark those as immpassable
  // @returns:VectorFieldNode[] - list of VectorFieldNode objects
  GetFrontier = function(x, y, vectorField, includeBunker)
    local frontier = []
    
    // Search NavGrid. Add nodes that hold 0 (traversable) and are not yet in TargetVectorField
    local navGrid = Game.Map.NavGrid
    
    // check all nodes that are neighbouring center element on X and Y axis (not diagonally)
    // if the cell exists (is within NavGrid bounds) and was not checked before (value in vectorField is still 0)
    // then add thios cell to frontier with info about it's center. Checks bunker if requested by function's argument.
    
    if x-1 >= 0 then
      if navGrid[x-1][y] == 0 and vectorField[x-1][y] == 0 then 
        local isTraversable = true
        if includeBunker == true then
          for pos in Game.Map.BunkerPositions
            if pos.X == x-1 and pos.Y == y then 
              isTraversable = false 
            end
          end
        end
        if isTraversable == true then
          frontier.push(new VectorFieldNode(x-1, y, x, y))
        end
      end
    end
    
    if x+1 < Game.Map.CurrentMap.width then
      if navGrid[x+1][y] == 0 and vectorField[x+1][y] == 0 then 
        local isTraversable = true
        if includeBunker == true then
          for pos in Game.Map.BunkerPositions
            if pos.X == x+1 and pos.Y == y then 
              isTraversable = false 
            end
          end
        end
        if isTraversable == true then
          frontier.push(new VectorFieldNode(x+1, y, x, y)) 
        end
      end
    end
    
    if y-1 >= 0 then
      if navGrid[x][y-1] == 0 and vectorField[x][y-1] == 0 then 
        local isTraversable = true
        if includeBunker == true then
          for pos in Game.Map.BunkerPositions
            if pos.X == x and pos.Y == y-1 then 
              isTraversable = false 
            end
          end
        end
        if isTraversable == true then
          frontier.push(new VectorFieldNode(x, y-1, x, y)) 
        end
      end
    end
    
    if y+1 < Game.Map.CurrentMap.height then
      if navGrid[x][y+1] == 0 and vectorField[x][y+1] == 0 then
        local isTraversable = true
        if includeBunker == true then
          for pos in Game.Map.BunkerPositions
            if pos.X == x and pos.Y == y+1 then 
              isTraversable = false 
            end
          end
        end
        if isTraversable == true then
          frontier.push(new VectorFieldNode(x, y+1, x, y)) 
        end
      end
    end
  
    return frontier
  end
  
//// Update - called every frame to allow AI Overseer to monitor the situation on the map
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    if IsUpdateDisabled == false then
      // check how many enemies are on the map and spawn new one if you can
      if EnemiesPool <= 0 and Enemies.length == 0 then
        // no more enemies - player won - game over
        IsUpdateDisabled = true
        Game.GameOver_PlayerWon()
      end
      
      // update enemy spawn cooldown
      if EnemySpawnCooldownTimer > 0 then EnemySpawnCooldownTimer += deltaTime end
      if EnemySpawnCooldownTimer >= EnemySpawnCooldown then EnemySpawnCooldownTimer = 0 end
      
      // spawn next enemy if allowed
      if Enemies.length < MaxEnemies and EnemiesPool > 0 and EnemySpawnCooldownTimer == 0 then
        SpawnNextEnemy()
        EnemySpawnCooldownTimer = 0.00001
      end
    end
  end
  
//// DEBUG_DrawTargetVectorField - draws text on each node with coords of next step on path to target
  DEBUG_DrawTargetVectorField = function()
    for x = 0 to Game.Map.CurrentMap.width - 1
      for y = 0 to Game.Map.CurrentMap.height - 1
        local node = TargetVectorField[x][y]
        if node == 0 or node == 1 then
          screen.drawText(node, x * 16 - 160 + 8, y * 16 - 84 + 8, 8, "rgb(255,255,255)")
        else
          screen.drawText(x + "x" + y, x * 16 - 160 + 8, y * 16 - 84 + 10, 4, "rgb(255,255,255)")
          local text = "(" + node.X + "," + node.Y + ")"
          screen.drawText(text, x * 16 - 160 + 8, y * 16 - 84 + 6, 4, "rgb(255,255,255)")
        end
      end
    end
  end
  
//// DEBUG_DrawPlayer1VectorField - draws text on each node with coords of next step on path to PLayer 1
  DEBUG_DrawPlayer1VectorField = function()
    if Player1VectorField != 0 then
      for x = 0 to Game.Map.CurrentMap.width - 1
        for y = 0 to Game.Map.CurrentMap.height - 1
          local node = Player1VectorField[x][y]
          if node == 0 or node == 1 then
            screen.drawText(node, x * 16 - 160 + 8, y * 16 - 84 + 8, 8, "rgb(255,255,255)")
          else
            screen.drawText(x + "x" + y, x * 16 - 160 + 8, y * 16 - 84 + 10, 4, "rgb(255,255,255)")
            local text = "(" + node.X + "," + node.Y + ")"
            screen.drawText(text, x * 16 - 160 + 8, y * 16 - 84 + 6, 4, "rgb(255,255,255)")
          end
        end
      end
    end
  end
end
end()



function()
// A component that draws part of sprite

AssetSpriteComponent = class extends Component
  
//// constructor
  // @layer:int - layer number on which this sprite will be drawn
  // @partX:int - X component of coords used to locate part of the sprite
  // @partY:int - Y component of coords used to locate part of the sprite
  // @partWidth:int - width of the sprite part
  // @partHeight:int - heioght of the sprite part
  constructor = function(layer, partX, partY, partWidth, partHeight)
    super()
    
    // name of sprite
    Sprite = "assets"
    
    
    this.Layer = layer
    this.PartX = partX
    this.PartY = partY
    this.PartWidth = partWidth
    this.PartHeight = partHeight
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
    if this.Layer == layer then
      local transform = Owner.Transform
      
      screen.setDrawRotation(transform.Rotation)
      screen.setDrawScale(transform.Scale.X, transform.Scale.Y)
      
      screen.drawSpritePart(Sprite, PartX, PartY, PartWidth, PartHeight, transform.Position.X, transform.Position.Y, PartWidth, PartHeight)
      
      screen.setDrawRotation(0)
      screen.setDrawScale(1, 1)
    end
  end
end
end()



function()
// Component that adds function of attacking to entity

AttackComponent = class extends Component
  
  //// constructor
    // @projectileType:int - database ID for projectile that should be spawned
    // @damage:number - amount of damage delt
    // @projectileSpeed:number - speed at which projectile moves
    // @cooldown:number - cooldown in seconds
    constructor = function(projectileType = 0, damage = 10, projectileSpeed = 1, cooldown = 5)
    super()
    
    // Amount of damage delt on hit
    this.Damage = damage
    
    // Speed at which projectile moves
    this.ProjectileSpeed = projectileSpeed
    
    // Attack's cooldown in seconds. Next attack won't be possible for this ammount of time
    this.Cooldown = cooldown
    
    // Database ID for projectile that should be spawned
    this.ProjectileType = projectileType
    
    //Timer used to measure attack's cooldown
    CooldownTimer = 0
  end

//// CanAttack - Check if attack is possible
  // @return:bool - True if this component can attack now
  CanAttack = function()
    return CooldownTimer == 0
  end
  
//// Attack - perform attack
  Attack = function()
    if (CanAttack()) then
      local transform = Owner.Transform
      
      Fire(transform.Position.X, transform.Position.Y, transform.Rotation)
    end
  end
  
//// AttackTarget - Performs attack in the direction of target entity
  // @targetEntity:Entity - reference to entity that will be attacked
  AttackTarget = function(targetEntity)
    if (CanAttack()) then
      local transform = Owner.Transform
      // look at enemy - turns Owner to "look at" target
      local targetPosition = targetEntity.Transform.Position
      transform.Rotation = targetPosition.Subtract(transform.Position).ToAngle()
      
      Fire(transform.Position.X, transform.Position.Y, transform.Rotation)
    end
  end

//// Fire - for internal use. Executes attack
  // @posX:number - position of projectile spawnpoint on x axis
  // @posY:number - position of projectile spawnpoint on y axis
  // @rot:number - angle at wich projectile will be fired
  Fire = function(posX, posY, rot)
    pos = new Vector2D(posX, posY)
    effectPos = new Vector2D(15, 0)
    effectPos.RotateByAngle(rot)
    pos = pos.Add(effectPos)
    
    local projectileData = Database.ProjectileTypes[ProjectileType]
    
    // effects
    Game.SpawnEffect("muzzle_explo", pos.X, pos.Y, 32, 32, rot, 1.1)
    Noise.ProjectileFired(projectileData.Sound)
    
    local projectile = new Entity("projectile")
    projectile.AddComponent(new TransformComponent(pos.X, pos.Y, rot))
    projectile.AddComponent(new ProjectileControllerComponent(Owner, Damage, ProjectileSpeed))
    projectile.AddComponent(new SpriteComponent(projectileData.Sprite, 2, projectileData.SpriteSizeX, projectileData.SpriteSizeY))
    projectile.AddComponent(new CollisionComponent("PROJECTILE", pos.X, pos.Y, projectileData.CollisionSizeX, projectileData.CollisionSizeY, true, true))
    Owner.Game.Spawn(projectile)
    CooldownTimer = 0.00001 // start cooldown timer to mark that attack is on cooldown
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    if CooldownTimer >= Cooldown then CooldownTimer = 0 // if CooldownTimer is bigger than cooldown, reset timer ending the cooldown
    elsif CooldownTimer > 0 then CooldownTimer += deltaTime end // otherwise, if CooldownTimer is started, increase it by deltaTime
  end
end
end()



function()
// Component that adds a collider to Entity and interfaces with physics engine to notify about collisions

CollisionComponent = class extends Component
  
//// constructor
  // @colliderType:string - type of collider. Supported options: PLAYER, PROJECTILE, WALL, ENEMY, TRIGGER
  // @x:number - X component of coords where collider should be created
  // @y:number - Y component of coords where collider should be created
  // @width:number - Width of the collider
  // @height:number - Height of the collider
  // @movable:bool - Should collider follow Entity's Transform?
  // @notify:bool - Should component react to collisions with other objects?
  constructor = function(colliderType = "WALL", x = 0, y = 0, width = 16, height = 16, movable = false, notify = false)
    super()
    
    this.Position = new Vector2D(x, y)
    this.Width = width
    this.Height = height
    
    // collider type decides how this collider reacts to collision with other colliders
    this.ColliderType = colliderType
    // should this collision be notified that it collided with other collider?
    this.NotifyAboutCollisions = notify
    // is this collision moving?
    this.IsMovable = movable
  end
  
//// Init - Initialize component's members
  Init = function()
    // add component to physics engine and store reference to physics collider
    Collider = Owner.Game.Physics.AddCollision(this)
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    if IsMovable then
      local transform = Owner.Transform
      Game.Physics.SetTransform(Collider, transform)
    end
  end
  
//// Destroy - Destroy component and cleanup
  Destroy = function()
    // remove collider from physics engine
    Game.Physics.RemoveCollision(this)
  end
  
////CollidesWith - called by physics engine to inform this component about collisions that occured in last update.
  // Called every update on ongoing collisions. Called once for every other component, can be called multiple times per update.
  // @otherComponent:CollisionComponent - colliding Collision component
  // @collider:object - Matter object that descirbes collision
  CollidesWith = function(otherComponent, collider)
    local transform = Owner.Transform
    local otherTransform = otherComponent.Owner.Transform
    
    if ColliderType == "PLAYER" then
      if otherComponent.ColliderType == "WALL" or otherComponent.ColliderType == "WATER" then
        // bounce off away from wall
        // create vector that point away from the other collider
        local newPos = transform.Position.Subtract(otherTransform.Position)
        local moveSpeed = Owner.GetComponent(PlayerControllerComponent).MoveSpeed
        // shorten the vector, making 'bounce off' smaller
        // 12 was found by trial and error, to "feel" best
        newPos = newPos.Multiply(moveSpeed / 12)
        transform.Position.X += newPos.X
        transform.Position.Y += newPos.Y
      end
      if otherComponent.ColliderType == "PROJECTILE" then
        // bounce off away from projectile - simulates both recoil and reaction to getting hit
        // create vector that point away from the other collider
        local newPos = transform.Position.Subtract(otherTransform.Position)
        newPos = newPos.Multiply(0.3) // shorten the vector, making 'hit' smaller
        transform.Position.X += newPos.X
        transform.Position.Y += newPos.Y
      end
    end
    if ColliderType == "PROJECTILE" then
      // ignore owner and triggers
      local instigator = Owner.GetComponent(ProjectileControllerComponent).Instigator
      if instigator != otherComponent.Owner and otherComponent.ColliderType != "TRIGGER" and otherComponent.ColliderType != "WATER" then
        // if you can, deal damage to other component
        local otherHealth = otherComponent.Owner.GetComponent(HealthComponent)
        if otherHealth != 0 then 
          local damage = Owner.GetComponent(ProjectileControllerComponent).Damage
          local isDestroyed = otherHealth.DealDamage(damage, instigator)
          if not isDestroyed then
            // play projectile explosion effect on if other entity was not killed
            local rotation = random.nextInt(8) * 45 // random rotation of explosion's effect
            Game.SpawnEffect("projectile_explo", transform.Position.X, transform.Position.Y, 50, 50, rotation, 1.05)
            Noise.ProjectileExploded()
          end
        else
          // play projectile explosion effect on if other entity was not killed
          local rotation = random.nextInt(8) * 45 // random rotation of explosion's effect
          Game.SpawnEffect("projectile_explo", transform.Position.X, transform.Position.Y, 50, 50, rotation, 1.05)
          Noise.ProjectileExploded()
        end
        // destroy projectile
        Game.Destroy(Owner)
      end
    end
    if ColliderType == "TRIGGER" then
      // only entity that uses TRIGGER type are upgrade power ups
      local upgradeComp = otherComponent.Owner.GetComponent(UpgradeComponent)
      if upgradeComp != 0 then
        upgradeComp.Upgrade()
        Game.Destroy(Owner)
      end
    end
  end
end
end()



function()
// base class for components
// represents component that can be added to entity

Component = class
  
//// constructor
  constructor = function()
    // reference to entity that "owns" this component
    Owner = 0
  end
  
//// Init - Initialize component's members
  Init = function()
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
  end
  
//// Destroy - Destroy component and cleanup
  Destroy = function()
  end
end
end()



function()
// Stores data and configuration for the game

Database = class
//// GetLevel - return level under index stored in Game.CurrentLevelIndex
  // @returns:object - current level
  GetLevel = function()
    return Levels[Game.CurrentLevelIndex]
  end
  
//// GetMapName - returns name of map for current level
  // @returns:string - name of map asset
  GetMapName = function()
    return Levels[Game.CurrentLevelIndex].MapName
  end
  
//// GetEnemiesPool - returns number of enemies for current level
  // @returns:int - size of enemies pool
  GetEnemiesPool = function()
    return Levels[Game.CurrentLevelIndex].EnemiesPool
  end
  
//// GetMaxEnemies - returns max number of concurrent enemies for current level
  // @return:int - max number of concurrent enemies
  GetMaxEnemies = function()
    return Levels[Game.CurrentLevelIndex].MaxEnemies
  end
  
//// GetEnemySpawnCooldown - returns cooldown in seconds between spawn of next enemy
  // @returns:number - number of seconds between enemies spawn
  GetEnemySpawnCooldown = function()
    return Levels[Game.CurrentLevelIndex].EnemySpawnCooldown
  end
  
//// GetEnemy - get random enemy for current level
  // @returns:object - enemy
  GetEnemy = function()
    local enemyCount = Levels[Game.CurrentLevelIndex].Enemies.length
    local index = Levels[Game.CurrentLevelIndex].Enemies[random.nextInt(enemyCount)]
    return EnemyTanks[index]
  end
  
//// GetUpgrades - returns a list of numbers representing enemies left count on which upgrades should be spawned
  // @returns:int[] - list of enemies left thresholds
  GetUpgrades = function()
    if Game.Player2 == 0 then
      return Levels[Game.CurrentLevelIndex].UpgradesP1
    else
      return Levels[Game.CurrentLevelIndex].UpgradesP2
    end
  end

//// Data /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data is stored in for of arrays of objects

//// LEVELS ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  Levels = [
    // LEVEL 0
    object
      MapName = "level_01"
      EnemiesPool = 10
      MaxEnemies = 3
      EnemySpawnCooldown = 5
      Enemies = [0]
      UpgradesP1 = [] // upgrades spawn for 1 player game mode
      UpgradesP2 = [] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 1
    object
      MapName = "level_02"
      EnemiesPool = 15
      MaxEnemies = 3
      EnemySpawnCooldown = 3
      Enemies = [0]
      UpgradesP1 = [] // upgrades spawn for 1 player game mode
      UpgradesP2 = [] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 2
    object
      MapName = "level_03"
      EnemiesPool = 20
      MaxEnemies = 4
      EnemySpawnCooldown = 3
      Enemies = [0, 1]
      UpgradesP1 = [] // upgrades spawn for 1 player game mode
      UpgradesP2 = [] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 3
    object
      MapName = "level_04"
      EnemiesPool = 20
      MaxEnemies = 4
      EnemySpawnCooldown = 3
      Enemies = [0, 1]
      UpgradesP1 = [15] // upgrades spawn for 1 player game mode
      UpgradesP2 = [15,14] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 4
    object
      MapName = "level_05"
      EnemiesPool = 25
      MaxEnemies = 5
      EnemySpawnCooldown = 2.5
      Enemies = [0, 1]
      UpgradesP1 = [17] // upgrades spawn for 1 player game mode
      UpgradesP2 = [17,16] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 5
    object
      MapName = "level_06"
      EnemiesPool = 25
      MaxEnemies = 4
      EnemySpawnCooldown = 3
      Enemies = [0, 1, 2]
      UpgradesP1 = [15] // upgrades spawn for 1 player game mode
      UpgradesP2 = [15,14] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 6
    object
      MapName = "level_07"
      EnemiesPool = 30
      MaxEnemies = 5
      EnemySpawnCooldown = 2
      Enemies = [0, 1]
      UpgradesP1 = [20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [20,19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 7
    object
      MapName = "level_08"
      EnemiesPool = 30
      MaxEnemies = 4
      EnemySpawnCooldown = 2.5
      Enemies = [0, 1]
      UpgradesP1 = [20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [20,19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 8
    object
      MapName = "level_09"
      EnemiesPool = 30
      MaxEnemies = 4
      EnemySpawnCooldown = 2.5
      Enemies = [0, 1]
      UpgradesP1 = [20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [20,19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 9
    object
      MapName = "level_10"
      EnemiesPool = 30
      MaxEnemies = 6
      EnemySpawnCooldown = 2
      Enemies = [1, 2]
      UpgradesP1 = [20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [20,19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 10
    object
      MapName = "level_11"
      EnemiesPool = 20
      MaxEnemies = 4
      EnemySpawnCooldown = 2
      Enemies = [1, 3]
      UpgradesP1 = [15, 10] // upgrades spawn for 1 player game mode
      UpgradesP2 = [15, 14, 10, 9] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 11
    object
      MapName = "level_12"
      EnemiesPool = 20
      MaxEnemies = 4
      EnemySpawnCooldown = 2.5
      Enemies = [3, 4]
      UpgradesP1 = [17, 12, 5] // upgrades spawn for 1 player game mode
      UpgradesP2 = [17, 16, 12, 11, 5, 4] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 12
    object
      MapName = "level_13"
      EnemiesPool = 30
      MaxEnemies = 4
      EnemySpawnCooldown = 2.5
      Enemies = [3, 4]
      UpgradesP1 = [23, 15, 10] // upgrades spawn for 1 player game mode
      UpgradesP2 = [23, 22, 15, 14, 10, 9] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 13
    object
      MapName = "level_14"
      EnemiesPool = 30
      MaxEnemies = 4
      EnemySpawnCooldown = 2.5
      Enemies = [3, 4, 5]
      UpgradesP1 = [25, 20, 15] // upgrades spawn for 1 player game mode
      UpgradesP2 = [25, 24, 20, 19, 15, 14] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 14
    object
      MapName = "level_15"
      EnemiesPool = 30
      MaxEnemies = 5
      EnemySpawnCooldown = 2
      Enemies = [3, 4]
      UpgradesP1 = [27, 23, 17] // upgrades spawn for 1 player game mode
      UpgradesP2 = [27, 26, 23, 22, 17, 16] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 15
    object
      MapName = "level_16"
      EnemiesPool = 30
      MaxEnemies = 5
      EnemySpawnCooldown = 2
      Enemies = [4, 5]
      UpgradesP1 = [27, 23, 17] // upgrades spawn for 1 player game mode
      UpgradesP2 = [27, 26, 23, 22, 17, 16] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 16
    object
      MapName = "level_17"
      EnemiesPool = 35
      MaxEnemies = 6
      EnemySpawnCooldown = 2
      Enemies = [4]
      UpgradesP1 = [30, 25, 20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [30, 29, 25, 24, 20, 19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 17
    object
      MapName = "level_18"
      EnemiesPool = 35
      MaxEnemies = 6
      EnemySpawnCooldown = 2
      Enemies = [3]
      UpgradesP1 = [30, 25, 20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [30, 29, 25, 24, 20, 19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 18
    object
      MapName = "level_19"
      EnemiesPool = 35
      MaxEnemies = 6
      EnemySpawnCooldown = 2
      Enemies = [3, 5]
      UpgradesP1 = [30, 25, 20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [30, 29, 25, 24, 20, 19] // upgrades spawn for 2 players game mode
    end,
    // LEVEL 19
    object
      MapName = "level_20"
      EnemiesPool = 50
      MaxEnemies = 8
      EnemySpawnCooldown = 2
      Enemies = [3, 4, 5]
      UpgradesP1 = [40, 30, 20] // upgrades spawn for 1 player game mode
      UpgradesP2 = [40, 39, 30, 29 20, 19] // upgrades spawn for 2 players game mode
    end
  ]

//// PLAYER TANKS /////////////////////////////////////////////////////////////////////////////////////////////////////  
  PlayerTanks = [
    // PLAYER TYPE 0
    object
      HullSpriteP1 = "hull_c_01"
      HullSpriteP2 = "hull_d_01"
      GunSpriteP1 = "gun_c_01"
      GunSpriteP2 = "gun_d_01"
      TrackSprite = "track_01"
      TrackOffset = 6
      MoveSpeed = 0.75
      ProjectileType = 0
      AttackDamage = 100
      ProjectileSpeed = 1
      Cooldown = 1
      MaxHealth = 100
    end,
    // PLAYER TYPE 1 - sniper
    object
      HullSpriteP1 = "hull_c_02"
      HullSpriteP2 = "hull_d_02"
      GunSpriteP1 = "gun_c_02"
      GunSpriteP2 = "gun_d_02"
      TrackSprite = "track_03"
      TrackOffset = 6
      MoveSpeed = 0.75
      ProjectileType = 2
      AttackDamage = 100
      ProjectileSpeed = 4
      Cooldown = 2
      MaxHealth = 100
    end,
    // PLAYER TYPE 2 - speedster
    object
      HullSpriteP1 = "hull_c_08"
      HullSpriteP2 = "hull_d_08"
      GunSpriteP1 = "gun_c_08"
      GunSpriteP2 = "gun_d_08"
      TrackSprite = "track_02"
      TrackOffset = 4
      MoveSpeed = 1.25
      ProjectileType = 0
      AttackDamage = 100
      ProjectileSpeed = 2
      Cooldown = 0.25
      MaxHealth = 100
    end,
    // PLAYER TYPE 2 - titan
    object
      HullSpriteP1 = "hull_c_05"
      HullSpriteP2 = "hull_d_05"
      GunSpriteP1 = "gun_c_07"
      GunSpriteP2 = "gun_d_07"
      TrackSprite = "track_04"
      TrackOffset = 6
      MoveSpeed = 1
      ProjectileType = 3
      AttackDamage = 200
      ProjectileSpeed = 1.5
      Cooldown = 0.75
      MaxHealth = 100
    end
  ]
  
//// ENEMY TANKS //////////////////////////////////////////////////////////////////////////////////////////////////////
  EnemyTanks = [
    // ENEMY TYPE 0 - target hunter lvl 1
    object
      HullSprite = "hull_a_01"
      GunSprite = "gun_a_01"
      TrackSprite = "track_01"
      TrackOffset = 6
      HuntTarget = "TARGET"
      MoveSpeed = 0.25
      MaxObstacklesBeforeFire = 2
      PrefPlayerNumber = 0
      ProjectileType = 0
      AttackDamage = 10
      ProjectileSpeed = 1
      Cooldown = 3
      Health = 100
    end,
    // ENEMY TYPE 1 - player hunter lvl 1
    object
      HullSprite = "hull_a_03"
      GunSprite = "gun_a_03"
      TrackSprite = "track_02"
      TrackOffset = 5
      HuntTarget = "PLAYER"
      MoveSpeed = 0.45
      MaxObstacklesBeforeFire = 2
      PrefPlayerNumber = 0
      ProjectileType = 0
      AttackDamage = 10
      ProjectileSpeed = 1
      Cooldown = 2
      Health = 100
    end,
    // ENEMY TYPE 2 - target hunter artilery lvl 1
    object
      HullSprite = "hull_a_02"
      GunSprite = "gun_a_02"
      TrackSprite = "track_03"
      TrackOffset = 6
      HuntTarget = "TARGET"
      MoveSpeed = 0.20
      MaxObstacklesBeforeFire = 6
      PrefPlayerNumber = 0
      ProjectileType = 1
      AttackDamage = 25
      ProjectileSpeed = 1
      Cooldown = 5
      Health = 100
    end,
    // ENEMY TYPE 3 - target hunter lvl 2
    object
      HullSprite = "hull_a_06"
      GunSprite = "gun_a_06"
      TrackSprite = "track_01"
      TrackOffset = 6
      HuntTarget = "TARGET"
      MoveSpeed = 0.5
      MaxObstacklesBeforeFire = 2
      PrefPlayerNumber = 0
      ProjectileType = 0
      AttackDamage = 20
      ProjectileSpeed = 1.2
      Cooldown = 3
      Health = 200
    end,
    // ENEMY TYPE 4 - player hunter lvl 2
    object
      HullSprite = "hull_a_08"
      GunSprite = "gun_a_08"
      TrackSprite = "track_03"
      TrackOffset = 5
      HuntTarget = "PLAYER"
      MoveSpeed = 0.65
      MaxObstacklesBeforeFire = 2
      PrefPlayerNumber = 0
      ProjectileType = 2
      AttackDamage = 20
      ProjectileSpeed = 1.2
      Cooldown = 2
      Health = 200
    end,
    // ENEMY TYPE 5 - target hunter artilery lvl 2
    object
      HullSprite = "hull_a_07"
      GunSprite = "gun_a_07"
      TrackSprite = "track_07"
      TrackOffset = 6
      HuntTarget = "TARGET"
      MoveSpeed = 0.20
      MaxObstacklesBeforeFire = 10
      PrefPlayerNumber = 0
      ProjectileType = 1
      AttackDamage = 50
      ProjectileSpeed = 1.5
      Cooldown = 5
      Health = 300
    end
  ]
  
//// PROJECTILES //////////////////////////////////////////////////////////////////////////////////////////////////////
  ProjectileTypes = [
    // PROJECTILE TYPE 0
    object
      Sprite = "light_shell"
      Sound = "rlauncher"
      SpriteSizeX = 10
      SpriteSizeY = 10
      CollisionSizeX = 4
      CollisionSizeY = 4
    end,
    // PROJECTILE TYPE 1 - artilery
    object
      Sprite = "heavy_shell"
      Sound = "ren"
      SpriteSizeX = 12
      SpriteSizeY = 12
      CollisionSizeX = 5
      CollisionSizeY = 5
    end,
    // PROJECTILE TYPE 2 - high speed/sniper
    object
      Sprite = "plasma"
      Sound = "ren3"
      SpriteSizeX = 12
      SpriteSizeY = 12
      CollisionSizeX = 5
      CollisionSizeY = 5
    end,
    // PROJECTILE TYPE 3 - big one
    object
      Sprite = "grenade"
      Sound = "teleport"
      SpriteSizeX = 15
      SpriteSizeY = 15
      CollisionSizeX = 10
      CollisionSizeY = 10
    end
  ]
end
end()



function()
// represents entity in game world

Entity = class
  // Next number for Entity unique identifiers
  NextEntityId = 0
  
//// constructor
  // @entityName:string - Name of this Entity.
  constructor = function(entityName = "entity")
    // increase the class static property to count number of entities
    Entity.NextEntityId += 1 // increase instance count
    
    // Entity's unique identifier
    this.Id = Entity.NextEntityId
    
    // game reference to access other entities in game world
    Game = 0
  
    // components of this entities
    Components = []
    
    Name = entityName + "_" + Id
    
    // A flag marking state of the Entity in the  game world. Set to 'true' during spawning
    Initialized = false
    
    // reference to TransformComponent. It's set in Init(). Must be set manually for Entities that don't have Transform Component while Init() is called.
    Transform = 0
    
    // A flag informing that this entity was marked for deletion. Will be removed from game world by next global update
    Delete = false
  end
  
//// AddComponent - add new component to entity
  // @component:Component - instance of a class that extends from Component
  AddComponent = function(component)
    Components.push(component)
    component.Owner = this
    
    // initialize component if entity is initialized
    // used in case of adding components to Entity that is already spwaned into the game world
    if Initialized then component.Init() end
  end
  
//// GetComponent - get component of particular class
  // @componentClass:Class - class to look for
  // @returns:Component - Instance of Component class that is attached to this Entity. Returns 0 if no component of given class was found
  GetComponent = function(componentClass)
    for component in Components
      if component.class == componentClass then
        return component
      end
    end
    return 0
  end

//// Init - initializes Entity. Called by Spawn() method in Game class
  Init = function()
    // find Transform Component reference
    Transform = GetComponent(TransformComponent)
    
    // initialize all components that are already added
    for component in Components
      component.Init()
    end
    
    Initialized = true
  end
  
//// Update - update all attached component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    for component in Components
      component.Update(deltaTime)
    end
  end
  
//// Draw - draw all component
  // @layer:int - currently drawn layer
  Draw = function(layer)
    for component in Components
      component.Draw(layer)
    end
  end
  
//// Destroy - destroy all components
  Destroy = function()
    for component in Components
      component.Destroy()
    end
  end
end
end()



function()
// game object - holds game logic

GameManager = class
  
//// constructor
  constructor = function()
    // all entities in the game world
    Gameworld = 0
    
    // physcs engine instance
    Physics = 0
    
    // map engine instance
    Map = 0
    
    // AI overseer instance
    Ai = 0
    
    // UI Manager instance
    Ui = 0
    
    // Database Index of current level
    CurrentLevelIndex = 0
    
    // ref to player entities
    Player1 = 0
    Player2 = 0
    
    // entity that is an enemy target. If destroyed then game is lost
    Target = 0
    
    // cumulative score for all players
    Score = 0
    Player1Kills = 0
    Player2Kills = 0
    
    // number of draw layers
    DrawLayersCount = 3
    
    // timer used in GameOver_PlayerWon() and GameOver_PlayerLost() to give player play for extra seconds after condition was met
    // prevents sudden cut to  win/lost intermission screen
    GameFinishedTimer = 0
    // on game over, holds information if player won the game
    PlayerWon = 0
  end
  
//// AddSpecialEntities - add special entities based on possition data from loaded map
  AddSpecialEntities = function()
    // PLAYER 1 entity
    if Map.Player1StartPosition != 0 then
      local playerTank = Database.PlayerTanks[0]
      Player1 = new Entity("player1")
      Player1.AddComponent(new TransformComponent(Map.Player1StartPosition.X, Map.Player1StartPosition.Y))
      Player1.AddComponent(new TankSpriteComponent(playerTank.HullSpriteP1, playerTank.GunSpriteP1, playerTank.TrackSprite, playerTank.TrackOffset))
      Player1.AddComponent(new PlayerControllerComponent(1, playerTank.MoveSpeed))
      Player1.AddComponent(new CollisionComponent("PLAYER", Map.Player1StartPosition.X, Map.Player1StartPosition.Y, 15, 15, true, true))
      //Player1.AddComponent(new AiControllerComponent("ENEMYFIRST", playerTank.MoveSpeed, 3))
      //Player1.AddComponent(new CollisionComponent("PLAYER", Map.Player1StartPosition.X, Map.Player1StartPosition.Y, 15, 15, true, false))
      Player1.AddComponent(new HealthComponent(playerTank.MaxHealth))
      Player1.AddComponent(new AttackComponent(playerTank.ProjectileType, playerTank.AttackDamage, playerTank.ProjectileSpeed, playerTank.Cooldown))
      Player1.AddComponent(new UpgradeComponent(0))
      Spawn(Player1)
    end
    // PLAYER 2 entity
    if Input.Player2 != 0 and Map.Player2StartPosition != 0 then
      local playerTank = Database.PlayerTanks[0]
      Player2 = new Entity("player2")
      Player2.AddComponent(new TransformComponent(Map.Player2StartPosition.X, Map.Player2StartPosition.Y))
      Player2.AddComponent(new TankSpriteComponent(playerTank.HullSpriteP2, playerTank.GunSpriteP2, playerTank.TrackSprite, playerTank.TrackOffset))
      Player2.AddComponent(new PlayerControllerComponent(2, playerTank.MoveSpeed))
      Player2.AddComponent(new CollisionComponent("PLAYER", Map.Player1StartPosition.X, Map.Player1StartPosition.Y, 15, 15, true, true))
      //Player2.AddComponent(new AiControllerComponent("ENEMYLAST", playerTank.MoveSpeed, 3))
      //Player2.AddComponent(new CollisionComponent("PLAYER", Map.Player1StartPosition.X, Map.Player1StartPosition.Y, 15, 15, true, false))
      Player2.AddComponent(new HealthComponent(playerTank.MaxHealth))
      Player2.AddComponent(new AttackComponent(playerTank.ProjectileType, playerTank.AttackDamage, playerTank.ProjectileSpeed, playerTank.Cooldown))
      Player2.AddComponent(new UpgradeComponent(0))
      Spawn(Player2)
    end
    // TARGET entity
    if Map.TargetPosition != 0 then
      Target = new Entity("target")
      Target.AddComponent(new TransformComponent(Map.TargetPosition.X, Map.TargetPosition.Y))
      Target.AddComponent(new SpriteComponent("goalstar", 2, 16, 16))
      Target.AddComponent(new CollisionComponent("WALL", Map.TargetPosition.X, Map.TargetPosition.Y, 16, 16, false, false))
      Target.AddComponent(new HealthComponent(1))
      Spawn(Target)
    end
  end
  
//// Spawn - add entity to the game world and call init() for it
  // @entity:Entity - object to add to game world. Instance of class that extends Entity
  Spawn = function(entity)
    Gameworld.push(entity)
    entity.Game = this
    entity.Init()
  end
  
//// Spawns effect - dedicated entity with just transform and sprite components
  // @spriteName:string - name of the effect sprite
  // @posX:number - position of the effect on x axis
  // @posY:number - position of the effect on y axis
  // @sizeX:number - size of effect on x axis
  // @sizeY:number - size of effect on y axis
  // @rotation:number - rotation in angles
  // @lifetime:number - how long the effect should stay in game world
  SpawnEffect = function(spriteName, posX, posY, sizeX, sizeY, rot, lifetime)
    local explosion = new Entity("effect")
    explosion.AddComponent(new TransformComponent(posX, posY, rot))
    explosion.AddComponent(new SpriteComponent(spriteName, 3, sizeX, sizeY, lifetime))
    Spawn(explosion)
  end
  
//// Destroy - Remove entity from game world. Entity will be marked as deleted and removed on next global update
  // @entity:Entity - object to remove from game world. Instance of class that extends Entity
  // @instigator:Entity - entity that fired projectile that destroyed object
  Destroy = function(entity, instigator)
    // if any player destroyed - game over
    if entity == Player1 or entity == Player2 then
      // spawn explosion effect
      local position = entity.Transform.Position
      local rotation = random.nextInt(8) * 45
      SpawnEffect("enemy_explo", position.X, position.Y, 128, 128, rotation, 2.1)
      
      // player is dead - game over
      GameOver_PlayerLost()
    end
    
    if entity == Target then
      // spawn explosion effect
      local position = entity.Transform.Position
      SpawnEffect("targetexplosion", position.X, position.Y, 128, 128, 0, 2.1)
      
      // target destroyed - game over
      GameOver_PlayerLost()
    end
    
    // if enemy was destroyed - inform AI Overseer
    if entity.Name.startsWith("enemy") then
      Score += 100
      if instigator == Player1 then Player1Kills += 1 end
      if instigator == Player2 then Player2Kills += 1 end
      Ai.EnemyDestroyed(entity)
      
      // spawn explosion effect
      local position = entity.Transform.Position
      local rotation = random.nextInt(8) * 45
      SpawnEffect("enemy_explo", position.X, position.Y, 80, 80, rotation, 2.1)
      // sound effect
      Noise.EnemyDied()
      
      // check if enemies left mets upgrade threshold
      local thresholds = Database.GetUpgrades()
      local enemiesLeft = Ai.Enemies.length + Ai.EnemiesPool
      // if yes, spawn upgrade trigger entity in place of destroyed enemy
      if thresholds.contains(enemiesLeft) then
        local position = entity.Transform.Position
        
        local upgrade = new Entity("upgrade")
        upgrade.AddComponent(new TransformComponent(position.X, position.Y))
        upgrade.AddComponent(new SpriteComponent("upgrade", 1, 16, 16))
        upgrade.AddComponent(new CollisionComponent("TRIGGER", position.X, position.Y, 5, 5, false, true))
        Game.Spawn(upgrade)
      end
    end
    
    // if part of map was destroyed - inform map engin
    if entity.Name.startsWith("map") then
      Map.MapDestroyed(entity)
      Ai.BuildVectorFieldToTarget()
      
      // spawn explosion effect
      local position = entity.Transform.Position
      local rotation = random.nextInt(8) * 45
      SpawnEffect("map_explo", position.X, position.Y, 64, 64, rotation, 1.1)
      // sound effect
      Noise.MapDestroyed()
    end
    
    // mark entity for deletion
    entity.Delete = true
  end
  
//// GameOver_PlayerWon - called when player won
  GameOver_PlayerWon = function()
    PlayerWon = true
    GameFinishedTimer = 0.000001 // start timer to the end of game
    Noise.StopMusic()
    Noise.WinJingle()
  end
  
//// GameOver_PlayerLost - called when player lost
  GameOver_PlayerLost = function()
    PlayerWon = false
    GameFinishedTimer = 0.000001 // start timer to the end of game
    Noise.StopMusic()
    Noise.LoseJingle()
  end
  
//// FindEntityByName - returns first entity with name that starts with the supplied string.
  // @name:string - string that will be matched against beginning of entity's name
  // @return:Entity - Entity with name matching the string. Returns 0 if no entity was found
  FindEntityByName = function(name)
    for entity in Gameworld
      if entity.Name.startsWith(name) then return entity end
    end
    return 0
  end

//// FindAllEntitiesByName - returns list with all entities with name that starts with the supplied string
  // @name:string - string that will be matched against beginning of entity's name
  // @returns:Entity[] - list of all entities with names matching the string. Returns empty list if no entity was found
  FindAllEntitiesByName = function(name)
    local entities = []
    
    for entity in Gameworld
      if entity.Name.startsWith(name) then entities.push(entity) end
    end
    
    return entities
  end
  
//// Init - init game world - call init() for all entities that are already in the game world
  Init = function()
    // score for this round
    Score = 0
    Player1Kills = 0
    Player2Kills = 0
    
    // initialize game world
    Gameworld = []
    
    // initialize physics engine
    Physics = new PhysicEngine()
    Physics.Init()
    
    // initialize AI overseer
    Ai = new AiOverseer(this)
    
    // initialize map engine
    Map = new MapEngine()
    
    // load level
    Map.LoadMap(Database.GetMapName())
    for entity in Map.Entities
      Spawn(entity)
    end

    // add special entities - player, target point, etc.
    AddSpecialEntities()
    
    // build ai nav map
    Ai.BuildVectorFieldToTarget()
    
    Ai.EnemySpawnPoints = Map.EnemyStartPositions
    // enemies are spawned in AiOverseer in Update() function
    
    Ui = new UiManager()
  end
  
//// Update - update all entities in game world
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    Score -= deltaTime // lower score by 1 per second
    
    // if game ended, increase GameFinishedTimer timer
    if GameFinishedTimer > 0 then 
      GameFinishedTimer += deltaTime
    end
    if GameFinishedTimer > 4 then
      GameFinishedTimer = 0
      GameFinished(PlayerWon) // game finished. Defined in main.ms
    end
    
    local deletedEntities = []
    
    // update physics state
    Physics.Update(deltaTime)
    
    // update AI state
    Ai.Update(deltaTime)
    
    // update game state
    for entity in Gameworld
      if entity.Delete == false then
        entity.Update(deltaTime)
      else
        deletedEntities.push(entity)
      end
    end
    
    // delete marked entities
    for entity in deletedEntities
      local index = Gameworld.indexOf(entity)
      entity.Destroy()
      Gameworld.removeAt(index)
    end
  end
  
//// Draw - draw all entities in game world
  Draw = function()
    for layer = 0 to DrawLayersCount
      for entity in Gameworld
        entity.Draw(layer)
      end
    end
    
    //draw ui
    Ui.Draw()
    
    // DEBUG draw calls
    //Physics.DEBUG_DrawColliders()
    //Ai.DEBUG_DrawTargetVectorField()
    //Ai.DEBUG_DrawPlayer1VectorField()
    //Map.DEBUG_DisplayNavGrid()
  end
end
end()



function()
// component that handles health, damage and destruction of entity, along with visual representation

HealthComponent = class extends Component
//// constructor
  // @health:number - starting/max amount of health
  // @layer:int - layer on which health effects will be drawn
  constructor = function(health = 100, layer = 2)
    super()
    
    this.Health = health
    this.MaxHealth = health // start fully healed
    this.Layer = layer
    
    this.DamageSpriteRotation = 90 * random.nextInt(4)
  end
  
//// Init - Initialize component's members
  Init = function()
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
    if Owner.Name.startsWith("map") then
    if this.Layer == layer then
        if Health < MaxHealth then
          local position = Owner.Transform.Position
          if Health > (MaxHealth/2) then
            // from 50% to 99% health
            screen.setDrawRotation(DamageSpriteRotation)
            screen.drawSprite("damage_01", position.X, position.Y, 16, 16)
            screen.setDrawRotation(0)
          elsif Health < (MaxHealth/2) then
            // under 50% health
            screen.setDrawRotation(DamageSpriteRotation)
            screen.drawSprite("damage_02", position.X, position.Y, 16, 16)
            screen.setDrawRotation(0)
          end
        end
      end
    end
  end
  
//// Destroy - Destroy component and cleanup
  Destroy = function()
  end
  
//// DealDamage - receives damage. Mostly called by external source on collision
  // @damageAmount:number - amount of damage received
  // @instigator:Entity - entity that fired the projectile that dealt damage
  // @returns:bool - true if entity was destroyed as a result of dealing damage
  DealDamage = function(damageAmount, instigator)
    Health -= damageAmount
    if Health <= 0 then
      Owner.Game.Destroy(Owner, instigator)
      return true
    end
    return false
  end
end
end()



function()
// structure that holds a state of actions based on raw input from a device on last update

InputActions = class
  constructor = function()
    // actions
    this.Up = false
    this.Left = false
    this.Down = false
    this.Right = false
    this.Fire = false
    this.Menu = false
    this.UpBegin = false
    this.LeftBegin = false
    this.DownBegin = false
    this.RightBegin = false
    this.FireBegin = false
    this.MenuBegin = false
  end
  
//// Reset - reset all actions to false
  Reset = function()
    this.Up = false
    this.Left = false
    this.Down = false
    this.Right = false
    this.Fire = false
    this.Menu = false
    this.UpBegin = false
    this.LeftBegin = false
    this.DownBegin = false
    this.RightBegin = false
    this.FireBegin = false
    this.MenuBegin = false
  end
end
end()



function()
// Abstraction layer for all input options
// supports keyboard, gamepad and touchscreen

// Input Manager deals in devices. It reacts to raw device input and set actions in an object assigned to device.
// The rest of the game deals in actors - Player1 and Player2 variables. Those are used to read actions.
// The game cares that Player 1 wants to go up, not whether they used keyboard, gamepad or touch controls to announce that
// To make it work exactl same object is assigned to the device and to a player that selected specific device.
// For example, if player 1 selected keyboard, then:
//            this.Player1 = this.Keyboard = new InputAction()
// Because both variables "point" at the same object, InputManager can set action though one variable and everything else can read actions through second variable.

InputManager = class
//// constructor
  constructor = function()
    // flag marking, that controls are locked for specific player
    this.ControlsLocked = false
    
    // tells which player selected keyboard device 
    this.KeyboardPlayer = ""
    // tells which player selected gamepad device
    this.GamepadPlayer = ""
    // tells which player selected touch device
    this.TouchPlayer = ""
    
    // input actors
    this.Player1 = 0
    this.Player2 = 0
    
    // input devices
    this.Keyboard = 0
    this.Gamepad = 0
    this.Touch = 0
    
    // touch on-screen button bounds. Updated in DrawTouchControls in case of screen size change during gameplay
    // index 0 - button's center X
    // index 1 - button's center Y
    // index 2 - half of size
    this.TouchDpadUp = [0, 0, 0]
    this.TouchDpadLeft = [0, 0, 0]
    this.TouchDpadDown = [0, 0, 0]
    this.TouchDpadRight = [0, 0, 0]
    this.TouchDpadUpLeft = [0, 0, 0]
    this.TouchDpadUpRight = [0, 0, 0]
    this.TouchDpadDownLeft = [0, 0, 0]
    this.TouchDpadDownRight = [0, 0, 0]
    this.TouchFire = [0, 0, 0]
    this.TouchMenu = [0, 0, 0]
    
    // load required fonts
    screen.loadFont("EnterCommand")
  end
  
//// Init - Initialize Input Manager
  Init = function()
  end
  
//// Update - Update Input manager. Read input data from all devices
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    if ControlsLocked == false then InputSelectionControls()
    else
      if Keyboard != 0 then  UpdateKeyboard() end
      if Gamepad != 0 then UpdateGamepad() end
      if Touch != 0 then UpdateTouch() end
    end
  end
  
//// Draw - Draw input selection menu. Used for input selection screen at the beginning of game
  Draw = function()
    if screen.isFontReady("EnterCommand") then
      screen.setFont("EnterCommand")
      screen.drawText("WELCOME!", 0, 93, 20, "rgb(255,255,255)")
      screen.drawText("Before playing the game you need to select input device.", 0, 80, 10, "rgb(255,255,255)")
      
      screen.drawText("PLAYER 1 / MENU", -100, 57, 10)
      screen.drawText("PLAYER 2", 100, 57, 10)
      
      // keyboard
      local keyboardPosX = 0
      if KeyboardPlayer == "PLAYER1" then keyboardPosX = -100
      elsif KeyboardPlayer == "PLAYER2" then keyboardPosX = 100 end
      
      screen.drawSprite("keyboard_icon", keyboardPosX, 25, 75, 30) // keyboard icon
      screen.setAlpha(0.5)
      screen.fillRect(keyboardPosX, 26, 110, 15,"rgb(0,0,0)")
      screen.setAlpha(1)
      screen.drawText("Keyboard: W, A, S, D or arrow keys to move", keyboardPosX, 30, 6,"rgb(255,255,255)")
      screen.drawText("SPACE to shoot and ESC for pause menu", keyboardPosX, 23, 6,"rgb(255,255,255)")
      
      // gamepad
      local gamepadPosX = 0
      if GamepadPlayer == "PLAYER1" then gamepadPosX = -100
      elsif GamepadPlayer == "PLAYER2" then gamepadPosX = 100 end
      
      screen.drawSprite("gamepad_icon", gamepadPosX, -15, 55, 30) // gamepad icon
      screen.setAlpha(0.5)
      screen.fillRect(gamepadPosX, -14, 110, 15,"rgb(0,0,0)")
      screen.setAlpha(1)
      screen.drawText("Gamepad: D-pad to move", gamepadPosX, -10, 6, "rgb(255,255,255)")
      screen.drawText("X to shoot and MENU for pause menu", gamepadPosX, -17, 6, "rgb(255,255,255)")
      
      // touchscreen
      local touchPosX = 0
      if TouchPlayer == "PLAYER1" then touchPosX = -100
      elsif TouchPlayer == "PLAYER2" then touchPosX = 100 end
        
      screen.drawSprite("touchscreen_icon", touchPosX, -55, 55, 50) // touchscreen icon
      screen.setAlpha(0.5)
      screen.fillRect(touchPosX, -54, 110, 16,"rgb(0,0,0)")
      screen.setAlpha(1)
      screen.drawText("Touch: On-screen d-pad to move", touchPosX, -50, 6, "rgb(255,255,255)")
      screen.drawText("Touch     to shoot and     for pause menu", touchPosX, -57, 6, "rgb(255,255,255)")
      screen.drawSprite("fire_icon2", touchPosX-35, -57, 8, 8)
      screen.drawSprite("menu_icon", touchPosX+10, -57, 8, 8)
      
      // P1 SHOOT to continue / can't continue without P1 input selected
      if KeyboardPlayer == "PLAYER1" or GamepadPlayer == "PLAYER1" or TouchPlayer == "PLAYER1" then
        screen.drawText("Press SHOOT on PLAYER 1 device to continue!", 0, -95, 10, "rgb(255,255,255)")
      else
        screen.drawText("Can't continue before selecting input for PLAYER 1", 0, -95, 10, "rgb(255,255,255)")
      end
    else
      screen.drawText("Loading...", 0, -95, 10, "rgb(255,255,255)")
    end
  end
  
//// DrawTouchControls - draws on-screen controller. Called by draw() in main.ms if touch capability is detected
  DrawTouchControls = function()
    // calcualte X position of icon to anchor them to edge of the screen
    local dpadX = round(screen.width / 2) - 42 // 42 = 40+2. 40 is half of d-pad size when drawn on screen. 2 is offset from the edge
    local fireiconX = round(screen.width / 2) - 26 // 26 = 24+2. 24 is half of fire icon size when drawn on screen. 2 is offset from the edge
    screen.drawSprite("dpad", -dpadX, -58, 80, 80)
    
    screen.drawSprite("fire_icon2", fireiconX, -75, 48, 48)
    
    screen.drawSprite("menu_icon", fireiconX, 75, 48, 48)
    
    // store coords for "active" areas for each button. Those coords are later used to check if player touched screen within button areas
    // up
    TouchDpadUp[0] = -dpadX
    TouchDpadUp[1] = -30
    TouchDpadUp[2] = 15
    // left
    TouchDpadLeft[0] = -dpadX-28
    TouchDpadLeft[1] = -58
    TouchDpadLeft[2] = 15
    // down
    TouchDpadDown[0] = -dpadX
    TouchDpadDown[1] = -86
    TouchDpadDown[2] = 15
    // right
    TouchDpadRight[0] = -dpadX+28
    TouchDpadRight[1] = -58
    TouchDpadRight[2] = 15
    // up left
    TouchDpadUpLeft[0] = -dpadX-28
    TouchDpadUpLeft[1] = -30
    TouchDpadUpLeft[2] = 15
    // up right
    TouchDpadUpRight[0] = -dpadX+28
    TouchDpadUpRight[1] = -30
    TouchDpadUpRight[2] = 15
    // down left
    TouchDpadDownLeft[0] = -dpadX-28
    TouchDpadDownLeft[1] = -86
    TouchDpadDownLeft[2] = 15
    // down right
    TouchDpadDownRight[0] = -dpadX+28
    TouchDpadDownRight[1] = -86
    TouchDpadDownRight[2] = 15
    
    // fire
    TouchFire[0] = fireiconX
    TouchFire[1] = -75
    TouchFire[2] = 24
    // menu
    TouchMenu[0] = fireiconX
    TouchMenu[1] = 75
    TouchMenu[2] = 24
  end
  
//// IsInsideBounds - checks if supplied coords are inside touch button's bounds
  // @x:number - touch input on X axis
  // @y:number - touch input on Y axis
  // @bounds:int[] - one of the touch on-screen button's bounds
  IsInsideBounds = function(x, y, bounds)
    // x must be between center-size/2 and center+size/2. Center for x axis is bounds[0]. bounds[2] is size/2
    // y must be between center-size/2 and center+size/2. Center for y axis is bounds[1]. bounds[2] is size/2
    
    // if x or y are outside of bounds, return false
    if x < (bounds[0] - bounds[2]) then return false end
    if x > (bounds[0] + bounds[2]) then return false end
    if y < (bounds[1] - bounds[2]) then return false end
    if y > (bounds[1] + bounds[2]) then return false end
    return true
  end
  
//// UpdateTouch - update touch raw input
  UpdateTouch = function()
    if system.inputs.touch then
      if touch.touching then
        for t in touch.touches
          if IsInsideBounds(t.x, t.y, TouchDpadUp) or IsInsideBounds(t.x, t.y, TouchDpadUpLeft) or IsInsideBounds(t.x, t.y, TouchDpadUpRight) then 
            // if action is not yet set, that means this is the first update where it would be, so Begin needs to be set
            if this.Touch.Up == false then this.Touch.UpBegin = true else this.Touch.UpBegin = false end
            this.Touch.Up = true 
          else this.Touch.Up = false end
          
          if IsInsideBounds(t.x, t.y, TouchDpadLeft) or IsInsideBounds(t.x, t.y, TouchDpadUpLeft) or IsInsideBounds(t.x, t.y, TouchDpadDownLeft) then 
            if this.Touch.Left == false then this.Touch.LeftBegin = true else this.Touch.LeftBegin = false end
            this.Touch.Left = true 
          else this.Touch.Left = false end
          
          if IsInsideBounds(t.x, t.y, TouchDpadDown) or IsInsideBounds(t.x, t.y, TouchDpadDownLeft) or IsInsideBounds(t.x, t.y, TouchDpadDownRight) then 
            if this.Touch.Down == false then this.Touch.DownBegin = true else this.Touch.DownBegin = false end
            this.Touch.Down = true 
          else this.Touch.Down = false end
          
          if IsInsideBounds(t.x, t.y, TouchDpadRight) or IsInsideBounds(t.x, t.y, TouchDpadUpRight) or IsInsideBounds(t.x, t.y, TouchDpadDownRight) then 
            if this.Touch.Right == false then this.Touch.RightBegin = true else this.Touch.RightBegin = false end
            this.Touch.Right = true 
          else this.Touch.Right = false end
          
          if IsInsideBounds(t.x, t.y, TouchFire) then 
            if this.Touch.Fire == false then this.Touch.FireBegin = true else this.Touch.FireBegin = false end
            this.Touch.Fire = true 
          else this.Touch.Fire = false end
          
          if IsInsideBounds(t.x, t.y, TouchMenu) then 
            if this.Touch.Menu == false then this.Touch.MenuBegin = true else this.Touch.MenuBegin = false end
            this.Touch.Menu = true 
          else this.Touch.Menu = false end
        end
      else
        this.Touch.Reset()
      end
    end
  end
  
//// UpdateKeyboard - update keyboard raw input
  UpdateKeyboard = function()
    if keyboard.W or keyboard.ARROW_UP then this.Keyboard.Up = true else this.Keyboard.Up = false end
    if keyboard.A or keyboard.ARROW_LEFT then this.Keyboard.Left = true else this.Keyboard.Left = false end
    if keyboard.S or keyboard.ARROW_DOWN then this.Keyboard.Down = true else this.Keyboard.Down = false end
    if keyboard.D or keyboard.ARROW_RIGHT then this.Keyboard.Right = true else this.Keyboard.Right = false end
    if keyboard.SPACE then this.Keyboard.Fire = true else this.Keyboard.Fire = false end
    if keyboard.ESCAPE then this.Keyboard.Menu = true else this.Keyboard.Menu = false end
    if keyboard.press.W or keyboard.press.ARROW_UP then this.Keyboard.UpBegin = true else this.Keyboard.UpBegin = false end
    if keyboard.press.A or keyboard.press.ARROW_LEFT then this.Keyboard.LeftBegin = true else this.Keyboard.LeftBegin = false end
    if keyboard.press.S or keyboard.press.ARROW_DOWN then this.Keyboard.DownBegin = true else this.Keyboard.DownBegin = false end
    if keyboard.press.D or keyboard.press.ARROW_RIGHT then this.Keyboard.RightBegin = true else this.Keyboard.RightBegin = false end
    if keyboard.press.SPACE then this.Keyboard.FireBegin = true else this.Keyboard.FireBegin = false end
    if keyboard.press.ESCAPE then this.Keyboard.MenuBegin = true else this.Keyboard.MenuBegin = false end
  end
  
//// UpdateGamepad - update gamepad raw input
  UpdateGamepad = function()
    if gamepad.DPAD_UP then this.Gamepad.Up = true else this.Gamepad.Up = false end
    if gamepad.DPAD_LEFT then this.Gamepad.Left = true else this.Gamepad.Left = false end
    if gamepad.DPAD_DOWN then this.Gamepad.Down = true else this.Gamepad.Down = false end
    if gamepad.DPAD_RIGHT then this.Gamepad.Right = true else this.Gamepad.Right = false end
    if gamepad.X then this.Gamepad.Fire = true else this.Gamepad.Fire = false end
    if gamepad.MENU then this.Gamepad.Menu = true else this.Gamepad.Menu = false end
    if gamepad.press.DPAD_UP then this.Gamepad.UpBegin = true else this.Gamepad.UpBegin = false end
    if gamepad.press.DPAD_LEFT then this.Gamepad.LeftBegin = true else this.Gamepad.LeftBegin = false end
    if gamepad.press.DPAD_DOWN then this.Gamepad.DownBegin = true else this.Gamepad.DownBegin = false end
    if gamepad.press.DPAD_RIGHT then this.Gamepad.RightBegin = true else this.Gamepad.RightBegin = false end
    if gamepad.press.X then this.Gamepad.FireBegin = true else this.Gamepad.FireBegin = false end
    if gamepad.press.MENU then this.Gamepad.MenuBegin = true else this.Gamepad.MenuBegin = false end
  end
  
//// InputSelectionControls - updates input selection state. Only available at the beginning, while controls are not locked
  InputSelectionControls = function()
    if keyboard.press.A or keyboard.press.ARROW_LEFT then
      // move keyboard control left
      if KeyboardPlayer == "PLAYER2" then KeyboardPlayer = ""
      elsif KeyboardPlayer == "" and GamepadPlayer != "PLAYER1" and TouchPlayer != "PLAYER1" then KeyboardPlayer = "PLAYER1" end
    end
    if keyboard.press.D or keyboard.press.ARROW_RIGHT then
      // move keyboard control right
      if KeyboardPlayer == "PLAYER1" then KeyboardPlayer = ""
      elsif KeyboardPlayer == "" and GamepadPlayer != "PLAYER2" and TouchPlayer != "PLAYER2" then KeyboardPlayer = "PLAYER2" end
    end
    if keyboard.press.SPACE then
      if KeyboardPlayer == "PLAYER1" then
        LockControls()
      end
    end
    
    if gamepad.press.DPAD_LEFT then
      if GamepadPlayer == "PLAYER2" then GamepadPlayer = ""
      elsif GamepadPlayer == "" and KeyboardPlayer != "PLAYER1" and TouchPlayer != "PLAYER1" then GamepadPlayer = "PLAYER1" end
    end
    if gamepad.press.DPAD_RIGHT then
      if GamepadPlayer == "PLAYER1" then GamepadPlayer = ""
      elsif GamepadPlayer == "" and KeyboardPlayer != "PLAYER2" and TouchPlayer != "PLAYER2" then GamepadPlayer = "PLAYER2" end
    end
    if gamepad.press.X then
      if GamepadPlayer == "PLAYER1" then
        LockControls()
      end
    end
    
    if touch.touching and touch.press then
      if IsInsideBounds(touch.x, touch.y, TouchDpadLeft) then
        if TouchPlayer == "PLAYER2" then TouchPlayer = ""
        elsif TouchPlayer == "" and KeyboardPlayer != "PLAYER1" and GamepadPlayer != "PLAYER1" then TouchPlayer = "PLAYER1" end
      end
      if IsInsideBounds(touch.x, touch.y, TouchDpadRight) then
        if TouchPlayer == "PLAYER1" then TouchPlayer = ""
        elsif TouchPlayer == "" and KeyboardPlayer != "PLAYER2" and GamepadPlayer != "PLAYER2" then TouchPlayer = "PLAYER2" end
      end
      if IsInsideBounds(touch.x, touch.y, TouchFire) then
        if TouchPlayer == "PLAYER1" then
          LockControls()
        end
      end
    end
  end
  
//// LockControls - called when player confirmed input device selection
  LockControls = function()
    // lock control selection
    ControlsLocked = true
    
    // assign input devices
    // assign same object to two variables so it can be accessed from device and player side
    // this makes exchanging info between Input Manager and Player Controller easier
    if KeyboardPlayer == "PLAYER1" then Player1 = new InputActions() Keyboard = Player1 end
    if KeyboardPlayer == "PLAYER2" then Player2 = new InputActions() Keyboard = Player2 end
    
    if GamepadPlayer == "PLAYER1" then Player1 = new InputActions() Gamepad = Player1 end
    if GamepadPlayer == "PLAYER2" then Player2 = new InputActions() Gamepad = Player2 end
    
    if TouchPlayer == "PLAYER1" then Player1 = new InputActions() Touch = Player1 Touch.Fire = true end
    if TouchPlayer == "PLAYER2" then Player2 = new InputActions() Touch = Player2 Touch.Fire = true end
    // 'Touch.Fire = true' artificaly sets state of InputActions what is most probable at this time.
    // To call LockControls() player had to touch TouchFire button and it's almost impossible that they will release the button fast enough to not holding when Main Menu is displayed
    // Since new InputAction is created player still holding button would be registered as new press, causing to click through the main menu.
    
    InputInitialized() // defined in main.ms
  end
end
end()



function()
// MAIN - Game entry point

// Current game state. Possible options are:
// INPUTSELECT - one time input method selection screen that shows up after game start
// MAINMENU - game's main menu. Start new game. Perhaps some settings. Quit game
// INTERMISSION - screen shown before each mission, at game over and when player finishes the game
// GAME - gameplay
// PAUSE - game pause menu. Continue or quit current level
GameState = "INPUTSELECT"

// Global InputManager - input abstraction layer 
Input = 0

// Global MenuManager - display and handles main menu logic
Menu = 0

// Global GameManager - handles gameplay logic and draw
Game = 0

// Global SoundManager - handles sound effects and background music.
Noise = 0 // variable renamed to Noise after switching to microScript v2, in which Sound is a reserved global variable name. So I'll make some Noise instead :D

// Global variable to keep track of current level's DB index
GameLevelIndex = -1
// Global variable to keep track of player(s) score between levels. Reset on BeginNewCampaign()
GameScore = 0
GamePlayer1Kills = 0
GamePlayer2Kills = 0

// InputInitialized - informs main game that InputManager finished setting up input. Called by Inputmanager.LockControls()
InputInitialized = function()
  GameState = "MAINMENU"
  Noise.PlayMainMenuMusic()
end

// GameInit - called in InputManager, switches game state to GAME to begin next level
GameInit = function()
  Game.CurrentLevelIndex = GameLevelIndex
  Game.Init()
  GameState = "GAME"
  
  Noise.PlayGameBackgroundMusic(GameLevelIndex)
end

// BeginNewCampaign - begin new campaing. Show intermission screen for new campaing
BeginNewCampaign = function()
  GameScore = 0
  GamePlayer1Kills = 0
  GamePlayer2Kills = 0

  GameLevelIndex = -1
  GameState = "INTERMISSION"
  Menu.CurrentMenu = "INTERMISSION"
  Menu.PreviousLevelResult = 0
  
  Noise.StopMusic()
  Noise.PlayNewGameEffect()
end

// GameFinished - game ended with player winning or loosing. Load next level or go back to main menu
// playerWon:bool - if 'true', then player won the game
GameFinished = function(playerWon)
  if Game.Score > 0 then GameScore += round(Game.Score) end // VERY long or very bad games can have score lower than zero. Don't take that into account, because having negative score sucks ;-)
  GamePlayer1Kills += Game.Player1Kills
  GamePlayer2Kills += Game.Player2Kills
  
  GameState = "INTERMISSION"
  Menu.CurrentMenu = "INTERMISSION"
  if playerWon then
    Menu.PreviousLevelResult = "PLAYERWON"
    
    // if there is no more levels, it means that player just won lvl 20. Congrats!
    local nextLevelExists = (GameLevelIndex + 1) < Database.Levels.length
    if nextLevelExists == false then Noise.PlayCampaignWonMusic() end
  else
    Menu.PreviousLevelResult = "PLAYERLOST"
    Noise.PlayCampaignLostMusic()
  end
end

// NextLevel - begins game on next level. Called from MenuManager in INTERMISSION mode
NextLevel = function()
  GameLevelIndex += 1
  GameInit()
end

// GoToMainMenu - returns to main menu when the game is over. Called from MenuManager in INTERMISSION mode
GoToMainMenu = function()
  GameState = "MAINMENU"
  Menu.CurrentMenu = "MAINMENU"
  Noise.PlayMainMenuMusic()
end

// PauseGame - pauses and resumes game, displaying pause menu
PauseGame = function()
  if GameState == "GAME" then 
    GameState = "PAUSE"
    Menu.CurrentMenu = "PAUSEMENU"
  elsif GameState == "PAUSE" then 
    GameState = "GAME" 
  end
end

// MicroStudio.init function
init = function()
  // initialize game objects
  Input = new InputManager()
  Noise = new SoundManager()
  Menu = new MenuManager()
  Game = new GameManager()
end

// MicroStudio.updatye function
update = function()
  Input.Update(1/60) // update input no matter which state
  if GameState == "MAINMENU" then Menu.Update(1/60) end
  if GameState == "GAME" then Game.Update(1/60) end
  if GameState == "INTERMISSION" then Menu.Update(1/60) end
  if GameState == "PAUSE" then Menu.Update(1/60) end
end

// MicroStudio.draw function
draw = function()
  screen.clear()
  
  if GameState == "INPUTSELECT" then Input.Draw() end
  if GameState == "MAINMENU" then Menu.Draw() end
  if GameState == "GAME" then Game.Draw() end
  if GameState == "INTERMISSION" then Menu.Draw() end
  if GameState == "PAUSE" then
    // on pose menu, draw game and overlay pause menu over it
    Game.Draw()
    Menu.Draw()
  end
  
  if system.inputs.touch then 
    Input.DrawTouchControls() 
  end
end
end()



function()
// handles loading maps

MapEngine = class
//// constructor
  constructor = function()
    // list of entities created based on current map
    Entities = []
    
    // 2D list with 1's and 0's. Used for navigation: 0 - traversable; 1 - not-traversable
    NavGrid = 0
    
    // reference to currently loaded Map object
    CurrentMap = 0
    
    // Vector2D with position of Target
    TargetPosition = 0
    
    // Vector2Ds with position of Player start points
    Player1StartPosition = 0
    Player2StartPosition = 0
    
    // list of Vecotr2D with positions of starting points for enemies
    EnemyStartPositions = []
    
    // list of Vecotr2D with position (in NavGrid units) bunker entities.
    // this is separate from normal NavGrid, because those should block only some of the AI entities
    BunkerPositions = []
  end
  
//// LoadMap - loads map and creates all Entities. Fills NavGrids.
  // @mapName:string - name of the map asset
  LoadMap = function(mapName)
    // add ground
    AddGround()
    
    // add map
    AddMap(mapName)
    
    // add walls
    AddWalls()
  end
  
//// MapDestroyed - called by GameManager when part of the map is destroyed
  // @destroyedEntity:Entity - Entity that was destroyed
  MapDestroyed = function(destroyedEntity)
    // update NavGrid
    local position = destroyedEntity.Transform.Position
    local navGridX = (position.X - (CurrentMap.block_width / 2) + 160) / CurrentMap.block_width
    local navGridY = (position.Y - (CurrentMap.block_height / 2) + 84) / CurrentMap.block_height
    
    NavGrid[navGridX][navGridY] = 0
  end
  
//// AddGround - adds Entity coresponds to ground under everything
  AddGround = function()
    local ground = new Entity("ground")
    ground.AddComponent(new TransformComponent(0, 4))
    ground.AddComponent(new RectComponent(0, 320, 176, "rgb(20,75,19)"))
    Entities.push(ground)
    
    for i = 0 to 20
      local posX = random.nextInt(304) - 152
      local posY = random.nextInt(152) - 76
      local foliage = random.nextInt(2)
      local scaleX = 0.5
      local scaleY = 0.5
      if foliage == 0 then scaleY = 0.25 end
      
      local sign = -1
      if random.nextInt(2) == 1 then sign = 1 end
      
      local deco = new Entity("ground_deco")
      deco.AddComponent(new TransformComponent(posX, posY, 0, sign * scaleX, scaleY))
      if foliage == 0 then deco.AddComponent(new AssetSpriteComponent(1, 208, 0, 16, 16)) end
      if foliage == 1 then deco.AddComponent(new AssetSpriteComponent(1, 224, 0, 16, 16)) end
      Entities.push(deco)
    end
  end
  
//// AddWalls - adds Entities that coresponds to walls around the arena
  AddWalls = function()
    local wall = 0
    
    // add horizontal walls at the top (y = 96) and bottom (y = -88)
    for x = -164 to 164 by 8
      wall = new Entity("wall")
      wall.AddComponent(new TransformComponent(x, -88, 0, 0.25, 0.25))
      wall.AddComponent(new SpriteComponent("wall", 2, 8, 8))
      wall.AddComponent(new CollisionComponent("WALL", x, -88, 8, 8))
      Entities.push(wall)
      
      wall = new Entity("wall")
      wall.AddComponent(new TransformComponent(x, 96, 0, 0.25, 0.25))
      wall.AddComponent(new SpriteComponent("wall", 2, 8, 8))
      wall.AddComponent(new CollisionComponent("WALL", x, 96, 8, 8))
      Entities.push(wall)
    end
    
    // add vertical walls on the left (x = -164) and right (x = 164)
    for y = -80 to 88 by 8
      wall = new Entity("wall")
      wall.AddComponent(new TransformComponent(-164, y, 0, 0.25, 0.25))
      wall.AddComponent(new SpriteComponent("wall", 2, 8, 8))
      wall.AddComponent(new CollisionComponent("WALL", -164, y, 8, 8))
      Entities.push(wall)
      
      wall = new Entity("wall")
      wall.AddComponent(new TransformComponent(164, y, 0, 0.25, 0.25))
      wall.AddComponent(new SpriteComponent("wall", 2, 8, 8))
      wall.AddComponent(new CollisionComponent("WALL", 164, y, 8, 8))
      Entities.push(wall)
    end
  end
  
//// AddMap - add entities based on map asset
  // @mapName:string - name of map asset
  AddMap = function(mapName)
    local entity = 0
    
    local mapCell = ""
    
    local spriteName = ""
    local spriteCellX = 0
    local spriteCellY = 0
    local entityPosX = 0
    local entityPosY = 0
    
    CurrentMap = maps[mapName]
    
    // init NavGrid and fill with 0s
    NavGrid = []
    for x = 0 to CurrentMap.width - 1
      NavGrid.push([])
      for y = 0 to CurrentMap.height - 1
        NavGrid[x].push(0)
      end
    end
    
    // read map asset and create Entities depending on sprites in each node
    for x = 0 to CurrentMap.width - 1
      for y = 0 to CurrentMap.height - 1
        mapCell = CurrentMap.get(x, y)
        if mapCell != 0 then
          entityPosX = floor((x * CurrentMap.block_width) + (CurrentMap.block_width / 2) - 160)
          entityPosY = floor((y * CurrentMap.block_height) + (CurrentMap.block_height / 2) - 84)
            
          if mapCell == "player1start" then
            Player1StartPosition = new Vector2D(entityPosX, entityPosY)
          elsif mapCell == "player2start" then
            Player2StartPosition = new Vector2D(entityPosX, entityPosY)
          elsif mapCell == "targetpoint" then
            TargetPosition = new Vector2D(entityPosX, entityPosY)
            AddBunkerAround(entityPosX, entityPosY) // add destructibe bunker around target location
          elsif mapCell == "enemystart" then
            EnemyStartPositions.push(new Vector2D(entityPosX, entityPosY))
          elsif mapCell == "ocean" then
            entity = new Entity("map_ocean")
            entity.AddComponent(new TransformComponent(entityPosX, entityPosY))
            entity.AddComponent(new CollisionComponent("WATER", entityPosX, entityPosY, 16, 16, false, false))
            entity.AddComponent(new SpriteComponent("ocean", 1, 16, 16, 0))
            Entities.push(entity)
            // occupied space
            NavGrid[x][y] = 1
          elsif mapCell == "vines" then
            entity = new Entity("map_vines")
            entity.AddComponent(new TransformComponent(entityPosX, entityPosY))
            entity.AddComponent(new SpriteComponent("vines", 3, 16, 16, 0))
            Entities.push(entity)
            // passable decoration
            NavGrid[x][y] = 0
          else
            spriteName = mapCell.split(":")[0]
            spriteCellX = mapCell.split(":")[1].split(",")[0]
            spriteCellY = mapCell.split(":")[1].split(",")[1]
            
            entity = new Entity("map")
            entity.AddComponent(new TransformComponent(entityPosX, entityPosY))
            entity.AddComponent(new CollisionComponent("WALL", entityPosX, entityPosY, 16, 16, false, false))
            entity.AddComponent(new HealthComponent(100))
            entity.AddComponent(
              new AssetSpriteComponent(
                1, 
                spriteCellX * CurrentMap.block_width, 
                spriteCellY * CurrentMap.block_height, 
                CurrentMap.block_width, 
                CurrentMap.block_height, 
                CurrentMap.block_width, 
                CurrentMap.block_height
              )
            )
            Entities.push(entity)
            // occupied space
            NavGrid[x][y] = 1
          end
        else
          // empty space - navigable terrain
          NavGrid[x][y] = 0
        end
      end
    end
  end
  
//// AddBunkerAround - adds 8 destructible entities to form bunker around location.
  AddBunkerAround = function(targetX, targetY)
    if targetX - 16 >= -152 and targetY - 16 >= -76 then
      AddBunkerAt(targetX - 16, targetY - 16)
    end
    if targetY - 16 >= -76 then
      AddBunkerAt(targetX, targetY - 16)
    end
    if targetX + 16 <= 152 and targetY - 16 >= -76 then
      AddBunkerAt(targetX + 16, targetY - 16)
    end
    
    if targetX - 16 >= -152 then
      AddBunkerAt(targetX - 16, targetY)
    end
    if targetX + 16 <= 152 then
      AddBunkerAt(targetX + 16, targetY)
    end
    
    if targetX - 16 >= -152 and targetY + 16 <= 76 then
      AddBunkerAt(targetX - 16, targetY + 16)
    end
    if targetY + 16 <= 76 then
      AddBunkerAt(targetX, targetY + 16)
    end
    if targetX + 16 <= 152 and targetY + 16 <= 76 then
      AddBunkerAt(targetX + 16, targetY + 16)
    end
  end
  
  AddBunkerAt = function(posX, posY)
    local entity = new Entity("map_bunker")
    entity.AddComponent(new TransformComponent(posX, posY))
    entity.AddComponent(new CollisionComponent("WALL", posX, posY, 16, 16, false, false))
    entity.AddComponent(new HealthComponent(200))
    entity.AddComponent(new SpriteComponent("bunker", 1, 16, 16, 0))
    Entities.push(entity)
    
    local bunkerNavPos = new Vector2D(
      (posX - (CurrentMap.block_width / 2) + 160) / CurrentMap.block_width,
      (posY - (CurrentMap.block_height / 2) + 84) / CurrentMap.block_height
    )
    BunkerPositions.push(bunkerNavPos)
  end
  
//// DEBUG_DisplayNavGrid - display NavGrid value on each node
  DEBUG_DisplayNavGrid = function()
    for x = 0 to CurrentMap.width - 1
      for y = 0 to CurrentMap.height -1
        local value = NavGrid[x][y]
        screen.drawText(value, x * 16 - 160 + 8, y * 16 - 84 + 8, 8, "rgb(255,255,255)")
      end
    end
  end

end
end()



function()
// Handles main menu. Selection of number of players and quitting the game

MenuManager = class
//// constructor
  constructor = function()
    
    // which menu is currently dispplayed. Allowed values: MAINMENU, SUPPORT, CREDITS, INTERMISSION, PAUSEMENU
    this.CurrentMenu = "MAINMENU"
    
    // tracks which option is selected
    this.SelectedOption = 1
    
    // holds info if previous level was lost or won by player
    // Allowed values: PLAYERWON, PLAYERLOST
    // Set inGameFinished() in main.ms. If it's equal to 0, then no levels were played yet (intermission before 1st level)
    PreviousLevelResult = 0
    
    // load required fonts
    screen.loadFont("Edunline")
    screen.loadFont("RetroGaming")
    screen.loadFont("Pixolde")
    screen.loadFont("Pixellari")
    screen.loadFont("PressStart2P")
    screen.loadFont("Romulus") // font used in UiManager
    
    // credits page variables
    CreditsLineHeight = 10
    CreditsScroller = 0
  end
  
//// Init - Initialize Main Menu
  Init = function()
  end
  
//// Update - Update Main Menu
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    if CurrentMenu == "CREDITS" then 
      CreditsScroller += 0.2 
      if CreditsScroller >= 640 then // 640 is a value for Scroller to pgo pass all lines in credits. Figured out by trial-and-error
        AcceptSelectedOption() // auto-close credits page after it reach time
      end
    end
    
    if Input.Player1.DownBegin then
      if CurrentMenu == "MAINMENU" then
        SelectedOption = Clamp(SelectedOption + 1, 1, 4)
      end
      if CurrentMenu == "PAUSEMENU" then
        SelectedOption = Clamp(SelectedOption + 1, 1, 2)
      end
    end
    if Input.Player1.UpBegin then
      if CurrentMenu == "MAINMENU" then
        SelectedOption = Clamp(SelectedOption - 1, 1, 4)
      end
      if CurrentMenu == "PAUSEMENU" then
        SelectedOption = Clamp(SelectedOption - 1, 1, 2)
      end
    end
    if Input.Player1.FireBegin then
      AcceptSelectedOption()
    end
  end
  
//// Draw - Draw Main Menu
  Draw = function()
    // draw Main Menu or Support page
    if CurrentMenu == "MAINMENU" then
      DrawMainMenu()
    end
    if CurrentMenu == "SUPPORT" then
      DrawSupportPage()
    end
    if CurrentMenu == "CREDITS" then
      DrawCreditsPage()
    end
    if CurrentMenu == "INTERMISSION" then
      DrawIntermission()
    end
    if CurrentMenu == "PAUSEMENU" then
      DrawPauseMenu()
    end
  end
  
//// DrawMainMenu - draws main menu
  DrawMainMenu = function()
    // draw background
    screen.drawMap("bg_mainmenu", 0, 0, 320, 200)
    
    // title
    screen.setFont("Edunline")
    screen.drawTextOutline("Panzer!", 0, 49, 40, "rgb(255,0,0)")
    screen.drawText("Panzer!", 0, 50, 40, "rgb(255,255,255)")
    
    // buttons
    // start game
    screen.setFont("RetroGaming")
    screen.drawText("Start campaign", 0, -15, 10, "rgb(255,255,255)")
    if Input.Player2 == 0 then
      screen.drawText("1 Player", 0, -30, 7,"rgb(150,150,150)")
    else
      screen.drawText("2 Players", 0, -30, 7,"rgb(150,150,150)")
    end
    
    screen.drawText("Support", 0, -55, 10, "rgb(255,255,255)")
    screen.drawText("Credits", 0, -70, 10, "rgb(255,255,255)")
    screen.drawText("Quit", 0, -85, 10, "rgb(255,255,255)")
    
    // draw selection arrow
    local cursorPosY = 0
    if SelectedOption == 1 then cursorPosY = -15 end
    if SelectedOption == 2 then cursorPosY = -55 end
    if SelectedOption == 3 then cursorPosY = -70 end
    if SelectedOption == 4 then cursorPosY = -85 end
    screen.drawSprite("cursor", -85, cursorPosY, 40, 20)
  end
  
//// DrawSupportPage - draws support page
  DrawSupportPage = function()
    screen.drawMap("bg_intermission", 0, 0, 320, 200)
    
    // title
    screen.setFont("Edunline")
    screen.drawTextOutline("Panzer!", 0, 77, 40, "rgb(255,0,0)")
    screen.drawText("Panzer!", 0, 78, 40, "rgb(255,255,255)")
    
    screen.setFont("RetroGaming")
    screen.drawText("You think PANZER! is cool?", 0, 30, 8, "rgb(255,255,255)")
    
    screen.setFont("Pixolde")
    screen.drawText("Watch post mortem dev log on YouTube", 0, 5, 10, "rgb(255,255,255)")
    screen.drawText("youtu.be/WWmciThb680", 0, -10, 12, "rgb(255,255,255)")
    
    screen.drawText("- or -", 0, -30, 10, "rgb(255,255,255)")
    
    screen.drawText("Support PANZER! on itch.io", 0, -50, 10, "rgb(255,255,255)")
    screen.drawText("funthingshappen.itch.io/panzer", 0, -64, 12, "rgb(255,255,255)")
    
    // shoot to return
    screen.setFont("RetroGaming")
    screen.drawTextOutline("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,0,0)")
    screen.drawText("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,255,255)")
  end
  
//// DrawCreditsPage - draws credits page
  DrawCreditsPage = function()
    screen.drawMap("bg_intermission", 0, 0, 320, 200)
    
    // title
    screen.setFont("Edunline")
    screen.drawTextOutline("Panzer!", 0, 77, 40, "rgb(255,0,0)")
    screen.drawText("Panzer!", 0, 78, 40, "rgb(255,255,255)")
    
    local credits = [
      "*DESIGN AND CODING",
      " Sebastian [Fun Things Happen]",
      " ",
      " ",
      "*POWERED BY microStudio",
      " created by Gilles Pommereuil",
      " ",
      " ",
      " ",
      ">ART",
      " ",
      "*2D Battle Tanks",
      " by CraftPix.net 2D Game Assets",
      " ",
      "*140 tiles of grassland and mines",
      " by Anokolisa",
      " ",
      "*2D Explosion Animations",
      " by Sinestesia",
      " ",
      "*2D Explosion Animations #2",
      " by Sinestesia",
      " ",
      "*Poof Effect Spritesheet",
      " by jellyfizh",
      " ",
      "*Fireworks Effect Spritesheet",
      " by jellyfizh",
      " ",
      "*Animated Ocean Water Tile",
      " by POKOMOKO",
      " ",
      "*Onscreen Controls",
      " by Kenney",
      " ",
      "*Generic Items",
      " by Kenney",
      " ",
      " ",
      " ",
      ">SOUND",
      " ",
      "*Q009's weapon sounds",
      " by Q009",
      " ",
      "*8-Bit Sound Effects Library",
      " by Little Robot Sound Factory",
      " ",
      " ",
      " ",
      ">MUSIC",
      " ",
      "*5 Chiptunes (Action)",
      " by Juhani Junkala / SubspaceAudio"]
    
    local yMax = 30
    local yMin = -70
    
    for i = 0 to credits.length - 1
      local y = yMin + CreditsScroller - i * CreditsLineHeight
      if y >= yMin and y <= yMax then
        local text = credits[i].substring(1, credits[i].length)
        local fontSize = 7
        if credits[i].startsWith(">") then
          screen.setFont("PressStart2P")
          fontSize = 11
        elsif credits[i].startsWith("*") then 
          screen.setFont("Pixellari")
          fontSize = 8
        else 
          screen.setFont("Pixolde") 
          fontSize = 7
        end
        screen.drawText(text, 0, y, fontSize, "rgb(255,255,255)")
      end
    end
    
    // shoot to return
    screen.setFont("RetroGaming")
    screen.drawTextOutline("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,0,0)")
    screen.drawText("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,255,255)")
  end
  
//// DrawIntermission - draw intemission page
  DrawIntermission = function()
    // GameLevelIndex is an index of "current" level in DB
    // GameLevelIndex + 1 is an index of "next" level in DB
    // while inside screen.drawText() method additional +1 need to be added, since for player, Levels are 1-based
    // GameLevelIndex + 1 while in drawText() is "current" level
    // GameLevelIndex + 2 while in drawText() is "next" level
    
    screen.drawMap("bg_intermission", 0, 0, 320, 200)
    
    // title
    if PreviousLevelResult == 0 then
      screen.setFont("Edunline")
      screen.drawTextOutline("Campaign", 0, 77, 40, "rgb(255,0,0)")
      screen.drawText("Campaign", 0, 78, 40, "rgb(255,255,255)")
      if Input.Player2 != 0 then
        screen.drawText("2 PLAYERS", 0, 40, 20, "rgb(255,255,255)")
      else
        screen.drawText("1 PLAYER", 0, 40, 20, "rgb(255,255,255)")
      end
    elsif PreviousLevelResult == "PLAYERWON" then
      screen.setFont("Edunline")
      screen.drawTextOutline("Congratulations!", 0, 77, 25, "rgb(255,0,0)")
      screen.drawText("Congratulations!", 0, 78, 25, "rgb(255,255,255)")
      screen.drawText("You won LEVEL " + (GameLevelIndex + 1), 0, 40, 20, "rgb(255,255,255)")
    elsif PreviousLevelResult == "PLAYERLOST" then
      screen.setFont("Edunline")
      screen.drawTextOutline("You lost...", 0, 77, 25, "rgb(255,0,0)")
      screen.drawText("You lost...", 0, 78, 25, "rgb(255,255,255)")
      screen.drawText("GAME OVER", 0, 40, 20, "rgb(255,255,255)")
    end
    
    local nextLevelExists = (GameLevelIndex + 1) < Database.Levels.length
    
    if (PreviousLevelResult == 0 or PreviousLevelResult == "PLAYERWON") and nextLevelExists then
      screen.setFont("Pixolde")
      screen.drawText("Next level: LEVEL " + (GameLevelIndex + 2), 0, -20, 20, "rgb(255,255,255)")
      screen.drawText("Current score: " + GameScore, 0, -40, 13, "rgb(255,255,255)")
      screen.drawText("Total PLAYER 1 kills: " + GamePlayer1Kills, 0, -51, 8, "rgb(255,255,255)")
      if Game.Player2 != 0 then
        screen.drawText("Total PLAYER 2 kills: " + GamePlayer2Kills, 0, -60, 8, "rgb(255,255,255)")
      end
      
      // shoot to begin
      screen.setFont("RetroGaming")
      screen.drawTextOutline("Press SHOOT to begin LEVEL " + (GameLevelIndex + 2), 0, -90, 9, "rgb(255,0,0)")
      screen.drawText("Press SHOOT to begin LEVEL " + (GameLevelIndex + 2), 0, -90, 9, "rgb(255,255,255)")
    elsif nextLevelExists == false or PreviousLevelResult == "PLAYERLOST" then
      screen.setFont("Pixolde")
      screen.drawText("End of campaign", 0, -20, 20, "rgb(255,255,255)")
      screen.drawText("Final score: " + GameScore, 0, -40, 13, "rgb(255,255,255)")
      screen.drawText("Total PLAYER 1 kills: " + GamePlayer1Kills, 0, -51, 8, "rgb(255,255,255)")
      if Game.Player2 != 0 then
        screen.drawText("Total PLAYER 2 kills: " + GamePlayer2Kills, 0, -60, 8, "rgb(255,255,255)")
      end
      
      // shoot to begin
      screen.setFont("RetroGaming")
      screen.drawTextOutline("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,0,0)")
      screen.drawText("Press SHOOT to return to MAIN MENU", 0, -90, 9, "rgb(255,255,255)")
    end
  end
  
//// DrawPauseMenu - draw pause menu
  DrawPauseMenu = function()
    // background
    screen.setAlpha(0.5)
    screen.fillRect(0, 0, 140, 80,"rgb(0,0,0)")
    screen.setAlpha(1)
    screen.drawMap("bg_pause", 0, 0, 320, 200)
    
    // title
    screen.setFont("Edunline")
    screen.drawTextOutline("Pause", 0, 34, 15, "rgb(255,0,0)")
    screen.drawText("Pause", 0, 35, 15, "rgb(255,255,255)")
    
    // options
    screen.setFont("RetroGaming")
    screen.drawText("Continue", 0, -5, 10, "rgb(255,255,255)")
    screen.drawText("Quit", 0, -25, 10, "rgb(255,255,255)")
    
    // draw selection arrow
    local cursorPosY = 0
    if SelectedOption == 1 then cursorPosY = -5 end
    if SelectedOption == 2 then cursorPosY = -25 end
    screen.drawSprite("cursor", -60, cursorPosY, 40, 20)
  end
  
//// AcceptSelectedOption - accept selection and performs required actions
  AcceptSelectedOption = function()
    // hack for touch controls.
    // Forces Fire to be "held" after each use of touch to accept option in menu
    // this prevents Fire Press from being set multiple times in a row and causing skipping of manu options
    if Input.Touch != 0 then 
      Input.Touch.Fire = true
      Input.Touch.FireBegin = false
    else
      Input.Player1.Reset()
    end
    
    if CurrentMenu == "MAINMENU" then
      if SelectedOption == 1 then
        BeginNewCampaign() // global function defined in main.ms
      end
      if SelectedOption == 2 then
        CurrentMenu = "SUPPORT"
        SelectedOption = 1
      end
      if SelectedOption == 3 then
        CurrentMenu = "CREDITS"
        SelectedOption = 1
        CreditsScroller = 0
      end
      if SelectedOption == 4 then
        system.exit()
      end
    elsif CurrentMenu == "SUPPORT" or CurrentMenu == "CREDITS" then
      CurrentMenu = "MAINMENU"
      SelectedOption = 1
    elsif CurrentMenu == "INTERMISSION" then
      local nextLevelExists = (GameLevelIndex + 1) < Database.Levels.length
      if nextLevelExists and PreviousLevelResult != "PLAYERLOST" then
        NextLevel()
      else
        GoToMainMenu()
        SelectedOption = 1
      end
    elsif CurrentMenu == "PAUSEMENU" then
      if SelectedOption == 1 then
        PauseGame() // unpause game. Global function defined in main.ms
      elsif SelectedOption == 2 then
        GoToMainMenu()
        SelectedOption = 1
      end
    end
  end
end
end()



function()
// Handles calls to Matter physics engine

PhysicEngine = class
//// constructor
  constructor = function()
    // Matter engine instance. Created in init()
    Engine = 0
    
    // CollisionTuple collection. Relation between Entitie's CollisionComponents and Matter.Body's Colliders
    Colliders = []
  end
  
//// GetComponent - find component related to supplied collider
  // @collider:Matter.Body - collider related to component that must be found
  // @returns:CollisionComponent - component related to supplied collider. Returns 0 if component was not found
  GetComponent = function(collider)
    for tuple in Colliders
      if tuple.Collider == collider then 
        return tuple.Component
      end
    end
    return 0
  end
  
//// Init - initialize physics engine
  Init = function()
    Engine = Matter.Engine.create()
    Engine.gravity.scale = 0 // disable gravity
    
    // subscribe to event
    Matter.Events.on(Engine, "collisionActive", OnCollisionActive)
  end
  
//// Update - update physics engine
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    Matter.Engine.update(Engine, 1000/60)
    // all Matter events are fired after each update - handled by callbacks set up in Init()
  end
  
//// AddCollision - create collider for supplied component and add it to physics simulation
  // @component:ColliderComponent - component to add to simulation
  // @returns:Matter.Body.Rectangle - Matter collider assigned to supplied component
  AddCollision = function(component)
    local newRect = Matter.Bodies.rectangle(component.Position.X, component.Position.Y, component.Width, component.Height, object isSensor = true isStatic = not component.IsMovable end)
    Matter.Composite.add(Engine.world, newRect)
    Colliders.push(new CollisionTuple(component, newRect))
    return newRect
  end
  
//// RemoveCollision - remove collider related to supplied component from physics simulation
  // @component:CollisionComponent - component related to collider that must be removed
  RemoveCollision = function(component)
    local removeAtIndex = -1
    for i = 0 to Colliders.length - 1
      if Colliders[i].Component == component then 
        removeAtIndex = i 
        break
      end
    end
  
    if removeAtIndex >= 0 then
      Matter.Composite.remove(Engine.world, Colliders[removeAtIndex].Collider)
      Colliders.removeAt(removeAtIndex)
    else
      print("ERROR: Removing Collision Component from " + Component.Owner.Name + " but it can't be found in physics components collection.")
    end
  end
  
//// SetTransform - set position and rotation of supplied collider
  // @collider:Matter.Body.Rectangle - collider that will have transform changed
  // @transformComponent:TransformComponent - component that holds information that will be used to change position and rotation
  SetTransform = function(collider, transformComponent)
    Matter.Body.setPosition(collider, object 
                                        x = transformComponent.Position.X
                                        y = transformComponent.Position.Y
    end)
    // setting rotation, while correct, was disabled because it makes the feel of the gameplay worse.
    // While approaching a wall at 45 degree angle tank stops, because the very corner of collision clips into the wall
    // keeping the colliders at 0 degree all the time causees slight overlap of sprites in those cases, but it's way less jaring that bouncing off corers of rotated collider
    //Matter.Body.setAngle(collider, transformComponent.Rotation/180*PI)
  end
  
//// Trace - returns list of components that are related to colliders that intersects line between supplied points
  // @startPoint:Vector2D - vector with coords of line's starting point
  // @endPoint:Vector2D - vector with coords of line's end point
  // @returns:CollisionComponent[] - All Components related to colliding colliders. List can be empty
  Trace = function(startPoint, endPoint)
    local collisions = Matter.Query.ray(Matter.Composite.allBodies(Engine.world), 
                                         object x=startPoint.X y=startPoint.Y end,
                                         object x=endPoint.X y=endPoint.Y end)
    local components = []
    for collision in collisions
      // both bodyA and bodyB are set to same collider in this case. Doesn't matter which one is passed to GetComponent()
      local component = GetComponent(collision.bodyA)
      if component.ColliderType != "TRIGGER" and component.ColliderType != "WATER" then // ignore TRIGGERS and WATER - those should not block line of fire
        components.push(component)
      end
    end
    return components
  end
  
//// TraceAiToTarget - special Trace used by AI Controller Component when attacking target. Ignores other Enemies
  // @startPoint:Vector2D - vector with coords of line's starting point
  // @endPoint:Vector2D - vector with coords of line's end point
  // @returns:CollisionComponent[] - All Components related to colliding colliders. List can be empty
  TraceAiToTarget = function(startPoint, endPoint)
    local collisions = Matter.Query.ray(Matter.Composite.allBodies(Engine.world), 
                                         object x=startPoint.X y=startPoint.Y end,
                                         object x=endPoint.X y=endPoint.Y end)
    local components = []
    for collision in collisions
      // both bodyA and bodyB are set to same collider in this case. Doesn't matter which one is passed to GetComponent()
      local component = GetComponent(collision.bodyA)
      if component.ColliderType != "ENEMY" and component.ColliderType != "TRIGGER" and component.ColliderType != "WATER" then // ignore TRIGGERS and WATER - those should not block line of fire
        components.push(component)
      end
    end
    return components
  end
  
//// OnCollisionActive - STATIC EVENT. Called by physics engine after each update for each pair of colliding bodies.
  // @event:object - Matter object with information about pair of colliding objects
  OnCollisionActive = function(event)
    local pairs = event.pairs
    for pair in pairs
      // call methods through global Game object, because it's not officially supported to invoke class members from Matter events
      local componentA = Game.Physics.GetComponent(pair.bodyA)
      local componentB = Game.Physics.GetComponent(pair.bodyB)
      
      if componentA != 0 and componentA.NotifyAboutCollisions then componentA.CollidesWith(componentB, pair.bodyA) end
      if componentB != 0 and componentB.NotifyAboutCollisions then componentB.CollidesWith(componentA, pair.bodyB) end
    end
  end
  
//// DEBUG_DrawColliders - draws all collider rectangles
  DEBUG_DrawColliders = function()
    for body in Matter.Composite.allBodies(Engine.world)
      local size = Matter.Vector.magnitude(Matter.Vector.sub(body.vertices[0], body.vertices[1]))
      local color = "rgb(0,0,255)"
      if not body.isStatic then color = "rgb(0,255,0)" end
      
      screen.setDrawRotation(body.angle/PI*180)
      screen.drawRect(body.position.x, body.position.y, size, size, color)
      screen.setDrawRotation(0)
    end
  end
end
end()



function()
// component controlls Entity based on player input

PlayerControllerComponent = class extends Component
//// constructor
  // @playerNumber:int - number of player that uses this controller. Used to identify input device. Allowed values <1,2>
  // @moveSpeed:number - speed of movement for player
  constructor = function(playerNumber, moveSpeed)
    super()
    
    this.PlayerNumber = playerNumber
    this.MoveSpeed = moveSpeed
    
    // reference to input device object
    this.PlayerInput = 0
    if PlayerNumber == 1 then PlayerInput = Input.Player1 end
    if PlayerNumber == 2 then PlayerInput = Input.Player2 end
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    local movement = new Vector2D(0, 0) // movement for this update
    
    // read input
    if PlayerInput.Up then
      movement.Y += 1
    end
    if PlayerInput.Down then
      movement.Y -= 1
    end
    if PlayerInput.Left then
      movement.X -= 1
    end
    if PlayerInput.Right then
      movement.X += 1
    end
    if PlayerInput.FireBegin then
      Owner.GetComponent(AttackComponent).Attack()
    end
    if PlayerInput.MenuBegin then
      PauseGame() // global function defined in main.ms
    end
    
    local transform = Owner.Transform
    
    if movement.GetLength() > 0 then
      transform.IsMoving = true
      
      // normalize movement vector for corect diagonal speed
      normalized = movement.GetNormalized()
      
      transform.MovementDirection = normalized
      // apply movement to entity's transform
      transform.Position.X += normalized.X * MoveSpeed
      transform.Position.Y += normalized.Y * MoveSpeed
      transform.Rotation = normalized.ToAngle()
    else
      transform.IsMoving = false
    end
  end
end
end()



function()
// component controlls entity to behave like a projectile

ProjectileControllerComponent = class extends Component
//// constructor
  // @instigator:Entity - entity that created this projectile
  // @damage:number - amount of damage delt on hit
  // @moveSpeed:number - speed at wich the projectile moves
  constructor = function(instigator, damage, moveSpeed)
    super()
    
    // entity which fired this projectile
    this.Instigator = instigator
    
    // amount of damage delt on hit
    this.Damage = damage
    
    // projectile's movement speed
    this.MoveSpeed = moveSpeed
    // projectile's movement direction. Calculated in init()
    MoveDirection = 0
  end
  
//// Init - Initialize component's members
  Init = function()
    local transform = Owner.Transform
    
    MoveDirection = new Vector2D(1,0)
    MoveDirection.RotateByAngle(transform.Rotation)
    MoveDirection = MoveDirection.GetNormalized()
    
    transform.MovementDirection = MoveDirection
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    local transform = Owner.Transform
    
    // apply movement to entity's transform
    transform.Position.X += MoveDirection.X * MoveSpeed
    transform.Position.Y += MoveDirection.Y * MoveSpeed
  end
end
end()



function()
// component to draw a filled rectangle

RectComponent = class extends Component
//// constructor
  constructor = function(layer, width, height, color)
    super()
    
    this.Layer = layer
    this.Width = width
    this.Height = height
    this.Color = color
  end
  
//// Init - Initialize component's members
  Init = function()
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
    if this.Layer == layer then
      local position = Owner.Transform.Position
      screen.fillRect(position.X, position.Y, Width, Height, Color)
    end
  end
  
//// Destroy - Destroy component and cleanup
  Destroy = function()
  end
end
end()



function()
// Sound manager. Handles playing sounds and background music. Single instance is created in main.ms

SoundManager = class
//// constructor
  constructor = function()
    // reference to currently playing music. If 0 then no music is playing
    this.CurrentMusic = 0
  end
  
//// PlayMainMenuMusic - plays main menu music. Stops any other music if there is any
  PlayMainMenuMusic = function()
    StopMusic()
    
    CurrentMusic = audio.playMusic("titlescreen", 0.3, true)
    CurrentMusic.play()
  end
  
//// PlayGameBackgroundMusic - play background music for current level
  // @levelnumber:uint - number of current level
  PlayGameBackgroundMusic = function(levelNumber)
    StopMusic()
    
    local musicNumber = levelNumber%3 + 1
    
    CurrentMusic = audio.playMusic("level" + musicNumber, 0.17, true)
    CurrentMusic.play()
  end
  
//// PlayCampaignWonMusic - play background music for 'campaign won intermission screen'
  PlayCampaignWonMusic = function()
    StopMusic()
    
    CurrentMusic = audio.playMusic("titlescreen", 0.3, true)
    CurrentMusic.play()
  end
  
//// PlayCampaignLostMusic - play background music for 'campaign lost intermission screen'
  PlayCampaignLostMusic = function()
    StopMusic()
    
    CurrentMusic = audio.playMusic("ending", 0.3, true)
    CurrentMusic.play()
  end
  
//// PlayNewGameEffect - plays sound effect for selecting new game in main menu
  PlayNewGameEffect = function()
    audio.playSound("quaddamage_shoot", 0.6, 1, 0, false)
  end
  
//// EnemySpawned - play sound effect of spawned enemy
  EnemySpawned = function()
    audio.playSound("jumppad", 0.5, 1, 0, false)
  end
  
//// EnemyDied - play sound effect of enemy dying
  EnemyDied = function()
    audio.playSound("explosion", 0.8, 1, 0, false)
  end
  
//// MapDestroyed - play sound effect of map destroyed
  MapDestroyed = function()
    audio.playSound("grenade2", 0.7, 1, 0, false)
  end
  
//// ProjectileFired - play sound effect of projectile fired
  // soundName:string - name of the sound to play
  ProjectileFired = function(soundName)
    audio.playSound(soundName, 0.4, 1, 0, false)
  end
  
//// ProjectileExploded - play sound effect of projectile exploding
  ProjectileExploded = function()
    audio.playSound("grenade3", 0.5, 1, 0, false)
  end
  
//// Upgrade - play sound effect of player upgrading their tank
  Upgrade = function()
    audio.playSound("pickup_01", 0.45, 1, 0, false)
  end
  
//// WinJingle - play sound jingle to celebrate player's victory
  WinJingle = function()
    audio.playSound("jingle_win_00", 0.45, 1, 0, false)
  end
  
//// LoseJingle - play sound jingle to mourn player's defeat
  LoseJingle = function()
    audio.playSound("jingle_lose_00", 0.45, 1, 0, false)
  end
  
//// StopMusic - stops currently playing music
  StopMusic = function()
    if CurrentMusic != 0 then
      CurrentMusic.stop()
      CurrentMusic = 0
    end
  end
end
end()



function()
// component to draw a single sprite

SpriteComponent = class extends Component
//// constructor
  // @spriteName:string - name of sprrite asset
  // @layer:int - layer on which sprite should be drawn
  // @width:number - width of drawn sprite
  // @height:number - height of drawn sprite
  // @lifetime:number - number of seconds after which Owner of this component should be destroyed automatically. If 0 then will never be destroyed
  constructor = function(spriteName, layer = 0, width = 16, height = 16, lifetime = 0)
    super()
    
    this.Sprite = spriteName
    this.Width = width
    this.Height = height
    this.Layer = layer
    
    this.Lifetime = lifetime
    this.LifetimeTimer = 0
    
    // variables used in animation
    this.FrameCount = sprites[Sprite].frames.length
    this.FrameTime = 1 / sprites[Sprite].fps
    this.FrameTimer = 0
    this.CurrentFrame = 0
  end
  
//// Update - Update component
  // @deltaTime:number - amount of time that passed since last update
  Update = function(deltaTime)
    // check if sprite is past its lifetime
    if Lifetime > 0 then
      LifetimeTimer += deltaTime
      if LifetimeTimer >= Lifetime then 
        Game.Destroy(Owner) 
      end
    end
    
    // handle animation if there's more than 1 frame
    if FrameCount > 1 then
      FrameTimer += deltaTime
      if FrameTimer >= FrameTime then
        CurrentFrame += 1
        if CurrentFrame >= FrameCount then CurrentFrame = 0 end
        FrameTimer = 0
      end
    end
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
    if this.Layer == layer then
      local transform = Owner.Transform
      screen.setDrawRotation(transform.Rotation)
      sprites[Sprite].setFrame(CurrentFrame)
      screen.drawSprite(Sprite, transform.Position.X, transform.Position.Y, Width, Height)
      screen.setDrawRotation(0)
    end
  end
end
end()



function()
// component to draw a tank sprite - a composite sprite build from few parts

TankSpriteComponent = class extends Component
//// constructor
  // @hullSprite:string - name of sprita that will be used as hull
  // @gunSprite:string - name of sprite that will be used as gun
  // @trackSprite:string - name of sprite that will be used as tracks
  // @trackOffset:number - offset by which tracks will be moved away from hull
  constructor = function(hullSprite, gunSprite, trackSprite, trackOffset)
    super()
    
    this.HullSprite = hullSprite
    this.GunSprite = gunSprite
    this.TrackSprite = trackSprite
    Size = 16 // sprite's size in pixels
    this.TrackOffset = trackOffset // offset used for tracks to draw them on both sides of the tank's hull
  end
  
//// Draw - Draw component on particular layer
  // @layer:int - currently drawn layer
  Draw = function(layer)
    if layer == 2 then
      local transform = Owner.Transform
      
      screen.setDrawRotation(transform.Rotation) // -90 because all tank sprites are facing up while 0 degree in engine is right
      
      // a vecotr used to follow entity's rotation, used as pivot for drawing tracks on both sides of the hull
      local vOffset = new Vector2D(0, TrackOffset)
      vOffset.RotateByAngle(transform.Rotation)
      
      // draw tracks. When entity is moving, draw animated sprites. Otherwise draw just 1'st (0 index) frame as static sprite
      if transform.IsMoving then
        screen.drawSprite(TrackSprite, transform.Position.X + vOffset.X, transform.Position.Y + vOffset.Y, Size, Size)
        screen.drawSprite(TrackSprite, transform.Position.X - vOffset.X, transform.Position.Y - vOffset.Y, Size, Size)
      else
        screen.drawSprite(TrackSprite + ".0", transform.Position.X + vOffset.X, transform.Position.Y + vOffset.Y, Size, Size)
        screen.drawSprite(TrackSprite + ".0", transform.Position.X - vOffset.X, transform.Position.Y - vOffset.Y, Size, Size)
      end
      
      // draw hull and gun
      screen.drawSprite(HullSprite, transform.Position.X, transform.Position.Y, Size, Size)
      screen.drawSprite(GunSprite, transform.Position.X, transform.Position.Y, Size, Size)
      
      screen.setDrawRotation(0) // reset drawing rotation
    end
  end
end
end()



function()
// component that stores position and rotation of entity

TransformComponent = class extends Component
//// constructor
  // @posX:number - X axist of position coords
  // @posY:number - Y axis of position coords
  // @rot:number - rotation from x axis in angles
  // @scaleX:number - scale factor on X axis
  // @scaleY:number - scale factor on Y axis
  constructor = function(posX = 0, posY = 0, rot = 0, scaleX = 1, scaleY = 1)
    super()
    
    Position = new Vector2D(posX, posY)
    Rotation = rot
    Scale = new Vector2D(scaleX, scaleY)
    
    IsMoving = false // is entity moving?
    MovementDirection = new Vector2D(0, 0)
  end
end
end()



function()
// relation between CollisionComponent and collider that it created
CollisionTuple = class
//// constructor
  // @component:CollisionComponent - reference to component handling collisions for entity in game world
  // @collider:Matter.Body.Rectangle - refeerence to Matter.Body.Rectangle that represents colliders in physics engine
  constructor = function(component, collider)
    this.Component = component
    this.Collider = collider
  end
end

// relation between Enemy Entity's unique id and VectorField to that enemy
EnemyVectorFieldTuple = class
//// constructor
  // @enemyId:int - unique entity id of an Enemy
  // @vectorField:Vector2D[][] - 2D list of vectors
  constructor = function(enemyId, vectorField)
    this.EnemyId = enemy
    this.VectorField = vectorField
  end
end
end()



function()
// Handles logic of drawing UI

UiManager = class
//// constructor
  constructor = function()
  end
  
//// draw
  Draw = function()
    screen.setFont("Romulus") // font loaded in MenuManager
    
    // player 1
    screen.drawText("Player 1", -145, -96, 8, "rgb(93,146,142)")
    // player 1 health
    local player1Health = Game.Player1.GetComponent(HealthComponent).Health
    if player1Health > 0 then screen.drawSprite("heart", -120, -96, 8, 8) end
    if player1Health >= 25 then screen.drawSprite("heart", -111, -96, 8, 8) end
    if player1Health >= 50 then screen.drawSprite("heart", -102, -96, 8, 8) end
    if player1Health >= 75 then screen.drawSprite("heart", -93, -96, 8, 8) end
    if player1Health == 100 then screen.drawSprite("heart", -84, -96, 8, 8) end
    // player 1 kills
    screen.drawSprite("tank_icon", -70, -96, 8, 8)
    screen.drawText("x" + Game.Player1Kills, -58, -96, 8, "rgb(255,255,255)") // number
    
    if Game.Player2 != 0 then
      // player 2
      screen.drawText("Player 2", 145, -96, 8, "rgb(93,109,146)")
      
      // player 2 health
      local player2Health = Game.Player2.GetComponent(HealthComponent).Health
      if player2Health > 0 then screen.drawSprite("heart", 120, -96, 8, 8) end
      if player2Health >= 25 then screen.drawSprite("heart", 111, -96, 8, 8) end
      if player2Health >= 50 then screen.drawSprite("heart", 102, -96, 8, 8) end
      if player2Health >= 75 then screen.drawSprite("heart", 93, -96, 8, 8) end
      if player2Health == 100 then screen.drawSprite("heart", 84, -96, 8, 8) end
      // player 2 kills
      screen.drawSprite("tank_icon", 60, -96, 8, 8)
      screen.drawText("x" + Game.Player2Kills, 72, -96, 8, "rgb(255,255,255)") // number
    end
    
    // enemies left
    screen.drawText("Enemies left: " + (Game.Ai.EnemiesPool + Game.Ai.Enemies.length), 0, -96, 8, "rgb(255,85,85)")
  end
end
end()



function()

end()



function()
// holds logic for upgrading player tank

UpgradeComponent = class extends Component
  //// constructor
  constructor = function(currentLevel)
    super()
    
    this.CurrentLevel = currentLevel
  end
  
//// Upgrade - upgrades owner to another level
  Upgrade = function()
    if Database.PlayerTanks.length > CurrentLevel + 1 then
      local data = Database.PlayerTanks[CurrentLevel + 1]
      
      local tankSprite = Owner.GetComponent(TankSpriteComponent)
      if Game.Player1 == Owner then
        tankSprite.HullSprite = data.HullSpriteP1
        tankSprite.GunSprite = data.GunSpriteP1
      elsif Game.Player2 == Owner then
        tankSprite.HullSprite = data.HullSpriteP2
        tankSprite.GunSprite = data.GunSpriteP2
      end
      tankSprite.TrackSprite = data.TrackSprite
      tankSprite.TrackOffset = data.TrackOffset
        
      local playerController = Owner.GetComponent(PlayerControllerComponent)
      playerController.MoveSpeed = data.MoveSpeed
        
      local attack = Owner.GetComponent(AttackComponent)
      attack.ProjectileType = data.ProjectileType
      attack.AttackDamage = data.AttackDamage
      attack.ProjectileSpeed = data.ProjectileSpeed
      attack.Cooldown = data.Cooldown
        
      local health = Owner.GetComponent(HealthComponent)
      health.MaxHealth = data.MaxHealth
      
      CurrentLevel += 1
      
      // special effects
      Game.SpawnEffect("firework", Owner.Transform.Position.X, Owner.Transform.Position.Y, 60, 60, 0, 1.16)
      Sound.Upgrade()
    end
  end
end
end()



function()
// bunch of random utility functions

// Clamp - returns value. If value exceeds min or max limits, it returns the limit instead
// @value:number - number to be clamped
// @minVal:number - minimum limit for value
// @maxVal:number - maximum limit for value
// @returns:number - clamped value
Clamp = function(value, minVal, maxVal)
  return min(max(value, minVal), maxVal)
end
end()



function()
// represents a 2D vector along with handful of functions to manipulate them

Vector2D = class
//// constructor
  // @x:number - x axis coord of the vector
  // @y:number - y axis coord of the vecotr
  constructor = function(x = 0, y = 0)
    this.X = x
    this.Y = y
  end
  
//// GetLength -  returns vector's magnitude
  // @returns:number - magnitude (length) of the vector
  GetLength = function()
    return sqrt(X*X + Y*Y)
  end
  
//// GetNormalized - returns normalized form of the vector with length of 1
  // @returns:number - normalized form of vector. If length is equal 0 then returns vector (0,0)
  GetNormalized = function()
    local length = GetLength()
    if length == 0 then
      return new Vector2D(X, Y)
    else
      return new Vector2D(X / length, Y / length)
    end
  end
  
//// Reverse - reverses vector, changing its direction to oposite
  Reverse = function()
    X = -X
    Y = -Y
  end
  
//// ToRadian - returns angle from the x axis in radians
  // @returns:number - angle in radians between x axis and vector
  ToRadian = function()
    return atan2(Y,X)
  end
  
//// ToAngle - returns angle from x axis in degrees
  // @returns:number - angle in degrees between x axis and vector
  ToAngle = function()
    return atan2(Y,X) * (180 / PI)
  end
  
//// RotateByAngle - rotates vector by an angle in degrees
  // @angle:number - angle in degrees
  RotateByAngle = function(angle)
    local x2 = X * cosd(angle) - Y * sind(angle)
    local y2 = X * sind(angle) + Y * cosd(angle)
    X = x2
    Y = y2
  end

//// RotateByRadian - rotates vector by an angle in radians
  // @radian:number - angle in radians
  RotateByRadian = function(radian)
    local x2 = X * cos(radian) - Y * sin(radian)
    local y2 = X * sin(radian) + Y * cos(radian)
    X = x2
    Y = y2
  end
  
//// Add - returns new vector which is a result of adding two vectors
  // @otherVector:Vector2D - vector that will be added
  // @returns:Vector2D - result of adding two vectors
  Add = function(otherVector)
    return new Vector2D(this.X + otherVector.X, this.Y + otherVector.Y)
  end

//// Subtract - subtract other vector
  // @otherVector:Vector2D - vector that will be sunbtracted
  // @returns:Vector2D - result of subtraction
  Subtract = function(otherVector)
    return new Vector2D(this.X - otherVector.X, this.Y - otherVector.Y)
  end
  
//// Multiply - multiplies a vector by a scalar
  // @scalar:number - scalar to multiply vector by
  // @results:Vector2D - result of multiplication
  Multiply = function(scalar)
    return new Vector2D(this.X * scalar, this.Y * scalar)
  end
end
end()



function()
// used by AI to store information for pathfinding. Each Node have it's own location and location of next node on the way to the target

VectorFieldNode = class
//// constructor
  // @positionX - position of this node on x axis
  // @positionY - position of this node on y axis
  // @comeFromX - position of next node on the path on x axis
  // @comeFromY - position of next node on the path on y axis
  constructor = function(positionX, positionY, comeFromX, comeFromY)
    this.PositionX = positionX
    this.PositionY = positionY
    this.ComeFromX = comeFromX
    this.ComeFromY = comeFromY
  end
end
end()
`;