// Functions as first class citizens/objects
// What is first class citizens?
// If some entity has the power to be used as any other entity, it's considered as a first class citizen.
// Why functions?
// Because they can act and be used as any other entity such as: Stored in variable, Stored in an array, Used as an argument to another function, Used as a return value from another function, Have properties like objects, Have methods like objects

// Stored in variable
let sayHello = function (name) { console.log(`Hello ${name}`) };
let hello = name => console.log(`Hello ${name}`);

// sayHello("Natasha");
// hello("Darko");

// Stored in an array
let numberStatsFunctions = [
    number => number > 0 ? "Positive" : "Negative",
    number => number % 2 === 0 ? "Even" : "Odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1
];

// console.log(numberStatsFunctions[0](-5));
// console.log(numberStatsFunctions[1](12));
// console.log(numberStatsFunctions[2](-23));

// Used as an argument to another function
function calculator (calculatorFunction, number1, number2) {
    return calculatorFunction(number1, number2);
}

let sum = (number1, number2) => number1 + number2;
let difference = (number1, number2) => number2 - number1;

// console.log(calculator(sum, 15, 8));
// console.log(calculator(difference, 5, 8));

// Used as a return value from another function
function calculate (operation) {
    switch (operation) {
        case "/":
            return (number1, number2) => number1 / number2;
        case "*":
            return (number1, number2) => number2 * number1;
        default:
            console.error("Error!");
            break;
    }
}

let divide = calculate("/");
let multiply = calculate("*");

// console.log(divide(4, 2));
// console.log(multiply(2, 3));
// console.log(calculate("*")(12, 12));

// Have properties like objects and have methods like objects
function sayMyName(name) {
    return console.log(`Hi! My name is ${name}`);
}

// sayMyName("Natasha");

sayMyName.defaultName = "Darko";
sayMyName.getAge = birthYear => {
    return new Date().getFullYear() - birthYear;
} 

// console.log(sayMyName.defaultName);
// sayMyName("Natasha");
// sayMyName(sayMyName.defaultName);
// console.log(sayMyName.getAge(1996));

// Function arguments
// Sometimes it's important to check the number of arguments that are passed and their content before execution. Why?
// The reason is because when the function is called the person can send as much arguments as he/she wants.

let displayFullName = () => { // Arrow function Local -> no arguments property
    // debugger;
    console.log(arguments) // ERROR
}

let displayFullNameAnonymous = function () { // Anonymous function Local -> arguments property
    // debugger;
    console.log(arguments);
    console.log(arguments[0])
    console.log(arguments.length);

    console.log(`${arguments[0]} ${arguments[1]}`);
}

// displayFullName("Natasha", "Paneva");
// displayFullNameAnonymous("Darko", "Panchevski");

// Higher order functions (HOF)
// What are HOF?
// Functions that take other functions as arguments
// Why do we use them and what can we do with them?
// We use them to make our code more readable and more organized. We can combine higher order function to get results

let students = [
    { firstName: "Natasha", lastName: "Paneva", grade: 10, age: 23 },
    { firstName: "Darko", lastName: "Panchevski", grade: 7, age: 25 },
    { firstName: "Test", lastName: "Test", grade: 1, age: 19 },
    { firstName: "Pero", lastName: "Perovski", grade: 5, age: 35 },
    { firstName: "Blazo", lastName: "Blazovski", grade: 6, age: 99 }
];

// .forEach()
// .forEach() is a function that accepts a function as an argument an it runs it for every element in an array. This function does not return anything. It just runs a code for every element without any result in return

// Without HOF
// for (let index = 0; index < students.length; index++) {
//     console.log(`${students[index].firstName} ${students[index].lastName}`);
// }

// With .forEach()
let studentFullName = student => console.log(`${student.firstName} ${student.lastName}`); // Stored arrow function in a variable
// students.forEach(studentFullName);

// Same as the code above
// students.forEach(function(student) { console.log(`${student.firstName} ${student.lastName}`); })

// Log student grade
// students.forEach((student, index) => console.log(`${index + 1}. ${student.firstName} ${student.lastName} has ${student.grade} grade`))

// .filter()
// Filter is a higher order function that accepts a function as an argument. That function has an expression that tests every value from the collection and returns a new collection with values that are true for the expression or statement in the argument function.

// Without HOF
let in20sArray = [];
for (let index = 0; index < students.length; index++) {
    if (students[index].age >= 20 && students[index].age < 30)
        in20sArray.push(students[index]);
}

// console.log("Array of students in their 20s (Without HOF)", in20sArray);

// With HOF
function in20sCheck(student) {
    return student.age >= 20 && student.age < 30;
}

let studentsIn20s = students.filter(in20sCheck);
// console.log("Students in 20s (With HOF)", studentsIn20s);

// Same as above code
let in20s = students.filter((student) => student.age >= 20 && student.age < 30);
// console.log("in20s variable result", in20s);

// Who has pass?
let passedStudents = students.filter(test => test.grade > 5);
// console.log("Passed students", passedStudents);

// students
//     .filter(student => student.grade > 1 && student.age <= 40)
//     .forEach(studentFullName)

// .map()
// This function will execute a code on every item of a collection an then return it. This means that we can modify or use every item in an array in a particular way with only one line of code
let numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Without HOF
function addOne(numbers) {
    let numbersPlusOne = [];

    for (const number of numbers) {
        numbersPlusOne.push(number + 1);
    }
    
    return numbersPlusOne;
}

// console.log("Without HOF", addOne(numbers));

// With HOF
// console.log("With HOF", numbers.map(number => number + 1));

// Odd numbers in numbers array using .map()
let oddNumbers = [];

numbers.map(number => {
    if (number % 2 !== 0) // If there is one expression on the while/for/for-of/if/functions...There is no need of scopes
        oddNumbers.push(number);

    return oddNumbers;
})

// console.log("Odd numbers", oddNumbers);

let olderThen30sAndPassed = [];

students
    .filter(x => x.age >= 30 && x.grade > 5)
    .map(x => olderThen30sAndPassed.push(x));

// console.log("olderThen30sAndPassed variable", olderThen30sAndPassed);

// Same as code above
// console.log("Students older then 29 and passed", 
//     students
//         .filter(x => x.age >= 30 && x.grade > 5)
//         .map(x => x)
// )