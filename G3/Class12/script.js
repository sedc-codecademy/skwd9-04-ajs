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

// function WheeledVehicle(id, name, batchNo, price, wheels, name){
//     Object.setPrototypeOf(this,new Vehicle(id,name,batchNo,price));
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = function(){
//         console.log(`Driving on ${wheels} wheels`);
//     }
// }

class Vehicle { // template/class
    constructor(id, name, batchNo, price) {
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
    }

    getInfo() {
        return `ID: ${this.id}. NAME: ${this.name}, BATCH: ${this.batchNo}, PRICE: ${this.price}$`;
    }
}

let car = new Vehicle(12, "Yugo", "321xn", 12000); // instance of an Viehicle template/class
console.log(car.getInfo());

class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, wheels) {
        super(id, name, batchNo, price);
        this.wheels = wheels;
        this.canFly = true;
    }

    driveVehicle() {
        console.log("Driving");
    }
}

let bike = new WheeledVehicle(12, "Bike", "xv45", 400, 2);
bike.driveVehicle();
console.log(bike.getInfo());