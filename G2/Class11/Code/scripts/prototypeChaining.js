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

function WheeledVehicle (id, batchNo, name, price, numberOfWheels){
    //this.__proto__ = Object.create(new Vehicle(id, name, batchNo, price));
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("We are driving carefully!");
    }
}
let wheeledVehicle = new WheeledVehicle(1, "222", "Yugo", 300, 4);
console.log(wheeledVehicle);

function Car(id, batchNo, name, price, numberOfWheels, fuelTank){
    //this.__proto__ = Object.create(new WheeledVehicle(id, batchNo, name, price, numberOfWheels));
    Object.setPrototypeOf(this, new WheeledVehicle(id, batchNo, name, price, numberOfWheels));
    this.fuelTank = fuelTank;
    this.stop = function(){
        console.log("The car stopped");
    }
}
//this -> car
let car = new Car(2, "343", "Mercedes", 2000, 4, 40);
console.log(car);

let car2 = new Car(3, "373", "Renault", 1000, 4, 40);
console.log(car2);

car.price = 2500;
console.log(car);
console.log(car2);

console.log(car2.price); //1000
//this is a reference to the vehicle object used as prototype
car2.__proto__.__proto__.price = 1500;
console.log(car2.price); //1500

//__proto__
console.log(Object.getPrototypeOf(car));
console.log(Object.getPrototypeOf(wheeledVehicle));


//constructor
console.log(car.constructor);
let anotherCar = new car.constructor(4, "373", "Opel", 1000);
console.log(anotherCar);
