/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var readline, print;
var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);
var BOMB_DIR;


function Hero(x, y, w, h) {
    "use strict";

    // variable declaration
    this.x = x;
    this.y = y;
    this.BuildX0 = 0;      // left
    this.BuildX1 = w - 1;  // right
    this.BuildY0 = 0;      // up
    this.BuildY1 = h - 1;  // down


    // ==== functions ==== //

    // when up
    this.U = function () {
        this.BuildY1 = this.y;
        this.y -= Math.round((this.y - this.BuildY0) / 2);
    };

    // when right
    this.R = function () {
        this.BuildX0 = this.x;
        this.x += Math.round((this.BuildX1 - this.x) / 2);
    };

    // when down
    this.D = function () {
        this.BuildY0 = this.y;
        this.y += Math.round((this.BuildY1 - this.y) / 2);
    };

    // when left
    this.L = function () {
        this.BuildX1 = this.x;
        this.x -= Math.round((this.x - this.BuildX0) / 2);
    };
}

// new obj batman
var batman = new Hero(X0, Y0, W, H);

// game loop
while (true) {

    // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    BOMB_DIR = readline();

    if (BOMB_DIR.length === 2) {
        batman[BOMB_DIR[0]]();
        batman[BOMB_DIR[1]]();
    } else {
        batman[BOMB_DIR]();
    }

    // the location of the next window Batman should jump to.
    print(batman.x + ' ' + batman.y);

}