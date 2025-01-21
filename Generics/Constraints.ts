// Constraints with extends
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("Hello"); // Output: 5
logLength([1, 2, 3]); // Output: 3

// logLength(123); // Error: Type 'number' does not satisfy the constraint 'HasLength'.




function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}
const comb = merge({ name: "Aman" }, { age: 30 });
console.log(comb);



interface Person110 {
    name: string;
    age: number;
}

function getName<T extends Person110>(person: T): string {
    return person.name;
}

const person110 = { name: "Aman", age: 25 };
console.log(getName(person110)); // Output: "Aman"
