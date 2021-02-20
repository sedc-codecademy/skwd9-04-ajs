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

 function setIntervalFunction() {

     let interval = setInterval(() => {
         console.log("hello again")
     }, 500)

     // ---- clearInterval ----
     // will stop the setInterval execution
     document.getElementById("stop").addEventListener("click", () => {
         clearInterval(interval)
     })
 }

 setIntervalFunction()
