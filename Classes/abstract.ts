abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark!");
    }
}

const dog = new Dog();
dog.makeSound();
dog.move();