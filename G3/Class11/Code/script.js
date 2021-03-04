//defining general object 
// function Vehicle(id, name, batchNo, price){
//     this.id = id,
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "move.inc";
//     this.printVehicle = function(){
//         console.log(`${id}. ${name}, ${batchNo}, ${price}, ${company}`);
//     }
// }

//let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));//creating new template object from type Vehicle 

//wheeledVehicle.drive = function(){console.log("WROOM!")};
//console.log(wheeledVehicle);
//let car = Object.create(wheeledVehicle);//creating new object car
//car.fuelTank = 32;
//car.drive();//accessing function from wheeledVehicle object
//console.log(car.name);
//console.log(car);

//some example
// function BeerTemplate(percentOfAlchocol,description,bitterness){
//     this.percentOfAlchocol = percentOfAlchocol;
//     this.description = description;
//     this.bitterness = bitterness;
// }

// let beer = Object.create(new BeerTemplate(4,"This is some example beer","12%"));
// console.log(beer);
// let skopsko = Object.create(beer);
// skopsko.name = "Skopsko";
// skopsko.manufracturer = "Skopska pivara";
// skopsko.streetAddress = "Skopje";
// console.log(skopsko);

//prototypes
//general object
// function Vehicle(id, name, batchNo, price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "move.inc";
//     this.printVehicle = function(){
//         console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
//     }
// }

// function WheeledVehicle(wheels, name){
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function(){
//         console.log(`Driving on ${wheels} wheels`);
//     }
// }

// WheeledVehicle.prototype = Object.create(new Vehicle());
// let car = new WheeledVehicle(4,"Yugo");
// car.id=12;
// car.batchNo="123";
// car.price=500;
//console.log(car);

//adding function/methods to prototype
// WheeledVehicle.prototype.stop = function(){
//     console.log(`The vehicle ${this.name} has stopped`);
// }

// car.stop();
// car.printVehicle();

//prototype chain
function Vehicle(id, name, batchNo, price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.printVehicle = function(){
        console.log(`${this.id}, ${this.name}, ${this.batchNo}, ${this.price}`);
    }
}

function WheeledVehicle(id, name, batchNo, price, wheels){
    Object.setPrototypeOf(this,new Vehicle(id,name,batchNo,price));
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels`);
    }
}

function Car(id, name, batchNo,price, wheels, fuelCapacity){
    Object.setPrototypeOf(this, new WheeledVehicle(id,name,batchNo,price,wheels));
    this.fuelCapacity = fuelCapacity;
}

let carObject = new Car(1,"Zastava",12,500,4,50);
console.log(carObject);
console.log(carObject.wheels);//this is from wheeled vehicle object
console.log(carObject.price);//this is from vehicle object
//this is some test example
let vehicle = new WheeledVehicle(1, "Yugo", 123, 500, 4);
//console.log(vehicle);

let someVehicleObject= new Vehicle(1,"Yugo",123,500);

function TestVehicleObject(obj,wheels){
    this.wheels = wheels;
    Object.setPrototypeOf(this, obj);
}

let testObject = new TestVehicleObject(someVehicleObject,4);
//console.log(testObject);