"use strict";
let age2 = 25;
// age2 = "twenty-five"; // Error.
function addd2(a, b) {
    return a + b; // TypeScript infers the return type as `number`.
}
console.log(addd2(1, 2));
let mixedArray = [1, "hello", true]; // Inferred as (string | number | boolean)
let va; // Inferred as `any`.
va = 42; // Now `value` is `number`.
va = "hello"; // Allowed
