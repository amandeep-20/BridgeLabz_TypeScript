interface BOx<T> {
    value : T;
}

let interNum : BOx<number> = {value : 21};
let interStr : BOx<string> = {value : "aman"};

// class 
class genric <t> {
    value : t;

    constructor (value : t){
        this.value = value;
    }
    getVal() : t {
        return this.value;
    }
    
}

let numGen = new genric(100);
let strGen = new genric("aman");

console.log(numGen.getVal());
console.log(strGen.getVal());