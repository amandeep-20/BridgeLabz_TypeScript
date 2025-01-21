"use strict";
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // Output: 5
logLength([1, 2, 3]); // Output: 3
// logLength(123); // Error: Type 'number' does not satisfy the constraint 'HasLength'.
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comb = merge({ name: "Aman" }, { age: 30 });
console.log(comb);
function getName(person) {
    return person.name;
}
const person110 = { name: "Aman", age: 25 };
console.log(getName(person110)); // Output: "Aman"
