"use strict";
// Constant Members:
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 5] = "Wednesday";
    Week[Week["Thursday"] = 6] = "Thursday";
})(Week || (Week = {}));
// Computed Members:
var MathConstants;
(function (MathConstants) {
    MathConstants[MathConstants["Pi"] = 3.14] = "Pi";
    MathConstants[MathConstants["SquareRootOfTwo"] = Math.sqrt(2)] = "SquareRootOfTwo";
    MathConstants[MathConstants["Log2"] = Math.log2(2)] = "Log2"; // Computed
})(MathConstants || (MathConstants = {}));
// properties
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color.Green); // Output: 2
console.log(Color[2]); // Output: Green
