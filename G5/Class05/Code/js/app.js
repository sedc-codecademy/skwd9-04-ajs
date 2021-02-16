// Ternary operator
let a = 10;
let numberType = a % 2 === 0 ? "Even" : "Odd";

let b = 5;

let c = a > b ? 4 : 5;

// if(a % 2 === 0) {
//     numberType = "Even"
//     return "Even";
// }
// else{
//     numberType = "Odd";
//     return "Odd";
// }



// *************************************************** 
// [Functions as first class citizens]

// 1. Store function as variable value

let sayHi = function (name) {
    return `Hello there ${name}`;
}

let sayHello = name => `Hello there ${name}`;


// 2. Store functions in an array

// This is not so clear 
// let functionsContainer = [
//     function sayHi() {

//     },
//     function sayGoodbye() {

//     },
// ]


let funcContainer = [
    num => num * num,
    num => num * num * num,
    num => num + num
];

// let squareFunc = funcContainer[0];
// squareFunc(4);

// Can be invoked even shorter way

console.log(funcContainer[0](5));
console.log(funcContainer[1](5));

for (const func of funcContainer) {
    console.log(func(10));
}


// 3. Using functions as argument in another function - CALLBACK function

function calculator(callback, num1, num2) {
    return callback(num1, num2);
}

let sum = (first, second) => first + second;
let difference = (first, second) => first - second;

console.log(`The result from the calculator function is ${calculator(sum, 10, 20)}`);
console.log(`The result from the calculator function is ${calculator(difference, 10, 20)}`);
console.log(calculator((num1, num2) => num1 * num2, 10, 10));


let calc = (callback, num1, num2) => callback(num1, num2);

console.log(calculator(sum, "Martin", " is a developer"));
console.log(calculator(sum));


// 4/5. Add properties and methods to function just like they are objects

let sayMyName = (fName, lName) => `${fName} ${lName}`;

sayMyName.fullName = `Ivan Lazarevski`;
sayMyName.calculate = (num1, num2) => num1 + num2;

console.log(sayMyName("Martin", "Panovski"));


let arr = [1, 2, 3];
arr.splice()



let names = ['Martin', 'Ivan'];

let reduced = names.reduce((acc, curr) => {
    return acc + " " + curr;
}, "");

console.log(reduced);