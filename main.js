/*jslint browser: true, devel: true */

(function () {
    'use strict';

    function print(str, N) {
        console.log(str);
        document.getElementById('span4').innerHTML = str;
        document.getElementById('span2').innerHTML = N;
    }

    function readline(l) {
        return document.getElementById('span' + l).innerHTML;
    }

    function readlocation() {
        return document.getElementById('bomb_location').innerHTML;
    }


    var line = 1,
        inputs = readline(line).split(' '),
        W = parseInt(inputs[0], 10),
        H = parseInt(inputs[1], 10), // height of the building.
        N, // maximum number of turns before game over.
        X0,
        Y0,
        topBound = 0,
        bottomBound = H,
        leftBound = 0,
        rightBound = W,
        BOMB_DIR,
        interval;

    line += 1;
    N = parseInt(readline(line), 10);

    line += 1;
    inputs = readline(line).split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);

    // game loop
    if (N !== 0) {
        interval = setInterval(function () {
            BOMB_DIR = readlocation(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

            if (BOMB_DIR.search("U") !== -1) {
                bottomBound = Y0;
                Y0 = Math.floor((topBound + Y0) / 2);
            }
            if (BOMB_DIR.search("D") !== -1) {
                topBound = Y0;
                Y0 = Math.floor((bottomBound + Y0) / 2);
            }
            if (BOMB_DIR.search("L") !== -1) {
                rightBound = X0;
                X0 = Math.floor((leftBound + X0) / 2);
            }
            if (BOMB_DIR.search("R") !== -1) {
                leftBound = X0;
                X0 = Math.floor((rightBound + X0) / 2);
            }

            print(X0 + " " + Y0, N); // the location of the next window Batman should jump to.
            N -= 1;
            if (N === 0) {
                clearInterval(interval);
            }
        }, 300);
    }
}());