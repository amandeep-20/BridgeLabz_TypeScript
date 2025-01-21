//optional parameter
function greet4(name: string, age?: number): string {
    return age ? `${name}, age: ${age}` : `Hello ${name}`;
}
console.log(greet4("Aman"));
console.log(greet4("aman", 20));


//default parameter
function greet3(name: string, age: number = 18): string {
    return `Hello ${name}, age ${age}`;
}
console.log(greet3("Aman"));
console.log(greet3("amandeep", 25));