function identfy <T> (value : T): T{
    return value;
}
console.log(identfy(5));
console.log(identfy("aman"));
// T : is placeHolder for any type it will inferred based on argumnet passed 

function combine <T,V> (a: T,  b: V ) : [T,V]{
    return [a,b];
}
console.log(123,"aman");