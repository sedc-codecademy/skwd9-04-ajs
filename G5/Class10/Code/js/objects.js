// let person = new Object() // The main Object() constructor in JS

// Create method

let dog = {
  isHappy: true,
  bark: function () {
    console.log("BARK BARK!!!");
  },
};

let barnie = Object.create(dog);
console.log(barnie);
barnie.name = "Barnie";
(barnie.color = "white"), (barnie.age = 2);
console.log(barnie);

let barnieTwinBrother = Object.create(barnie);
barnieTwinBrother.name = "Spyke";
console.log(barnieTwinBrother);

// Assign method

let addressInfo = {
  street: "Dogge Street",
  streetNumber: 24,
  contactPerson: "070222111",
};

let barnieChip = Object.assign(barnie, addressInfo);
console.log(barnieChip);

let anotherAddress = {
  street: "Other Street",
  streetNumber: 12,
  contactPerson: "072222333",
};

console.log("BEFORE:", barnieChip);
let barnieChipUpdate = Object.assign(barnieChip, anotherAddress);
console.log("AFTER:", barnieChip);
console.log(barnieChipUpdate);

let barnieChipUpdateReversed = Object.assign(anotherAddress, barnieChip);
console.log(barnieChipUpdateReversed);

// What happened?
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

////////////////
// Create an obj to use as the prototype

let person = {
  name: "Ivan",
  sayHello: function () {
    console.log(`${this.name} says hi!`);
  },
};

let personFull = {
  firstName: "Ivan",
  lastName: "Lazarevski",
  getFullName: function () {
    return this.firstName + this.lastName;
  },
};

let animal = {
  species: "Dog",
  breed: "Jack Russell",
  name: "Ben",
  nicknames: ["Thief"],
  addNickname: function (nick) {
    this.nicknames.push(nick);
  },
};

animal.addNickname("Annoying");
console.log(animal.nicknames);

Object.seal(person);
Object.freeze(personFull);
Object.preventExtensions(animal);

/*
                              seal()      freeze()        preventExtensions()
    add new prop            no          no              no
    edit prop value         yes         no              yes
    delete a prop           no          no              yes
    change descriptors      no          no              yes
    reassign __proto__      no          no              no
    */
