let arrys: [string, number, boolean?] = ["Aman", 30];

let tupel : [string, ...number[]] = ["aman",1,2,3];
console.log(tupel);


let readonlyTuple: readonly [string, number] = ["Immutable", 42];
// readonlyTuple[0] = "Mutable";

// named array:
let nameTuple : [name : string , age : number]  =  ["aman", 21];
console.log(nameTuple[0]);

function getPersonInfo(): [string, number] {
    return ["Aman", 25];
}
const [name1, age1] = getPersonInfo();
console.log(name1); // Output: "Aman"
console.log(age1);  // Output: 25