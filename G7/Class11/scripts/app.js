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

