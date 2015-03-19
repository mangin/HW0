/*global readline, print*/
(function () {
    "use strict";
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10),
        input = readline().split(' '),
        x0 = parseInt(input[0], 10),
        y0 = parseInt(input[1], 10),
        xLeft = 0,
        xRight = W - 1,
        yDown = H - 1,
        yUp = 0,
        xNext,
        yNext,
        xPrev = x0,
        yPrev = y0,
        BOMB_DIR;
    while (true) {
        BOMB_DIR = readline();
        switch (BOMB_DIR) {
            case 'U':
                yDown = yPrev - 1;
                break;
            case 'UR':
                yDown = yPrev - 1;
                xLeft = xPrev + 1;
                break;
            case 'R':
                xLeft = xPrev + 1;
                break;
            case 'DR':
                yUp = yPrev + 1;
                xLeft = xPrev + 1;
                break;
            case 'D':
                yUp = yPrev + 1;
                break;
            case 'DL':
                yUp = yPrev + 1;
                xRight = xPrev - 1;
                break;
            case 'L':
                xRight = xPrev - 1;
                break;
            case 'UL':
                yDown = yPrev - 1;
                xRight = xPrev - 1;
                break;
        }

        if (Math.random() > 0.5) {
            xNext = Math.ceil((xLeft + xRight) / 2);
        } else {
            xNext = Math.floor((xLeft + xRight) / 2);
        }
        if (Math.random() > 0.5) {
            yNext = Math.ceil((yDown + yUp) / 2);
        } else {
            yNext = Math.floor((yDown + yUp) / 2);
        }
        print(xNext + ' ' + yNext);
        xPrev = xNext;
        yPrev = yNext;
    }
}());