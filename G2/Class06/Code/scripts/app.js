//use as variable
let greeting = function (name) { console.log(`Hello ${name}`) };
greeting("Bob");

let anotherGreeting = name => console.log(`Hello again ${name}`);
anotherGreeting("SEDC");

//use in an array
let numberStatsFunctions = [
    num => num >= 0 ? "Positive" : "Negative",
    num => num%2 == 0 ? "Even" : "Odd",
    num => num>= 0 ? num.toString().length : num.toString().length -1
];
console.log(numberStatsFunctions[1](23));
console.log(numberStatsFunctions[0](23));
console.log(numberStatsFunctions[2](23));

//use as an argument
function sum(num1, num2){return num1 + num2};
function diff(num1, num2){return num1 - num2};
function calculator(calculateFunc, number1, number2){
    return calculateFunc(number1, number2); //sum(2,3), diff(7, 3)
}
console.log("Sum");
console.log(calculator(sum, 2, 3));
console.log("Difference");
console.log(calculator(diff, 7, 3));

//use it as a return value
function calculate(operator){
    switch(operator){
        case "+":
            return (num1, num2) => num1 + num2;
            //break;
        case "-":
            return (num1, num2) => num1 - num2;
            //break;
        default:
            console.log("There is an error!");
            return null;
    }
}
let result = calculate("+"); //result is a function
console.log(result(7,2));
console.log(calculate("-")(9,7))

console.log(`Type of result: ${typeof(result)}`);

function Student(fname, lName){
    this.firstName = fName;
    this.lastname =lName;
}

//adding properties and methods
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello.defaultName = "Bob";
sayHello.anotherGreeting = function(name){
    return `Hi ${name}`;
}
console.log(sayHello.defaultName);
console.log(sayHello.anotherGreeting("SEDC"));

//FUNCTION ARGUMENTS
function longestString(){
    console.log(arguments.length);
    let longest = arguments[0];
    for(let arg of arguments){
        if(longest.length < arg.length){
            longest = arg;
        }
    }
    return longest;
}
console.log(longestString("Bob", "Johnson", "SEDC"));