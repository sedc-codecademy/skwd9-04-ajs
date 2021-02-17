// ---- HIGHER ORDER FUNCTIONS (HOF) ----

let numbers = [10,9,8,7,6,5]

// ---- MAP ----
// exp

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
numbers.map((number, index) => {
    console.log(index)
})