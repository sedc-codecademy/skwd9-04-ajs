class Animal{
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    set type(data){
        data = data.toLowerCase();
        if(data !== "carnivore" && data !== "omnivore" && data !== "herbivore"){
            throw new Error("There is no such type!");
        } else {
            console.log("Setting the type..");
            this._type = data;
        }
    }
    get type(){
        console.log("Returning the type..");
        return this._type;
    }
    eat(food){
        console.log(this);
        console.log(food);
        if(food instanceof Animal){
            if(this.type === "herbivore"){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals!`);
                return;
            }
            if(this.size >= food.size * 2){
                food.isEaten = true;
                console.log(` The animal ${this.name} ate the ${food.name}!`);
                return;
            } else{
                console.log(`The animal ${this.name} tried to eat the ${food.name} but it was too large`);
                return;
            }
        }
        console.log(`The animal ${this.name} is eating ${food}`);
    }
    static birthday(animal){
        console.log("Happy birthday");
        animal.age++;
    }
}

let lion = new Animal("lion", "carnivore", 2, 40);
let elephant = new Animal("elephant", "herbivore", 1, 400);
let mouse = new Animal("mouse", "omnivore", 0.5, 1);
lion.eat(mouse);
lion.eat(elephant);
mouse.eat(lion);
elephant.eat(mouse);

console.log(lion.age);
Animal.birthday(lion);
console.log(lion.age);

class Dog extends Animal{
    constructor(name, type, age, size, color){
        super(name, type,age, size);
        this.color = color;
    }
    bark(){
        console.log("BARK BARK");
    }

}

let dog = new Dog("Sparky", "carnivore", 3, 10, "brown");
dog.bark();
dog.eat(mouse);