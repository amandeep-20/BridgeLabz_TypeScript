"use strict";
let interNum = { value: 21 };
let interStr = { value: "aman" };
// class 
class genric {
    constructor(value) {
        this.value = value;
    }
    getVal() {
        return this.value;
    }
}
let numGen = new genric(100);
let strGen = new genric("aman");
console.log(numGen.getVal());
console.log(strGen.getVal());
