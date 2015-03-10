
var print, readline;

(function () {
    "use strict";
    var inputs = readline().split(' '),
        W = parseInt(inputs[0], 10), // ширина здания
        H = parseInt(inputs[1], 10), // высота здания
        N = parseInt(readline(), 10), // максимальное число шагов до "game over"
        //начальное положение Бэтмена
        X0,
        Y0,
        //текущее положение 
        X,
        Y,
        //квадрат, в котором ведется поиск бомбы
        left = 0,
        right = W - 1,
        down = H - 1,
        top = 0,
        //направление, которое указывает детектор
        BOMB_DIR;

    inputs = readline().split(' ');
    X0 = parseInt(inputs[0], 10);
    Y0 = parseInt(inputs[1], 10);

    X = X0;
    Y = Y0;

    while (N) {

        BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        switch (BOMB_DIR) {
        case "UR":
            left = X + 1;
            down = Y - 1;
            X = Math.round(left + (right - left) / 2);
            Y = Math.round(top + (down - top) / 2);
            break;
        case "DR":
            left = X + 1;
            top = Y + 1;
            X = Math.round(left + (right - left) / 2);
            Y = Math.round(top + (down - top) / 2);
            break;
        case "DL":
            right = X - 1;
            top = Y + 1;
            X = Math.round(left + (right - left) / 2);
            Y = Math.round(top + (down - top) / 2);
            break;
        case "UL":
            right = X - 1;
            down = Y - 1;
            X = Math.round(left + (right - left) / 2);
            Y = Math.round(top + (down - top) / 2);
            break;
        case "U":
            down = Y - 1;
            Y = Math.round(top + (down - top) / 2);
            break;
        case "D":
            top = Y + 1;
            Y = Math.round(top + (down - top) / 2);
            break;
        case "L":
            right = X - 1;
            X = Math.round(left + (right - left) / 2);
            break;
        case "R":
            left = X + 1;
            X = Math.round(left + (right - left) / 2);
            break;
        }

        N -= 1;
        print(X, Y); // the location of the next window Batman should jump to.
    }
}());