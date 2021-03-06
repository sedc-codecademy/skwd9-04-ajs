class Vehicle {
    constructor(id, name, batchNo, price){
        //this -> instantiated object from the class
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
        this.company = "Our company";
    }
    printVehicle(){
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
//CLASS => TEMPLATE
//OBJECTS => INSTANCES (class definition)
let car = new Vehicle(1, "Mercedes", "2za", 3000); //constructor is called
console.log(car);
car.printVehicle();
let boat = new Vehicle(2, "Our boat", "333", 4000);
console.log(boat);
boat.printVehicle();

//INHERITANCE
class WheeledVehicle extends Vehicle {
    constructor(id, name, batchNo, price, numberOfWheels){
        //super => constructor of Vehicle
        super(id, name, batchNo, price);
        //specific properties
        this.numberOfWheels = numberOfWheels;
    }
    driveWheeledVehicle(){
        console.log(`We are driving ${this.name} on ${this.numberOfWheels} wheels`);
    }
    static type = "Our type";
    static printMessage(){
        console.log("Here is a message from WheeledVehicle class");
    }
}
let bike = new WheeledVehicle(3, "Our bike", "2232", 300, 2);
console.log(bike);
bike.printVehicle();
bike.driveWheeledVehicle();
console.log(Object.getPrototypeOf(bike));
console.log(Object.getPrototypeOf(car));

/* //CONSTRUCTORS
class Car extends WheeledVehicle{
    constructor(id, name, batchNo, price, numberOfWheels, doorsNo, ac){
        //super => WheeledVehicle constructor
        super(id, name, batchNo, price, numberOfWheels);
        this.doorsNo = doorsNo;
        this.ac = ac;
        if(ac){
            this.price += 400;
        }
    }
    buyCar(money){
        money >= this.price ? console.log("You can buy the car!") : 
        console.log(`You need ${this.price - money} more to buy it!`);
    }
}
let newCar = new Car(5, "New Car", "sfs", 2000, 4, 5, true);
console.log(newCar);
newCar.printVehicle();
newCar.driveWheeledVehicle();
newCar.buyCar(2000);
console.log(Object.getPrototypeOf(newCar)); */

//default constructor
/* class Test{

}
//default constructor will be called
let test = new Test();
console.log(test); */

class Test{
    constructor(){
        this.message = "Some message";
    }
}
let test = new Test();
console.log(test);
console.log(test instanceof Test);
//STATIC
class Car extends WheeledVehicle{
    constructor(id, name, batchNo, price, numberOfWheels, doorsNo, ac){
        //super => WheeledVehicle constructor
        super(id, name, batchNo, price, numberOfWheels);
        this.doorsNo = doorsNo;
        this.ac = ac;
        if(ac){
            this.price += 400;
        }
    }
    static isRentable = false;
    buyCar(money){
        money >= this.price ? console.log("You can buy the car!") : 
        console.log(`You need ${this.price - money} more to buy it!`);
    }
    static addAirConditioning(carObject){
        debugger
        console.log(this);
        if(carObject.ac){
            console.log("The car already has ac");
        }
        else{
            carObject.ac  = true;
            carObject.price += 400;
        }
    }
}

let ourCar = new Car(7, "Our car", "ret", 500, 4, 5, false);
console.log(ourCar);
Car.addAirConditioning(ourCar);
console.log(ourCar);
console.log(Car.isRentable);
//inherited from WheeledVehicle
Car.printMessage();
WheeledVehicle.printMessage();

//GETTERS/SETTERS

class ElectricCar extends Car{
    constructor(id, name, batchNo, price, numberOfWheels, doorsNo, ac, owner){
        super(id, name, batchNo, price, numberOfWheels, doorsNo, ac);
        //setter is called
        //ownerName => owner
        this.owner = owner;
    }
    get owner(){
        console.log("Getting the value for the owner..");
        return this._owner;
    }
    set owner(ownerName){
      console.log('Setting owner..');
      !!ownerName && ownerName.length > 1 ? this._owner = ownerName :
         (()=> { throw new Error("Invalid owner name")})();
    }
  /*   set ac(acParam){
        //validation
        //message
        if(acParam){
            this.price += 400;
        }
    } */
}

let ourElectricCar = new ElectricCar(15, "Tesla", "df", 5000, 4, 5, true, "SEDC");
//getter
console.log(ourElectricCar.owner);
console.log("ourElectricCar._owner");
console.log(ourElectricCar._owner);

console.log(ourElectricCar instanceof ElectricCar);
console.log(ourElectricCar instanceof Car);
console.log(ourElectricCar instanceof Vehicle);
console.log(ourElectricCar instanceof Test);