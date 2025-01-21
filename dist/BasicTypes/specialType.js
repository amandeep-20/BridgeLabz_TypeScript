"use strict";
let a = "hello";
a = 42;
console.log(a);
let input;
input = 42;
input = "hello";
console.log(input);
function greet() {
    console.log("heelo!");
}
// never return or handel error
function notRun() {
    throw new Error("not run");
}
let value1 = null;
value1 = "Hello"; // Now holds a string.
let value2;
value2 = "Hello";
value2 = undefined;
