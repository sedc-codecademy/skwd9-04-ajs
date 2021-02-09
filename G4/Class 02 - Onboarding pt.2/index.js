// Arrays
let emptyArray = [];
let simpleArray = [4, 5];
let mixedArray = [1, "Natasha", true, "SEDC - G4", "Pero", "Blazo", 23, 2.1, undefined, , null, {}, NaN, []];

// console.log("Simple array", simpleArray);
// console.log("Mixed array", mixedArray);

// Getting element of array
let secondElementOfMixedArray = mixedArray[1];
let ninthElementOfMixedArray = mixedArray[9];
let lastElementOfMixedArray = mixedArray[mixedArray.length - 1];

// console.log("Second element of mixed array", secondElementOfMixedArray);
// console.log("Ninth element of mixed array", ninthElementOfMixedArray);
// console.log("Last element of mixed array", lastElementOfMixedArray);

// Changing elements value in array
mixedArray[9] = "Jana";

mixedArray[mixedArray.length - 1] = "Ivan";
let lastElementOfMixedArrayAfterChange = mixedArray[mixedArray.length - 1];

// console.log("Mixed array after change", mixedArray);

// Adding elements into the array by index
mixedArray[mixedArray.length + 1] = "Darko"; // Add the value at array.length + 1; The previous one will be undefined ("empty")
// console.log("Mixed array after change", mixedArray);

mixedArray[mixedArray.length] = 12; // Add element at the end of the array
// console.log("Mixed array after change", mixedArray);

// Single and multiple value/s adding at the end of the simple array
simpleArray.push(6);
simpleArray.push(7, 8);

// Single and multiple value/s adding at the beginning of the simple array
simpleArray.unshift(3); // Single
simpleArray.unshift(1, 2) // Multiple

// console.log("Simple array after adding elements and the beginning and the end of itself", simpleArray);

// Removing elements at the end of array
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();

// Removing elements at the beginning of array
mixedArray.shift();

// console.log("Mixed array after removing the elements at the beginning and the end ", mixedArray);

let indexOfElement = simpleArray.findIndex(x => x === 4); // Find index of element with value 4 (other solution is with .indexOf())
// console.log("Delete element from simple array with index", indexOfElement);
simpleArray.splice(indexOfElement, 1) // Deleting from index, onwards including index
// console.log("Simple array after deleting", simpleArray);

let newArrayAfterSlice = simpleArray.slice(indexOfElement, indexOfElement + 2); // take elements from range (indexOfElement, indexOfElement + 2) and create new array (original array is not changed)
// console.log("New array after slicing", newArrayAfterSlice);

// Loops
// while
let i = 0;

// while(i < simpleArray.length) {
//     console.log(`Element on position ${i} from simple array is ${simpleArray[i]}`);    
//     i++;
// }

// do-while
// do {
//     console.log(`Element on position ${i} from simple array is ${simpleArray[i]}`);
//     i++;
// } while(i < simpleArray.length)

// Difference between while and do-while
let falseStatement = false;

while (falseStatement) {
    console.log("Inside while loop");
}

do {
    // console.log("Inside do-while loop");
} while (falseStatement)

// while (check the condition before entering the loop) vs do-while (enter the loop, then check the condition)

// for, for-of, foreach
for(let index = 0; index < mixedArray.length; index++) {
    // console.log(`Mixed array element on index - ${index} is ${mixedArray[index]}`);
}

for (const element of mixedArray) {
    // console.log(`The element is ${element}`);
}

// Iterate through mixedArray
mixedArray.forEach((element, index) => { // It will take element value and index (if it's specified)
    // console.log(`The element on position ${index} is ${element}`)
})

// Exercises - Arrays 1
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
let arrayOfNumbersDividedBy3 = [];
let arrayOfNumbersDividedBy4 = [];

