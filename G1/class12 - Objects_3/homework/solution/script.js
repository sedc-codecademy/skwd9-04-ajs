class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    set type(input) {
        input = input.toLowerCase();
        if (input !== "carnivore" && input !== "herbivore" && input !== "omnivore") {
            throw new Error("There is no such type!");
        } else {
            this._type = input;
        }
    } 

    get type() {
        return this._type;
    }

    eat(food) {
        if (food instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
                return 
            } else if (this.size >= food.size * 2) {
                food.isEaten = true
                console.log(`The animal ${this.name} ate the ${food.name}`)
                return 
            } else {
                console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large.`)
                return
            }
        }
        console.log(`The animal ${this.name} is eating ${food}.`)
    }
}


let lion = new Animal("lion", "carnivore", 3, 50) 
let elephant = new Animal("elephant", "herbivore", 1, 500) 
let mouse = new Animal("mouse", "omnivore", 1, 1) 


lion.eat(mouse)
lion.eat(elephant)
elephant.eat(mouse)
