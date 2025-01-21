"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hy ${this.name} and my age ${this.age}`);
    }
}
// inheritance
class user extends Person {
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }
    greet() {
        console.log(`hy ${this.name} and my age ${this.age} and my id is ${this.id}`);
    }
}
let obj10 = new user("aman", 21, 5005);
obj10.greet();
