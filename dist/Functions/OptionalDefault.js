"use strict";
//optional parameter
function greet4(name, age) {
    return age ? `${name}, age: ${age}` : `Hello ${name}`;
}
console.log(greet4("Aman"));
console.log(greet4("aman", 20));
//default parameter
function greet3(name, age = 18) {
    return `Hello ${name}, age ${age}`;
}
console.log(greet3("Aman"));
console.log(greet3("amandeep", 25));
