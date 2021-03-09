//constructor
//Constructor is a function that constructs other objects by some rules and logic.

function Human(name, age) {
    this.name = name
    this.age = age
}

let person = new Human("Viktor", 31)
console.log(person.constructor)


// CLASSES

class Vehicle {
    constructor(id, name, serialNumber, price) {
        this.id = id
        this.name = name
        this.serialNumber = serialNumber
        this.price = price
        this.company = "BMW";

        //put other code!
    }

    printVehicle() {
        console.log(`${this.name} - ${this.price}`);
    }

}

let car = new Vehicle(1, "a3", 123, 25000)
console.log(car)
car.printVehicle()


// INHERITANCE with CLASSES
class WheeldVehicle extends Vehicle {
    constructor(id, name, serialNumber, price, wheels, ac) {
        super(id, name, serialNumber, price)

        this.wheels = wheels
        if (ac) {this.price += 400}
    }

    driveVehicle() {
         console.log(`We are drivig the ${this.name} on ${this.wheels} wheels`)   
    }
}

let wheeldVehicle = new WheeldVehicle(2, "a5", 321, 40000, 4, false)
let wheeldVehicleWithAc = new WheeldVehicle(2, "a5", 321, 40000, 4, true)
wheeldVehicle.printVehicle()
wheeldVehicle.driveVehicle()

console.log(wheeldVehicle.price)
console.log(wheeldVehicleWithAc.price)


// diference between model classes and service classes

class Calculator {
    constructor() {}

    sum(num1, num2) { return num1 + num2 }

    difference(num1, num2) { return num1 - num2 }
}

let calc = new Calculator();

let result = calc.sum(5,10)
console.log(result)


// static classes, methods and properties
class Calculations {

    static pi = 3.14

    static sum(num1, num2) {
        return num1 + num2 
    }

    static difference(num1, num2) {
         return num1 - num2
    }

}

let result2 = Calculations.sum(10,22)
console.log(result2)
console.log(Calculations.pi)

console.log(Math.PI)

// --- Getters and Setters ----

class ElectricCar extends Vehicle {
    constructor(id, name, serialNumber, price, owner) {
        super(id, name, serialNumber, price)

        this.owner = owner
    }

    get owner() {
        console.log("We are getting the name of the owner. Please wait...");
        return `The owner of the car is ${this._owner}`;
    }

    set owner(ownerInput) {
        console.log("We are setting the owner name. Please wait....");
        ownerInput.length > 1 
            ? this._owner = ownerInput
            : (() => {throw new Error("The name is too short")})()
    }
}

let myElectricCar = new ElectricCar(10, "a8", 556, 8000, "Viktor")

console.log(myElectricCar.owner)

myElectricCar.owner = "v";

console.log(myElectricCar.owner)

