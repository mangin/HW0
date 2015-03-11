/*global readline, print*/

(function () {
    'use strict';
    var inputs, W, H, N, X0, Y0, X1, Y1, edge, BOMB_DIR, mid, jump, nextJump;
    inputs = readline().split(' ');
    W = parseInt(inputs[0], 10); // width of the building.
    H = parseInt(inputs[1], 10); // height of the building.
    N = parseInt(readline(), 10); // maximum number of turns before game over.
    inputs = readline().split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);
    edge = {
        left : 0,
        right : 0,
        up : 0,
        down : 0
    };

    mid = function (start, end) {
        return (start + end) / 2;
    };

    jump = function (dir, height, width, x, y) {
        var X, Y;
        switch (dir) {
        case 'D':
            edge.up = y;
            X = x;
            Y = mid(y, edge.down || height);
            break;
        case 'U':
            edge.down = y;
            X = x;
            Y = mid(edge.up, y);
            break;
        case 'R':
            edge.left = x;
            Y = y;
            X = mid(x, edge.right || width);
            break;
        case 'L':
            edge.right = x;
            Y = y;
            X = mid(edge.left, x);
            break;
        case 'DR':
            edge.up = y;
            edge.left = x;
            X = mid(x, edge.right || width);
            Y = mid(y, edge.down || height);
            break;
        case 'DL':
            edge.up = y;
            edge.right = x;
            X = mid(edge.left, x);
            Y = mid(y, edge.down || height);
            break;
        case 'UR':
            edge.down = y;
            edge.left = x;
            X = mid(x, edge.right || width);
            Y = mid(edge.up, y);
            break;
        case 'UL':
            edge.down = y;
            edge.right = x;
            X = mid(edge.left, x);
            Y = mid(edge.up, y);
            break;
        }
        return [parseInt(X, 10), parseInt(Y, 10)];
    };

    // game loop
    while (true) {
        BOMB_DIR = readline();
        nextJump = jump(BOMB_DIR, H, W, X1 || X0, Y1 || Y0);
        X1 = nextJump[0];
        Y1 = nextJump[1];
        N = N - 1;
        print(X1, Y1);
    }
}());