/*global prompt,console*/
function Batman() {
    'use strict';
    var inputs = prompt("W H", "4 8").split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10),
        N = parseInt(prompt("Maximum number of jumps", "10"), 10),
        DefaultDirArr = ["DR", "D", "D"], // Only for test
        I = 0, // Iterator for test values
        X0,
        Y0,
        X,
        Y,
        XMax,
        YMax,
        XMin,
        YMin,
        BOMB_DIR;
    inputs = prompt("X0, Y0", "2 3").split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);
    X = X0;
    Y = Y0;
    XMax = W;
    YMax = H;
    XMin = 0;
    YMin = 0;
    console.warn(N); //only for JSLint(Unused variable)
    while (I < 3) { //For test directions. Must be X,Y is not equal bomb coordinates.
        //BOMB_DIR = prompt("direction U, UR, R, DR, D, DL, L or UL", " "); //for input
        BOMB_DIR = DefaultDirArr[I]; //Using test values
        I = I + 1;
        switch (BOMB_DIR) {
        case "U":
            YMax = Y;
            Y = Math.floor((Y + YMin) / 2);
            break;
        case "D":
            YMin = Y + 1;
            Y = Math.floor((Y + YMax) / 2);
            break;
        case "L":
            XMax = X;
            X = Math.floor((X + XMin) / 2);
            break;
        case "R":
            XMin = X + 1;
            X = Math.floor((X + XMax) / 2);
            break;
        case "UR":
            YMax = Y;
            XMin = X + 1;
            Y = Math.floor((Y + YMin) / 2);
            X = Math.floor((X + XMax) / 2);
            break;
        case "UL":
            YMax = Y;
            XMax = X;
            Y = Math.floor((Y + YMin) / 2);
            X = Math.floor((X + XMin) / 2);
            break;
        case "DL":
            YMin = Y + 1;
            XMax = X;
            Y = Math.floor((Y + YMax) / 2);
            X = Math.floor((X + XMin) / 2);
            break;
        case "DR":
            YMin = Y + 1;
            XMin = X + 1;
            Y = Math.floor((Y + YMax) / 2);
            X = Math.floor((X + XMax) / 2);
            break;
        default:
            console.error('Unknown value');
            break;
        }
        if (X < 0 || Y < 0 || X >= W || Y >= H) {
            console.error('Out of building');
        } else {
            console.log(X, Y); // the location of the next window Batman should jump to.
        }

    }
}