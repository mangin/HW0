/*global readline, print, printErr*/
(function () {
    "use strict";
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10), // width of the building.
        H = parseInt(inputs[1], 10), // height of the building.
        N = parseInt(readline(), 10), // maximum number of turns before game over.
        inputs_too = readline().split(' '),
        X0 = parseInt(inputs_too[0], 10),
        Y0 = parseInt(inputs_too[1], 10),
        x_left_border = 0,
        x_right_border = W,
        y_up_border = 0,
        y_down_border = H,
        BOMB_DIR;
    while (true) {
        // Write an action using print()
        // To debug: printErr('Debug messages...')
        BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        if (BOMB_DIR.indexOf("R") + 1) {
            x_left_border = X0;
            X0 = parseInt((X0 + (x_right_border - x_left_border) / 2), 10);
        }
        if (BOMB_DIR.indexOf("L") + 1) {
            x_right_border = X0;
            X0 = parseInt((X0 + (x_left_border - x_right_border) / 2), 10);
        }
        if (BOMB_DIR.indexOf("D") + 1) {
            y_up_border = Y0;
            Y0 = parseInt((Y0 + (y_down_border - y_up_border) / 2), 10);
        }
        if (BOMB_DIR.indexOf("U") + 1) {
            y_down_border = Y0;
            Y0 = parseInt((Y0 + (y_up_border - y_down_border) / 2), 10);
        }
        printErr(N);
        print(X0 + ' ' + Y0);
    }
}());