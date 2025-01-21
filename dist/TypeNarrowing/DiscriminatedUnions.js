"use strict";
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}
console.log(calculateArea({ kind: "circle", radius: 10 })); // 314.159...
console.log(calculateArea({ kind: "rectangle", width: 10, height: 20 })); // 200
