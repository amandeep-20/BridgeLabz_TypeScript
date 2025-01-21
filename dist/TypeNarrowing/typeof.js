"use strict";
function processValue(value) {
    if (typeof value === "string") {
        console.log("String value:", value.toUpperCase());
    }
    else {
        console.log("Number value:", value.toFixed(2));
    }
}
processValue("Hello"); // String value: HELLO
processValue(42); // Number value: 42.00
function print(value) {
    if (typeof value === "string") {
        console.log("It's a string:", value);
    }
    else if (typeof value === "number") {
        console.log("It's a number:", value);
    }
    else {
        console.log("Unknown type");
    }
}
print("Hello"); // It's a string: Hello
print(123); // It's a number: 123
