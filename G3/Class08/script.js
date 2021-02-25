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

