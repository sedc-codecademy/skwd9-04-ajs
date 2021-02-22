let numbers = [1,2,3,4,5]

// Impure function  ( using a variable from the outside )
let one = 1
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + one)
    }
    return result;
}

// Impure function ( mutating data from the outside )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] += 1
    }
    return numbers;
}

// Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
		result.push(numbers[i] + 1)
        document.getElementById("result") += numbers[i] + " ";
    }
    return result;
}

// Pure function
function increaseByOne(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] + 1)
    }
    return result;
}