
// stored in variable
let sayHello = function (name) { return `Hello ${name}` };

// console.log(sayHello); // print sayHello value
// console.log(sayHello("Trajan"));


// same thing shorter way
// num > 0 ? "Positive" : "Negative"
 // ^^^^^
// if (num > 0) {
//     return "Positive";
// } else {
//     return "Negative";
// }

// stored in array
let mathOperationFunctionsArray = [
    num => num > 0 ? "Positive" : "Negative",
    num => num % 2 === 0 ? "Odd" : "Even",
    num => num >= 0 ? num.toString().length : num.toString().length - 1
];

// console.log(mathOperationFunctionsArray[0](2));
// console.log(mathOperationFunctionsArray[1](2));
// console.log(mathOperationFunctionsArray[2](2));

// for (let i = 1; i < 150; i += 7){
//     for (let fnc of mathOperationFunctionsArray) {
//         console.log(fnc(i));
//     }
// }

//function as parameter in fuunction
function calclulator(calculateFnc, num1, num2) {
    return calculateFnc(num1, num2);
}

function sum(num1, num2) {
    return num1 + num2;
}

function difference(num1, num2) {
    return num1 - num2;
}

let result = calclulator(sum, 3, 2);
//console.log(result);
let result2 = calclulator(difference, 5, 3);
//console.log(result2);
let result3 = calclulator((num1, num2) => num1 * num2, 5, 5);
//console.log(result3);

// functions that return functions

function mathOprations(opreration) {
    switch (opreration) {
        case "+":
            return function (number1, number2) { return number1 + number2 };
        case "-":
            return function (number1, number2) { return number1 - number2 };
        case "*":
            return (number1, number2) => number1 * number2;
        default:
            console.log("ERROR");
            return null;
    }
}

let mathResult = mathOprations("+");
// console.log(mathResult(2, 7));
// console.log(mathOprations("*")(5, 5));

// self invoked fnction that return function
let someFnc = (function () {
    let startPoint = 10;
    return function (num) {
        startPoint += num;
        return num + startPoint;
    }
})();

// console.log(someFnc(5));
// console.log(someFnc(10));
// console.log(someFnc(15));

let generateId = (function () {
    let id = 1;
    return function (firstName, lastName) {
        let obj = {
            firstName,
            lastName,
            id
        };
        id++;
        return obj;
    }
})();

for (let i = 1; i < 10; i++) {
    let result = generateId(`Trajan-${i}`, `Stevkovski-${i}`);
    console.log(result);
}

for (let i = 1; i < 10; i++) {
    let result = generateId(`Trajan-${i}`, `Stevkovski-${i}`);
    console.log(result);
}