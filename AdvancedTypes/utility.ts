interface User {
    name: string;
    age: number;
    pin : number;
    add ?: string;
}

let user2 : Partial<User> = {name: "aman", age: 21};
user2.name = "deep";
console.log(user2);

let user3 : Readonly<User> = {name : "aman", age : 21, pin : 1740};//no modification 
// user3.name = "aman";

let user4 : Pick<User,"name"> = {name: "amandeep"};//only picked 

let user5 : Omit<User,"pin"> = {name: "aman", age: 21}; //exclude 

let user6 : Required <User> = {name : "aman", age : 21 , pin : 1740 , add : "una"};//optional are also include


type Role = "admin" | "user" | "guest";
type Permi = Record<Role, boolean>;
const rolePermissions: Permi = {
    admin: true,
    user: true,
    guest: false,
};

type AllTypes = string | number | boolean;
type ExcludeBool = Exclude<AllTypes, boolean>; // string | number


type AllType = string | number | boolean;
type ExtractT = Extract<AllType, string | number>; // string | number


type NullableType = string | number | null | undefined;
type NonNullableType = NonNullable<NullableType>; // string | number



function getUser() {
    return { id: 1, name: "Alice" };
}

type Userr = ReturnType<typeof getUser>;
const userr: Userr = {
    id: 1,
    name: "Alice",
};



class User111 {
    name = "Alice";
    age = 30;
}
type UserInstance = InstanceType<typeof User111>;
const user111: UserInstance = new User111();