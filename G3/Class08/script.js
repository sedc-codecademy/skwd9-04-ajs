// callback hell
function callbackHell() {
    setTimeout(function () {
        console.log("one");
        setTimeout(function () {
            console.log("two");
            setTimeout(function () {
                console.log("three");
                setTimeout(function () {
                    console.log("four");
                    setTimeout(function () {
                        console.log("five");
                        setTimeout(function () {
                            console.log("six");
                            setTimeout(function () {
                                console.log("last");
                            }, 1000);
                        }, 2000);
                    }, 1000);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 1000);
}

// console.log("zero");
// callbackHell();
// console.log("after callbackHell");

let delay = function (ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random() < 0.9;
            return random ? resolve() : reject("You have bad luck");
            // resolve();
        }, ms);
    });
}

console.log("zero");
delay(1000)
    .then(() => {
        console.log("one");
        return delay(1000);
    })
    .then(() => {
        console.log("two");
        return delay(1000);
    })
    .then(() => {
        console.log("three");
        return delay(1000);
    })
    .then(() => {
        console.log("four");
        return delay(1000);
    })
    .then(() => {
        console.log("five");
        return delay(1000);
    })
    .then(() => {
        console.log("six");
        return delay(1000);
    })
    .then(() => {
        console.log("last");
    })
    .catch(error => console.log(error));