// Function definition
function nameOfTheFunction(/* parameters */){}

// Declaration of a function
function getFullName(firstName, lastName) {
    return result = `${firstName} ${lastName}`;
}

getFullName("Darko", "Panchevski") // The result will not be used (nothing will happen)

let fullName = getFullName("Natasha", "Paneva") // Store the result into variable

// console.log("Full name variable value", fullName);

// Check the result from the function
if (getFullName("Darko", "Panchevski").length >= 17) {
    console.log("The full name is too long");
}

// How to call function inside another function
function printPersonDetails(firstName, lastName, age) {
    return `The person ${getFullName(firstName, lastName)} has ${age} age`;
}

let personDetails = printPersonDetails("Darko", "Panchevski", 25);

// console.log("Person details ->", personDetails);

// How not to call function inside another function
// function printPersonDetails(firstName, lastName, age) {
//     let fullName;

//     function getFullName(firstName, lastName) {
//         fullName = `${firstName} ${lastName}`;
//     }

//     return `The person ${getFullName(firstName, lastName)} has ${age} age`;
// }

// let personDetails = printPersonDetails("Darko", "Panchevski", 25);

// console.log("Person details ->", personDetails);

// Parameters vs Arguments
// number1 and number2 are parameters
function sumOfTwoNumbers(number1, number2) {
    return number1 + number2;
}

// The values within function call are arguments
// console.log(sumOfTwoNumbers(23, 7));

// Anonymous functions
// Anonymous function in a variable
let greeting = function(name) {
    return `Hello ${name}`
}

// console.log(greeting("Natasha"));

// Anonymous function in an event listener
// What is useCapture (event flow) and how it's working?
// Possible values are true and false
// If true, then it will be called code into the function on capture of the element ("capture phase")
// If false, then ut will be called code into the function on capture at the return of the result ("bubble phase")
// window.addEventListener('click', function(){console.log("The process number", 1)}, false);
// window.addEventListener('click', function(){console.log("The process number", 2)}, true);
// window.addEventListener('click', function(){console.log("The process number", 3)}, false);
// window.addEventListener('click', function(){console.log("The process number", 4)}, true);

// Arrow function
// Shorter function of anonymous function

// Arrow functions vs Normal anonymous function
// no parameter, on expression

// Anonymous function
let logSomethingAnonymousFunction = function(){
    console.log("Hello there, I am anonymous function");
}

// Arrow function
// Must have ()
let logSomethingArrowFunction = () => console.log("Hello there, I am arrow function");

// logSomethingAnonymousFunction();
// logSomethingArrowFunction();

// one parameter, one expression

// Anonymous function
let add10AnonymousFunction = function(number){
    return number + 10;
}

// Arrow function
// No need ()
let add10ArrowFunction = number => number + 10;

// console.log(add10AnonymousFunction(10));
// console.log(add10ArrowFunction(20));

// Multiple parameters, one expression

// Anonymous function
let sumOfTwoNumbersAnonymousFunction = function(number1, number2) {
    return number1 + number2;
}

// Arrow function
// Must have () when expect 2+ parameters
let sumOfTwoNumbersArrowFunction = (number1, number2) => number1 + number2;

// console.log(sumOfTwoNumbersAnonymousFunction(10, 10));
// console.log(sumOfTwoNumbersArrowFunction(20, 20));

// multiple arguments, multiple expressions

// Anonymous function
let sumOfTwoNumbersAndLogAnonymousFunction = function(number1, number2) {
    let result = number1 + number2;
    console.log(`The result is ${result}`);
    return result;
}

// Arrow function
let sumOfTwoNumbersAndLogArrowFunction = (number1, number2) => {
    let result = number1 + number2;
    console.log(`The result is ${result}`);
}

// sumOfTwoNumbersAndLogAnonymousFunction(10, 10);
// sumOfTwoNumbersAndLogArrowFunction(20, 20);

// Anonymous and Arrow function in event listener
document.getElementById("anonymousFunction").addEventListener('click', function() { // Anonymous function
    console.log("Anonymous function button clicked");
})

document.getElementById("arrowFunction").addEventListener('click', () => { // Arrow function
    console.log("Arrow function button clicked");
})

// Self invoked function (immediately-invoked function expressions (IIFE))
// Functions which are written, called and executed at the same time on the spot
// These functions help us organize and use variables in enclosed space where they will not affect the rest of the code.
// Since we break one of the key part "why we use functions" (reusability), there is no point in doing them most of the time.
let sayHello = function(name) { console.log(`Hello there ${name}`)}
let sayHelloArrow = name => console.log(`Hello there ${name}`);

// sayHello("Natasha");
// sayHelloArrow("Darko");

// Self invoked functions
// Anonymous self invoked function
// (function(name){console.log(`Hello there ${name}`)})("Natasha");
// Arrow self invoked function
// (name => console.log(`Hello there ${name}`))("Darko");

// Self invoked function result as variable
let fullNameSelfInvokedVariable = ((firstName, lastName) => `${firstName} ${lastName}`)("Natasha", "Paneva");

// console.log("Self invoked variable", fullNameSelfInvokedVariable);

// Self invoked function result as a return of another function
function checkNameLength(inputName) {
    return (name => {
        if (name.length <= 0)
            return "No name";
        else if (name.length < 2)
            return "Too short";
        else
            return "Valid name"
    })(inputName)
}

// console.log(checkNameLength("Joe"));

// Recursion
// Why do we use recursive functions and how do we use them?
// When we want to call the same function within itself but with different arguments
// Every recursive function has two part
// 1. Edge scenario (check where to stop)
// 2. Return which include the call of the same function but with different argument
// Regular function
function sumTo(number) {
    // debugger; // EVERY TIME YOU USE RECURSIVE FUNCTION DEBUG!
    // Edge scenario
    if (number === 0) {
        return 0;
    }

    // Recursive function
    return number + sumTo(number - 1);
}

// console.log(sumTo(5));

// Arrow function
let sumToArrowFunction = number => {
    return number === 0 ? 0 : number + sumToArrowFunction(--number);
}

console.log(sumToArrowFunction(50))