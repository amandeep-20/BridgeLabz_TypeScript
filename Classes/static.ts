class Calculator {
    static Calname : string;
    constructor (name : string){
        Calculator.Calname = name;
    }
    static add(a:number , b : number) : number {
        return a + b;
    }
}
new Calculator("AMAN");
console.log(Calculator.Calname);
console.log(Calculator.add(5, 3)); // 8