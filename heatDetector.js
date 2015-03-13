/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0], 10); // width of the building.
var H = parseInt(inputs[1], 10); // height of the building.
var N = parseInt(readline(), 10); // maximum number of turns before game over.
var inputs = readline().split(' ');
var x = parseInt(inputs[0], 10);
var y = parseInt(inputs[1], 10);
var firstX = 0, firstY = 0, lastX = W, lastY = H;

// game loop
var BOMB_DIR, firstLetter, lastLetter;
while (true) {
    BOMB_DIR = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    printErr('Width: ' + W + '\nHeight: ' + H + '\nInput: \'' + BOMB_DIR + '\'\nX0: ' + x + '\nY0: ' + y + '\n');
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
    default:
        lastY = y;
        firstY = y;
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
    default:
        lastX = x;
        firstX = x;
    }
    print(x + ' ' + y); // the location of the next window Batman should jump to.
}