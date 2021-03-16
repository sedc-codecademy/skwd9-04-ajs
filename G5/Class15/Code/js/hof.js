let fruits = ['apple', 'orange', 'banana', 'pineapple', 'kiwi'];

// console.log(fruits);


function printItems(array) {
    console.log('From regular function');
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printItems(fruits);


let printItemsAnonymous = function (array) {
    console.log('From anonymous function');
    for (const item of array) {
        console.log(item);
    }
}
printItemsAnonymous(fruits);


let printItemsArrow = array => {
    console.log('From arrow function');
    for (const item of array) {
        console.log(item)
    }
}
printItemsArrow(fruits);



// const calculator = (callback, x, y) => callback(x, y)
// const sum = (x, y) => x + y;
// calculator(sum, 10, 20);


// forEach()

const names = ['Martin', 'Ivan', 'Ivo', 'Dejan'];

const printElements = arr => arr.forEach(el => console.log(el));
printElements(names);



// map()

const changeElements = arr => arr.map(el => `${el} - Trainer`);
const changedNames = changeElements(names);
printElements(changedNames);


// filter()
const namesFiltered = names.filter(x => x.length >= 4);
const filteredNames = names.filter(x => x.startsWith('M') || x.startsWith('I'));
printElements(namesFiltered);
printElements(filteredNames);


const filteredNameByFirstLetter = names
                                .map(el => el.toLowerCase())
                                .filter(el => el.startsWith('I'));
console.log(filteredNameByFirstLetter);


// sort()
const grades = [10, 9, 6, 6, 8, 8, 6, 7];

let isPassed = grade => {
    if(grade > 8) {
        return `Passed: ${grade}`
     }else {
        return `Failed: ${grade}`
     }
}


const sortedGrades = grades
                    .sort((g1, g2) => g1 - g2)
                    .filter(grade => grade > 7.5)
                    .map(isPassed);
console.log(sortedGrades);


// reduce()

const reducedGrades = grades.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(reducedGrades);



// flat()

let nestedArray = [1, 2, 3, [4, 5, 6], 7, 8];
let regularArray = nestedArray.flat();
console.log(regularArray);


let complexArray = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11], 12, 13, [14, 15, 16]]];
let simpleArray = complexArray.flat(2);
console.log(simpleArray);


let complexArr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];
let simpleArr = complexArr.flat(Infinity);
console.log(simpleArr);
