// 123456 -> 6 5 4 3 2 1;

// 0.2 + 0.1
// console.log(0.2 + 0.1);
let number = 0;

// while (number !== 0) {
//     let lastNumber = number % 10;
//     console.log(lastNumber);
//     number = Math.floor(number / 10);
// }


// do {
//     let lastNumber = number % 10;
//     console.log(lastNumber);
//     number = Math.floor(number / 10);
// } while (number !== 0);

// for (let i = 100; i > 0; i-=2) {
//     console.log(i);
    
//     // for (let j = 0; j < 10; j++) {

//     // }
// }

let arr = ["Mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
}

for (let element of arr) {
    console.log(element);
}

console.log(arr);

for (let element in arr) {
    console.log(element);
}