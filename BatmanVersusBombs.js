/*global print, readline */
var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0], 10);
var Y0 = parseInt(inputs[1], 10);
var maxW = W, minW = 0;
var maxH = H, minH = 0;
var prevState = ' ';
var BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
while (true) {
    switch (BOMB_DIR) {
    case 'U':
        maxH = Y0 - 1;
        if (prevState === 'U' && W !== 1) {
            Y0 -= 1;
        }
        Y0 -= Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 -= 1;
        }
        if (Y0 < 0) {
            Y0 = 0;
        }
        print(X0 + ' ' + Y0);
        prevState = 'U';
        break;
    case 'D':
        minH = Y0 + 1;
        if (prevState === 'D' && W !== 1) {
            Y0 += 1;
        }
        Y0 += Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 += 1;
        }
        if (Y0 >= H) {
            Y0 = H - 1;
        }
        print(X0 + ' ' + Y0);
        prevState = 'D';
        break;
    case 'R':
        minW = X0 + 1;
        if (prevState === 'R') {
            X0 += 1;
        }
        X0 += Math.round((maxW - minW) / 2);
        if (X0 >= W) {
            X0 = W - 1;
        }
        print(X0 + ' ' + Y0);
        prevState = 'R';
        break;
    case 'L':
        maxW = X0 - 1;
        if (prevState === 'L') {
            X0 -= 1;
        }
        X0 -= Math.round((maxW - minW) / 2);
        if (Math.round((maxW - minW) / 2) === 0) {
            X0 -= 1;
        }
        if (X0 < 0) {
            X0 = 0;
        }
        print(X0 + ' ' + Y0);
        break;
    case 'UR':
        maxH = Y0 - 1;
        minW = X0 + 1;
        if (prevState === 'UR') {
            Y0 -= 1;
            X0 += 1;
        }
        X0 += Math.round((maxW - minW) / 2);
        Y0 -= Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 -= 1;
        }
        if (Math.round((maxW - minW) / 2) === 0) {
            X0 += 1;
        }
        if (X0 >= W) {
            X0 = W - 1;
        }
        if (Y0 < 0) {
            Y0 = 0;
        }
        print(X0 + ' ' + Y0);
        prevState = 'UR';
        break;
    case 'DR':
        minH = Y0 + 1;
        minW = X0 + 1;
        if (prevState === 'DR') {
            X0 += 1;
            Y0 += 1;
        }
        X0 += Math.round((maxW - minW) / 2);
        Y0 += Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 += 1;
        }
        if (Math.round((maxW - minW) / 2) === 0) {
            X0 += 1;
        }
        if (X0 >= W) {
            X0 = W - 1;
        }
        if (Y0 >= H) {
            Y0 = H - 1;
        }
        prevState = 'DR';
        print(X0 + ' ' + Y0);
        break;
    case 'UL':
        maxH = Y0 - 1;
        maxW = X0 - 1;
        if (prevState === 'UL') {
            X0 -= 1;
            Y0 -= 1;
        }
        X0 -= Math.round((maxW - minW) / 2);
        Y0 -= Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 -= 1;
        }
        if (Math.round((maxW - minW) / 2) === 0) {
            X0 -= 1;
        }
        if (X0 < 0) {
            X0 = 0;
        }
        if (Y0 < 0) {
            Y0 = 0;
        }
        print(X0 + ' ' + Y0);
        prevState = 'UL';
        break;
    case 'DL':
        minH = Y0 + 1;
        maxW = X0 - 1;
        if (prevState === 'DL') {
            X0 -= 1;
            Y0 += 1;
        }
        X0 -= Math.round((maxW - minW) / 2);
        Y0 += Math.round((maxH - minH) / 2);
        if (Math.round((maxH - minH) / 2) === 0) {
            Y0 += 1;
        }
        if (Math.round((maxW - minW) / 2) === 0) {
            X0 -= 1;
        }
        if (X0 < 0) {
            X0 = 0;
        }
        if (Y0 >= H) {
            Y0 = H - 1;
        }
        print(X0 + ' ' + Y0);
        prevState = 'DL';
        break;
    }
}
