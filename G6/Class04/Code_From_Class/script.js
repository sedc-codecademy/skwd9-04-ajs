// Anonymous functions

let sayHi = function () {
    console.log("HELLO THERE!");
};

// sayHi();

let array = [1,2,3, function() { return 4}];

// console.log(array);
// console.log(array[3]());

// document.addEventListener("click", function() {
//     console.log("DOCUMENT WAS CLICKED");
// });

// ARROW FUNCTIONS

// function sum(num1, num2) {
//     return num1 + num2;
// }

// Only if its one line in the body of the function, expression that we want to return
let sum1 = (num1, num2) => {
    // some logic..
    let result = num1 + num2;
    return result;
}

let sum2 = (num1, num2) => num1 + num2

// console.log(sum1(20, 10));
// console.log(sum2(20, 10));


// function isPositive(number) {
//     return number > 0;
// }

let isPositive = number => number > 0;
// console.log(isPositive(1))
// console.log(isPositive(-1))

// document.addEventListener("click", function() {
//     console.log("CLICKED")
// })

let input = document.getElementById("input");

// document.addEventListener("keydown", event => {
//     // some logic..
//     let value = event.target.value;
//     let heading = document.createElement("h1");
//     heading.textContent = value;
//     document.body.appendChild(heading);
// });

// SELF INVOKED FUNCTIONS / IMMEDIATLY INVOKED FUNCTION EXPRESSION / IIFE

// It's all about variable scoping
// Variables declared in the self executing function are by default only available to code withing the self executing function
// This allows code to be written without concern of how variables are named

// let func = () => {
//     let result = 5;
//     console.log(result)
// }
// func();

// (() => {
//     let result = 5;
//     console.log(result)
// })();

// (function(num1, num2) {
//     console.log(num1 + num2);
// })(10, 20);

let result = (function(num1, num2) {
    return num1 + num2;
})(100, 200);

// console.log(result);


// EXTRA, JUST TO SEE THE POWER

function sum(num1, num2) {
    console.log(num1 + num2);
};

// sum(((number1, number2) => number1 - number2)(20, 10), 30);

// sum(10, 30)

// SCOPE

let number = 10; // GLOBAL SCOPE

function sumPlusOne(num1, num2) {
    let one = 1; // Function scope => sumPlusOne
    // console.log(num1 + num2 + one);
    function add5(number) {
        let insideFunctionVariable = 100; // Function scope => add5
        // console.log(one);
        console.log(number + 5); // => 15
    }
    // console.log(insideFunctionVariable) => REFFERENCE ERROR, insideFunctionVariable is not defined
    add5(num1);
    function add10(number) {
        let variableInadd10Scopoe = 1000; // FUNCTION SCOPE => add10
        console.log(number + 10); // FUNCTION SCOPE => add10 => 30
        add5(variableInadd10Scopoe) // => 10
    }
    add10(num2)
}

// sumPlusOne(number, 20);

// console.log(one); => REFFERENCE ERROR, one is not defined

// RECURSION

function sumTo(number) {
    if( number === 0) {
        return 0;
    }
    return number + sumTo(number - 1) // 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0
}

console.log(sumTo(10));


function factorial(number) {
    if(number === 1) {
        return 1;
    }
    return number * factorial(number -1);
}

factorial(8); // 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 

