

function Vehicle (id, name, price) {
    this.id = id;
    // this.something = "something1"
    this.name = name;
    this.price = price;
    this.company = "G6";
    this.printVehicle = function() {
        console.log(`${this.id}. ${this.name}, ${this.price}`);
    }
}

function WheeledVehicle(wheels, name) {
    this.wheels = wheels;
    this.name = name;
    this.drive = function() {
        console.log("BRMMMMMMMMM......");
    };
}

// we set manually the prototype of WheeledVehicle to be Vehcile
WheeledVehicle.prototype = Object.create(new Vehicle(2, "Mercedes", 2000000))

// we can add method directly in WheeledVehicle prototype
WheeledVehicle.prototype.alertForFuel = function() {
    console.log("you run out of fuel")
}
// we can add property directly in WheeledVehicle prototype
WheeledVehicle.prototype.fuelTank = 100;


let car = new WheeledVehicle(4, "Audi");
// car.id = 1;
// car.price = 10000;

// car.printVehicle();


// This is code from previous class where we didnt have WheeledVehicle constructor function

// let vehicle1 = new Vehicle(1, "Mercedes", 1000000);
// let wheeledVehicle = Object.create(vehicle1);
// wheeledVehicle.drive = function() {
//     console.log("BRMMMMMMMMM......");
// };

// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;

// we can access proto property of an object
// console.log(car.__proto__.__proto__.something);

// car.printVehicle();
// car.drive();


// EXERCISE 1

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

function Student(academyName, id, firstName, lastName, age) {
    // method that sets prototype of an object
    // accepts 2 arguments both objects
    // first is the one on which we want to set prototype (in this case this is pointing to new created object of type Student)
    // second is object that we want to be prototype of the first argument (object) 
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = id;

    this.study = function() {
        console.log(`The student ${this.firstName} ${this.lastName} is studying in ${this.academyName} academy!`)
    }
}


let student1 = new Student("SEDC", 1, "John", "Doe", 18);
let student2 = new Student("SEDC", 2, "Jane", "Doe", 17);

console.log(student1.getFullName());
student1.study();
console.log("----------------------------------------------------------------------")
console.log(student2.getFullName());
student2.study();