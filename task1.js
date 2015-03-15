/*global readline, print*/
(function () {
    'use strict';
    function divide(a, b) {
        var rem = a % b;
        return (a - rem) / b;
    }

    var inputs, up, left, right, down, x, y, dir;

    inputs = readline().split(' ');
    up = 0;
    left = 0;
    right = parseInt(inputs[0], 10); // width of the building.
    down = parseInt(inputs[1], 10); // height of the building.
    readline(); // maximum number of turns before game over.
    inputs = readline().split(' ');
    x = parseInt(inputs[0], 10);
    y = parseInt(inputs[1], 10);

    // game loop
    while (true) {
        // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        dir = readline();

        // Write an action using print()
        // To debug: printErr('Debug messages...');

        if (dir.indexOf("D") > -1) {
            up = y + 1;
        }
        if (dir.indexOf("R") > -1) {
            left = x + 1;
        }
        if (dir.indexOf("L") > -1) {
            right = x - 1;
        }
        if (dir.indexOf("U") > -1) {
            down = y - 1;
        }

        x = divide(left + right, 2);
        y = divide(up + down, 2);

        print(x + ' ' + y); // the location of the next window Batman should jump to.
    }
}());