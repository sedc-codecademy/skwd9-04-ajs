// [Imports]
// This is how you import a file
// import { firstName, multiplyNumbers, sumNumbers, divideNumbers, subtractNumbers } from './calculator';
const calculator = require('./calculator');
const textService = require('./textService');

const sayHello = (name) => {
    console.log(`Hello, ${name}`);
}

sayHello('Ivan');

/*

OLD WAY, USING SINGLE FILE

const sum = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

const firstVar = 17;
const secondVar = 24;

const calcResult = multiply(firstVar, secondVar);
console.log(calcResult);
*/

const firstNumber = 17;
const secondNumber = 24;

// console.log(firstName, 'This comes from calculator');

// Module is one of the main objects in NodeJS.
//console.log(module);

const calcFromImport = calculator.multiplyNumbers(firstNumber, secondNumber);
console.log(calcFromImport);


// NodeJS Core Modules
// fs, path, http

// Using text service

//const addedText = `Hi from SEDC!`;
// textService.addTextToFile(textService.filePath, addedText);
const filePath = 'data.json';
const obj = `{"names":["Ivan", "Martin"]}`;
textService.addTextToFile(filePath, obj);

const someStory = "This is Bob. He is a great programmer!\n\t";
textService.appendTextToFile('data.txt', someStory);

const differentStory = "Bob created an amazing app today!";
textService.appendTextToFile('data.txt', differentStory);

const dataFromText = textService.readTextFromFile('data.txt');
console.log(dataFromText);