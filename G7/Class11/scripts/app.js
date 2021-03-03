// 'use strict';

// Nullish coalescing operator

// let a = false;
// let b = '';
// let g = null;

// // let c = a ? 'ok' : 'not ok'

// let c = g || 'not ok'

// let d = g ?? 'not ok'

// console.log(c)
// console.log(d)

// Optional chaining operator

// let student1 = {
//     name: 'John',
//     age: 30,
//     classes: {
//         jS: ['Mon', 'Wed'],
//         net: ['Tue', 'Th']
//     }
// }

// let student2 = {
//     name: 'Goran',
//     age: 20,
// }

// !!student1
// if (student1 && student1.classes && student1.classes.jS) {
//     console.log(student1.classes.jS)
// }

// if (student2 && student2.classes && student2.classes.jS) {
//     console.log(student1.classes.jS)
// }

// if (student2?.classes?.jS) {
//     console.log(student1.classes.jS)
// }

// let daysLearningJavaScript = student2?.classes?.jS;

// let array;

// let string = '';

// if (array?.length) {

// }

// Map

// proper way
// let map = new Map();

// map.set('name', 'Ivo');
// map.set('lastName', 'Kostovski');

// let employee1 = {
//     id: '1',
//     name: 'Ivo'
// }

// let employee2 = {
//     id: '2',
//     name: 'Ivan'
// }

// let employee3 = {
//     id: '3',
//     name: 'Martin'
// }

// let employees = [employee1, employee2, employee3];

// let employees = new Map();

// employees.set(employee1.id, employee1)
// employees.set(employee2.id, employee2)
// employees.set(employee3.id, employee3)

// console.log(employees)

// let hasFirstEmployee = employees.has(employee1.id);
// console.log(hasFirstEmployee);

// console.log(
//     employees.get(employee1.id)
// )

// employees.delete(employee2.id)
// console.log(employees.size)
// console.log(map)

// improper but more popular way

// let employees = new Map();

// employees[employee1.id] = employee1
// employees[employee2.id] = employee2
// employees[employee3.id] = employee3

// console.log(employees)

// console.log(employees.get(employee1.id))
// console.log(
//     employees[employee1.id]
// )

// Set

// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(1);
// set.add(Math.random())
// set.add("skopje")
// set.add('skopje')

// console.log(set.has(1))
// set.delete(2);

// console.log(set)

// Object method

// let dog = {
//     name: 'Boem',
//     breed: 'Golden Retriever',
//     hasOwner: true,
//     age: 3
// }

// console.log(dog);

// Object keys
// const keys = Object.keys(dog);
// console.log(keys)

// console.log(dog[keys[2]]) //dog['hasOwner'];

// !!Object.keys(dog).length //check if object is empty

// Object values

// const values = Object.values(dog);
// console.log(values)

// Object entries

// const entries = Object.entries(dog)
// console.log(entries)

// Object freeze

// Object.freeze(dog);
// dog.name = 'Sparky';
// console.log(dog)
// dog.hasTail = true;
// console.log(dog)
// delete dog.breed;
// console.log(dog)

// Object seal

// Object.seal(dog);

// dog.name = 'Sparky'
// dog.hasTail = true;
// delete dog.age;

// console.log(dog)

// Object create

// const obj = Object.create({})

// console.log(obj)

// const person = {
//     isHuman: false,
//     name: 'Alien',
//     printIntroduction: function () {
//         console.log(`My name is ${this.name} and I'm ${this.isHuman ? 'human' : 'not human'}`)
//     }
// }
// console.log(person)
// person.printIntroduction()

// const ivo = Object.create(person);
// ivo.name = 'Ivo';
// ivo.isHuman = true;
// ivo.printIntroduction();
// console.log(ivo);
// console.log(person)

// Object assign

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(returnedTarget)

// console.log(target)

// Heroes

// function Hero(name, level) {
//     this.name = name;
//     this.level = level;
// }

// let martin = new Hero('Martin', 1);

// console.log(martin);

// Hero.prototype.greet = function () {
//     console.log(`${this.name} says hello.`)
// }

// // martin.greet();

// function Healer(name, level, spell) {
//     Hero.call(this, name, level);

//     this.spell = spell;
// }

// Healer.prototype = Object.create(Hero.prototype)

// let dejan = new Healer('Dejan', 2, 'cure');

// // console.log(dejan)

// Healer.prototype.heal = function () {
//     console.log(`${this.name} casts the ${this.spell} spell`);
// }

// console.log(dejan)
// dejan.heal();
// dejan.greet();

// Inheritance

function Vehicle(id, name, batchNo, price) {
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;
  this.company = "Move Inc.";
  this.printVehicle = function () {
    console.log(
      `${this.id}. ${this.name}, Batch: ${this.batchNo}, ${this.price}`
    );
  };
}

// EXERCISE 1 START !

// let wheeledVehicle = Object.create(new Vehicle(1, 'Yugo', '25B', 500))

// wheeledVehicle.drive = function () { console.log('Started driving')}

// console.log('Wheeled Vehicle', wheeledVehicle)

// let car = Object.create(wheeledVehicle);

// car.fuelTank = 32;
// car.drive();
// car.printVehicle()
// console.log('CAR', car)

// EXERCISE 1 END !

// Exercise 2 start

function WheeledVehicle(wheels, name) {
    this.wheels = wheels;
    this.name = name;
    this.drive = function () {
        console.log(`Driving on ${this.wheels} wheels!`)
    }
}

WheeledVehicle.prototype = Object.create(new Vehicle())

WheeledVehicle.prototype.stop = function () {
    console.log(`The vehicle ${this.name} has stopped driving.`)
}

let car = new WheeledVehicle(4, 'Yugo')
car.price = 500;
car.id = 1;
car.batchNo = '25b';
car.printVehicle()
car.drive()

car.stop();

console.log(car)