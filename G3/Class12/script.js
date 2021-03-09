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
//console.log(car.getInfo());

class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, wheels) {
        super(id, name, batchNo, price);
        this.wheels = wheels;
    }

    driveVehicle() {
        console.log("Driving");
    }
}

let bike = new WheeledVehicle(12, "Bike", "xv45", 400, 2);
//bike.driveVehicle();
//console.log(bike.getInfo());

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, hasAc) {
        super(id, name, batch, price, 4);
        this.doors = doors;
        this.hasAc = hasAc;

        if (hasAc) {
            this.price += 200;
        }
    }

    buyCar(money) {
        if (money >= this.price) {
            return {
                message: "Congrats! You bought a car",
                isBought: true,
                moneyLeft: money - this.price
            };
        } else {
            return {
                message: `Yon need ${this.price - money} more to buy this car`,
                isBought: false,
                moneyLeft: money
            };
        }
    }

    static addAc() {
        console.log("Im static method");
    }
}

Number.isNaN(3);

Car.addAc()
let zastava = new Car(1, "101", "asd123", 500, 2, false);
zastava.add
// console.log(zastava);
// let fiat = new Car(2, "Uno", "asdzxc", 700, 4, true);
// console.log(fiat);
// let result = fiat.buyCar(700);
// console.log(result);
// console.log(result.message);
// let result1 = zastava.buyCar(700);
// console.log(result1);
// console.log(result1.message);



// constructor with efault parameters
// class Car extends WheeledVehicle {
//     constructor() {
//         super(7, "Yugo", "xbasd", 600, 4);
//         // this.doors = doors;
//         // this.ac = ac;
//     }
// }

// without constructor parameters
// let yugo = new Car();
// console.log(yugo.getInfo());

// let mercedes = new Car();
// mercedes.name = "mercedes";
// mercedes.price = 300;
// mercedes.id = 15;
// mercedes.wheels = 8;