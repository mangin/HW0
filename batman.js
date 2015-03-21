/*global readline*/
/*global print*/
function jump_coord(x1, x2, y1, y2) {
    "use strict";
    var x, y, res;
    if (x1 === x2) {
        y = (y1 + y2) / 2;
        y = Math.floor(y);
        x = x1;
    } else if (y1 === y2) {
        x = (x1 + x2) / 2;
        x = Math.floor(x);
        y = y1;
    } else {
        x = (x1 + x2) / 2;
        x = Math.floor(x);
        y = (y1 + y2) / 2;
        y = Math.floor(y);
    }
    res = [x, y];
    return res;
}

var i;
var inputs = readline().split(' '); 
var W = parseInt(inputs[0])//, inputs[0]); // width of the building.
var H = parseInt(inputs[1])//, inputs[1]); // height of the building.
var N = parseInt(readline())//, readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0])//, inputs[0]);
var Y0 = parseInt(inputs[1])//, inputs[1]);
var windows = new Array(W);
for (i = 0; i < W; i += 1) {
    windows[i] = new Array(H);
}
var up = 0, down = H, left = 0, right = W, f = 1, coor;
coor = new Array(2);
// game loop
while (true) {
    var BOMB_DIR = readline();
    switch (BOMB_DIR) {
    case "U":
        if (f !== 1) {
            if (down > Y0 - 1) {
                down = Y0 - 1;
            }
            f += 1;
            left = X0;
            right = X0;
        } else {
            left = X0;
            right = X0;
            up = 0;
            down = Y0 - 1;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "UR":
        if (f !== 1) {
            if (down > Y0 - 1) {
                down = Y0 - 1;
            }
            if (left < X0 + 1) {
                left = X0 + 1;
            }
            f += 1;
        } else {
            left = X0 - 1;
            right = W;
            up = 0;
            down = Y0 - 1;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "R":
        if (f !== 1) {
            if (left < X0 + 1) {
                left = X0 + 1;
            }
            f += 1;
            up = Y0;
            down = Y0;
        } else {
            left = X0 + 1;
            right = W;
            up = Y0;
            down = Y0;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "DR":
        if (f !== 1) {
            if (up < Y0 + 1) {
                up = Y0 + 1;
            }
            if (left < X0 + 1) {
                left = X0 + 1;
            }
            f += 1;
        } else {
            left = X0 + 1;
            right = W;
            up = Y0 + 1;
            down = H;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "D":
        if (f !== 1) {
            if (up < Y0 + 1) {
                up = Y0 + 1;
            }
            left = X0;
            right = X0;
            f += 1;
        } else {
            left = X0;
            right = X0;
            up = Y0 + 1;
            down = H;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "DL":
        if (f !== 1) {
            if (up < Y0 + 1) {
                up = Y0 + 1;
            }
            if (right > X0 - 1) {
                right = X0 - 1;
            }
            f += 1;
        } else {
            left = 0;
            right = X0 - 1;
            up = Y0 + 1;
            down = H;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "L":
        if (f !== 1) {
            if (right > X0 - 1) {
                right = X0 - 1;
            }
            up = Y0;
            down = Y0;
            f += 1;
        } else {
            left = 0;
            right = X0 - 1;
            up = Y0;
            down = Y0;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    case "UL":
        if (f !== 1) {
            if (down > Y0 - 1) {
                down = Y0 - 1;
            }
            if (right > X0 - 1) {
                right = X0 - 1;
            }
        } else {
            left = 0;
            right = X0 - 1;
            up = 0;
            down = Y0 - 1;
            f += 1;
        }
        coor = jump_coord(left, right, up, down);
        X0 = coor[0];
        Y0 = coor[1];
        print(X0, Y0);
        break;
    default:
        print('Err');
    }
}