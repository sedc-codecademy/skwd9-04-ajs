// Constructor function

// function Vehicle(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.printVehicle = function() {
//         console.log(`${this.id}. ${this.name}, ${this.price}`)
//     }
// }

// Class

class Vehicle {
    constructor(id, name, price) {
        // console.log(`Please wait, vehicle ${name} is creating.......`)
        this.id = id;
        this.name = name;
        this.price = price;
    }
    printVehicle() {
        console.log(`${this.id}. ${this.name}, ${this.price}`)
    }
}

// creating instance (object) of Vehicle
// let vehicle1 = new Vehicle(1, "BMW", 7000);
// console.log(vehicle1);
// vehicle1.printVehicle();
//let vehicle2 = new Vehicle(2, "MERCEDES", 6500);

class WheeledVehicle extends Vehicle {
    constructor(id, name, price, wheels) {
        super(id, name, price);
        // console.log(`Please wait, wheeled vehicle ${name} is creating.......`);
        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`We are driving ${this.name} on ${this.wheels} wheels`)
    }

}

// let car = new WheeledVehicle(1, "Audi", 5000, 4);
// car.printVehicle();
// car.driveVehicle();

let obj = new Object();

class Car extends WheeledVehicle {
    constructor(id, name, price, wheels, doors, hasAc) {
        super(id, name, price, wheels);
        // console.log(`Please wait, car ${name} is creating.......`);
        this.doors = doors;
        this.hasAirCondition = hasAc;
        if(hasAc) {
            this.price += 400;
        }
    }

    static addAc(car) {
        if (!car.hasAirCondition) {
            car.hasAirCondition = true;
            car.price += 400;
            console.log(`${car.name} now has AC included and it costs ${car.price}`);
        } else {
            console.log(`${car.name} already has AC!`);
        }
    }
}

let car1 = new Car(1, "Renault", 4000, 4, 5, true);

// Car.addAc(car1);
// console.log(car1);

class ElectricCar extends Car {
    // declaring private field
    // #academy = "SEDC";
    constructor(id, name, price, wheels, doors, hasAc, owner, academy) {
        super(id, name, price, wheels, doors, hasAc);
        // setting value in constructor to private field (not recomended to set value send from outside to private field)
        // if(academy) this.#academy = academy;
        this._owner = owner;
    }

    get owner() {
        console.log("We are getting the name of the owner. Please wait.....");
        return `The car is owned by ${this._owner}`;
    }

    set owner(newOwnerName) {
        console.log("We are setting the name of the owner. Please wait.....");
        if (newOwnerName.length > 1) {
            this._owner = newOwnerName;
        } else {
            throw new Error("Invalid new name");
        }
    }

    // getting the value of the private field academy
    // getAcademy() {
    //     return this.#academy;
    // }
}

let electricCar = new ElectricCar(1, "Tesla", 50000, 4, 5, true, "John Doe", "SEDC1");

// console.log(electricCar instanceof ElectricCar)
// console.log(electricCar instanceof Car)
// console.log(electricCar instanceof WheeledVehicle)
// console.log(electricCar instanceof Vehicle)
// console.log(electricCar instanceof Object)




