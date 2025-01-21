class bank{
    private balance : number;
    readonly accName : string;
    constructor(balance: number, accName: string){
        this.balance = balance;
        this.accName = accName;
    }

    public deposite(number: number): void{
        this.balance = this.balance + number;
    }
    public get(): number{
        return this.balance;
    }
}
let obj = new bank(1000,"aman");
obj.deposite(500);
console.log(obj.get());