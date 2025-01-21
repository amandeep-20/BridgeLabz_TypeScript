function gg(...numbers : number[]): number{
    return numbers.reduce((total,num)=> total+num,0);
}
console.log(gg(1,2,3,4,5));

function logMessages(start: string, ...messages: string[]): void {
    messages.forEach((message) => {
        console.log(`${start}: ${message}`);
    });
}

logMessages("INFO", "System started", "Connection established");