for (let index = 1; index <= 1000; index++) {
    // if you press F8 on keyboard while debugging -> move to next debugger;
    // if you press F10 on keyboard while debugging -> move to next line
    // if you press F11 on keyboard while debugging -> move into the function/statement
    // debugger;
    if (index % 3 === 0) {
        arrayOfNumbersDividedBy3.push(index);

        if (index % 4 === 0) {
            arrayOfNumbersDividedBy4.push(index);
        }
    }
    else if (index % 4 === 0) {
        arrayOfNumbersDividedBy4.push(index);
    }
    else {
        continue;
    }
}

// console.log("Array of numbers divided by 3", arrayOfNumbersDividedBy3);
// console.log("Array of numbers divided by 4", arrayOfNumbersDividedBy4);

// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
let arrayOfNumbersThatEndsWith1 = [];

for (let index = 1; index < 1000; index++) {
    if (index % 10 === 1) {
        arrayOfNumbersThatEndsWith1.push(index);
    }
}

// console.log("All the numbers that ends with 1", arrayOfNumbersThatEndsWith1);

// Functions
// Regular
function nameOfTheFunction (/* arguments */) {}
// Arguments part are optional (in case you don't need to send arguments parameters the function should be empty)

// Function without arguments
let sumOfAllNumbersInSimpleArrayResult = 0;

function sumOfAllNumbersInSimpleArrayWithoutArgument() {
    for (const number of simpleArray) {
        sumOfAllNumbersInSimpleArrayResult += number;
    }

    return sumOfAllNumbersInSimpleArrayResult;
}

// console.log("Sum of all number in simple array function without arguments", sumOfAllNumbersInSimpleArrayWithoutArgument());

// Same function with argument
let sumOfAllNumbersInSimpleArrayWithArgumentResult = 0;

function sumOfAllNumbersInSimpleArrayWithArgument(simpleArray) {
    for (const number of simpleArray) {
        sumOfAllNumbersInSimpleArrayWithArgumentResult += number;
    }

    return sumOfAllNumbersInSimpleArrayWithArgumentResult;
}

// console.log("Sum of all number in simple array function with argument", sumOfAllNumbersInSimpleArrayWithArgument(simpleArray));

// Exercises - Array 2
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22, 0];

// Create a function that cleans an array of any values and leaves only STRINGS (with argument)
function leaveOnlyStringValuesFromTestArray(someArray) {
    for (let index = 0; index < someArray.length; index++) {
        if (typeof(someArray[index]) !== "string" || Number.isNaN(someArray[index])) {
            delete someArray[index];
        }
        else {
            continue;
        }
    }

    return someArray;
}

// console.log("Leave only string values form test array", leaveOnlyStringValuesFromTestArray(test));

// Create a function that cleans an array of any values and leaves only NUMBERS (without arguments)
function leaveOnlyNumberValuesWithoutArguments() {
    for(let index = 0; index < test.length; index++) {
        if(typeof(test[index]) !== "number" || Number.isNaN(test[index]))
            delete test[index];        
        else
            continue;
    }

    return test;
}

// console.log("Leave only number values from test array", leaveOnlyNumberValuesWithoutArguments());

// Create a function that cleans undefined, null, NaN and "" and leaves all other values
function leaveOnlySpecificValuesFromTestArray(testArray) {
    for (let index = 0; index < testArray.length; index++) {
        if (testArray[index] === undefined || testArray[index] === null || Number.isNaN(testArray[index]) || testArray[index] === "") {
            delete testArray[index];
        }
        else {
            continue;
        }
    }

    return testArray;
}

// console.log("Leave only specific value from test array", leaveOnlySpecificValuesFromTestArray(test));

// DOM
// Selectors
// .getElementById() Return one HTMLElement
let myTitle = document.getElementById("myTitle");
// console.log("Get element by id - myTitle", myTitle);

// .getElementsByClassName() Return array of HTMLElements (HTMLCollection)
let paragraphs = document.getElementsByClassName("myParagraph");
// console.log("Get elements by class name - myParagraph", paragraphs);

// .getElementsByTagName() Return array of HTMLElements (HTMLCollection)
let arrayOfH3ByTagName = document.getElementsByTagName("h3");
// console.log("Get elements by tag name - h3", arrayOfH3ByTagName);

