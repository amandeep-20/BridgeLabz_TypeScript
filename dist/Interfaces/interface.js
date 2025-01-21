"use strict";
class Car {
    start() {
        console.log("Car started.");
    }
    stop() {
        console.log("Car stopped.");
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
const data = (name) => `Hello, ${name}`;
console.log(data("Aman")); // Hello, Alice
