type A = {name : string};
type B = {age : number};
type AB = A&B;

let person : AB = {name : "aman" , age : 21};


type Person101 = {
    name: string;
    age: number;
};

type Empl = {
    employeeID: number;
    department: string;
};

type Manager = Person101 & Empl;

const manager: Manager = {
    name: "Alice",
    age: 35,
    employeeID: 101,
    department: "HR",
};