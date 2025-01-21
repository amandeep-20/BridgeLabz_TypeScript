"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.PI = 3.14;
class circle202 {
    constructor(radius) {
        this.radius = radius;
    }
    getcircle() {
        return exports.PI * Math.pow(this.radius, 2);
    }
}
exports.default = circle202;
