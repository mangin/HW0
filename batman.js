/*global readline, print*/

var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);

var dim = [
    {
        l: 0,
        c: X0,
        r: W - 1
    },
    {
        l: 0,
        c: Y0,
        r: H - 1
    }];

function getProjection(axis, direction) {
    "use strict";
    if (direction.indexOf(axis.charAt(1)) >= 0) {
        return +1;
    } else if (direction.indexOf(axis.charAt(0)) >= 0) {
        return -1;
    } else {
        return 0;
    }
}

function choosePart(trio, part) {
    "use strict";
    if (part === +1) {
        return {
            l: trio.c,
            c: Math.ceil((trio.c + trio.r) / 2),
            r: trio.r
        };
    } else if (part === -1) {
        return {
            l: trio.l,
            c: Math.floor((trio.l + trio.c) / 2),
            r: trio.c
        };
    } else {
        return {
            l: trio.c,
            c: trio.c,
            r: trio.c
        };
    }
}

// game loop
while (true) {
    var BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    dim[0] = choosePart(dim[0], getProjection('LR', BOMB_DIR));
    dim[1] = choosePart(dim[1], getProjection('UD', BOMB_DIR));

    // Write an action using print()
    // To debug: printErr('Debug messages...');

    print(dim[0].c + ' ' + dim[1].c); // the location of the next window Batman should jump to.
}
