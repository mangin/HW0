/*global readline*/
/*global print*/
var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10);
var H = parseInt(inputs[1], 10);
var N = parseInt(readline(), 10);
var inputs = readline().split(' ');
var x0 = parseInt(inputs[0], 10);
var y0 = parseInt(inputs[1], 10);
var xLeft = 0;
var xRight = W - 1;
var yDown = H - 1;
var yUp = 0;
var xNext;
var yNext;
var xPrev = x0;
var yPrev = y0;
var BOMB_DIR;
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