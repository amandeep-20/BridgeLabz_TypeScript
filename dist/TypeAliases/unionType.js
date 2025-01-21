"use strict";
let productID;
productID = 101;
productID = "P101";
function printID(id) {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id}`);
    }
    else {
        console.log(`ID is a number: ${id}`);
    }
}
printID(123);
printID("ABC");
