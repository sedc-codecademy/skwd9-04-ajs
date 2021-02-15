// [[Functions as first class citizens]]

// [Stored in a variable]

// let sayHello = name => console.log(`Hello ${name}`)
// sayHello('John')

// [Stored in an array]

// let numberStatsFunctions = [
//     num => num > 0 ? 'Positive' : 'Negative',
//     num => num % 2 === 0 ? 'Even' : 'Odd',
//     num => num >= 0 ? num.toString().length : num.toString().length - 1
// ]

// older version
// function checkIfPositive(num) {
//     if (num > 0) {
//         return 'Positive';
//     } else {
//         return 'Negative';
//     }
// }

// console.log(numberStatsFunctions[0](2))
// console.log(numberStatsFunctions[1](2))
// console.log(numberStatsFunctions[2](2))

// [Used as an argument to another function]

// function calculator(calculateFunc, number1, number2) {
//     return calculateFunc(number1, number2);
// }

// function sum(number1, number2) {
//     return number1 + number2;
// }

// function difference(number1, number2) {
//     return number1 - number2;
// }

// console.log(calculator(sum, 1, 2))

// console.log(calculator(difference, 5, 3))

// [Used as a return value from another function]

// function calculator(operator) {
//     switch (operator) {
//         case '+':
//             return (number1, number2) => number1 + number2;
//             break;
//         case '-': 
//             return (number1, number2) => number1 - number2;
//             break;
//         default:
//             console.log('Invalid operator');
//             break;
//     }
// }

// let result = calculator('+');

// console.log(result(1, 2))

// console.log(calculator('-')(4, 2))

// [Function arguments]

// function logNames() {
//     for (const argument of arguments) {
//         console.log(argument)
//     }
// }

// logNames('Ivo', 'Ivan', 'Martin')
// logNames('Ivo')

// [Have properties and methods like objects]

// function sayHello(name) {
//     return `Hello there ${name}`
// }

// console.log(sayHello('John'))

// sayHello.defaultName = 'Bob';

// console.log(sayHello.defaultName)

// sayHello.differentGreeting = function (name) {
//     return `Hi ${name}`
// }

// console.log(sayHello.differentGreeting('John'))

// [[Higher order function]]

// [map]

// const numbers = [1, 2, 3, 4, 5];
// let mappedNumbers = [];

// old
// for (const number of numbers) {
//     mappedNumbers.push(number * 2)
// }
// console.log(mappedNumbers)

// new
// Returns: a NEW array with the exact number of items
// mappedNumbers = numbers.map(number => number * 2);
// console.log(mappedNumbers)

// [filter]
// const numbers = [4, 90, 78, 34, 70, 23, 1, 63, 15];
// let filteredNumbers = [];

// old
// for (const number of numbers) {
//     if (number > 20) {
//         filteredNumbers.push(number)
//     }
// }

// console.log(filteredNumbers)

// new
// Returns: a NEW array with the items of the array that pass the check
// filteredNumbers = numbers.filter(number => number > 20)

// filteredNumbers = numbers.filter(number => {
//     console.log(number)
//     return number > 20;
// })

// console.log(filteredNumbers);

// [forEach]
// Returns: VOID
// const numbers = [4, 90, 78, 34, 70, 23, 1, 63, 15];

// numbers.forEach((number) => console.log(number))

// [reduce]

// const numbers = [15, 12, 10, 4];
// let sum;

// old
// for (const number of numbers) {
//     sum += number
// }

// console.log(sum);

// new
// sum = numbers.reduce((acc, cur) => acc + cur, 0);

// console.log(sum)

// [sort]

const unsortedNumbers = [4, 124, 90, 78, 21, 34, 70, 11, 23, 1, 63, 15];

// old
// let done = false;
// while(!done) {
//     done = true;
//     for (let i = 0; i < unsortedNumbers.length; i++) {
//        if (unsortedNumbers[i - 1] > unsortedNumbers[i]) {
//            done = false;
//            let temp = unsortedNumbers[i - 1];
//            unsortedNumbers[i - 1] = unsortedNumbers[i]
//            unsortedNumbers[i] = temp;
//        }
//     }
// }

// console.log(unsortedNumbers);

// new

// let sortedNumbers = unsortedNumbers.sort();
// console.log(sortedNumbers)

// ascending
// let sortedNumbers = unsortedNumbers.sort((a, b) => a - b)
// console.log(sortedNumbers)

// descending
let sortedNumbers = unsortedNumbers.sort((a, b) => b - a)
console.log('SORTED', sortedNumbers)
console.log('UNSORTED', unsortedNumbers);

// function sorting(a, b) {
//     // return 1 
//     // return 0
//     // return -1
// }

// toLocalCompare()

// Pass by value
// let name1 = 'Ivan';

// let name2 = name1;

// console.log(name1, name2)

// pass by reference

// let array1 = [3, 1, 2]

// let tempArray = [];

// for (const number of array1) {
//     tempArray.push(number);
// }

// let array2 = tempArray.sort((a, b) => a - b);

// console.log('UNSORTED:', array1, 'SORTED:', array2);