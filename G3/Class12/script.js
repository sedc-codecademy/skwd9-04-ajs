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

    static addAc(car) {
        if (!car.hasAc) {
            car.hasAc = true;
            car.price += 200;
            console.log(`The car has AC now and it costs ${car.price}`);
        } else {
            console.log("The car already has AC!");
        }
    }

    static checkHowMuchDoorItHas(car) {
        if (car.doors >= 4) {
            console.log("Has 4 doors");
        } else if (car.doors >= 2) {
            console.log("Its a sports car");
        } else {
            console.log("Its a caravan");
        }
    }  
}

// let zastava = new Car(1, "101", "asd123", 500, 2, false);
// console.log(zastava);
// Car.addAc(zastava);
// Car.checkHowMuchDoorItHas(zastava);
// let fiat = new Car(2, "Uno", "asdzxc", 700, 4, true);
// console.log(fiat);
// let result = fiat.buyCar(700);
// console.log(result);
// console.log(result.message);
// let result1 = zastava.buyCar(700);
// console.log(result1);
// console.log(result1.message);

class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner) {
        super(id, name, batch, price, doors, true);
        this.owner = owner;
    }

    get owner() {
		console.log("We are getting the name of the owner. Please wait...");
        return "The car is owned by:" + this._owner;
    }
	set owner(ownerName){
		console.log("We are setting the name of the owner. Please wait...")
		ownerName.length > 1 ? this._owner = ownerName : (()=> {throw new Error("Owner name too short!")})();
	}
}

class DiselCar extends Car {
    constructor(id, name, batch, price, doors, owner) {
        super(id, name, batch, price, doors, true);
        this.owner = owner;
    }
}

let tesla = new ElectricCar(2, "Tesla", "12a", 30000, 5, "Trajan");

// console.log(tesla);
// console.log(tesla.owner);

// let tesla2 = new ElectricCar(2, "Tesla2", "12a2", 25000, 2, "T");

// console.log(tesla instanceof ElectricCar);
// console.log(tesla instanceof Vehicle);
// console.log(tesla instanceof DiselCar);

let tesla1 = new ElectricCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let tesla2 = new ElectricCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let tesla3 = new ElectricCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let tesla4 = new ElectricCar(2, "Tesla", "12a", 30000, 5, "Trajan");

let diesel = new DiselCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let diesel2 = new DiselCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let diesel3 = new DiselCar(2, "Tesla", "12a", 30000, 5, "Trajan");
let diesel4 = new DiselCar(2, "Tesla", "12a", 30000, 5, "Trajan");

let cars = [tesla1, tesla2, tesla3, tesla4, diesel, diesel2, diesel3, diesel4];

for (let car of cars) {
    if (car instanceof ElectricCar) {
        console.log("ElectricCar");
    }

    if (car instanceof DiselCar) {
        console.log("DiselCar");
    }
}

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