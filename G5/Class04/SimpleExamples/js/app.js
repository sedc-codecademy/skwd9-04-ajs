// [Regular functions]
function calculate(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}
calculate(5, 10);

// -------------------------------------

//[Regular functions - return value]
function calculateNew(num1, num2) {
    return num1 + num2;
}
calculateNew(20, 30);

// -------------------------------------

//[Anonymous functions - Assign a function as a value to some variable.]
let calculator = function (num1, num2) {
    return num1 + num2;
}
calculator(22, 33);

// -------------------------------------


//[Arrow functions - Also an anonymous function just even shorter to declare]
let sayHi = () => {
    return 'Hi Martin!'
}


// [Arrow function with one input parameter]
let greet = (name) => {
    return 'Hi there ' + name;
}

// [Arrow function with only one input paramter can be declared even without the parameters brackets ()]
let greetPerson = name => {
    return 'Hi there ' + name;
}

// [Arrow function with only one input paramter can be declared even without the parameters brackets ()]
let greetPersonShort = name => 'Hi there ' + name;

// [Arrow function with more than one input paramter must be declared with the parameters brackets ()]
let sum = (first, second) => first + second;
let difference = (first, second) => first - second;
let multiply = (first, second) => first * second;
let division = (first, second) => first / second;


// [Recursion - When a function is invoked by itself]
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));

