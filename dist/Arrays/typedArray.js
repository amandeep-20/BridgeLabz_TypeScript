"use strict";
// basic:
let numbers = [1, 2, 3, 4];
let strings = ["hello", "world"];
// genric:
let string = ["hello", "world"];
let booleans = [true, false, true];
// mixes array:
let mixed = [1, "two", 3, "four"];
function arrSUM(number) {
    return number.reduce((acc, num) => acc + num, 0);
}
console.log(arrSUM([1, 2, 3]));
