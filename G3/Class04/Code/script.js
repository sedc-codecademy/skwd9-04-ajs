//function without parameters
function SomeSimpleExample(){
    console.log("This is some dummy text");
}

//calling function without parameters
//SomeSimpleExample();

//defining function with parameters
function GetFullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

//calling function with parameters
GetFullName("Filip","Filipov");
//getting result from function with parameters
let result=GetFullName("Filip","Filipov");
//console.log(result);

//function with parameters and some logic
function SumOfNumbers(numberOne,numberTwo){   
    return numberOne + numberTwo;
    //the code after return will not be executed
    let razlika=numberOne-numberTwo;
}

//calling function with if statement
if(GetFullName("Filip","Filipov").length >= 20){
    console.log("This is long name");
}
else{
    console.log("This is short name");
}

//calling function in function with parameters
function PrintDetails(firstName,lastName,mood){
    return `The person ${GetFullName(firstName,lastName)} is feeling ${mood}`;
}

//console.log(PrintDetails("Filip","Filipov","good"));

//how not to call function in function
function PrintDetails2(firstName,lastName,mood){
    function GetFullName(firstName,lastName){
        return `${firstName} ${lastName}`;
    }

    return `The person ${GetFullName(firstName,lastName)} is feeling ${mood}`;
}

//Anonymous function
//adding anonymous function on variable
let greeting = function(name){
    return `Hello ${name}`;
}
//console.log(greeting("Filip"));

let button=document.getElementById("anonymousButton");
//anonymous function on button(event listener)
button.addEventListener("click",function(){
    console.log("This is anonymous function event");
});

//Arrow function
//anonymous function
let logSomething = function(){
    console.log("Some message");
}
//logSomething();
//arrow function
let logSomethingWithArrowFunction = () => console.log("Some message from arrow function");
//calling arrow function
//logSomethingWithArrowFunction();

//anonymous function with one parameter
let sum = function(number){
    return 15+number;
}
console.log(sum(10));
//arrow function with one parameter
let sumNumber = number => 15 + number;
console.log(sumNumber(12));

//anonymous function with 2 parameters
let sumTwoNumbers= function(numberOne,numberTwo){
    return numberOne + numberTwo;
}
//calling anonymous function with two parameters
console.log(sumTwoNumbers(10,11));
//arrow function with two parameters
let sumOfTwoNumbers= (numberOne,numberTwo) => numberOne + numberTwo;
//calling arrow function with two parameters
console.log(sumOfTwoNumbers(10,11));

//anonymous function 
let numbersSum= function(numberOne,numberTwo){
    let result = numberOne+numberTwo;
    console.log(`The result is ${result}`);

    return result;
}

//arrow function with more lines of code and return
let numbersSumWithArrowFunction= (numberOne,numberTwo) =>{
    let result = numberOne+numberTwo;
    console.log(`The result is ${result}`);

    return result;
}
//event listener with arrow function
let arrowButton= document.getElementById("arrowButton");
arrowButton.addEventListener("click",()=>{
    console.log("Event with arrow function detected");
})

