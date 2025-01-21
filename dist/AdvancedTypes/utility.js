"use strict";
let user2 = { name: "aman", age: 21 };
user2.name = "deep";
console.log(user2);
let user3 = { name: "aman", age: 21, pin: 1740 }; //no modification 
// user3.name = "aman";
let user4 = { name: "amandeep" }; //only picked 
let user5 = { name: "aman", age: 21 }; //exclude 
let user6 = { name: "aman", age: 21, pin: 1740, add: "una" }; //optional are also include
