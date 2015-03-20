/*global print, readline*/

(function () {
    "use strict";
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10),
        X0 = parseInt(inputs[0], 10),
        Y0 = parseInt(inputs[1], 10),
        x = X0,
        y = Y0,
        upLeftPossibleCornerX = 0,
        upLeftPossibleCornerY = 0,
        downRightPossibleCornerX = W - 1,
        downRightPossibleCornerY = H - 1,
        BOMB_DIR = "";

    function middle(a, b, coordinate) {
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
}());
