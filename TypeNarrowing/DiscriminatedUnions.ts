type Circle = {
    kind: "circle";
    radius: number;
};

type Rect = {
    kind: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rect;

function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
}

console.log(calculateArea({ kind: "circle", radius: 10 })); // 314.159...
console.log(calculateArea({ kind: "rectangle", width: 10, height: 20 })); // 200
