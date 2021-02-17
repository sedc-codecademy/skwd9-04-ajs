//storing function in an array

let numberStateFunction = [
    number => number > 0 ? "number is positive" : "number is negative",
    number => number % 2 === 0 ? "number is even" : "number is odd",
    number => number >= 0 ? number.toString().length : number.toString().length - 1
]

// console.log(numberStateFunction[0](5))
// console.log(numberStateFunction[1]([9]))
// console.log(numberStateFunction[2]([-120]))

//using function as an argument

function calculator(calculateFunc, number1, number2) {
    return calculateFunc(number1, number2)
}

function sum(num1, num2) {
    return num1 + num2
}

function difference(num1, num2) {
    return num1 - num2
}

let result = calculator(difference, 125, 10)
console.log(result)

//with anonimous function
let result2 = calculator(function(num1, num2) {
    return num1 - num2
}, 6, 3)
console.log(result2)

//with arrow function
let result3 = calculator((num1, num2) => num1 * num2, 22, 2)
console.log(result3)

//function with properties and methods
function sayHello(name) {
    return "Hello, " + name
}

//adding properties to a function
sayHello.defaultName = "Viktor";
console.log(sayHello.defaultName)

//adding methods to a function
sayHello.differentGreeting = function(name) {
    return "Hi, " + name
}

console.log(sayHello.differentGreeting("Igor"))

//function arguments
function longestString() {
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[2])
}

longestString("testString", "randomString", "Viktor")

//Returning a function from another function
function calculator2(operation){
	switch(operation){  
		case  "+":  
		return function(number1, number2){ return number1 + number2 };
		break;  
		case  "-":  
		return function(number1, number2){ return number1 - number2 };
		break;  
		default:  
		console.log("ERROR")
		return null;
	}
}

let result12 = calculator2("+")
console.log(result12(5,10))