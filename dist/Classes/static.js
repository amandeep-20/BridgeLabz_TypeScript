"use strict";
class Calculator {
    constructor(name) {
        Calculator.Calname = name;
    }
    static add(a, b) {
        return a + b;
    }
}
new Calculator("AMAN");
console.log(Calculator.Calname);
console.log(Calculator.add(5, 3)); // 8
