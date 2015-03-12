/*global readline */
/*global print */
/*global printErr */
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);
var cur_x = X0;
var cur_y = Y0;
var prev_x = -1;
var prev_y = -1;

var zone_x1 = 0, zone_x2 = W - 1, zone_y1 = 0, zone_y2 = H - 1;

function new_move(x, y, dir) {
    "use strict";
    var new_x, new_y;
    if (dir === "UR") {
        zone_x1 = x + 1;
        zone_y2 = y - 1;
        new_x = x + Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        new_y = y - Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_x === x) {
            new_x += 1;
        }
        if (new_y === y) {
            new_y -= 1;
        }
    } else if (dir === "UL") {
        zone_x2 = x - 1;
        zone_y2 = y - 1;
        new_x = x - Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        new_y = y - Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_x === x) {
            new_x -= 1;
        }
        if (new_y === y) {
            new_y -= 1;
        }
    } else if (dir === "DR") {
        zone_x1 = x + 1;
        zone_y1 = y + 1;
        new_x = x + Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        new_y = y + Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_x === x) {
            new_x += 1;
        }
        if (new_y === y) {
            new_y += 1;
        }
    } else if (dir === "DL") {
        zone_x1 = x - 1;
        zone_y1 = y + 1;
        new_x = x - Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        new_y = y + Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_x === x) {
            new_x -= 1;
        }
        if (new_y === y) {
            new_y += 1;
        }
    }
    if (dir === "U") {
        zone_x2 = x;
        zone_y2 = y;
        new_x = x;
        new_y = y - Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_y === y) {
            new_y -= 1;
        }
    } else if (dir === "D") {
        zone_x2 = x;
        zone_y1 = y;
        new_x = x;
        new_y = y + Math.floor(Math.abs(zone_y2 - zone_y1 + 1) / 2);
        if (new_y === y) {
            new_y += 1;
        }
    } else if (dir === "R") {
        zone_y2 = y;
        zone_x1 = x;
        new_y = y;
        new_x = x + Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        if (new_x === x) {
            new_x += 1;
        }
    } else if (dir === "L") {
        zone_y2 = y;
        zone_x2 = x;
        new_y = y;
        new_x = x - Math.floor(Math.abs(zone_x2 - zone_x1 + 1) / 2);
        if (new_x === cur_x) {
            new_x -= 1;
        }
    }
    return {
        "new_x": new_x,
        "new_y": new_y
    };
}

// game loop
var BOMB_DIR;
var new_zone;
var new_coord;
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    printErr(BOMB_DIR, W, H, N);
    printErr(zone_x1, zone_x2, zone_y1, zone_y2);
    switch (BOMB_DIR) {
    case "U":
        new_coord = new_move(cur_x, cur_y, "U");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "UR":
        new_coord = new_move(cur_x, cur_y, "UR");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "R":
        new_coord = new_move(cur_x, cur_y, "R");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "DR":
        new_coord = new_move(cur_x, cur_y, "DR");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "D":
        new_coord = new_move(cur_x, cur_y, "D");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "DL":
        new_coord = new_move(cur_x, cur_y, "DL");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "L":
        new_coord = new_move(cur_x, cur_y, "L");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    case "UL":
        new_coord = new_move(cur_x, cur_y, "UL");
        printErr(new_coord.new_x, new_coord.new_y);
        cur_x = new_coord.new_x;
        cur_y = new_coord.new_y;
        print(cur_x, cur_y);
        break;
    }
    printErr("last_zones", zone_x1, zone_x2, zone_y1, zone_y2);
}