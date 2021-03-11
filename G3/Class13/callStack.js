
function fibonachi(number) {
    if (number === 0 || number === 1) {
        debugger;
        return 1;
    }

    return fibonachi(number - 1) + fibonachi(number - 2);
}

// fibonachi(12);

function one() {
    console.log("one");
    debugger;
}

function two() {
    console.log("two");
    one();
}

function three() {
    console.log("three");
    two();
}

function four() {
    debugger;
    console.log("four");
    three();
}

// four();