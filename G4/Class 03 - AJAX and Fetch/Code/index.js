let json = '{"group": "G4", "academy": "SEDC", "numberOfStudents": 23}';

// console.log("Original JSON", json);

// Parse the json text file into JS object
let jsObject = JSON.parse(json);
// console.log("JS Object", jsObject);
jsObject['course'] = "JS Advance"; // Mutable type
// Form js object to json
let newJson = JSON.stringify(jsObject);
// console.log("New JSON", newJson);

// How to XML request and return response
document.getElementById("xmlHttpRequest").addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("The request succeeded", xhr.response);
            let resultParsed = JSON.parse(xhr.response);
            console.log("Parsed response result", resultParsed);
        }
        else {
            console.error("The request failed!")
            console.error(xhr.responseText);
        }
    }
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
})

// Using AJAX
// Okay way of using AJAX
let resultAjax = document.getElementById("ajaxResult");

document.getElementById("ajax").addEventListener("click", function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function(result) {
            console.log("Success", result);

            if (result !== undefined && result.length > 0) {
                for (const user of result) {
                    resultAjax.innerHTML += `<li>Id: ${user.id}, Name: ${user.name} </li>`;
                }
            }
        },
        error: function(error) {
            console.error(error);
        }
    })
})

// Using fetch()
// Good way
function printUser(response, storeResult) {
    // debugger;
    if (response !== undefined && response.length > 0) {
        for (const user of response) {
            storeResult.innerHTML += `<li>Id: ${user.id}, Name: ${user.name} </li>`;
        }
    }
    // debugger;
}

document.getElementById("fetch").addEventListener("click", function() {
    // fetch() function 
    // first parameter is the url that we send the request to
    // second parameter is optional and is for initialization of the request
    // if the second parameter is not defined then the request has method "GET" (by default)

    // If the response is ok (log the response!!!) in then convert response content to json format (like response.json())
    // After that another .then() which will do the logic with the correct response content
    // In case response failed then move to .catch() (you can make separate logic for error response)

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result => {
            let fetchResult = document.getElementById("fetchResult");
            printUser(result, fetchResult);
        })
        .catch(error => console.error(error));
});

document.getElementById("allPosts").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            let allPostsResult = document.getElementById("allPostsResult");
            for (const post of posts) {
                allPostsResult.innerHTML += `<li>Id: ${post.id}, UserId: ${post.userId}, Title: ${post.title}, Body: ${post.body}</li>`
            }
        })
        .catch(error => console.error(error));
})

document.getElementById("buttonPhotoById").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/photos/17", {
        method: "GET"
    })
    .then(response => response.json()) // THIS IS WITH ARROW FUNCTION
    .then(function(photo) { // THIS IS WITHOUT ARROW FUNCTION
        document.getElementById("photoByIdResult").innerText = `Id: ${photo.id}, Album Id: ${photo.albumId}, Title: ${photo.title}`;
    })
    .catch(error => console.error(error));
})

// Create post
function createPost(userId, title, body) {
    if (userId > 0 && title !== "" && body !== "") {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response => response.json())
        .then(function(convertedJson) {
            console.log("Successfully created post", convertedJson)
        })
        .catch(function(error) {console.error(error)});
    }
}

document.getElementById("createPostButton").addEventListener('click', function() {
    let userIdValue = document.getElementById("createPostUserId").value;
    let titleValue = document.getElementById("createPostTitle").value;
    let bodyValue = document.getElementById("createPostBody").value;

    createPost(userIdValue, titleValue, bodyValue);
})

// Delete post
document.getElementById("deleteRandomPost").addEventListener('click', function() {
    // Math.random() returns values from 0 to 0.99999999 (never 1)
    let randomNumber = Math.floor(Math.random() * 101);

    fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(deletedPost => console.log(`The randomNumber is ${randomNumber}, and will delete the post`, deletedPost))
    .catch(error => console.error(error));
})