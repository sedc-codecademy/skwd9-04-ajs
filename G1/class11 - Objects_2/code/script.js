// ---- inheritance ----
function Vehicle(id, name, serialNumber, price) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.price = price;

    this.printVehicle = function() {
        console.log(`${id}. ${name}, serial-number: ${serialNumber}, ${price}$`);
    }
}

let wheeledVehicle = new Vehicle(5, "A3", "123", "20000")
wheeledVehicle.drive = function() {
    console.log("car is driving...")
}

let car = Object.create(wheeledVehicle)
//car.printVehicle()
car.doors = 5
//car.drive()
//console.log(car)

// ---- PROTOTYPES ----
// Every time we create an object, JavaScript sticks a new property to that object called _proto_. 
// This prototype property keeps all the information about the object that we inherited from.
let emptyObj = new Object()
// console.log(emptyObj)

let notAnEmptyObj = {
    propertyOne: "one",
    propertyTwo: "two"
}
// console.log(notAnEmptyObj)

function Vehicle1(id, name, serialNumber, price) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.price = price;
    this.company = "Audi"

    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name}, serial-number: ${this.serialNumber}, ${this.price}$`);
    }
}

function WheeledVehicle1(wheels, fuelType) {
    this.wheels = wheels;
    this.fuelType = fuelType;

    this.drive = function() {
        console.log("car is driving...")
    }
}

WheeledVehicle1.prototype = Object.create(new Vehicle1())

let newCar = new WheeledVehicle1(4, "petrol")
newCar.id = 5
newCar.price = 200
newCar.serialNumber = "123123"
newCar.name = "A3"

newCar.printVehicle()

// adding methods in to the prototype
WheeledVehicle1.prototype.stop = function() {
    console.log("car has stopped")
}

//console.log(newCar)

// ---- Prototype chain ----

function Vehicle2(id, name, serialNumber, price) {
    this.id = id;
    this.name = name;
    this.serialNumber = serialNumber;
    this.price = price;
    this.company = "Audi"

    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name}, serial-number: ${this.serialNumber}, ${this.price}$`);
    }
}

function WheeledVehicle2(id, name, serialNumber, price, wheels, fuelType) {

    Object.setPrototypeOf(this, new Vehicle2(id, name, serialNumber, price))

    this.wheels = wheels;
    this.fuelType = fuelType;

    this.drive = function() {
        console.log("car is driving...")
    }
}

let newCar2 = new WheeledVehicle2(5, "a4", 123321, 40000, 4, "diesel")
// console.log(newCar2)
// newCar2.printVehicle()

function Car(id, name, serialNumber, price, wheels, fuelType, doors, horsePower) {
    Object.setPrototypeOf(this, new WheeledVehicle2(id, name, serialNumber, price, wheels, fuelType))

    this.doors = doors
    this.horsePower = horsePower

    this.drift = function() {
        console.log("car is drifting...")
    }
} 

let myFavCar = new Car(2, "m8", 100000, 123, 4, "petrol", 3, 400)

console.log(myFavCar)


//let arr = new Array()
let arr = [1,2,3]
console.log(arr)





