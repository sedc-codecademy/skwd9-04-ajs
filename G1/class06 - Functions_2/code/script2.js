// ---- HIGHER ORDER FUNCTIONS (HOF) ----

let numbers = [10,9,8,7,6,5]

// ---- MAP ----
// .map is used to transfor elements in a given array, it return the new array with the transfomation criteria

function multiplyByTwo(array) {
    let newArray = []

    for(const number of array) {
        newArray.push(number * 2)
    }

    return newArray
}

console.log(multiplyByTwo(numbers))

// .map with anonymosu function
// DONT USE THIS
let multipliedMapAnonymous = numbers.map(function(number) {
    return number * 3
})
console.log(multipliedMapAnonymous)

// .map with arrow function
// USE THIS!

let multipliedMapArrow = numbers.map(number => number * 4)
console.log(multipliedMapArrow)

// .map secondary parameter (optional)
numbers.map((number, index) => console.log(index))


// ---- FILTER ----
// .filter is used to filter elements in a given array, it returns NEW ARRAY with the elements that passed the condition

function largerThenThree(array) {
    let newArray = []

    for(const number of array) {
        if (number > 7) {
            newArray.push(number)
        }
    }

    return newArray
}

let filteredArray = largerThenThree(numbers)
console.log(filteredArray)

// DO NOT USE THIS
let filteredArrayAnonymous = numbers.filter(function(number) {
    return number > 7
})

console.log(filteredArrayAnonymous)

// USE THIS 
let filteredArrayArrow = numbers.filter(number => number > 7)
console.log(filteredArrayArrow)

// .filter secondary parameter (optional)
numbers.filter((number, index) => console.log(index))

// ---- REDUCE ----
// .reduce accepts a function with two parameters: the accumulator and the currnet elemenet of the array. IT RETURNS ONE SINGLE VALUE. Second parameter is optional

function sum(array) {
    let totalSum = 0

    for(const number of array) {
        totalSum += number
    }

    return totalSum
}

let sumArray = sum(numbers)
console.log("=========")
console.log(sumArray)

let sumReduce = numbers.reduce((total, number) => total += number, 5)
console.log(sumReduce)

// .filter optional parameters
// third parameter is the INDEX 
// fourth parameter is the array that is .reduce called on

numbers.reduce((accumulator, currentItem, index, array) => { 
    console.log("acumulator", accumulator)
    console.log("current item", currentItem)
    console.log("index", index)
    console.log("original array", array)
    return accumulator += currentItem
})

// ---- HOLY TRINITY ----

let finalResult = numbers
    .filter(number => number > 6)
    .map(number => number + 3)
    .reduce((sum, number) => sum += number, 10)

console.log(finalResult)


// ---- FOREACH ----
// .forEach runs a code for every element without any result in return
numbers.forEach(number => {
    console.log(number)
})

// ---- SORT ----
// .sort actually sorts the array

let randomValueArray = [3,5,2,6,1,10]

let numbersDescending = randomValueArray.sort((f, s) => s - f)
console.log(numbersDescending)

let numbersAscending = randomValueArray.sort((f, s) => f - s)
console.log(numbersAscending)


// ---- COPY OF AN ARRAY ----
let randomValueArray2 = [3,5,2,6,1,10]

let newNumbers = randomValueArray2

console.log("=========")
console.log(newNumbers)

newNumbers.sort((f, s) => s - f)

console.log(newNumbers)
console.log(randomValueArray2)

//solution 1
function copyArray(array) {
    let newArray = []
    array.forEach(el => newArray.push(el))
    return newArray
}

let randomValueArray3 = [3,5,2,6,1,10]
let randomValueArray4 = copyArray(randomValueArray3)
randomValueArray4.sort((f, s) => s - f)

console.log("=========")
console.log(randomValueArray3)
console.log(randomValueArray4)

let randomValueArray5 = [3,5,2,6,1,10]

// DO THIS FOR COPPYING AN ARRAY
let randomValueArray5copy = [...randomValueArray5]

console.log("=========")
console.log(randomValueArray5)
console.log(randomValueArray5copy)

randomValueArray5copy.sort((f, s) => s - f)

console.log("=========")
console.log(randomValueArray5)
console.log(randomValueArray5copy)
