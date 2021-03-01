// Objects

// Everything is an object
// console.log(typeof document);
// console.log(typeof []);
// [].push()
// console.log(typeof console)
// console.log()
// console.table()
// console.log(typeof window)

// Shorthand method calls

// console.log('hey');
// window.console.log('hey2');
// console.log(document)
// console.log(window.document)
// alert('anything')
// window.alert('anything')

// Global scope

// function sayHello(name) {
//     console.log(`Hi, ${name}`)
// }

// sayHello('Ivo');
// window.sayHello('Ivan');
// let something = 'a thing';
// console.log(something);
// console.log(window.something);

// Constructor functions

// function Dog(name, color, age, favoriteFood, ownerName, city) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.favoriteFood = favoriteFood;
//     this.ownerName = ownerName;
//     this.hasOwner = !!ownerName;
//     this.city = city || 'Skopje';
// }

// let sparky = new Dog('Sparky', 'White', 3, ['meat', 'biscuits'], 'Peter', 'Prilep');
// console.log(sparky)

// let buck = new Dog('Buck', 'Black', 4, ['oranges']);
// console.log(buck)

// let emptyDog = new Dog();
// console.log(emptyDog)

// let badDog = new Dog(34, ['meat'], 'Spark', 'Brown', 'Bitola', 'Dragan');
// console.log(badDog)

// options for setting hasOwner
// option 1
// if (!ownerName) {
//     this.hasOwner = false;
// } else {
//     this.hasOwner = true;
// }
// option 2
// this.hasOwner = !ownerName ? false : true;
// option 3 - look up top

// options for setting city
// option 1
// !city ? 'Skopje' : city
// option 2 - look up top

// This

