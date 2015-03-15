/*global readline*/
/*global print*/

(function () {
    "use strict";
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10),
        UpR = /U/,
        DownR = /D/,
        LeftR = /L/,
        RightR = /R/,
        startX = 0,
        startY = 0,
        BOMB_DIR,
        X0,
        Y0;
    parseInt(readline(), 10);
    inputs = readline().split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);

// game loop
    while (true) {
        BOMB_DIR = readline();

        if (LeftR.test(BOMB_DIR)) {
            W = X0;
            X0 = Math.floor((X0 + startX) / 2);
        } else if (RightR.test(BOMB_DIR)) {
            startX = X0;
            X0 = Math.round((X0 + W) / 2);
        }

        if (UpR.test(BOMB_DIR)) {
            H = Y0;
            Y0 = Math.floor((Y0 + startY) / 2);
        } else if (DownR.test(BOMB_DIR)) {
            startY = Y0;
            Y0 = Math.round((Y0 + H) / 2);
        }
        print(X0 + ' ' + Y0);
    }
}());

