class shape {
    area(){
        return 0;
    }
}
class circle extends shape{
    radius: number;
    constructor(radius : number){
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI* this.radius * this.radius;
    }
}
class Rectangle extends shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const shapes: shape[] = [new circle(5), new Rectangle(10, 20)];
shapes.forEach((shape) => console.log(shape.area()));