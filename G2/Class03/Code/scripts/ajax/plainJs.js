//plain JS
document.getElementById('plainJsRequest').addEventListener("click", function(){
    //response has content type text plain
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status < 300 && xhr.readyState == 4){ 
            console.log(`XHR response ${xhr.response}`);
            let jsObject = JSON.parse(xhr.response);
            console.log(`XHR response object:`);
            console.log(jsObject);
        }
    }

    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"); // open connection
    xhr.send(); //send HTTP request
    
    //response has content type application json
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){
        if(xhr2.status>=200 && xhr2.status < 300 && xhr2.readyState == 4){ 
            console.log(`XHR 2 response ${xhr2.response}`);
            let jsObject = JSON.parse(xhr2.response); // xhr2.response is still json string
            console.log(`XHR 2 response object:`);
            console.log(jsObject);
        }
    }

    xhr2.open("GET", "http://api.open-notify.org/astros.json"); // open connection
    xhr2.send(); //send HTTP request
});

//FETCH API
document.getElementById("fetchBtn").addEventListener("click", function(){
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json") //returns promise
    .then(function(response){
        //success
       console.log(response);
       //response has method json that returns promise
       response.json().then(
           function(data){
               //data is parsed object
               console.log(data);
               for(let student of data.students){
                   console.log(student);
               }
           }
       )
    })
    .catch(function(error){
        //error
    });
});

document.getElementById("fetchAstronautsBtn").addEventListener("click", function(){
    fetch("http://api.open-notify.org/astros.json") //returns promise
    .then(function(response){
        //success
       console.log(response);
       //response has method json that returns promise
       response.json().then(
           function(data){
               //data is parsed object
             console.log(data);
             for(let person of data.people){
                 console.log(person);
             }
           }
       )
    })
    .catch(function(error){
        //error
    });
});