// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

let numbers = []
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
        numbers.push(i);
    }
}
console.log(numbers);

let arrayEvenDivBy4 = [];
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0 && i % 4 === 0) {
        arrayEvenDivBy4.push(i);
    }
}
console.log(arrayEvenDivBy4);

let thirdArray = [];
for (let m = 1; m <= 1000; m++) {
    if (m % 10 === 1) {
        thirdArray.push(m);
    }
}
console.log(thirdArray);


// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS
// Create a function that cleans undefined, null, NaN and "" and leaves all other values
let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleaning(test) {
    for (let i = 0; i < test.length; i++) {
        if (typeof test[i] === "string" && test[i] !== '') {
            test.splice(i, 1);
        }
    }
    return test;
}
//console.log(cleaning(test));


function cleanArrayOfValues(array) {
    let newArray = [];
    for (let item of array) {
        if (typeof (item) === 'string' && item !== "") {
            newArray.push(item);
        }
    }
    return newArray;
}
let testCleared = cleanArrayOfValues(test);
console.log(testCleared);

function removeAllButNumbers(inputArr) {
    let newArray = [];
    for (let i of inputArr) {
        if (typeof i === 'number' && !Number.isNaN(i)) {
            newArray.push(i);
        }
    }
    return newArray;
}
console.log(removeAllButNumbers(test));

function removeAllButNumbersV2(inputArr) {
    let parsedArray = [];
    for (let i = 1; i < inputArr.length; i++) {
        if (typeof inputArr[i] === 'string' && inputArr[i] !== '') {
            parsedArray.push(inputArr[i]);
        }
    }
    return parsedArray;
}
console.log(removeAllButNumbersV2(test));

function removeFalsyValues(inputArr) {
    let parsedArray = [];
    for (let element of inputArr) {
        // 12 -> false
        // "" -> true - true
        // false -> true - false
        if (!element && typeof element !== 'boolean') {
            continue;
        }
        parsedArray.push(element);
    }
    return parsedArray;
}

console.log(removeFalsyValues(test));