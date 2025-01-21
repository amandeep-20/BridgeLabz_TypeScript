// nested
let employee: {
    name: string;
    position: string;
    address: {
        city: string;
        state: string;
    };
} = {
    name: "John",
    position: "Developer",
    address: {
        city: "New York",
        state: "NY",
    },
};

console.log(employee.address.city); // Output: "New York"


// by using type aliases
type jod = {
    name : string;
}
type jod2 = {
    id :  number;
    jod : jod;
}

let asd : jod2 = {
    id : 1,
    jod : {
        name : "aman"
    }
}
console.log(asd.jod.name);