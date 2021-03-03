function Vehicle(id, name, batchNo, price) {
    // debugger;

    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "company"
    this.printVehicle = () => console.log(`${id}. NAME: ${name}, BATCH: ${batchNo}, PRICE: ${price}$`);
}

// let vehicleObject = new Vehicle(1, "A1", "25B", 5000);

// console.log("Vehicle object", vehicleObject);

// let wheeledVehicleObject = Object.create(vehicleObject);

// wheeledVehicleObject.drive = () => console.log("WHOM");

// console.log("Wheeled vehicle object", wheeledVehicleObject);

// let carObject = Object.create(wheeledVehicleObject);

// carObject.fuelTank = 32;

// carObject.drive();
// carObject.printVehicle();

// console.log("Car object", carObject);

// let boatObject = new Vehicle(2, "Boat Name", "24Boat", 100000);

// console.log("Boat vehicle object", boatObject);

// Prototypes

// function WheeledVehicle(wheels) {
//     this.wheels = wheels;
//     this.drive = () => console.log(`Driving on ${this.wheels} wheels!`);
// }

// let vehicleObject = new Vehicle(1, "Yugo", "55", 500);

// WheeledVehicle.prototype = vehicleObject;

// let wheeledVehicleObject1 = new WheeledVehicle(4);

// console.log("Wheeled vehicle object 1", wheeledVehicleObject1);

// let wheeledVehicleObject2 = new WheeledVehicle(2);

// console.log("Wheeled vehicle object 2", wheeledVehicleObject2);

// let vehicle2 = new Vehicle (2, "Korsa", "123", 1000);

// WheeledVehicle.prototype = vehicle2;

// let wheeledVehicleObject3 = new WheeledVehicle(3);

// console.log("Wheeled vehicle object 3", wheeledVehicleObject3);

// // Adding methods on the prototype and accessing prototype
// // Adding
// WheeledVehicle.prototype.stop = (name) => `The vehicle ${name} has stopped`;

// let wheeledVehicleObject4 = new WheeledVehicle(6);

// console.log("Wheeled vehicle object 4", wheeledVehicleObject4);

// console.log(wheeledVehicleObject4.stop("Test"));

// // Accessing

// console.log("Accessing object prototype property company", wheeledVehicleObject4.__proto__.company);

// console.log("Accessing object prototype method stop", wheeledVehicleObject4.__proto__.stop(wheeledVehicleObject4.__proto__.name));

// Prototype chain
function WheeledVehicle(id, batchNumber, price, name, wheels){
    // debugger;

    Object.setPrototypeOf(this, new Vehicle(id, name, batchNumber, price));

    this.wheels = wheels;
    this.drive = () => console.log(`Driving on ${this.wheels} wheels`);
}

function Car(id, batchNumber, price, name, doorsNumber, fuelCapacity) {
    // debugger;

    Object.setPrototypeOf(this, new WheeledVehicle(id, batchNumber, price, name, 4))

    this.name = name;
    this.doorsNumber = doorsNumber;
    this.fuelCapacity = fuelCapacity;
    this.drift = () => console.log(`The ${this.name} is drifting`);
}

let protoChainCar = new Car(1, "23Batch", 1000000, "A8", 4, 34);

// protoChainCar.printVehicle();
// protoChainCar.drive();
// protoChainCar.drift();

console.log("Proto chain car variable", protoChainCar);


// Check for some object's prototype

// console.log(Object.getPrototypeOf(protoChainCar));

// Constructor

console.log("Proto chain car variable constructor", protoChainCar.constructor)

let objectTest = new Object();

console.log(objectTest.constructor);

let newVehicle = new protoChainCar.constructor(3, "Boing", "747", 100000000000000000000);

console.log("New vehicle", newVehicle);