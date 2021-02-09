// Arrays
let emptyArray = [];
let simpleArray = [4, 5];
let mixedArray = [1, "Natasha", true, "SEDC - G4", "Pero", "Blazo", 23, 2.1, undefined, , null, {}, NaN, []];

// console.log("Simple array", simpleArray);
// console.log("Mixed array", mixedArray);

// Getting element of array
let secondElementOfMixedArray = mixedArray[1];
let ninthElementOfMixedArray = mixedArray[9];
let lastElementOfMixedArray = mixedArray[mixedArray.length - 1];

// console.log("Second element of mixed array", secondElementOfMixedArray);
// console.log("Ninth element of mixed array", ninthElementOfMixedArray);
// console.log("Last element of mixed array", lastElementOfMixedArray);

// Changing elements value in array
mixedArray[9] = "Jana";

mixedArray[mixedArray.length - 1] = "Ivan";
let lastElementOfMixedArrayAfterChange = mixedArray[mixedArray.length - 1];

// console.log("Mixed array after change", mixedArray);

// Adding elements into the array by index
mixedArray[mixedArray.length + 1] = "Darko"; // Add the value at array.length + 1; The previous one will be undefined ("empty")
// console.log("Mixed array after change", mixedArray);

mixedArray[mixedArray.length] = 12; // Add element at the end of the array
// console.log("Mixed array after change", mixedArray);

// Single and multiple value/s adding at the end of the simple array
simpleArray.push(6);
simpleArray.push(7, 8);

// Single and multiple value/s adding at the beginning of the simple array
simpleArray.unshift(3); // Single
simpleArray.unshift(1, 2) // Multiple

// console.log("Simple array after adding elements and the beginning and the end of itself", simpleArray);

// Removing elements at the end of array
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();

// Removing elements at the beginning of array
mixedArray.shift();

// console.log("Mixed array after removing the elements at the beginning and the end ", mixedArray);

let indexOfElement = simpleArray.findIndex(x => x === 4); // Find index of element with value 4 (other solution is with .indexOf())
// console.log("Delete element from simple array with index", indexOfElement);
simpleArray.splice(indexOfElement, 1) // Deleting from index, onwards including index
// console.log("Simple array after deleting", simpleArray);

let newArrayAfterSlice = simpleArray.slice(indexOfElement, indexOfElement + 2); // take elements from range (indexOfElement, indexOfElement + 2) and create new array (original array is not changed)
// console.log("New array after slicing", newArrayAfterSlice);

// Loops
// while
let i = 0;

// while(i < simpleArray.length) {
//     console.log(`Element on position ${i} from simple array is ${simpleArray[i]}`);    
//     i++;
// }

// do-while
// do {
//     console.log(`Element on position ${i} from simple array is ${simpleArray[i]}`);
//     i++;
// } while(i < simpleArray.length)

// Difference between while and do-while
let falseStatement = false;

while (falseStatement) {
    console.log("Inside while loop");
}

do {
    // console.log("Inside do-while loop");
} while (falseStatement)

// while (check the condition before entering the loop) vs do-while (enter the loop, then check the condition)

// for, for-of, foreach
for(let index = 0; index < mixedArray.length; index++) {
    // console.log(`Mixed array element on index - ${index} is ${mixedArray[index]}`);
}

for (const element of mixedArray) {
    // console.log(`The element is ${element}`);
}

// Iterate through mixedArray
mixedArray.forEach((element, index) => { // It will take element value and index (if it's specified)
    // console.log(`The element on position ${index} is ${element}`)
})

// Exercises - Arrays 1
// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
let arrayOfNumbersDividedBy3 = [];
let arrayOfNumbersDividedBy4 = [];

for (let index = 1; index <= 1000; index++) {
    // if you press F8 on keyboard while debugging -> move to next debugger;
    // if you press F10 on keyboard while debugging -> move to next line
    // if you press F11 on keyboard while debugging -> move into the function/statement
    // debugger;
    if (index % 3 === 0) {
        arrayOfNumbersDividedBy3.push(index);

        if (index % 4 === 0) {
            arrayOfNumbersDividedBy4.push(index);
        }
    }
    else if (index % 4 === 0) {
        arrayOfNumbersDividedBy4.push(index);
    }
    else {
        continue;
    }
}

console.log("Array of numbers divided by 3", arrayOfNumbersDividedBy3);
console.log("Array of numbers divided by 4", arrayOfNumbersDividedBy4);