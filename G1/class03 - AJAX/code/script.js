// JSON parse and JSON stringify
let academy = {
    name: "SEDC Web Developer",
    trainer: "Viktor Jakovlev",
    studnts: [
        "Bob Bobsky",
        "Jon Snow",
        "Batman"
    ]
}

//console.log(academy)
let academyJson = JSON.stringify(academy)
//console.log(academyJson)
let acadmeyJsonToJSObject = JSON.parse(academyJson)
//console.log(acadmeyJsonToJSObject)

//plain Javascript AJAX request
// let request = new XMLHttpRequest();
// let method = "GET";
// let url = "https://jsonplaceholder.tyicode.com/users";

// request.open(method, url);

// request.onload = function() {
//     console.log(request.status)\
//     if (request.status >= 200 && request.status < 300) {
//         console.log(request.response)
//         console.log(typeof(request.response))
//         let parsedResult = JSON.parse(request.response)
//         console.log(parsedResult)
//         console.log(typeof(parsedResult))
//         console.log("success")
//     } else {
//         console.log("error")
//     }
// }

// request.send();

//jquery AJAX request

// ====THE BAD WAY====
// $(document).ready(function(){
//     let button = $("#get-data")
//     let display = document.getElementById("display")

//     let myObject = {}

//     button.click(function() {
//         $.ajax({
//             url: "https://swapi.dev/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("success")
//                 //console.log(typeof(response))
//                 //console.log(response)
//                 myObject = response
//                 console.log(myObject)
//             },
//             error: function(response) {
//                 console.log("error")
//                 console.log(response)
//             }
//         })

//         display.innerHTML = "dsa";
//         display.innerHTML += `
//             <p>Name: ${myObject.name}</p>
//             <p>Height: ${myObject.height}</p>
//             <p>Homeworld: ${myObject.homeworld}</p>
//         `;
//     })
// })

//====THE OK WAY====
// $(document).ready(function(){
//     let button = $("#get-data")
//     let display = document.getElementById("display")

//     button.click(function() {
//         $.ajax({
//             url: "https://swapi.dev/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("success")
//                 //console.log(typeof(response))
//                 //console.log(response)

//                 display.innerHTML = "";
//                 display.innerHTML += `
//                     <p>Name: ${response.name}</p>
//                     <p>Height: ${response.height}</p>
//                     <p>Homeworld: ${response.homeworld}</p>
//                 `;
//             },
//             error: function(response) {
//                 console.log("error")
//                 console.log(response)
//             }
//         })

//     })
// })

//====THE GOOD WAY====
// $(document).ready(function(){
//     let button = $("#get-data")
//     let display = document.getElementById("display")

//     button.click(function() {
//         $.ajax({
//             url: "https://swapi.dev/api/people/4/",
//             method: "GET",
//             success: function(response) {
//                 console.log("success")
//                 //console.log(typeof(response))
//                 //console.log(response)

//                 printInfo(display, response)
//             },
//             error: function(response) {
//                 console.log("error")
//                 console.log(response)
//             }
//         })
//     })
// })

function printInfo(element, response) {
    element.innerHTML = "";
    element.innerHTML += `
        <p>Name: ${response.name}</p>
        <p>Height: ${response.height}</p>
        <p>Homeworld: ${response.homeworld}</p>
    `;
}

//===== request with FETCH, the NEW way ======
let button = document.getElementById("get-data")
let display = document.getElementById("display")

button.addEventListener("click", function() {
    fetch("https://swapi.dev/api/people/4/")
        .then(function(response) {
            //some code (example: start loader)
            return response.json()
        })
        .then(function(response) {
            console.log(response)
            printInfo(display, response)
        })
        .catch(function(err) {
            console.warn(err)
        })
        .finally(function() {
            //some code (example: finish loader)
            console.log("WE FINALLY DID IT!")
        })
})