// basic:
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["hello", "world"];

// genric:
let string: Array<string> = ["hello", "world"];
let booleans: Array<boolean> = [true, false, true];

// mixes array:
let mixed: (number | string)[] = [1, "two", 3, "four"];

function arrSUM (number : number []) : number{
    return number.reduce((acc,num)=> acc + num,0);
}
console.log(arrSUM([1,2,3]));
