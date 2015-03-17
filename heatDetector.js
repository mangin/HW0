/*global readline, printErr, print */
(function () {
    'use strict';
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10),
        x = parseInt(inputs[0], 10),
        y = parseInt(inputs[1], 10),
        firstX = 0,
        firstY = 0,
        lastX = W,
        lastY = H,
        BOMB_DIR,
        firstLetter,
        lastLetter;
    while (true) {
        BOMB_DIR = readline();
        firstLetter = BOMB_DIR[0];
        lastLetter = BOMB_DIR.substr(-1);
        switch (firstLetter) {
        case 'U':
            lastY = y;
            y = Math.floor((firstY + y) / 2);
            break;
        case 'D':
            firstY = y;
            y = Math.floor((lastY + y) / 2);
            break;
        default:
            lastY = y;
            firstY = y;
            break;
        }
        switch (lastLetter) {
        case 'L':
            lastX = x;
            x = Math.floor((firstX + x) / 2);
            break;
        case 'R':
            firstX = x;
            x = Math.floor((lastX + x) / 2);
            break;
        default:
            lastX = x;
            firstX = x;
        }
        print(x + ' ' + y);
    }
}());