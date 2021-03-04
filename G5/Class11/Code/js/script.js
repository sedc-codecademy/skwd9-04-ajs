// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`)
//     }
// }
let vehicle = new Vehicle(111, 'Ford', '252C', 500);
// console.log(vehicle);


// let wheeledVehicle = Object.create(vehicle);
// wheeledVehicle.numOfWheels = 0;
// wheeledVehicle.id = 123;
// wheeledVehicle.batchNo = '1122B';
// wheeledVehicle.name = 'Vehicles with wheels';
// wheeledVehicle.price = 'Custom for each wheeled vehicle';
// // console.log(wheeledVehicle.batchNo);


// let car = Object.create(wheeledVehicle);
// car.numOfWheels = 4;
// car.numOfDoors = 5;
// car.color = 'red';
// car.name = 'Toyota';
// car.model = 'Rav 4';
// car.id = 123441
// car.batchNo = '1122BC'
// car.price = 30000;

// // console.log(car);


// let bike = Object.create(wheeledVehicle);
// bike.numOfWheels = 2;
// bike.color = 'grey';
// bike.name = 'Mountain bike';
// bike.model = 'Specialized';
// bike.id = 123551
// bike.batchNo = '1122BB'
// bike.price = 500;
// // console.log(bike);



function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.printVehicle = function () {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`)
    }
}

function WheeledVehicle(numOfWheels, id, name, batchNo, price) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.numOfWheels = numOfWheels;
}

function Car(numOfDoors, tankSize, model, numOfWheels, id, name, batchNo, price) {
    // this.__proto__ = Object.create(new  WheeledVehicle(numOfWheels, id, name, batchNo, price));
    Object.setPrototypeOf(this, new WheeledVehicle(numOfWheels, id, name, batchNo, price));
    this.numOfDoors = numOfDoors;
    this.tankSize = tankSize;
    this.model = model;
}

let car1 = new Car(5, 50, 'Insignia', 4, 111, 'Opel', '12BC', 25000);
car1.ecoDriveMode = true;


let car2 = new Car(2, 60, 'Mustang', 4, 113, 'Ford', '13BC', 100000);
car2.isRacingCar = true;

let newCar = Object.create(car2)

console.log(car1.printVehicle());
console.log(car2.printVehicle());

console.log(newCar);


console.log(Object.getPrototypeOf(car1.__proto__.__proto__));
