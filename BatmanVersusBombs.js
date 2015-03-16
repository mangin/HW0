/*global print, readline */
(function () {
    'use strict';
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10), // width of the building.
        H = parseInt(inputs[1], 10), // height of the building.
        N = parseInt(readline(), 10), // maximum number of turns before game over.
        X0 = 0,
        Y0 = 0,
        maxW = W - 1,
        minW = 0,
        maxH = H - 1,
        minH = 0,
        BOMB_DIR = ''; // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    inputs = readline().split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);
    while (N) {
        BOMB_DIR = readline();
        switch (BOMB_DIR) {
        case 'U':
            Y0 = maxH = Y0 - 1;
            Y0 -= Math.round((maxH - minH) / 2);
            break;
        case 'D':
            Y0 = minH = Y0 + 1;
            Y0 += Math.round((maxH - minH) / 2);
            break;
        case 'R':
            X0 = minW = X0 + 1;
            X0 += Math.round((maxW - minW) / 2);
            break;
        case 'L':
            X0 = maxW = X0 - 1;
            X0 -= Math.round((maxW - minW) / 2);
            break;
        case 'UR':
            Y0 = maxH = Y0 - 1;
            X0 = minW = X0 + 1;
            X0 += Math.round((maxW - minW) / 2);
            Y0 -= Math.round((maxH - minH) / 2);
            break;
        case 'DR':
            Y0 = minH = Y0 + 1;
            X0 = minW = X0 + 1;
            X0 += Math.round((maxW - minW) / 2);
            Y0 += Math.round((maxH - minH) / 2);
            break;
        case 'UL':
            Y0 = maxH = Y0 - 1;
            X0 = maxW = X0 - 1;
            X0 -= Math.round((maxW - minW) / 2);
            Y0 -= Math.round((maxH - minH) / 2);
            break;
        case 'DL':
            Y0 = minH = Y0 + 1;
            X0 = maxW = X0 - 1;
            X0 -= Math.round((maxW - minW) / 2);
            Y0 += Math.round((maxH - minH) / 2);
            break;
        }
        print(X0 + ' ' + Y0);
        N -= 1;
    }
}());
