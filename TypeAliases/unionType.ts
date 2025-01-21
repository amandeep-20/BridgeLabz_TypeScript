type ID = string | number;

let productID: ID;

productID = 101;
productID = "P101";

function printID(id: ID): void {
    if (typeof id === "string") {
        console.log(`ID is a string: ${id}`);
    } else {
        console.log(`ID is a number: ${id}`);
    }
}

printID(123); 
printID("ABC");