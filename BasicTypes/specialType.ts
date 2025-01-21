let a : any = "hello";
a = 42;
console.log(a);

let input : unknown;
input = 42;
input = "hello";
console.log(input);

function greet (): void{
    console.log("heelo!");
}

// never return or handel error
function notRun() : never{ 
    throw new Error("not run");
}

let value1: string | null = null;
value1 = "Hello"; // Now holds a string.

let value2: string | undefined;
value2 = "Hello";
value2 = undefined; 
