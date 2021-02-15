// [Declaration]
function printCurrentDateTime() {
  const today = new Date();
  return today;
  // console.log(today);
}

// [Execution]
const todaysDate = printCurrentDateTime();
console.log(todaysDate);

// [Function Parameters]
function convertTemperature(temperature, type) {
  let result = 0;
  let message = "";
  switch (type) {
    case "F":
      result = ((temperature - 32) * 5) / 9;
      message = `${temperature}F is equal to ${result.toFixed(2)}C`;
      break;
    case "C":
      result = (temperature * 9) / 5 + 32;
      message = `${temperature}C is equal to ${result.toFixed(2)}F`;
      break;
    default:
      message = "Please select a valid conversion format.";
      break;
  }
  return message;
}

// [Executing the temperature function]
const fahrTemp = 120;
const FAHR = "F"; // constants are usually written LIKE_THIS
const fahrToCelsius = convertTemperature(fahrTemp, FAHR);
console.log(fahrToCelsius);

// [Function Parameters Example #2]
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// [Executing the getFullName function in different places]
const assistantName = "Jovica";
const assistantSurname = "Lazarevski";
if (getFullName(assistantName, assistantSurname).length >= 15) {
  console.log(
    `Hi, ${getFullName(
      assistantName,
      assistantSurname
    )}. Your name is too long. The length of your name is ${
      getFullName(assistantName, assistantSurname).length
    }`
  );
} else {
  console.log("Your name is short enough.");
}

// [Anonymous Functions]
// Anonymous functions are functions that aren't declared with a name. They are often used if we want to quickly declare
// a function and execute it.
// [DOM Selectors]
const colorBtn = document.getElementById("color-btn");
const colorInput = document.querySelector("#color-picker");
const colorCircle = document.querySelector("#color-circle");

// [Event Listener for changing the circle color]
colorBtn.addEventListener("click", function (event) {
  // event.preventDefault();
  const newColor = colorInput.value;
  colorCircle.style.backgroundColor = newColor;
  console.log(newColor);
});

// [Anonymous Function Example #2]
const peopleArray = ["Ivan Lazarevski", "Martin Panovski", "Ivo Kostovski"];
const peopleList = document.getElementById("people-list");

// [This is the standard way of declaring a function]
// function renderPeople () {
//     // do stuff
// }

// [We can assign an anonymous function to a variable (or a constant)]
// const renderPeople = function (people) {
//   let inner = "";
//   for (const person of people) {
//     inner += `<li><h2>${person}</h2></li>`;
//   }
//   peopleList.innerHTML = inner;
// };

const renderPeople = function () {
  // do stuff
};

// [We can call this anonymous function through the variable(or constant) to which it was assigned.]
renderPeople(peopleArray);

// [Anonymous functions in fetch]
// fetch("http://example.com/movies.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// [Arrow Functions]

console.log(`
ARROW FUNCTIONS
`);

// Normal Function
const logTheTime = function () {
  const today = new Date();
  console.log("Normal Function: ", today);
};
logTheTime();

// Arrow Function -- Works the same,
// you just need to delete the function keyword from the LEFT of the ()
// and add => on the RIGHT side of the ()
const logTheTimeArrow = () => {
  const today = new Date();
  console.log("Arrow Function: ", today);
};
logTheTimeArrow();

const addTwoNumbers = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return `${firstNumber} + ${secondNumber} = ${result}`;
};
console.log(addTwoNumbers(5, 19));

// Single Line (Single Expression) Arrow function
// If the function has a single line in the body, and that line is a return statement,
// you can simply not write the function body and instead use the 
// => symbol instead of the return keyword and return the expression like that
const addTwoNumbersSingleShort = (first, second) => first + second;

const addTwoNumbersSingleLong = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

console.log("Short Arrow Function:", addTwoNumbersSingleShort(4, 9));
console.log("Long Arrow Function: ", addTwoNumbersSingleLong(4, 9));

// You can even make this shorter
// If the function has a single input parameter, you can omit the ()
const powerOfTwo = num => Math.pow(num, 2);
console.log(powerOfTwo(13));

// [Arrow functions with fetch]

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(resp => console.log(resp));

// [Self Invoked Functions] IIFE - immediately-invoked function expressions

// [Normally calling a function]
const sayHello = function (name) {
  console.log(`Hello, ${name}!`);
};
// sayHello('Ivan');

// [A function that invokes immediately]
// const sayHello = -- We don't need a variable to assign the function to, because we don't want to interact with the variable

(function(name) {
  console.log(`Hello, ${name}!`);
})('Ivan');

// [IIFE Example #2]

// const fullNameIIFE = (username, tag) => console.log(username + tag);
// fullNameIIFE('Patrick', '#1234');
((username, tag) => console.log(username + tag))('Patrick', '#1234');
// fullNameIIFE('Patrick', '#1234');

// [Recursion]
const sayHiToTheAudience = () => {
  console.log('Hi, Audience!');
};
sayHiToTheAudience();

// You need to find a way to escape the recursion. Otherwise, it goes on forever (Until the browser crashes.)
// while(true) {
//   // do this
//   if(blabla == 5){
//     break;
//   }
// }

const sampleArray = [
  [
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['x', 'y', 'z']
  ],
  [
    [
      ['qwerty', 'qwertz']
    ],
    [
      ['qwe', 'wer', 'ert'],
      ['asd', 'sdf', 'dfg', 'fgh'],
      ['123', '234'],
      ['987', '654', '432', '321'],
    ],
  ],
  [
    'ASD', 'SDF'
  ]
];
// console.log(sampleArray);
// function printComplexArray(complexArray) {
//   for (const currentElement of complexArray) {
//       if(Array.isArray(currentElement)){
//         printComplexArray(currentElement);
//       } else {
//         console.log(currentElement);
//       }
//   }
// }

function printComplexArrayReprise(weirdArray) {
  for (const element of weirdArray) {
    if(Array.isArray(element)){
      printComplexArrayReprise(element);
    } else {
      console.log(element);
    }
  }
}
printComplexArrayReprise(sampleArray);

