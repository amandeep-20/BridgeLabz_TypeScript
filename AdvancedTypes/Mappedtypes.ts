type user101 = {
    id: number;
    name : string;
};



type Optional <T>   = {
    [P in keyof T ] ? : T[P];
};

type user202 = Optional<user101>;



type  ReadOnly  = {
    readonly [P in keyof user101] : user101[P];
}

type readUser = ReadOnly;

// type ReadOnly<T> = {
//     readonly [P in keyof T]: T[P];
// };

