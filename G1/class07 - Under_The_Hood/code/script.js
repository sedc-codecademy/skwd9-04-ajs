function one() {
    setTimeout(() => {
        console.log("one invoked")
    }, 3000)
}

function two() {
    console.log("two invoked")
}

function three() {
    setTimeout(() => {
        console.log("three invoked")
    }, 1500)
}

// one()
// three()
// two()

// ---- setTimeout ----
// sets the waiting time for the anonymous/arrow function to be executed
// two parameters: 1st is a function that will wait to be executed, 2nd is the waiting time in ms 


 function setTimeoutFcuntion() {
     setTimeout(() => {
        console.log("I will wait 3000 ms")
     }, 3000)
 }


// ---- setInterval ----
// used for repeating code upon a given amount of time
// two parameters: 1st is a function that will repeat over some amount of time, 2nd is the time that fuction will repeat in ms 

//  function setIntervalFunction() {

//      let interval = setInterval(() => {
//          console.log("hello again")
//      }, 500)

//      // ---- clearInterval ----
//      // will stop the setInterval execution
//      document.getElementById("stop").addEventListener("click", () => {
//          clearInterval(interval)
//      })
//  }

//  setIntervalFunction()

// ---- Callback functions ----

// simple callback function
function calculator(callback, num1, num2) {
    console.log("calculating...")
    return callback(num1, num2)
}

//let sumResult = calculator((x, y) => x + y, 5, 10)
// console.log(sumResult)

//let differenceResult = calculator((x, y) => x - y, 5, 10)
// console.log(sumResult)

function first(callback) {
    setTimeout(() => {
        console.log("fetching data")
        callback()
    }, 2000)  
}

function second() {
    console.log("printing data")
}

// first(second)



$(document).ready(function() {
    
    // making an ajax call without callback
    // function makeCall(url) {
    //     $.ajax({
    //         url: url,
    //         success: function(result) {
    //             return result
    //         },
    //         error: function(error) {
    //             console.warn(error)
    //         }
    //     })
    // }

    // function print(result) {
    //     console.log(result)
    // }

    //print(makeCall("https://jsonplaceholder.typicode.com/users"))
    
    // making an ajax call with callback
    function makeCall(url, callback) {
        $.ajax({
            url: url,
            success: function(result) {
                callback(result)
            },
            error: function(error) {
                console.warn(error)
            }
        })
    }

    function print(result) {
        console.log(result)
    }

    makeCall("https://jsonplaceholder.typicode.com/users", print)
});
