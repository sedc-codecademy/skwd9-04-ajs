// What is JavaScript?
// A single-threaded non-blocking asynchronous concurrent
// Single-threaded means that it has one threaded (it can do one thing at a time)
// Blocking - do something until it's finished and then continue with the next peace of code

// Simple function, setTimeout(), setInterval()
const simpleFunction = () => console.log("Simple function");

const functionWithTimeout = () => setTimeout(() => console.log("setTimeout and it will be done in 5 seconds"), 5000)

const functionWithInterval = () => setInterval(() => console.log("setInterval and it will be done in 1 seconds"), 1000)


simpleFunction();
functionWithTimeout();
functionWithInterval();

// setTimeout() executes the function once on a time out. setInterval() executes the function repeatedly on and interval

// Callback functions
function calculate(callback, num1, num2){
	console.log("calculating...");
	return callback(num1,num2);
};

let result = calculate((x, y) => x + y, 2, 5);
console.log("Result callback function", result);

let students = [
    { firstName: "Natasha", lastName: "Paneva", grade: 10, age: 23 },
    { firstName: "Darko", lastName: "Panchevski", grade: 7, age: 25 },
    { firstName: "George", lastName: "Dimitrov", grade: 10, age: 26 },
    { firstName: "Pero", lastName: "Perovski", grade: 5, age: 35 },
    { firstName: "Blazo", lastName: "Blazovski", grade: 6, age: 99 }
];

const printStudentFullName = (callbackFunction, student) => {
	console.log("callback function");
	return callbackFunction(student);
}

students
  .forEach(student => 
    printStudentFullName(
      student => 
      console.log(
        `${student.firstName} ${student.lastName}`
      ),
      student
    )
  );

// Synchronous and asynchronous executing
// Functions without delay
function withoutDelay1() {
    console.log("withoutDelay1");
}

function withoutDelay2() {
    console.log("withoutDelay2");
}

withoutDelay1();
withoutDelay2();

// Functions with and without delay
function first(){
	setTimeout(() => console.log("First thing"), 1000);
} 

function second(){
	setTimeout(() => console.log("Second thing"), 5000);
}

function third() {
  console.log("Third thing");
}

function fourth() {
  setTimeout(() => console.log("Fourth thing"), 2500);
}

first();
second();
third();
fourth();

// Two function calls but the first is delayed (solved with a callback)
function first(callback) {
    console.log("First thing");
	setTimeout(()=>{
        console.log("Log within setTimeout()");
        if(callback) 
          callback();
	}, 2500);
}

function second(){
	console.log("Second thing!");
}

first(second);

// making request using fetch
function makeCall(url) {
fetch(url)
    .then(res => res.json())
    .then(response => {
            console.log('The request succeeded!');
            return response;
    })
    .catch(error => {
            console.log('The request failed!');
            return response.responseText;
    })
}
  
function print(results){
    console.log(results);
}
  
print(makeCall("https://swapi.dev/api/people/1/")); // It will log undefined and The request succeeded!

//  making request using fetch and callbacks
function makeCall(url, callbackFunction){
    fetch(url)
      .then(res => res.json())
      .then(response => {
              console.log('The request succeeded!');
              if (callbackFunction)
                callbackFunction(response);
      })
      .catch(error => {
              console.log('The request failed!');
              if (callbackFunction)
                callbackFunction(error);
      })
  }
  
  function print(results){
       console.log(results);
  }
  
  makeCall("https://swapi.dev/api/people/1/", print); // It will log The request succeeded! and the response result
  
// If you want to try it out check this page https://www.jsv9000.app/