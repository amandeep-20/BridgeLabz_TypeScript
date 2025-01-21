"use strict";
// numeric
var dir;
(function (dir) {
    // up,
    dir[dir["up"] = 1] = "up";
    dir[dir["down"] = 2] = "down";
    dir[dir["left"] = 3] = "left";
    dir[dir["right"] = 4] = "right";
})(dir || (dir = {}));
// console.log(dir[0]);
console.log(dir.up);
console.log(dir[1]); // reverse maping
function move(dirr) {
    if (dirr == dir.up) {
        console.log("done");
    }
}
move(dir.up);
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 3] = "East";
    Direction[Direction["South"] = 5] = "South";
    Direction[Direction["West"] = 6] = "West";
})(Direction || (Direction = {}));
console.log(Direction.West); // Output: 6 (increments from the previous value)
// string
var str;
(function (str) {
    str["succ"] = "SUCC";
    str["fail"] = "FAIL";
    str["pend"] = "PEND";
})(str || (str = {}));
console.log(str.succ);
