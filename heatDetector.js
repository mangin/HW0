/*global readline, printErr, print */
(function () {
    'use strict';
    var widthHeightInputs = readline().split(' '),
        W = parseInt(widthHeightInputs[0], 10),
        H = parseInt(widthHeightInputs[1], 10),
        N = parseInt(readline(), 10),
        inputs = readline().split(' '),
        x = parseInt(inputs[0], 10),
        y = parseInt(inputs[1], 10),
        firstX = 0,
        firstY = 0,
        lastX = W,
        lastY = H,
        BOMB_DIR,
        firstLetter,
        lastLetter;
    printErr("Hello! I am unused variable N! My value is " + N);
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
        }
        print(x + ' ' + y);
    }
}());