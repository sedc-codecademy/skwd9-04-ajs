var myJSON=`{
    "trainer":"John Smith",
    "assistant": "John Paul",
    "students":[
        "Bob",
        "Chris",
        "Jill",
        "Greg"
    ],
    "academy":"SEDC"
}`;

// console.log(myJSON);
// let myObject = JSON.parse(myJSON);
// console.log(myObject);


//Plain JS request
document.getElementById("sendRequest")
.addEventListener("click",function(){
    let xmlRequest= new XMLHttpRequest();//creating instance from XMLHttpRequest

    xmlRequest.onload = function(){//adding logic which will be executed
        console.log("Request is sent");
        if(xmlRequest.status >= 200 && xmlRequest.status <= 300){//check if request is successfull
            console.log("Request is successfull");
            let jsonResponse=JSON.parse(xmlRequest.response);
            console.log(jsonResponse);
        }
        else{//if request is not successfull this will be executed
            console.log(xmlRequest.responseText);
        }
    }
    xmlRequest.open("GET","https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.js");//defining what type of request is and adding url
    xmlRequest.send();//sending XMLHttpRequest request to server/api
})

//jQuery Request
$(document).ready(function(){

    $("#jQueryAjaxRequest").click(function(){
    //simple jQuery Request with response printed in console
        $.ajax({
            type:"GET",//defining what type of request is(it could be GET,POST,PUT etc...)
            url:"https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json",
            //data: we are using data if we want to send some info to api (first we need to serialize the object)
            success: function(response){
            //what will happen if we have successfull request
            console.log("Request is successfull");
            let responseObject= JSON.parse(response);//converting json string to JSON Object if the response returned is not JSON Object
            console.log(responseObject);
            },
            error: function(response){
            //what will happen if we have bad  request
            console.log("Bad Request");
            }
        })
    });

    //function for showing elements on HTML with jQuery
    //function with 1 argument(only response)
    function printElements(response){
        let element=$("#astros");
        element.html("");

        for(let i=0;i<response.people.length;i++){
            element.append(`<li>${response.people[i].name}</li>`);
        }

    }
    //function with 2 arguments (html element and response from api)
    function printElementsWithTwoArguments(element,response){
        let elementDOM=$(element);
        elementDOM.html("");

        for(let i=0;i<response.people.length;i++){
            elementDOM.append(`<li>${response.people[i].name}</li>`);
        }
    }
    $("#astrosRequest").on("click",function(){
    //jQuery Request with response shown on HTML    
        $.ajax({
            type:"GET",
            url:"http://api.open-notify.org/astros.json",
            success: function(response){
                console.log(response);
                //parsing elements to HTML with VanillaJS(Pure Javascript)
                // let element= document.getElementById("astros");
                // element.innerHTML="";

                // for(let i=0;i<response.people.length;i++){
                //     element.innerHTML+=`<li>${response.people[i].name}</li>`;
                // }

                //parsing elements to HTML with jQuery
                // let elementWithJquery=$("#astros");
                // elementWithJquery.html("");
                // for(let i=0;i<response.people.length;i++){
                //     elementWithJquery.append(`<li>${response.people[i].name}</li>`);
                // }

                //calling function for printing elements with one argument(response)
                //printElements(response);

                //calling function for printing elements with 2 arguments(element name and response from api/server)
                printElementsWithTwoArguments("#astros",response);
            },
            error:function(response){
                console.log("The request has failed(Bad Request)");
            }
        })
    })
});