// JSON

// let person = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "address": {
//       "street": "John Doe's street",
//       "number": 1000
//     },
//     "age": 50,
//     "isAlcoholic": false,
//     "friends": [
//       {
//         "firstName": "Bob",
//         "lastName": "Bobsky",
//         "age": 22,
//         "isAlcoholic": true,
//         "adress": {
//           "street": "Bob Bosky's street",
//           "number": 222
//         },
//         "friends": []
//       }
//     ]
// }

// let stringifiedPerson = JSON.stringify(person);

// let convertedPerson = JSON.parse(stringifiedPerson);
// console.log(convertedPerson.firstName);

// console.log(typeof(stringifiedPerson)); // string

// console.log(stringifiedPerson.firstName); // undefined



// AJAX

let button = document.getElementById("btn");
let animalContainer = document.getElementById("animal-info");
// let counter = 1;

// button.addEventListener("click", function() {
//     // XmlHttpRequest => integrated tool in browsers for making AJAX requests
//     let ourRequest = new XMLHttpRequest();
//     ourRequest.open("GET", `https://learnwebcode.github.io/json-example/animals-${counter}.json`);
//     ourRequest.onload = function () {
//         if(ourRequest.status >= 200 && ourRequest.status < 300) {
//             // console.log(ourRequest.responseText) => JSON STRING
//             // WITH VANILA JS WE NEED TO CONVERT THE JSON STRING
//             let response = JSON.parse(ourRequest.responseText);
//             // console.log(response);
//             renderAnimalsHTML(response)
//         } else {
//             alert(`Something went wrong with the request. Recieved status: ${ourRequest.status}`)
//         }
        
//     }
//     ourRequest.send();
//     counter++;
//     if(counter > 3 ){
//         button.style.display = "none";
//     }
// })

// $(document).ready(function() {
//     let button = $("#btn");
//     let animalContainer = $("#animal-info");
//     let counter = 4;

//     button.click(function(){
//         $.ajax({
//             method: "GET",
//             url: `https://learnwebcode.github.io/json-example/animals-${counter}.json`,
//             success: function(response) {
//                 // JQUERY PARSES THE JSON STRING AUTOMATICALLY
//                 console.log(response);
//             },
//             error: function(error) {
//                 console.log(`REQUEST FAILED. STATUS: ${error.status}`)
//             }
//         })
//     })
// })


button.addEventListener("click", function() {
    fetch("https://learnwebcode.github.io/json-example/animals-1.json").then(function (response) {
        console.log(response)
        return response.json();
    }).then(function (animals) {
        renderAnimalsHTML(animals)
    })
    .catch(function(error) {
        console.log(error)
    })
})

function renderAnimalsHTML (animals) {
    for(let animal of animals) {
        let animalBasicInfo = document.createElement("p");
        animalBasicInfo.textContent = `${animal.name} is a ${animal.species}. ${animal.name} likes: `;

        for (let i = 0 ; i < animal.foods.likes.length; i++) {
            if( i === 0) {
                animalBasicInfo.textContent += animal.foods.likes[i]
            } else {
                animalBasicInfo.textContent += ` and ${animal.foods.likes[i]}`
            }
        }
        animalBasicInfo.textContent += `. ${animal.name} dislikes: `;

        for (let i = 0 ; i < animal.foods.dislikes.length; i++) {
            if( i === 0) {
                animalBasicInfo.textContent += animal.foods.dislikes[i]
            } else {
                animalBasicInfo.textContent += ` and ${animal.foods.dislikes[i]}`
            }
        }
        animalContainer.appendChild(animalBasicInfo);
    }
}


// PROMISE

// let promise = new Promise(function(resolve, reject) {
//     let sum = 1 + 1;
//     if (sum === 2) {
//         resolve("SUCCESS");
//     } else {
//         reject("ERROR");
//     }
// })
// promise.then(function (response) {
//     console.log(response)
// }).catch(function(error) {
//     console.log(error)
// })




