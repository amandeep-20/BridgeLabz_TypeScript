// extending inteface
interface Person10 {
    name: string;
    age: number;
}

interface Empp extends Person10 {
    employeeId: number;
    department: string;
}

const abcd: Empp = {
    name: "Alice",
    age: 30,
    employeeId: 101,
    department: "HR",
};

console.log(abcd);
// Output: { name: 'Alice', age: 30, employeeId: 101, department: 'HR' }