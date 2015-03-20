/*jslint bitwise:true */
/*global readline:false, parseInt:false, print: false */

var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);

var stepX, stepY;


(function (X0, Y0) {
    "use strict";
    var BOMB_DIR, vert = /UD/, hor = /RL/;

    // game loop
    while (true) {
        BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        if (vert.test(BOMB_DIR)) {
            if (BOMB_DIR.charAt(0) === 'D') {
                if (!stepY) {
                    stepY = (H - Y0 - 1);
                }
                stepY = (stepY + (stepY & 1)) / 2;

                Y0 += stepY;
                Y0 = Math.min(H - 1, Y0);
            } else {
                if (!stepY) {
                    stepY = Y0;
                }
                stepY = (stepY + (stepY & 1)) / 2;
                Y0 -= stepY;
                Y0 = Math.max(0, Y0);
            }
            BOMB_DIR = BOMB_DIR.substr(1, 1);
        }
        if (hor.test(BOMB_DIR)) {
            if (BOMB_DIR.charAt(0) === 'R') {
                if (!stepX) {
                    stepX = (W - X0 - 1);
                }
                stepX = (stepX + (stepX & 1)) / 2;
                X0 += stepX;
                X0 = Math.min(W - 1, X0);
            } else {
                if (!stepX) {
                    stepX = X0;
                }
                stepX = (stepX + (stepX & 1)) / 2;
                X0 -= stepX;
                X0 = Math.max(0, X0);
            }
        }
        // Write an action using print()
        // To debug: printErr('Debug messages...');

        print(X0 + " " + Y0); // the location of the next window Batman should jump to.
    }
}(X0, Y0));