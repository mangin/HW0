/*global readline, print*/
/* by Sirotkin Dmitry, FIIT-301 */
var inputs, W, H, N, X0, Y0, batman, BOMB_DIR;
inputs = readline().split(' ');
W = parseInt(inputs[0], 10); // width of the building.
H = parseInt(inputs[1], 10); // height of the building.
N = parseInt(readline(), 10); // maximum number of turns before game over.

inputs = readline().split(' ');
X0 = parseInt(inputs[0], 10);
Y0 = parseInt(inputs[1], 10);

function Batman(x, y, w, h) {
    'use strict';
    this.x = x;
    this.y = y;
    this.bldngXA = 0;
    this.bldngXB = w - 1;
    this.bldngYA = 0;
    this.bldngYB = h - 1;

    this.U = function () {
        this.bldngYB = this.y; // bomb is above, so we no longer need to go lower
        this.y -= Math.round((this.y - this.bldngYA) / 2); // this is the best correct jump
        // thus we squeeze the field with every jump and getting closer and closer
    };

    this.D = function () {
        this.bldngYA = this.y;
        this.y += Math.round((this.bldngYB - this.y) / 2);
    };

    this.L = function () {
        this.bldngXB = this.x;
        this.x -= Math.round((this.x - this.bldngXA) / 2);
    };

    this.R = function () {
        this.bldngXA = this.x;
        this.x += Math.round((this.bldngXB - this.x) / 2);
    };
}

batman = new Batman(X0, Y0, W, H);

// game loop
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    if (BOMB_DIR.length === 2) {
        batman[BOMB_DIR[0]]();
        batman[BOMB_DIR[1]]();
    } else {batman[BOMB_DIR](); }
    print(batman.x + " " + batman.y); // the location of the next window Batman should jump to.
}