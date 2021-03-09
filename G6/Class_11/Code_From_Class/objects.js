// Object.create

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

// Object.assign

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

// Object.keys

let dog3 = { };

let finalDogKeys = Object.keys(finalDog).forEach(key => {
    dog3[key] = dog1[key];
});

console.log(dog3);
// console.log(finalDogKeys);

// Object.values

let finalDogValues = Object.values(finalDog);
// console.log(finalDogValues)


// Object.entries

let finalDogEntries = Object.entries(finalDog);
// console.log(finalDogEntries);

// Object.freeze

// Object.freeze(finalDog);

// finalDog.sayHello = function() {
//     console.log("THIS IS HEELO METHOD");
// }

// finalDog.sayHello();

// finalDog.color = "yellow";
// console.log(finalDog);


//Object.seal

Object.seal(finalDog);

// finalDog.race = "maltezer";

// console.log(finalDog.race);

finalDog.owner = "Bob Bosky";

console.log(finalDog.owner);

