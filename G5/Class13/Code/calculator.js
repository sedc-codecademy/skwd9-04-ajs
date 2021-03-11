const sum = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;

const calculator = {
    sumNumbers: sum,
    subtractNumbers: subtract,
    multiplyNumbers: multiply,
    divideNumbers: divide,
    firstName: 'Ivan'
};

// This is how you export the file
module.exports = calculator;