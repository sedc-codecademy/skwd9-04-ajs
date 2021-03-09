// Object.create => creates new object

// let person = new Object();
// console.log(person)

let person = {
    firstName: 'JOHN',
    lastName: 'DOE',
    sayHi: function() {
        console.log("HIIIIIII")
    }
}

let person1 = Object.create(person);

person.isAdult = false;
// person1.sayHi();
person1.age = 22;

// console.log(person1, person)

let person2 = Object.create(person1);

// person2.sayHi();
person2.middleName = "Junior";
// console.log(person2.firstName, person2.lastName)

// console.log(person2, person1, person);

// Object.assign => accepts 2 arguments both of type objects and merge the second one into the first one

let dog = {
    name: 'Yorki',
    age: 5
};

let dog1 = {
    color: 'white',
    owner: 'John Doe',
    name: "Not Yorki",
    sayHi: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
};


let finalDog = Object.assign(dog, dog1);

person1.dog = finalDog
// console.log(person1.dog.color)
// person1.dog.sayHi();

// console.log(finalDog)

// Object.keys => accepts object as argument and returns array with all its properties name (keys)

// let dog3 = { };

// Bonus: more dinamical way of creating properties inside object

// let finalDogKeys = Object.keys(finalDog).forEach(key => {
//     dog3[key] = dog1[key];
// });

let obj = {
    firstName: "John",
    lastName: "Doe",
    age: 22
};



// console.log(dog3);
// console.log(finalDogKeys);



// Object.values => accepts object as argument and returns array with all properties values

let finalDogValues = Object.values(finalDog);
// console.log(finalDogValues)


// Object.entries =>  accepts object as argument and returns array with arrays which have key, value pairs (property name and property value)

let finalDogEntries = Object.entries(finalDog);
// console.log(finalDogEntries);

// Object.freeze => accepts object as argument, doesnt return anything but disables the posibility to change property value of that object or to add new ones


// Object.freeze(finalDog);

// finalDog.sayHello = function() {
//     console.log("THIS IS HEELO METHOD");
// }

// finalDog.sayHello();

// finalDog.color = "yellow";
// console.log(finalDog);


//Object.seal => accepts object as argument, doesnt return anything but disable posibility to add new properties
// the difference between seal and freeze is that seal allows to change properties values and freeze doesnt

Object.seal(finalDog);

// finalDog.race = "maltezer";

// console.log(finalDog.race);

finalDog.owner = "Bob Bosky";

console.log(finalDog.owner);

