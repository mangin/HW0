var readline, print;
var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);

var l = 0;
var r = W - 1;
var u = 0;
var d = H - 1;
var BOMB_DIR, x, y;

// game loop
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    if (BOMB_DIR.indexOf('L') >= +0) {
        r = X0 - 1;
    } else if (BOMB_DIR.indexOf('R') >= +0) {
        l = X0 + 1;
    }
    if (BOMB_DIR.charAt(0) === 'U') {
        d = Y0 - 1;
    } else if (BOMB_DIR.charAt(0) === 'D') {
        u = Y0 + 1;
    }

    X0 = Math.round((l + r) / 2);
    Y0 = Math.round((u + d) / 2);

    x = X0;
    y = Y0;

    print(x + " " + y); // the location of the next window Batman should jump to.
}