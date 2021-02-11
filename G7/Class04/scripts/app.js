// Functions 1

// Declare a function
// Function that returns a value
// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }

// Saving the return of the function
// const fullName = getFullName('John', 'Snow');
// console.log(fullName)
// console.log(typeof getFullName)
// console.log(getFullName('John', 'Snow'))

// Function is not returning a value
// function getFullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`)
// }

// const fullName = getFullName('John', 'Snow');
// console.log(fullName)

// getFullName('John', 'Snow')

// Reusing the value from the func return

// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }
//  'John Snow' length is 9
// if (getFullName('John', 'Snow').length >= 10) {
//     console.log(`That's a long name`)
// }

//  'Ivo Kostovski' length is 13
// if (getFullName('Ivo', 'Kostovski').length >= 10) {
//     console.log(`That's a long name`)
// }

// function printPersonDetails(firstName, lastName, age, city) {
//     return `The person ${getFullName(firstName, lastName)}, is ${age} years old, and lives in ${city}`
// }

// console.log(printPersonDetails('Ivo', 'Kostovski', 31, 'Skopje'))

// Improper call of a function in another function

// function printPersonDetails(firstName, lastName, age, city) {
//     let fullName;

//     function getFullName(firstName, lastName) {
//         fullName = `${firstName} ${lastName}`
//     }

//     return `The person ${fullName}, is ${age} years old, and lives in ${city}`
// }

// getFullName('Ivo', 'Kostovski')

// Parameters and Arguments
//          num1 and num2 are PARAMETERS
// function sum(num1, num2) {
//     return num1 + num2;
// }
// 1 and 2 are ARGUMENTS
// sum(1, 2)

// [Anonymous functions]

// Anonymous functions in a variable
// const greeting = function (name) {
//     return `Hello ${name}`;
// }

// the variable becomes a function
// console.log(greeting('John'));

// Anonymous function in an event listener
// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//     console.log('button clicked')
// })

// [Arrow Functions]

// Anonymous function
// const logSomething = function () {
//     console.log('Something logged')
// }

// logSomething();

// Arrow function
// const logSomething = () => console.log('Something logged');

// logSomething();

// const sumWithTen = function (num) {
//     return num + 10;
// }

// console.log(sumWithTen(5));

// => is same as return
// const sumWithTen = (num) => num + 10;
// console.log(sumWithTen(5));

// only one parameter
// const sumWithTen = num => num + 10;
// console.log(sumWithTen(5));

// with two parameters
// const sum = (num1, num2) => num1 + num2;
// console.log(sum(1,2))

// Multiline arrow function
// const sumAndLogFunction = function (num1, num2) {
//     let result = num1 + num2;
//     console.log(result);
//     return result;
// }

// sumAndLogFunction(1, 2);

// const sumAndLogFunction = (num1, num2) => {
//     let result = num1 + num2;
//     console.log(result)
//     return result;
// }

// sumAndLogFunction(1, 2)

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => console.log('Button clicked'))

// [Self invoked function]

// const sayHello = function(name) {
//     console.log(`Hello there ${name}!`)
// }
// const sayHelloArrow = name => console.log(`Hello there ${name}!`);
// sayHello("Bob"); // calling of anonymous function

// (function (name) { console.log(`Hello there ${name}`) })('Ivo')

// (name => console.log(`Hello there ${name}`))('Ivo')

// ((fName, lName) => console.log(`Hello there ${fName} ${lName}`))('Ivo', 'Kostovski')

// const fullName = ((firstName, lastName) =>
//                                  `${firstName} ${lastName}`)('Ivo', 'Kostovski')
// console.log(fullName);

// [Ternary operator]

let timeOfDay = '';
let isTheSunUp = false;

// plain if else statement

// if (isTheSunUp) {
//     timeOfDay = 'day';
// } else {
//     timeOfDay = 'night';
// }

// console.log(timeOfDay);

// with ternary operator
//        if     if true      else      if false
// isTheSunUp ? timeOfDay = 'day' : timeOfDay = 'night';
// console.log(timeOfDay)

// timeOfDay = isTheSunUp ? 'day' : 'night';

// console.log(`Time of day is ${isTheSunUp ? 'day' : 'night'}`);

// [Recursion]

// function sumTo(num) {
//     console.log(num)
//     if (num === 0) {
//         return 0;
//     }
//     return num + sumTo(num - 1)
// }
// console.log(sumTo(5))

const carlJames = {
    name: 'Carl',
    children: [
        {
            name: 'Jack',
            children: []
        },
        {
            name: 'Mike',
            children: [
                {
                    name: 'David',
                    children: [
                        {
                            name: 'Sara',
                            children: []
                        }
                    ]
                },
                {
                    name: 'Michele',
                    children: [
                        {
                            name: 'Clara',
                            children: [
                                {
                                    name: 'Jessica',
                                    children: []
                                },
                                {
                                    name: 'Josh',
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

// Flatting an array

// const getDescendants = person => {
//     let descendants = [];
//     for (const child of person.children) {
//         descendants.push(child.name)
//         if (child.children.length) {
//             let childrenNames = getDescendants(child);
//             for (const childName of childrenNames) {
//                 descendants.push(childName)
//             }
//             // descendants.push(...getDescendants(child))
//         }
//     }
//     return descendants;
// }

// console.log(getDescendants(carlJames));

// [Scope]

// [Function scope]

// function getFullName(firstName, lastName) {
//     var result = `${firstName} ${lastName}`
//     console.log('INSIDE FUNC', result)
// }

// getFullName('John', 'Snow')

// console.log('OUTSIDE FUNC', result)

// [Block scope]

function getFullName(firstName, lastName) {
    if (firstName.length > 1 && lastName.length > 1) {
        let blockResult = `${firstName} ${lastName}`;
        var functionalScope = `${firstName} ${lastName}`;

        console.log('INSIDE IF, INSIDE FUNC LET', blockResult)
        console.log('INSIDE IF, INSIDE FUNC VAR', functionalScope)
    }
    // console.log('OUTSIDE IF, INSIDE FUNC LET', blockResult)
    console.log('OUTSIDE IF, INSIDE FUNC VAR', functionalScope)
}

getFullName('John', 'Snow')

// console.log('OUTSIDE IF, OUTSIDE FUNC LET', blockResult)
console.log('OUTSIDE IF, OUTSIDE FUNC VAR', functionalScope)
