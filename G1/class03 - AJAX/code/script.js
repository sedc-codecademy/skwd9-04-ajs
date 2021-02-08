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
let request = new XMLHttpRequest();
let method = "GET";
let url = "https://jsonplaceholder.tyicode.com/users";

request.open(method, url);

request.onload = function() {
    //console.log(request.status)\
    if (request.status >= 200 && request.status < 300) {
        //console.log(request.response)
        //console.log(typeof(request.response))
        let parsedResult = JSON.parse(request.response)
        console.log(parsedResult)
        ///console.log(typeof(parsedResult))
        console.log("success")
    } else {
        console.log("error")
    }
}

request.send();