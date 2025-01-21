class Doggy {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Doggy | Cat) {
    if (animal instanceof Doggy) {
        animal.bark();
    } else {
        animal.meow();
    }
}

makeSound(new Doggy()); // Woof!
makeSound(new Cat()); // Meow!



class Vehicle {}
class Carr extends Vehicle {}

const myCarr = new Car();

console.log(myCarr instanceof Car); // true
console.log(myCarr instanceof Vehicle); // true
