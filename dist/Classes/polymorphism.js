"use strict";
class shape {
    area() {
        return 0;
    }
}
class circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const shapes = [new circle(5), new Rectangle(10, 20)];
shapes.forEach((shape) => console.log(shape.area()));
