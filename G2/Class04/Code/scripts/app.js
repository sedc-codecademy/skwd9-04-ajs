function printPersonDetails(firstName, lastName, age, address){
    //debugger
    let fullName;
    function getFullName(firstName, lastName){
        //debugger
        //firstName, lastName are getFullName's parameters
       return `${firstName} ${lastName}`;
    }
    //fullName = getFullName(firstName, lastName); //firstName, lastName are printPersonDetails's parameters
    fullName = getFullName("Ana", "Petrovska");
    return `The person ${firstName} ${lastName} age ${age} lives on ${address} and we have person ${fullName}!`;
    //from here, code will never be executed!
    console.log("Some line of code");
    console.log("Another line of code");
}

let personDetails = printPersonDetails("Petko", "Markovski", 20, "Some street");
console.log(personDetails);

console.log("===Anonymous functions===");
//in a variable
let greeting = function(){
    console.log('Hello SEDC');
};
greeting();
greeting();
//member of an array
let array = [2, 4, true, "SEDC", function(){return 5+10}, greeting()];
let result = array[4]();
console.log(array[5]);
console.log(result); //console.log(array[4]());
//parameter
function print(parameterFunction){
    //debugger;
    let result = parameterFunction();
    console.log(`Result: ${result}`);
}

print(function(){return 5+10});

//in an event listener
document.getElementById("myButton").addEventListener("click", function(){
    console.log("You clicked the button!");
});

console.log("====Arrow functions====");
let sumWithTen = num => num + 10;
console.log(sumWithTen(1));

//multiple parameters
let sum = (num1, num2) => num1 + num2;
console.log(sum(2,3));

//block of code
let sumOfMultipleNumbers = (num1, num2, num3) => {
    console.log("input:");
    console.log(num1);
    console.log(num2);
    console.log(num3);
    return num1 + num2 + num3;
}
console.log(sumOfMultipleNumbers(1, 2, 3));
//event listener (without parameters)
document.getElementById("myButton").addEventListener("click", () => console.log("Click inside of an arrow function")
);

//let checkNum = myNumber =>  myNumber > 5 ? console.log("Greater than 5") : console.log("Less than 5");
let checkNum = myNumber => {
    if(myNumber == null || myNumber == undefined)
    {
        console.log("error");
        return;
    }
    
    myNumber > 5 ? console.log("Greater than 5") : console.log("Less than 5");
};
checkNum(6);

let someObject = {
    num : 2,
    myMethod : function(){
        console.log(this.num);
        console.log("Inside my method");
    }
}

console.log("===Self invoked===");
//no parameters
(function(){
    console.log("There are no parameters");
    console.log("This is self invoked function");
})();
//assign result to a variable
let res = ((num1, num2) => num1 + num2)(2, 4);
console.log(`Result of IIFE: ${res}`);
//use it as a parameter
let r = sum(2, ((num1, num2) => num1 * num2)(2, 4)); //sum(2,8);
console.log(r);