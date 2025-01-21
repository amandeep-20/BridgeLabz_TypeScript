"use strict";
let user2 = { name: "aman", age: 21 };
user2.name = "deep";
console.log(user2);
let user3 = { name: "aman", age: 21, pin: 1740 }; //no modification 
// user3.name = "aman";
let user4 = { name: "amandeep" }; //only picked 
let user5 = { name: "aman", age: 21 }; //exclude 
let user6 = { name: "aman", age: 21, pin: 1740, add: "una" }; //optional are also include
const rolePermissions = {
    admin: true,
    user: true,
    guest: false,
};
function getUser() {
    return { id: 1, name: "Alice" };
}
const userr = {
    id: 1,
    name: "Alice",
};
class User111 {
    constructor() {
        this.name = "Alice";
        this.age = 30;
    }
}
const user111 = new User111();
