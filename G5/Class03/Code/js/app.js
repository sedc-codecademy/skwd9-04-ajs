// JSON EXAMPLE

// let jsonString = `{
//     "trainer1": "Martin Panovski",
//     "trainer2": "Ivan Lazarevski",
//     "students": [
//         "Anja",
//         "Robert",
//         "Sara",
//         "Slavko"
//     ],
//     "academy": {
//         "type": "Web development",
//         "year": 2021,
//         "isActive": true
//     }
// }`;

// console.log(jsonString);

// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// jsonObject.students.push("Marko", "Nikola");
// jsonObject.trainer3 = "Dejan Jovanov";
// console.log(jsonObject);

// let jsonObjectStringified = JSON.stringify(jsonObject);
// console.log(jsonObjectStringified);



//Plain JS requests to some API

// let xhr = new XMLHttpRequest();
// xhr.onload = function () {
//     console.log('Request is sent!');
//     if(xhr.status >= 200 && xhr.status < 300){
//         console.log('Request successful!');

//         // Parse the response from JSON into JSObject
//         let parsedResponse = JSON.parse(xhr.response);

//         console.log('Response parsed from API ' + parsedResponse);
//         console.log(parsedResponse);

//         // Display each user from the response of users array
//         for (const user of parsedResponse) {
//             console.log(user.name);
//         }
//     }
//     else {
//         console.log('Something happened! ' + xhr.responseText);
//     }
// }

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.send();


// AJAX REQUESTS TO SOME API
let btnGet = document.getElementById('btnGet');
let btnGetPhotos = document.getElementById('btnGetPhotos');
let txtInput = document.getElementById('photoId');

btnGet.addEventListener('click', function() {
    console.log("Getting data from API, please wait...");
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET', // if not specified default value is GET
        success: function (response) {
            console.log(response);
            let users = response;
            for (const user of users) {
                console.log(user.name + " " + user.email);
            }
        },
        error: function(error) {
            if(error.status === 404) {
                console.log("ERROR 404. Not Found");
            }else {
                console.log("Upsss! Something went wrong!");
            }
        }
    })
});

btnGetPhotos.addEventListener('click', function() {
    console.log("Getting photos from API, please wait...");
    let photoId = txtInput.value;

    let url = "https://jsonplaceholder.typicode.com/photos";

    if(photoId) {
        url = 'https://jsonplaceholder.typicode.com/photos/' + photoId
    }
    
    $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    })
});


let data;

$.ajax({
    url: 'https://coronavirus-19-api.herokuapp.com/countries/North Macedonia',
    method: 'GET',
    async: true,
    success: function(response) {
        data = response;
        console.log(data);
    },
    error: function(error) {
        console.log(error);
    }
});
console.log(data);


// Fetch() method for making API calls and requests

fetch('https://swapi.dev/api/people/')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    for (const person of data.results) {
        console.log(person);
    }
})
.catch(error => {
    console.log(error);
})


