// Functions as first class citizens

// Stored in variable

let sayHi = name => console.log(`Hello ${name}`);
// sayHi("Goce");

// Stored in array

let array = [1, "Hello", true, {}, () => console.log("I'm function in array"), "Goce", 123, null];

// let strings = array.filter(el => typeof(el) === 'string');
// console.log(strings);

// If we dont know the index of the function

// let myFunction;
// for(let element of array) {
//     if(typeof(element) === 'function') {
//         myFunction = element;
//         break;
//     }
// }
// myFunction();

// If we know the index of the function

// let myFunction = array[4]; // let myFunction = () => console.log("I'm function in array")
// myFunction();
// array[4]();



// Used as an argument to another function - CallBacks

function calculator(number1, number2, performOperation) {
    return performOperation(number1, number2); // sum(10 ,10) // multiply(20, 20)
}

// let sum = calculator(10, 10, (num1, num2) => num1 + num2);
// let multiply = calculator(10, 10, (num1, num2) => num1 * num2);

function sum(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

let sumOfTwoNumbers = calculator(10, 10, sum);
let multiplyTwoNumbers = calculator(20, 20, multiply);

// used as a return value from another function

let someFunction = () => 10 + 10;

function getSomeFunction() {
    return someFunction;
}

// let functionReference = getSomeFunction();
// functionReference();

// WILD SYNTAX
// let result = () => 10 + 10 // WITHOUT ()()
let result = getSomeFunction()(); // someFunction // someFunction() => 20
// console.log(result);

// Functions with properties and methods

function sayHello(name) {
    return `HELLO ${name}`;
}

// PROPERTY

sayHello.description = "This is a function that greets a person";
// console.log(sayHello.description)

sayHello.differentGreeting = function (name) {
    return `Hi ${name}`;
}
// console.log(sayHello("Goce"));
let diffGreeting = sayHello.differentGreeting("Gordon")
// console.log(diffGreeting)

let result1 = sayHello("Goce");
// console.log(result1)

// HIGHER ORDER Functions

// Higher Order Function injected in arrays

// forEach

let students = [
    { firstName: 'Goce', grade: 3 },
    { firstName: 'Gordon', grade: 5 },
    { firstName: 'John', grade: 2 },
    { firstName: 'Bob', grade: 5 }
]

// Without higher order function

// for(let student of students) {
//     console.log(`${student.firstName}: ${student.grade}`)
// }

// WITH HIGHER ORDER FUNCTION

// Annonimous function

// students.forEach(function(student) {
//     console.log(`${student.firstName}: ${student.grade}`);
// })

// Arrow function
// students.forEach(student=> console.log(`${student.firstName}: ${student.grade}`));

// Regular function

function printStudentInfo(student) {
    console.log(`${student.firstName}: ${student.grade}`)
}

// students.forEach(printStudentInfo)

// FILTER

// Without higher order function

// let stundentsWithHigherGradeThan3 = [];

// for(let student of students) {
//     if (student.grade > 3) {
//         stundentsWithHigherGradeThan3.push(student);
//     }
// }

// console.log(stundentsWithHigherGradeThan3);

// With Higher Order function using regular function

// function isGradeGreaterThan3(student) {
//     return student.grade > 3
// }

// let stundentsWithHigherGradeThan3 = students.filter(isGradeGreaterThan3) // [Gordon, Bob]
// console.log(stundentsWithHigherGradeThan3)

//With Higher Order function using annonimous function

// let stundentsWithHigherGradeThan3 = students.filter(function(student) {
//     return student.grade > 3
// })

// console.log(stundentsWithHigherGradeThan3);

// With Higher Order function using arrow function

// let stundentsWithHigherGradeThan3 = students.filter(student => student.grade > 5);
// console.log(stundentsWithHigherGradeThan3);

// students.filter(student => student.grade > 3).forEach(printStudentInfo)
// console.log(stundentsWithHigherGradeThan3);

// MAP

// Without higher order function

// let fiveGradeStudentsNames = [];

// for(let student of students) {
//     if(student.grade === 5) {
//         fiveGradeStudentsNames.push(`${student.firstName}: ${student.grade}`);
//     }
// }
// console.log(fiveGradeStudentsNames)

// With Higher Order function using arrow function

// let fiveGradeStudentsNames = students.filter(student => student.grade === 5)
//                                 .map(student => `${student.firstName}: ${student.grade}`);
// console.log(fiveGradeStudentsNames);

// let numbers = [1,2,3,4,5];

// let updatedNumbers = numbers.map(number => number + 2);
// console.log(updatedNumbers);

// REDUCE

// let students = [
//     { firstName: 'Goce', grade: 3 },
//     { firstName: 'Gordon', grade: 5 },
//     { firstName: 'John', grade: 2 },
//     { firstName: 'Bob', grade: 5 }
// ]

function sumGrades(sum, student) {
    return sum = sum + student.grade;
}
// 1 cycle : sum = 0, student: goce => 3
// 2 cycle : sum = 3, student: gordon => 8
// 3 cycle: sum =8, student: John => 10
// 4 cycle: sum=10,  student: Bob => 15

// REQUIRES FIRST ARGUMENT FUNCTION, AND SECOND ARGUMENT INITAL VALUE!!!

let totalSumOfGrades = students.reduce(sumGrades, 0)
console.log(totalSumOfGrades)





