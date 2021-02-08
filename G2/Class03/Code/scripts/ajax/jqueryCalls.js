
$(document).ready(function(){
    //AJAX call- response has content type text/plain
    $("#getStudentsBtn").click(function(){
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            success: function(response){
                console.log(response);
                console.log(response.academy);
                let parsedObject = JSON.parse(response);
                console.log(parsedObject);
                $("#academy").text(parsedObject.academy);
                for(let student of parsedObject.students){
                    $("#students").after(`<li>${student}</li>`)
                }
            },
            error: function(response){
                console.log("The request failed!");
                console.log(response);
            }
        })
    });

    //AJAX call- response has content type application/json
    $("#getAstronautsBtn").click(function(){
        $.ajax({
            url:"http://api.open-notify.org/astros.json",
            success: function(response){
                console.log("Request successful!");
                console.log(response);
               for(let person of response.people){
                   $("#astros").after(`<li>${person.name}</li>`)
               }
            },
            error: function(response){
                console.log("The request failed!");
                console.log(response);
            }
        });
        console.log("Line of code");
    });
});


