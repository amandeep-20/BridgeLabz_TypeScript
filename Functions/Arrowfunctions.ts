let mul : (x: number , y: number) => number;

mul = (a,b) => a*b;
console.log(mul(2,2));


let display1 = (name : string) : void => {
    console.log(name);
}
display1("aman");

const greeett = (): void => console.log("hyyyy");
greeett();

const arrNUm = [1,2,3,4];
const double = arrNUm.map((num: number) =>{
    console.log(2*num);
})