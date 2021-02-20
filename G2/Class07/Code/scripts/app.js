//call stack - LIFO
function sayHi() {
    console.log("Hi!");
};
function greeting() {
    console.log("This is a greeting!");
    sayHi();
    console.log("Our second greeting!");
}
greeting();

$(document).ready(function () {
    $("#myInput").focus(function () {
        console.log("Focus on my Input");
    });
    $("#myInput").blur(function () {
        console.log("Blur on my Input");
    });
    $("#myButton").click(function () {
        console.log("Click on my button");
    });
});

console.log("===CALLBACK===");
function calculate(callBackFn, num1, num2) {
    console.log("Doing a calculation...");
    return callBackFn(num1, num2);
}

let result = calculate((x, y) => x + y, 2, 5);
console.log(result);

console.log("===synchronous===");
function firstGreeting() {
    console.log("First greeting");
}
function secondGreeting() {
    console.log("Second greeting");
}
firstGreeting();
secondGreeting();

//when trying the ajax call you can comment from here
 console.log("===one fn has timeout===");
function firstFunction() {
    setTimeout(() => console.log("First"), 5000);
}
function secondFunction() {
    console.log("Second");
}
firstFunction();
secondFunction();

console.log("===solution===");
function first(callbackFn) {
    setTimeout(() => {
        console.log("F");
        callbackFn();
    }, 7000);
};
function second(){
    console.log("S");
};
first(second); 

//you can comment to here 


/* $(document).ready(function(){
    function makeCall(url){

        $.ajax({
            url:url,
            success: function(response){
                console.log("The request succeeded!");
                return response;
            },
            error: function(response){
                console.log("The request failed!");
                return response;
            }
        })

    };

    function print(message){
        console.log(message);
    }

    print(makeCall("https://swapi.dev/api/people/1/"));
}); */

$(document).ready(function () {
    function makeCall(url, callBack, callBackPrint) {
        $.ajax({
            url:url,
            success: function(response){
                debugger
                console.log("The request succeeded!");
                //print(response, printMessage);
                callBack(response, callBackPrint);
            },
            error:  function(response){
                console.log("The request failed!");
                callBack(response);
            }
        })
    }

    function print(result, callBack){
        debugger;
        console.log(result);
        //callBack = printMessage
        callBack();
    }

    function printMessage(){
        debugger;
        console.log("The END!");
    }

    makeCall("https://swapi.dev/api/people/1/", print, printMessage);

})