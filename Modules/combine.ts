export const PI = 3.14;

export default class circle202 {
    radius : number;
    constructor (radius : number){
        this.radius = radius;
    }
    getcircle(){
        return PI * this.radius ** 2;
    }
}