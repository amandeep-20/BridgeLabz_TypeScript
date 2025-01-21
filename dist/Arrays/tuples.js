"use strict";
let arrys = ["Aman", 30];
let tupel = ["aman", 1, 2, 3];
console.log(tupel);
let readonlyTuple = ["Immutable", 42];
// readonlyTuple[0] = "Mutable";
// named array:
let nameTuple = ["aman", 21];
console.log(nameTuple[0]);
function getPersonInfo() {
    return ["Aman", 25];
}
const [name1, age1] = getPersonInfo();
console.log(name1); // Output: "Aman"
console.log(age1); // Output: 25
