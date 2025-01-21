"use strict";
class Product {
    constructor(price) {
        this.price = price;
    }
    get data() {
        return this.price;
    }
    set data(value) {
        if (value < 0)
            throw new Error("Price cannot be negative.");
        this.price = value;
    }
}
const product10 = new Product(100);
product10.data = 500; // Setter
console.log(product10.data); // Getter
