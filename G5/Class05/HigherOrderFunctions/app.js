// [Higher Order Functions]
// [For Each]

// For Each will iterate an array and execute the callback function
// for every element in the array.

const cityArray = ['Skopje', 'Bitola', 'Tetovo', 'Kochani'];

// Old Way
for (const city of cityArray) {
    console.log(city);
}

// New Way
cityArray.forEach((element) => {
    console.log(element);
});

// [Map]
// Map will iterate an array, execute the callback function for every element in the array and 
// return a new array. Useful for when you want to somehow alter every single element in an array.

const unmappedNumbers = [1,2,3,4,5];
const mappedArray = [];

// Old Way
for (const number of unmappedNumbers) {
    mappedArray.push(number * 10);
}
console.log(mappedArray);

// New Way
const mappedArrayMap = unmappedNumbers.map((element) => element * 10);
console.log(mappedArrayMap);

// [Filter]
// Filter will iterate an array, check every element in the array against some condition and return a new array
// populated by the elements for which the condition returned true.

const unfilteredNumbers = [2,4,6,7,19,24,144,256,15,63,1,22];
const filteredNums = [];

// [Old Way]
for (const number of unfilteredNumbers) {
    if (number >= 50) {
        filteredNums.push(number);
    }
}
console.log(filteredNums);

// [New Way]
const filteredWithHOF = unfilteredNumbers.filter((element) => element >= 50);
console.log(filteredWithHOF);

const filteredAndMapped = unfilteredNumbers
    .filter((element) => element >= 50)
        .map((el) => el * 10);

console.log(filteredAndMapped);

// [Splice]
// The splice() method changes the contents 
//of an array by removing or replacing existing elements and/or adding new elements
const daysOfTheWeek = [
    'Monday', // [0]
    'Tuesday', // [1]
    'Wednesday', // [2]
    'Thursday', // [3]
    'Friday', // [4]
    'Saturday', // [5]
    'Sunday' // [6]
]

let weekends = daysOfTheWeek.splice(1, 2);
console.log('SPLICE');
console.log(daysOfTheWeek);
console.log(weekends);

// [Slice]
// The slice() method returns a copy of a portion of an array into a new array object 
// selected from start to end (end not included) 
// where start and end represent the index of items in that array. 
//The original array will not be modified.

const daysOfTheWeekSlice = [
    'Monday', // [0]
    'Tuesday', // [1]
    'Wednesday', // [2]
    'Thursday', // [3]
    'Friday', // [4]
    'Saturday', // [5]
    'Sunday' // [6]
]

const slicedArray = daysOfTheWeekSlice.slice(2, 4);
console.log('SLICE');
console.log(slicedArray);
console.log(daysOfTheWeekSlice);

// [Reduce]
// Reduce will iterate an array, and summarize the contents within a single output value.
// The reduce method takes a callback function as an argument that's often referred to as the reducer function.
// The reducer function takes two parameters, an accumulator and currentValue (currentValue refers to every element in the array)
// The accumulator is the value where the summarized contents of the array are stored and is eventually returned.

const unsummedArray = [1,2,3,4,5,6];
let normalSum = 0;
// Old Way
for (const element of unsummedArray) {
    normalSum += element;
}
console.log(normalSum);

// New Way
let reducedSum = unsummedArray.reduce((acc, cur) => {
    return acc + cur;
}, 10 /* Initial Value Goes Here */);
console.log(reducedSum);

// [Sort]
// Sort takes an array and orders it by some logic. If you don't provide .sort() with a callback function
// as we do on line 129 then the .sort() will use its own default logic.
// Otherwise, .sort()  takes a callback function as an input parameter and this function is often called the comparator function.
// The comparator callback function takes two input parameters, firstValue and secondValue. 
// These values represent how the array will be iterated. 


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const unsortedList = [1, 30, 4, 41, 100, 22];

// unsortedList.sort((first, second) => {
//     if(first > second) {
//         return 1;
//     }
//     if (second > first) {
//         return -1;
//     }
//     return 0;
// });

/*
Explanation:

Array before sorting: [1, 30, 4, 41, 100, 22];

Iteration 01: 
    first = 1, second = 30; 
    IF first > second, then 1(first) and 30(second) will swap their places.
    Since 1 is not greater than 30, they remain in their positions.

    Array at the end of Iteration 01: [1, 30, 4, 41, 100, 22];

Iteration 02: 
    first = 30, second = 4; 
    IF first > second, then 30(first) and 4(second) will swap their places.
    Since 30 is greater than 4, they swap their places.

    Array at the end of Iteration 02: [1, 4, 30, 41, 100, 22];

Iteration 03:
    first = 30, second = 41;
    IF first > second, then 30(first) and 41(second) will swap their places.
    Since 30 is not greater than 41, they remain in their positions.

    Array at the end of Iteration 03: [1, 4, 30, 41, 100, 22];

Iteration 04:
    first = 41, second = 100
    IF first > second, then 41(first) and 100(second) will swap their places.
    Since 41 is not greater than 100, they remain in their positions.

    Array at the end of Iteration 04: [1, 4, 30, 41, 100, 22];

Iteration 05: 
    first = 100, second = 22;
    IF first > second, then 100(first) and 22(second) will swap their places.
    Since 100 is greater than 22, they swap their places.

    Array at the end of Iteration 05: [1, 4, 30, 41, 22, 100];

    The .sort() method will keep iterating this array until there is no more swapping of places.

*/

unsortedList.sort((a, b) => a-b);
console.log(unsortedList);

// [Pass by reference & Pass by value]

// In this case, someArray and anotherArray are reference values. They do not contain the actual values of the array.
// Instead they contain the reference to the same array [1,2,3,4,5] that's located somewhere in memory.
const someArray = [1,2,3,4,5]; //0x10231023
const anotherArray = someArray;

console.log('Before Change');
console.log(someArray);
console.log(anotherArray);

someArray[0] = 'Bird';

console.log('After Change');
console.log(someArray);
console.log(anotherArray);

