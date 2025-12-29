// Creates a simple monkey object with basic properties and methods
class Monkey {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // Method for the monkey to make a sound
    makeSound() {
        return "Ooh ooh aah aah!";
    }

    // Method for the monkey to eat
    eat(food) {
        return `${this.name} is eating ${food}.`;
    }

    // Method for the monkey to climb
    climb() {
        return `${this.name} is climbing a tree!`;
    }
}

// Example usage:
const george = new Monkey("George", 5, "Capuchin");
console.log(george.makeSound()); // Output: Ooh ooh aah aah!
console.log(george.eat("bananas")); // Output: George is eating bananas.
console.log(george.climb()); // Output: George is climbing a tree!

module.exports = Monkey;