interface Veh {
    readonly id: number;
    make: string;
    model: string;
}

const car: Veh = {
    id: 1,
    make: "Toyota",
    model: "Camry",
};
car.make = "maruti";
// car.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
