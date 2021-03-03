/* //simple inheritance
function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "Our Company";
    this.printVehicle = function(){
        console.log(`${this.id} ${this.name} ${this.batchNo} ${this.price} ${this.company}`)
    }
}

let vehicle = new Vehicle(1, "Yugo", "111", 500);
//wheeledVehicle is a copy of vehicle (different reference)
let wheeledVehicle = Object.create(vehicle);
wheeledVehicle.numberOfWheels = 4;
wheeledVehicle.drive = function(){
    console.log("We are driving carefully!");
}

wheeledVehicle.name = "Zastava";
console.log(vehicle);
console.log(wheeledVehicle);
//wheeledVehicle.__proto__ is the same object as vehicle
vehicle.type = "Default type";
let car = Object.create(wheeledVehicle);
car.fuelTank  = 30;
console.log(car);

console.log(wheeledVehicle.type); //Default type
console.log(wheeledVehicle.__proto__.type); //Default type
console.log(vehicle.type); //Default type
wheeledVehicle.numberOfDoors = 5;
console.log(wheeledVehicle.numberOfDoors); //5
console.log(vehicle.numberOfDoors); //undefined */

//PROTOTYPES
function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "Our Company";
    this.printVehicle = function(){
        console.log(`${this.id} ${this.name} ${this.batchNo} ${this.price} ${this.company}`)
    }
}

function WheeledVehicle (numberOfWheels, name){
    this.numberOfWheels = numberOfWheels;
    this.name = name;
    this.drive = function(){
        console.log("We are driving carefully!");
    }
   /*  this.printVehicle = function(){
        console.log("Printing vehicle..")
    } */
}
//we set the prototype, the object from which it will inherit
WheeledVehicle.prototype = Object.create(new Vehicle());
//wheeledVehicle1 will get poperties and methods from new Vehicle()
//it will overwrite name and add numberOfWheels
let wheeledVehicle1 = new WheeledVehicle(4, "Yugo");
console.log(wheeledVehicle1);
wheeledVehicle1.price = 500;
wheeledVehicle1.printVehicle();

let car = new Vehicle(1, "Zastava", "222", 600);
console.log(car);

//working with an instance
console.log(wheeledVehicle1.name); //Yugo
console.log(wheeledVehicle1.__proto__.__proto__.name); //undefined
wheeledVehicle1.name = "Ficho";
console.log(wheeledVehicle1.name);
console.log(wheeledVehicle1);

WheeledVehicle.prototype.stop = function(){
    console.log(`The vehicle ${this.name} stopped;`)
}

wheeledVehicle1.stop();

let newCar = new WheeledVehicle(4, "BMW");
newCar.stop();
console.log(newCar);
//newCar.__proto__.__proto__.stop();
