"use strict";
class bank {
    constructor(balance, accName) {
        this.balance = balance;
        this.accName = accName;
    }
    deposite(number) {
        this.balance = this.balance + number;
    }
    get() {
        return this.balance;
    }
}
let obj = new bank(1000, "aman");
obj.deposite(500);
console.log(obj.get());
