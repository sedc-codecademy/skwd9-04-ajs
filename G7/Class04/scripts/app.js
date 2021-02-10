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

