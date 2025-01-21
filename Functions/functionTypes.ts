//funtion types
let add :(a: number , b : number)  => number;
add =  (x,y) => x+y;
console.log(add(5,5));


function add2 (a: number , b: number): number{
    return a + b;
}
const ans : number = add2(5,3);
console.log(ans);


function add3 (a: number , b: number): void{
    console.log(a + b);
}
add3(5,3);
