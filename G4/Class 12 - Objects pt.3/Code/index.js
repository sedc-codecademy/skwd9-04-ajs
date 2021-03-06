// function Vehicle(id, name, batchNumber, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNumber = batchNumber;
//     this.price = price;
//     this.company = "defaultValueCompany";
//     this.printVehicle = () => {
//         console.log(`${this.id}. NAME: ${this.name}, BATCH NUMBER: ${this.batchNumber}, PRICE: ${this.price}$`)
//     }
// }

class Vehicle {
    constructor(id, name, batchNumber, price) {
        // debugger;

        this.id = id;
        this.name = name;
        this.batchNumber = batchNumber;
        this.price = price;
        this.company = "defaultValueCompany";
    }

    printVehicle() {
        console.log(`${this.id}. NAME: ${this.name}, BATCH NUMBER: ${this.batchNumber}, PRICE: ${this.price}$`)
    }
}

// let boatObject = new Vehicle(1, "BoatName", "BatchNumber", 10000);

// console.log("Boat object from class Vehicle", boatObject);

// boatObject.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor (id, name, batchNumber, price, wheels) {
        // debugger;
        super(id, name, batchNumber, price);


        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`We are driving ${this.name} on ${this.wheels} wheels`);
    }
}

let bikeObject = new WheeledVehicle(2, "BikeName", "BikeBatchNumber", 1000, 2);

// bikeObject.driveVehicle();
// bikeObject.printVehicle();

// console.log("Bike object", bikeObject);

class Car extends WheeledVehicle {
    constructor (id, name, batchNumber, price, doorsNumber, hasAirConditioning) {
        super(id, name, batchNumber, price, 4);

        this.doorsNumber = doorsNumber;
        this.hasAirConditioning = hasAirConditioning;

        if(hasAirConditioning) this.price += 400;
    }

    buyCar(money) {
        money >= this.price ? console.log("Congrats! You bought a car")
            : console.log(`You need ${this.price - money} more money to buy this car`);
    }

    static addAirConditioning(obj) {
        // debugger;
        if (!obj.hasAirConditioning) {
            obj.hasAirConditioning = true;
            obj.price += 400;
            console.log(`The vehicle has air conditioning now and it costs ${obj.price}`)
        }
        else {
            console.log("The vehicle already has air conditioning");
        }
    }
}

let carObject1 = new Car(3, "Korsa", "KorsaBatch", 6600, 4, true);
let carObject2 = new Car(4, "A8", "A8Batch", 10000, 4, false);

// console.log("Car object 1", carObject1);
// console.log("Car object 2", carObject2);

// carObject1.buyCar(6600);
// carObject2.buyCar(10001);

// Static method
// Car.addAirConditioning(carObject1);
// Car.addAirConditioning(carObject2);
// Car.addAirConditioning(bikeObject); // No logic!!!

class ElectricCar extends Car {
    constructor (id, name, batchNumber, price, doors, owner) {
        super (id, name, batchNumber, price, doors, true);

        // debugger;
        this.owner = owner;
    }

    // 1. set keyword and the name of the property as the name of the method with parameter
    // 2. Log something or do the validation (optional step)
    // 3. create private property in that object with the parameter value
    set owner(ownerName) {
        // debugger;
        console.log("We are setting the name of the owner. Please wait...");

        ownerName.length > 1 ? this._owner = ownerName : (() => {throw new Error("Owner name too short")})();
    }

    // 1. get keyword and the name of the property as the name of the method without parameter
    // 2. Log something or do the validation (optional step)
    // 3. get the value from that object (this), but the private property created inside the set method
    get owner() {
        // debugger;
        console.log("We are getting the name of the owner. Please wait...");

        return "The car owner is: " + this._owner;
    }
}

let electricCar = new ElectricCar(5, "ElectricCarName", "ECBN", 10000, 2, "Natasha");

// console.log("Electric car", electricCar);
// console.log(electricCar.owner);
// let electricCarOneCharNameOfOwner = new ElectricCar(12, "Test", "Batch", 12380712, 4, "D");

// Check if an object is an instance of a class
console.log(electricCar instanceof ElectricCar);
console.log(electricCar instanceof Car);
console.log(electricCar instanceof Vehicle);

class Test {}

console.log(electricCar instanceof Test);