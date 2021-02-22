async function getData() {
    console.log("Getting data");
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
    let data = await response.json(); // returns promise
    console.log("Got the data");
    console.log(data);
}

getData();


function waitSomeTime(workTime) {
    return new Promise((resolve, reject) => {
        if (workTime <= 0) {
            reject(`This time ${workTime} is too short!`);
        }
        setTimeout(() => {
            resolve(`You worked for quite a long time ${workTime}, now is ${new Date()}`);
        }, workTime);
    })
}

function greeting() {
    console.log(`Hello again ${new Date()}`);
}

async function runFunctions() {
    let workTime = await waitSomeTime(3000); //3
    console.log(workTime); //5
    greeting(); //6 
    console.log(`Everything is done at ${new Date()}`); //7
}
console.log(`Start at ${new Date()}`); //1
runFunctions(); //2
console.log("This message doesn't wait!") //4


function simpleFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("This is the first thing. Waiting for the second..");
            let a = 5;
            resolve(a);
        }, 3000);
    })
}
async function callSimpleFunction(){
    let result = await simpleFunction();
    console.log(result + 2);
}
callSimpleFunction();



