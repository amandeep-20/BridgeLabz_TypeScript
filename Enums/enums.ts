// numeric
enum dir {
    // up,
    up=1,
    down,
    left,
    right
}
// console.log(dir[0]);
console.log(dir.up);
console.log(dir[1]); // reverse maping

function move (dirr : dir ){
    if(dirr == dir.up){
        console.log("done");
    }
}
move(dir.up)

enum Direction {
    North = 1,
    East = 3,
    South = 5,
    West
}

console.log(Direction.West); // Output: 6 (increments from the previous value)

// string
enum str {
    succ = "SUCC",
    fail = "FAIL",
    pend = "PEND"
}
console.log(str.succ);