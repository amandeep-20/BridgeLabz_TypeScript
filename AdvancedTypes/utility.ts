interface User {
    name: string;
    age: number;
    pin : number;
    add ?: string;
}

let user2 : Partial<User> = {name: "aman", age: 21};
user2.name = "deep";
console.log(user2);

let user3 : Readonly<User> = {name : "aman", age : 21, pin : 1740};//no modification 
// user3.name = "aman";

let user4 : Pick<User,"name"> = {name: "amandeep"};//only picked 

let user5 : Omit<User,"pin"> = {name: "aman", age: 21}; //exclude 

let user6 : Required <User> = {name : "aman", age : 21 , pin : 1740 , add : "una"};//optional are also include