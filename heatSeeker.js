/*global readline, print, JSON, Math, parseInt*/
(function () {
    'use strict';
    function Rectangle(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.intersect = function (that) {
            var newX1 = Math.max(this.x1, that.x1),
                newX2 = Math.min(this.x2, that.x2),
                newY1 = Math.max(this.y1, that.y1),
                newY2 = Math.min(this.y2, that.y2);
            if (newX1 > newX2 || newY1 > newY2) {
                return null;
            }
            return new Rectangle(newX1, newY1, newX2, newY2);
        };
        this.getWidth = function () {
            return this.x2 - this.x1;
        };
        this.getHeight = function () {
            return this.x2 - this.x1;
        };
        this.getCentralPoint = function () {
            return {
                x: Math.floor((this.x2 + this.x1) / 2),
                y: Math.floor((this.y2 + this.y1) / 2)
            };
        };
        this.toString = function () {
            return JSON.stringify(this);
        };
    }
    var directionsRegex = {
            left: /L/,
            right: /R/,
            up: /U/,
            down: /D/
        },
        firstLine = readline().split(' '),
        w = parseInt(firstLine[0], 10), // width of the building.
        h = parseInt(firstLine[1], 10), // height of the building.
        n = parseInt(readline(), 10), // maximum number of turns before game over.
        secondLine = readline().split(' '),
        x = parseInt(secondLine[0], 10),
        y = parseInt(secondLine[1], 10),
        possibleLocations = new Rectangle(0, 0, w, h),
        bombDir,
        newfoundLocations,
        center,
        i;
    function getRect(bombDir, x, y, height, width) {
        var x1 = x, x2 = x, y1 = y, y2 = y;
        if (directionsRegex.left.test(bombDir)) {
            x1 = 0;
            x2 = x - 1;
        }
        if (directionsRegex.right.test(bombDir)) {
            x1 = x + 1;
            x2 = width - 1;
        }
        if (directionsRegex.up.test(bombDir)) {
            y1 = 0;
            y2 = y - 1;
        }
        if (directionsRegex.down.test(bombDir)) {
            y1 = y + 1;
            y2 = height - 1;
        }
        return new Rectangle(x1, y1, x2, y2);
    }
    // game loop
    for (i = 0; i < n; i += 1) {
        bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
        newfoundLocations = getRect(bombDir, x, y, h, w);
        possibleLocations = possibleLocations.intersect(newfoundLocations);
        center = possibleLocations.getCentralPoint();
        print(center.x + ' ' + center.y); // the location of the next window Batman should jump to.
        x = center.x;
        y = center.y;
    }
}());
