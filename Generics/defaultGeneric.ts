function warp <t=string> (value : t) : t{
    return value;
}
console.log(warp("aman"));
console.log(warp(123));

interface gener <t=string>{
    name : t;
    id : t;
}
let generData : gener = {name: "aman", id : "12334"};