let arrayOfH4ByTagName = document.getElementsByTagName("h4");
// console.log("Get elements by tag name - h4", arrayOfH4ByTagName);

// .querySelector() Return one NodeElement with all content within itself
let querySelectorMyDiv = document.querySelector(".myDiv");
// console.log("Query selector .myDiv", querySelectorMyDiv);

let querySelectorMyParagraph = document.querySelector(".myParagraph");
// console.log("Query selector .myParagraph", querySelectorMyParagraph);

// WHAT WILL BE THE RESULT?!
let whatWillBeResultOfThis = document.querySelector(".myDiv > .myParagraph");
// console.log("What will be the result?!", whatWillBeResultOfThis);

// .querySelectorAll() Return NodeList
let paragraphsWithClassMyParagraphs = document.querySelectorAll(".myParagraph");
// console.log("Query selector all paragraphs with class .myParagraph", paragraphsWithClassMyParagraphs);

// Traversing through DOM
let childParagraphByClass = document.getElementsByClassName("child-paragraph");
// console.log("Getting next element sibling from .getElementByClassName() HTMLElement", childParagraphByClass[0].nextElementSibling);

// Same as the code above
let childParagraph = document.querySelector(".child-paragraph");
// console.log("Getting next element sibling from .querySelector() node element", childParagraph.nextElementSibling)

let parentOfChildParagraph = childParagraph.parentElement;
// console.log("Parent element of child paragraph", parentOfChildParagraph);

let childrenOfParentOfChildParagraph = parentOfChildParagraph.children;
// console.log("Children of parent of child paragraph", childrenOfParentOfChildParagraph);

let firstChildOfParentOfChildParagraph = parentOfChildParagraph.firstElementChild;
// console.log("First element child", firstChildOfParentOfChildParagraph)

let lastElementChildOfParentOfChildParagraph = parentOfChildParagraph.lastElementChild;
// console.log("Last element child", lastElementChildOfParentOfChildParagraph);

// Changing content of element
let headerToChange = document.getElementById("changeH5");
headerToChange.innerText = "The following element will be unordered list with numbers from 1 to 5!";

let unorderedList = document.getElementById("list");

for (let index = 1; index <= 5; index++){
    unorderedList.innerHTML += `<li>${index}</li>`
}

// Events
// HTML event handlers - BAD PRACTICE
// function buttonInputForm1OnClick(){
//     console.log("HTML event handlers!");
// }

// Traditional DOM event handlers
// document.getElementById("buttonInputForm1").onclick = function() {
//     console.log("Traditional DOM event handler");
// } 

// DOM level 2 event listeners
document.getElementById("buttonInputForm1").addEventListener('click', function() {
    let usernameInputValue = document.getElementById("usernameInputForm1").value;
    let commentInputValue = document.getElementById("commentInputForm1").value;

    function printUsernameInConsole (usernameInputValue) {
        console.log("The username value is", usernameInputValue)
    }

    function printCommentInConsole (comment) {
        console.log("The comment value is", comment);
    }

    printUsernameInConsole(usernameInputValue);
    printCommentInConsole(commentInputValue);
}, false);

// DOM Exercises
// Title Generator
let colorInput = document.createElement("input");
colorInput.setAttribute("id", "colorInputDOMExercises1");
colorInput.setAttribute("placeholder", "Insert name of the color");

let fontSizeInput = document.createElement("input");
fontSizeInput.setAttribute("id", "fontSizeInputDOMExercises1");
fontSizeInput.setAttribute("placeholder", "Insert font size number");

let textInput = document.createElement("input");
textInput.setAttribute("id", "textInputDOMExercises1");
textInput.setAttribute("placeholder", "Insert text");

let buttonInput = document.createElement("input");
buttonInput.setAttribute("id", "buttonInputDOMExercises1");
buttonInput.setAttribute("type", "button");
buttonInput.setAttribute("value", "Generate header");

let form = document.createElement("form");
let fieldset = document.createElement("fieldset");

form.append(colorInput, fontSizeInput, textInput, buttonInput);
fieldset.appendChild(form);

let resultHeader = document.createElement("h1");
resultHeader.setAttribute("id", "resultHeader");

