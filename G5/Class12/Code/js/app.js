function VehicleTest(id, name, batch, price) {
    this.id = id;
    this.name = name;
    this.batch = batch;
    this.price = price;

    this.printVehicle = function () {
        console.log(this);
        console.log(`${this.id}. ${this.name}`);
    }

    this.startEngine = () => {
        console.log(this);
    }
}

// Vehicle.prototype.getInfo = function() {
//     console.log(`This is a nice car and it is ${this.name}`);
// }

// let yugo = new VehicleTest(1, 'Yugo', 123123, 500);
// console.log(yugo);


// Classes: Declaration of class

class Company {
    constructor(id, name, numOfEmployees, city) {
        this.id = id;
        this.name = name;
        this.numOfEmployees = numOfEmployees;
        this.city = city;
    }
}

class Vehicle {
    constructor(id, name, batchNo, price, company) {
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
        this.company = company;
    }
    // Method in a class. 
    // It needs to be outside of the constructor for this class
    getInfo() {
        console.log(`${this.id}. ${this.name} | Batch: ${this.batchNo} | Price: ${this.price}`);
    }
}


let company = new Company(1, 'Best vehicle company', 1000, 'Amsterdam');


let testVehicle1 = new Vehicle(1, 'Test vehicle 1', 123123, 100, company);
let testVehicle2 = new Vehicle(2, 'Test vehicle 2', 123111, 100, company);
let testVehicle3 = new Vehicle(3, 'Test vehicle 3', 123222, 100, new Company(2, 'Nice company', 100, 'Skopje'));
let testVehicle4 = new Vehicle(4, 'Test vehicle 4', 123333, 100);

console.log(testVehicle1);
console.log(testVehicle2);
console.log(testVehicle3);
console.log(testVehicle4.getInfo());


class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, company, numberOfWheels) {
        super(id, name, batchNo, price, company)
        this.numberOfWheels = numberOfWheels;
    }
    getNumOfWheels() {
        console.log(`This vehicle has ${this.numberOfWheels} wheels!`);
    }
}

let bike = new WheeledVehicle(5, 'Bike', 10220, 500, company, 2);
let car = new WheeledVehicle(6, 'Car', 19295, 2000, company, 4);
console.log(bike);
console.log(car);

// Create a new class 'Car'
// Make it inherit from WheeledVehicle => use the 'super()' constructor in order to pass the props to the parent
// Add only properties characteristic for Car class (doors, hasAc) 
// Bonus: Make the price property dependable of the hasAc property
// If the car support AC, then add +400 to the price. If not then leave only the price as specified

class Car extends WheeledVehicle {
    constructor(id, name, batchNo, price, company, numberOfWheels, doors, hasAc) {
        super(id, name, batchNo, price, company, numberOfWheels)
        this.doors = doors;
        this.hasAc = hasAc;
        this.hasAc ? this.price += 400 : this.price;

        // if(this.hasAc)
        // {
        //     this.price += 400;
        // }
    }

    // One way to affect the regular price of the car. By using method setPrice()
    // setPrice() {
    //     if(this.hasAc) {
    //         this.price += 400;
    //     }
    // }


    // static method for add AC in the car
    static addAc(car) {
        if (!car.hasAc) {
            car.hasAc = true;
            car.price += 400;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log(`The car already has AC!`);
        }
    }
}

let toyota = new Car(7, 'Toyota - Auris', 112233, 12000, company, 4, 5, false);
// toyota.setPrice();

Car.addAc(toyota);

console.log(toyota);



class ElectricCar extends Car {
    constructor(id, name, batchNo, price, company, numberOfWheels, doors, hasAc, batteryCapacity) {
        super(id, name, batchNo, price, company, numberOfWheels, doors, hasAc)
        this.batteryCapacity = batteryCapacity;
    }

    get batteryCapacity() {
        console.log(`We are getting the battery capacity....`);
        return `${this.name} has ${this._batteryCapacity} Ah battery capacity!`;
    }

    set batteryCapacity(capacity) {
        capacity > 100 ?
            this._batteryCapacity = capacity :
            (() => { throw new Error(`Cannot set battery capacity of the ${this.name} that is below 100 Ah!`) })();
    }
}



// The setter method is used in the moment of instantiating a new object from the ElectricCar class 
let tesla = new ElectricCar(8, 'Tesla', 121233, 100000, company, 4, 3, true, 10000);

// console.log(tesla.batteryCapacity);
// console.log(tesla.getCapacity());
// tesla.setCapacity(50);



// If there is a getter method defined for some property, it can be accessed 
// just by using the name of that property
console.log(tesla.batteryCapacity);

let squareValue = Math.pow(2, 2);
console.log(squareValue)





// Static methods in a helper class
// You don't need an object in order to call the static methods from the class 
class MathHelper {
    static sum(x, y) {
        return x + y;
    }

    static diff(x, y) {
        return x - y;
    }

    static power(x, y) {
        return Math.pow(x, y);
    }

    static printInConsole(result) {
        console.log(result);
    }
}

MathHelper.printInConsole(MathHelper.sum(10, 20));
MathHelper.printInConsole(MathHelper.diff(10, 20));
MathHelper.printInConsole(MathHelper.power(10, 20));

// console.log(MathHelper.sum(10, 20));
// console.log(MathHelper.diff(10, 20));
// console.log(MathHelper.power(10, 20));

