"use strict";
function gg(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(gg(1, 2, 3, 4, 5));
function logMessages(start, ...messages) {
    messages.forEach((message) => {
        console.log(`${start}: ${message}`);
    });
}
logMessages("INFO", "System started", "Connection established");
