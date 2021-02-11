// +++++++ fun with functions ++++++++

// ---- function as we know them ----
function sayHello() {
    console.log("say hello");
}
sayHello();

// ---- function with parameters ----
function printFullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}
// fistName and lastName are PARAMETERS!

printFullName("Viktor", "Jakovlev");
// Viktor and Jakovlev are ARGUMENTS!

//function with parameters and return
function getNameAndTitle(firstName, lastName) {
    let nameWithTitle = `Dr. ${firstName} ${lastName}`
    return nameWithTitle;
}

console.log(getNameAndTitle("Viktor", "Jakovlev"));

// we can store a result of the function in a variable
let fullNameWithTitle = getNameAndTitle("John", "Snow")
console.log(fullNameWithTitle);

// function inside if statement
if(getNameAndTitle("John", "Snow").length > 20) {
    console.log("This is a very long name!");
} else {
    console.log("This name is fine.");
}

// calling a function (NOT DECLERING) inside another function's definition
function getInfo(firstName, lastName, age, city) {
    let fullInfo = `The person ${getNameAndTitle(firstName, lastName)}
                    is ${age} years old
                    and lives in ${city}`
    return fullInfo;            
}

// ---- Anonymus function ----
let func = function() {
    console.log("Hello from anonymus function.");
}
// invoking an anonymus function
func();

document.addEventListener("click", func)
document.addEventListener("click", function() {
    console.log("Hi");
})


// ---- Arrow Functions ----
// shorter syntax for anonymus functions

let func2 = () => {
    console.log("Hello from the first arrow function!");
}

// normal function
let addTenNormal = function(num1) {
    return num1 + 10;
}

//arrow function with one parameter (no brackets), when the body is one line, goes in the same line without the curly brackers.
let addTenArrow = num1 => num1 + 10;

console.log(addTenArrow(15));

//arrow function with two or more parameters
let sumArrow = (num1, num2) => num1 + num2;
sumArrow(4,5);

//arrow funcion with body of more then one line of code 
let multiplyArrow = (num1, num2) => {
    let result = num1 * num2;
    console.log(result);
    return result;
}

multiplyArrow(2, 5);

//void arrow function
let voidArrow = () => console.log("Hellow from void arrow!");
voidArrow();

//arrow function as a input parameter
document.addEventListener("click", () => console.log("document cliked"));
document.getElementById("inp").addEventListener("click", e => console.log(e.target.value));

// ---- Self invoked functions ----

//normal function
// function func1() {
//     console.log("Hi")
// }
// func1()

(function func1() {
    console.log("Hi from self invoked function")
})();

//self invoked function with parameters
(function func2(name, surname) {
    console.log(`${name} ${surname}`)
})("viktor", "jakovlev");

//self invoked arrow function
(() => console.log(5))();

//self invoked function result as an argument

function sum2(num1, num2) {
    return num1 + num2
};

let number1 = 10;
let number2 = "12";

let result = sum2(number1, ((num => parseInt(num)))(number2));
console.log(result);

//self invoked function as a return of another funtion
// function sayHello(inputName) {
//     return (name => {
//         if(name.length <= 0) { return "no name"}
//         else if(name.length < 2) { return "too short"}
//         else { return `Hello there, ${name}`}
//     })(inputName)
// }

// console.log(sayHello("Viktor"));

//Immediatly Invoked Function Expresion (IIFE)
var result3 = (function() {
    var name = "Viktor";
    return name
})();

console.log(result3)

// ---- RECURSION ----
// let counter = 0;

// function sumTo(num) {
//     if (num === 0) {
//         return 0
//     }
//     counter++
//     return num + sumTo(num - 1)
// }

// console.log(sumTo(1501))
// console.log(counter)

// let fcounter = 0;
// let fibonacci = n => {
//     if (n === 1 || n === 2) {
//         return 1
//     }
//     fcounter++

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(45))
// console.log(fcounter)

// ---- SCOPE ----

//declaring variable in the global scope
var x = 25; 

function sumPlusTwo(num1) {
    console.log(x)
    //declaring variable in the local scope
    let y = 100;
    return num1 + 2;
}

sumPlusTwo(5)
//console.log(y)

//block scope
function getFullName(firstName, lastName) {
    if (firstName.length > 1 && lastName.length > 1) {
        let blockResult = `${firstName} ${lastName}`;
        var functionResult = `${firstName} ${lastName}`;
        //console.log(blockResult)
        //console.log(functionResult)
    }
    console.log(functionResult)
    //console.log(blockResult)
}

getFullName("Viktor", "Jakovlev")

// let testvar = "test";
// let testvar = "test2"
// console.log(testvar)

var testvar2 = "testvar2"
console.log(testvar2)
var testvar2 = "testvar3"
console.log(testvar2)