// [flat]
// const numbers = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

// before
// function flattenArray(array) {
//     let flatArray = [];
//     for (const item of array) {
//         if (!Array.isArray(item)) {
//             flatArray.push(item)
//         } else {
//             let innerArray = flattenArray(item);
//             for (const innerItem of innerArray) {
//                 flatArray.push(innerItem)
//             }
//         }
//     }
//     return flatArray;
// }

// console.log(numbers)
// console.log(flattenArray(numbers))

// after
// const flattenArray = numbers.flat(Infinity)
// console.log(flattenArray)

// [splice]
// Also changes the original array

// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// first param: start index / second param: how many items to be extracted
// let weekend = daysOfWeek.splice(5, 2);
// let workingDays = daysOfWeek.splice(0, 5);

// console.log(daysOfWeek)
// console.log(weekend)
// console.log(workingDays)

// [slice]
// Creates a new instance of the array, won't modify your previous (initial) array
// 
// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// first param: start index / second param: how many items
// let weekend = daysOfWeek.slice(5, 7);
// let workingDays = daysOfWeek.slice(0, 5);
// console.log(daysOfWeek)
// console.log(weekend)
// console.log(workingDays)

// const newDaysOfTheWeek = daysOfWeek.slice();
// console.log(newDaysOfTheWeek);

// [some]
// const numbers = [2, 4, 6, 8, 10];
// let hasOddNumbers = false;

// before
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         hasOddNumbers = true;
//         break;
//     }
// }

// console.log(numbers)
// console.log(hasOddNumbers)

// after
// let hasOddNumbers = numbers.some(num => num % 2 !== 0)

// console.log(hasOddNumbers)

// [every]
// const numbers = [2, 4, 6, 8, 10];
// let allNumbersAreEven = true;

// before
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         allNumbersAreEven = false;
//         break;
//     }
// }

// console.log(numbers)
// console.log(allNumbersAreEven)

// after
// let allNumbersAreEven = numbers.every(num => num % 2 === 0);
// console.log(allNumbersAreEven)

// [includes]
// const numbers = [2, 4, 6, 8, 9];
// let includesNumberSix = false;

// before
// for (const number of numbers) {
//     if (number === 6) {
//         includesNumberSix = true;
//         break;
//     }
// }

// console.log(includesNumberSix)

// after
// let includesNumberSix = numbers.includes(6);
// console.log(includesNumberSix)

// let fName = 'John';

// let includesO = fName.includes('o');
// console.log(includesO)

// [find]
// const users = ['John', 'Josh', 'Mike', 'Jake', 'Carl'];
// let mike;

// before
// for (const user of users) {
//     if (user === 'Mike') {
//         mike = user;
//         break;
//     }
// }

// after
// let mike = users.find(user => user === 'Mike');

// console.log(mike)

// [findIndex]
// const users = ['John', 'Josh', 'Mike', 'Jake', 'Carl'];
// let mikesIndex;

// before
// for (let i = 0; i < users.length; i++) {
//     if (users[i] === 'Mike') {
//         mikesIndex = i;
//         break;
//     }
// }

// console.log(mikesIndex)

// after
// let mikesIndex = users.findIndex(user => user === 'Mike');

// console.log(mikesIndex)

// [[STRINGS]]

// [split]
// const banana = 'banana';
// let bananaArray = [];

// before
// for (const char of banana) {
//     bananaArray.push(char)
// }

// console.log(bananaArray)

// after
// let bananaArray = banana.split('a')
// console.log(bananaArray)

// [join]
// const users = ['John', 'Josh', 'Mike', 'Jake', 'Carl'];
// let joinedUsers = '';

// before
// for (let i = 0; i < users.length; i++) {
//     if (i === 0) {
//         joinedUsers += users[i]
//     } else {
//         joinedUsers += ', ' + users[i]
//     }
// }

// console.log(joinedUsers)

// after
// let joinedUsers = users.join(', ')

// console.log(joinedUsers)

// [reverse]

// const banana = 'banana';
// let bananaReversed = '';

// before
// for (let i = banana.length - 1; i >= 0; i--) {
//     bananaReversed += banana[i]
// }

// console.log(bananaReversed)

// after
//                       ['b','a'] ['a', 'b'] 'ananab'
// let bananaArray = banana.split('').reverse().join('')

// console.log(bananaArray)