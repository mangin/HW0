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
var x = X0;
var y = Y0;
var i = 0;
var upLeftPossibleCornerX = 0;
var upLeftPossibleCornerY = 0;
var downRightPossibleCornerX = W - 1;
var downRightPossibleCornerY = H - 1;
var BOMB_DIR = "";

function middle(a, b, coordinate) {
    "use strict";
    if ((a + b) % 2 === 0) { return (a + b) / 2; }
    if ((b - a) === 1) {
        if (a === coordinate) { return b; }
        return a;
    }
    if (((a + b + 1) / 2) % 4 === 0) { return (a + b + 1) / 2; }
    if (((a + b - 1) / 2) % 4 === 0) { return (a + b - 1) / 2; }
    if (b - a === 3) { return a + 1; }
    return (a + b - 3) / 2;
}

// game loop
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location
    // (U, UR, R, DR, D, DL, L or UL)

    if (BOMB_DIR === 'U') {
        upLeftPossibleCornerX = x;
        downRightPossibleCornerX = x;
        downRightPossibleCornerY = y - 1;
    } else if (BOMB_DIR === 'UR') {
        upLeftPossibleCornerX = x + 1;
        downRightPossibleCornerY = y - 1;
    } else if (BOMB_DIR === 'R') {
        upLeftPossibleCornerX = x + 1;
        upLeftPossibleCornerY = y;
        downRightPossibleCornerY = y;
    } else if (BOMB_DIR === 'DR') {
        upLeftPossibleCornerX = x + 1;
        upLeftPossibleCornerY = y + 1;
    } else if (BOMB_DIR === 'D') {
        upLeftPossibleCornerX = x;
        upLeftPossibleCornerY = y + 1;
        downRightPossibleCornerX = x;
    } else if (BOMB_DIR === 'DL') {
        upLeftPossibleCornerY = y + 1;
        downRightPossibleCornerX = x - 1;
    } else if (BOMB_DIR === 'L') {
        upLeftPossibleCornerY = y;
        downRightPossibleCornerX = x - 1;
        downRightPossibleCornerY = y;
    } else if (BOMB_DIR === 'UL') {
        downRightPossibleCornerX = x - 1;
        downRightPossibleCornerY = y - 1;
    }

    x = middle(upLeftPossibleCornerX, downRightPossibleCornerX, x);
    y = middle(upLeftPossibleCornerY, downRightPossibleCornerY, y);

    print(x + ' ' + y);
}