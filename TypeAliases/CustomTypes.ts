type UserId = number;
const user101 : UserId = 11;

type MathOp = (a : number , b : number) => number;
let adding : MathOp = (x,y) => x+y; 
console.log(adding(2,3));

type address = {
    add : string,
    city : {
        pin: number;
    }
}

const mine : address = {
    add : "mandi",
    city: {
        pin : 1730
    }
}
console.log(mine);