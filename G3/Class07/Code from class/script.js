//setTimeout
//function that will be executed after some time passes

//anonymous function
//setTimeout(function(){console.log("This is some dummy text")},2000);
//arrow function
//setTimeout(()=> console.log("This is some dummy text part 2"),2000);


//setInterval
//anonymous function
//setInterval(function(){console.log("This is some dummy text")},2000);

// some code combined with setTimeout function
let someSimpleOutput=()=> console.log("This executes after 2 secounds");

//console.log("First log");
//setTimeout(someSimpleOutput,2000);
//console.log("Last log");

//callback functions
//functions that are executed inside of other functions
//simple callback function

//callback as parameter(place for callback function)
function calculate(callback,number1,number2){
    console.log("calculating...");

    return callback(number1,number2);//calling the callback function
}

//let result = calculate((x,y) => x+y, 10, 5);//assigning arrow function for callback
//console.log(result);

function calculateDifference(callback,number1,number2){
    console.log("Calculating difference");

    return callback(number1,number2);
}
//example for callback function with difference between two numbers
//let resultDifference = calculateDifference((number1,number2)=> number1 - number2, 10, 5);

//console.log(resultDifference);


//calling functions in order
// function first(){
//     console.log("First thing");
// }

// function second(){
//     console.log("Second thing");
// }

// first();
// second();

//calling two function(the first is delayed)
function first(){
    setTimeout(()=> console.log("First function"),1000);
}

function second(){
    console.log("Second function");
}

//first();
//second();

//calling two functions(the first is delayed, after the first is executed we get the result from the second)

function firstCall(callback){
    setTimeout(()=>{
        console.log("First function");
        callback();
    },1000);
}

function secondCall(){
    console.log("Second function");
}

//firstCall(secondCall);

//ajax call
function someDummyAjaxCall(url){
    $.ajax({
        url:url,
        success:function(response){
            console.log("The request is successfull");
            return response;
        },
        error:function(response){
            console.log("The request failed");
            return response;
        }
    });
}

function print(result){
    console.log(result);
}

//print(someDummyAjaxCall("https://swapi.dev/api/people/1/"));

//ajax call with callback function
function ajaxCallWithCallbackFunction(url,callback){
    $.ajax({
        url:url,
        success:function(response){
            console.log("The request is successfull");
            callback(response);
        },
        error:function(response){
            console.log("The request is not successfull(failed)!!!");
            callback(response);
        }
    });
}

function printResult(result){
    console.log(result);
}

//ajaxCallWithCallbackFunction("https://swapi.dev/api/people/1/", printResult);

//example with setInterval(calling function on some time interval)
let apiKey = "74e59f6374abe0d9b758877616ae444c";//api key for url
let city = "skopje";//argument for the url(the city that we want to show the weather)
let apiUrl="https://api.openweathermap.org/data/2.5/forecast"//the url from the api that we want to get data

let weatherData = function(){
    $.ajax({
        url:`${apiUrl}?q=${city}&units=metric&APPID=${apiKey}`,
        success:function(response){
            console.log("Successfull request");
            console.log(response);
        },
        error:function(response){
            console.log("Failed request");
            console.log(response);
        }
    });
}

let intervalData = setInterval(weatherData,10000);

setTimeout(()=>{
    clearInterval(intervalData);
},42000);

//how we are building url with query parameters
//url from server(example.com)
//parameters for the url(city,street,name,apiKey)
//making call to the url with query parameters
// www.example.com?apiKey=112233&city=skopje&street=partizanska&name=trpe
// function getInfo(apiKey,city,street,name)
//http://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid={API key}