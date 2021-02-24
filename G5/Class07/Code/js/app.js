let first = () => console.log('First');
let second = () => console.log('Second');
let third = () => console.log('Third');

first();
// second();
// what if i decide to call the second function after some time
// setTimeout(second, 2000);
third();


// setTimeout - by using anonymous function
// setTimeout(function () {
//     console.log('This happens later');
// }, 4000);

// setTimeout - by using arrow function
// setTimeout(() => console.log('This happens even later than the previous'), 6000);

// setTimeout(() => console.log("AJAX CALL!"), 0);

// let i = 0;
// let myInterval = setInterval(function () {
//     console.log(i++);
// }, 1000);

// clearInterval(myInterval); //Uncomment only if you want to immediately stop the interval




// Callbacks
console.log('---------------------- Callbacks -------------------')
let firstFunc = () => setTimeout(() => console.log('First func executed'), 1000);
let secondFunc = () => console.log('Second func executed');


// firstFunc();
// secondFunc();

let secondThing = () => console.log('Second thing...');

let firstThing = function(callback) {
    setTimeout(function() {
        console.log('First thing...');
        //  secondFunc();
        callback();
    }, 2000);
    
}

// firstThing(secondFunc);
// firstThing(secondThing);
// firstThing(function() {
//     console.log('Test')
// });


// Without callback - Bad solution

// function getData(url) {
    // $.ajax({
    //     url: url,
    //     method: 'GET',
    //     success: function(data) {
    //         console.log('The request succeeded!');
    //         return data;
    //     },
    //     error: function (error) {
    //         console.log('The request failed!');
    //         return error;
    //     }
    // });
// }

function printData(data) {
    console.log(data);
}

// let dataFromApi = getData('https://jsonplaceholder.typicode.com/users'); // send to web browser api to wait on response
// printData(dataFromApi);


// With callback - better solution

function getData(url, callback) {
    $.ajax({
        url: url,
        method: 'GET',
        async: true,
        success: function(data) {
            console.log('The request succeeded!');
            callback(data);
        },
        error: function (error) {
            console.log('The request failed!');
            callback(error);
        }
    });
}

getData('https://jsonplaceholder.typicode.com/users', printData);







