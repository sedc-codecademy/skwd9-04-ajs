// Exercise
// Create a class Animal that has:
// name
// type - carnivore/herbivore/omnivore (set/get)
// age
// size
// eat - a method that checks if the input is an Animal.
//  If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
//  If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name).
//  If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
//  If the input is not an animal just write: The animal (this animal name) is eating (the input).
// isEaten = default false

class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    set type(animalType) {
        animalType = animalType.toLowerCase();

        if (animalType !== "carnivore" && animalType !== "herbivore" && animalType !== "omnivore")
            throw new Error("There is no such a type");
        else
            this._type = animalType;
    }

    get type() {
        return this._type;
    }

    eat(animalFood) {
        if (animalFood instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is herbivore and does not eat other animals!`);
                return;
            }
            else if (this.size >= animalFood.size * 2) {
                animalFood.isEaten = true;
                console.log(`The animal ${this.name} ate the ${animalFood.name}`);
                return;
            }
            else {
                console.log(`The animal ${this.name} tried to eat the ${animalFood.name} but it was too large`);
                return;
            }
        }
        else {
            console.log(`The animal ${this.name} is eating ${animalFood.name}`);
            return;
        }
    }
}

let lion = new Animal("lion", "carnivore", 2, 40);
let elephant = new Animal("elephant", "HERBIVORE", 1, 400);
let mouse = new Animal("mouse", "omnivore", 0.5, 1);

// console.log("Lion", lion);
// console.log("Elephant", elephant);
// console.log("Mouse", mouse);

lion.eat(mouse);
lion.eat(elephant);
mouse.eat(lion);
elephant.eat(mouse);

class Person { constructor(name) { this.name = name } };

let person = new Person("Darko");

lion.eat(person);