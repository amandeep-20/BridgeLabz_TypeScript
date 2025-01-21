let lol: { readonly name: string; age?: number } = {
    name: "Aman",
    age: 25,
};
lol.age = 21;
// lol.name = "deep" :error

// nested
let pro: {
    id: number;
    details: {
        name: string;
    }
} = {
    id: 101,
    details: {
        name: "phone",
    },
};

// by interface 
interface obj {
    id : number,
    age : number,
    city : {
        pin : number;
    }
}
let objec1 : obj = {
    id : 123,
    age : 21,
    city: {
        pin : 1740
    }
}
console.log(objec1);