document.getElementById("DOMExercisesTitleGenerator").append(fieldset, resultHeader);

document.getElementById("buttonInputDOMExercises1").addEventListener("click", function(){
    let colorValue = document.getElementById("colorInputDOMExercises1").value;
    let fontSizeValue = document.getElementById("fontSizeInputDOMExercises1").value;
    let textValue = document.getElementById("textInputDOMExercises1").value;

    if (colorValue !== "" && fontSizeValue !== "" && textValue !== "") {
        let headerResultById = document.getElementById("resultHeader");
        headerResultById.innerText = textValue;
        headerResultById.style.color = colorValue;
        headerResultById.style.fontSize = `${fontSizeValue}px`;
    }
})

document.getElementById("DOMExercises2Button").addEventListener('click', function() {
    let colorValue = document.getElementById("DOMExercises2ColorInput").value;
    let fontSizeValue = document.getElementById("DOMExercises2FontSizeInput").value;
    let itemsValue = document.getElementById("DOMExercises2ItemsInput").value;

    let arrayOfItems = itemsValue.split(", ");

    let ulElement = document.getElementById("DOMExercises2ListResult");
    ulElement.style.color = colorValue;
    ulElement.style.fontSize = `${fontSizeValue}px`;

    for (const item of arrayOfItems) {
        ulElement.innerHTML += `<li>${item}</li>`
    }
})

// Objects
// Object literal
let vehicle = {
    tiers: 4,
    color: "black",
    type: "car",
    brand: "BMW",
    firstDriver: true,
    numberOfSeats: 4,
    numberOfSeatsTaken: 2,

    availableNumberOfSeats: function() {
        return this.numberOfSeats - this.numberOfSeatsTaken;
    }
}

// Getting elements value from js object (vehicle)
// console.log("Vehicle brand", vehicle.brand);
// console.log(vehicle.firstDriver ? "The driver is the first owner of the vehicle" : "The driver is not the first owner of the vehicle");
// console.log("Available number of seats", vehicle.availableNumberOfSeats());

// Class Object - new Object();
let animal = new Object();
animal.name = "Sharko";
animal.age = 2;
animal.color = "white";
animal.sound = function (sound) {
    console.log("The animal sound is", sound);
}

// console.log("The object values are", animal);
// console.log(`The ${animal.color} ${animal.name} is ${animal.age} old`);

// animal.sound("AF AF AF");

animal.color = "black";
animal.age = 5;

// console.log("The object values are", animal);
// console.log(`The ${animal.color} ${animal.name} is ${animal.age} old`);

// animal.sound("WOOF WOOF WOOF");

// Constructor Notation Template - function constructor
// Exercise Object
function Student(firstName, lastName, birthYear, academy, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function() {
        let dateNow = new Date();

        if (dateNow.getFullYear() > birthYear) {
            console.log(`The student has ${dateNow.getFullYear() - birthYear} years`)
        }
        else {
            console.error("Is this student from the future?!");
        }
    }

    this.getInfo = function() {
        console.log(`This is student ${firstName} ${lastName} from academy ${academy}`);
    }

    this.getGradesAverage = function() {
        let average = 0.0;

        if (grades !== undefined && grades.length > 0) {
            for (const grade of grades) {
                average += grade;
            }
        }

        console.log(`Student ${firstName} ${lastName} from academy ${academy} has average grades of ${average /= grades.length}`);
    }
}


let firstStudent = new Student("Natasha", "Paneva", 1997, "SEDC", [5, 5, 5]);
let secondStudent = new Student("Darko", "Panchevski", 1996, "FINKI", [4, 4, 1]);
let testStudent = new Student("Test", "Test", 2022, "SEDC", [1, 1, 1]);

console.log("First student", firstStudent);
console.log("Second student", secondStudent);

// Students Age
firstStudent.getAge();
secondStudent.getAge();
testStudent.getAge();

// Students Info
firstStudent.getInfo();
secondStudent.getInfo();

// Students Average Grades
firstStudent.getGradesAverage();
secondStudent.getGradesAverage();