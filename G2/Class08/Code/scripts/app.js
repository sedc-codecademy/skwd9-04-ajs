console.log("===simple timeout callback===");
let a;
function simpleFunction() {
    setTimeout(function () {
        console.log("This is the first thing. Waiting for the second..");
        a = 5;
        console.log(a + 2);
        setTimeout(function () {
            console.log("Second thing");
        }, 2000);
    }, 3000);
}

//simpleFunction();
//console.log(a+2);

console.log("===PROMISE===");
function waitSomeTime(workTime) {
    return new Promise((resolve, reject) => {
        debugger;
        if (workTime <= 0) {
            reject(`This time ${workTime} is too short!`);
        }
        /*  if(workTime == 5000){
             reject({message:"Error"});
         } */
        setTimeout(() => {
            resolve(`You worked for quite a long time ${workTime}`);
        }, workTime);
    })
}

/* function waitSomeTime2(workTime){
    if(workTime<=0){
        console.log("This time is too short!");
        return;
    }
    setTimeout(()=>{
        console.log("You worked for quite a long time");
    }, workTime);
} */

waitSomeTime(2000)
    .then(successMessage => {
        debugger;
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.log('An error occured');
        console.log(errorMessage);
    })
    .finally(() => {
        console.log("We are finsihed!");
    })

waitSomeTime(-10)
    .then(successMessage => {
        debugger;
        console.log(successMessage);
    })
    .catch(errorMessage => {
        debugger;
        console.log('An error occured');
        console.log(errorMessage);
    })
    .finally(() => {
        console.log("We are finsihed!");
    })

console.log("===AJAX===");
$(document).ready(function () {
    function getDocuments(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    console.log(response);
                    debugger;
                    resolve(JSON.parse(response));
                },
                error: function (errorResponse) {
                    reject(errorResponse);
                }
            })
        })
    };

    function printDocuments(documents){
        if(!documents || documents.length === 0){
            console.log("There are no documents in the input");
            return;
        }
        documents.forEach(doc=> console.log(`${doc.name}.${doc.type} - ${doc.size}`));
    };

    getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(docs=>{
        debugger
        printDocuments(docs);
    })
    .catch(error=>{
        console.log(error);
    })
});


