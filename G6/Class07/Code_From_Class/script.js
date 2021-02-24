// console.log("FIRST LOG");

// setTimeout(() => {
//     console.log("INSIDE TIMEOUT FUNCTION")
// }, 0);

// console.log("SECOND LOG");

// let handle = setInterval(() => {
//     console.log("I AM IN INTERVAL")
// }, 2000)

// $("#stop").click(() => {
//     clearInterval(handle);
// })


function doAfterDelay() {
    console.log("LOG FROM TIMEOUT")
}

function first() {
    setTimeout(doAfterDelay, 0)
    console.log("LOG FROM FIRST FUNCTION")
}

function second() {
    console.log("LOG FROM SECOND FUNCTION")
}

// first();
// second();

// function higerOrderFunc (cb, name) {
//     cb(name) // printName("Goce")
// }

// function printName (name) {
//     console.log(name);
// }

// higerOrderFunc(printName, "Goce")

function calculate(callback, num1, num2) {
    return callback(num1, num2); // sum(5, 10) => 15 => 15
}

function sum (num1, num2) {
    return num1 + num2;
}

let result = calculate(sum, 5, 10);
// console.log(result)

function getPerson(url, cb) {
    $.ajax({
        url,
        success: response => {
            // { id: 1, name:"Goce"}
            console.log("REQUEST WAS SUCCESSFULL");
            cb(response);
        },
        error: error => {
            console.log("REQUEST FAILED");
            cb(error.responseText);
        }
    })
}

function printResult(results) {
    console.log(results);
}

// printResult(getPerson("https://swapi.dev/api/people/1/"))

// SAME RESULT

// setTimeout(function() {
//     printResult(getPerson("https://swapi.dev/api/people/1/"))
// }, 200);


getPerson("https://swapi.dev/api/people/1/", printResult)
































