// [flat]
// const numbers = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

// before
// function flattenArray(array) {
//     let flatArray = [];
//     for (const item of array) {
//         if (!Array.isArray(item)) {
//             flatArray.push(item)
//         } else {
//             let innerArray = flattenArray(item);
//             for (const innerItem of innerArray) {
//                 flatArray.push(innerItem)
//             }
//         }
//     }
//     return flatArray;
// }

// console.log(numbers)
// console.log(flattenArray(numbers))

// after
// const flattenArray = numbers.flat(Infinity)
// console.log(flattenArray)

// [splice]
// Also changes the original array

// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// first param: start index / second param: how many items to be extracted
// let weekend = daysOfWeek.splice(5, 2);
// let workingDays = daysOfWeek.splice(0, 5);

// console.log(daysOfWeek)
// console.log(weekend)
// console.log(workingDays)

// [slice]
// Creates a new instance of the array, won't modify your previous (initial) array
// 
// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// first param: start index / second param: how many items
// let weekend = daysOfWeek.slice(5, 7);
// let workingDays = daysOfWeek.slice(0, 5);
// console.log(daysOfWeek)
// console.log(weekend)
// console.log(workingDays)

// const newDaysOfTheWeek = daysOfWeek.slice();
// console.log(newDaysOfTheWeek);

// [some]


// [every]

// [includes]

// [find]

// [findIndex]

// [[STRINGS]]

// [split]

// [join]

// [reverse]