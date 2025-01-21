class Person{
    name : string;
    age : number;
    constructor(name: string, age : number){
        this.name = name;
        this.age = age;
    }

    greet () : void{
        console.log(`hy ${this.name} and my age ${this.age}`);
    }
}
// inheritance
class user extends Person{
    id : number;
    constructor(name : string , age : number , id : number){
        super(name,age);
        this.id = id;
    }
    greet(): void {
        console.log(`hy ${this.name} and my age ${this.age} and my id is ${this.id}`);
    }
}
let obj10 = new user("aman",21,5005);
obj10.greet();