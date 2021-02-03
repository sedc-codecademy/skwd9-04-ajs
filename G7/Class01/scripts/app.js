// 1. Create a function which accepts an array of numbers as parameter and inserts dashes (-) between EACH two EVEN numbers.
// Example: When called with 0,2,5,4,6,8 the output should be 0-254-6-8.

// Solution 1:
// let numbers = [0, 2, 5, 4, 6, 8];

// function mapEvenNumbersWithDash(nums) {
//     let result = '';

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             if (nums[i] % 2 === 0 && nums[j] % 2 === 0) {
//                 result += nums[i] + '-';
//             } else {
//                 result += nums[i];
//             }
//             break;
//         }
//     }
//     return result;
// }

// console.log(mapEvenNumbersWithDash(numbers));

// Solution 2:

let numbers = [0, 2, 5, 4, 6, 8];

// let numbers2 = [0, 3, 9, 1, 6, 9, 1, 5, 4, 6, 8];

function mapEvenNumbersWithDash(nums) {
  let result = "";

  for (let i = 0; i < nums.length; i++) {
    // CURRENT NUMBER        NEXT NUMBER
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0) {
      result += nums[i] + "-";
    } else {
      result += nums[i];
    }
  }

  return result;
}

// console.log(mapEvenNumbersWithDash(numbers));

// 2. Create a function that will find and return all numbers dividable by 7 AND 3 in a array from 1 to 100.
// If a number is ONLY dividable by 7 it should NOT be returned
// If a number is ONLY dividable by 3 it should NOT be returned
// Bonus: make the function work to any number instead of only to 100.

function getNumbers(limit) {
  let result = [];

  for (let i = 1; i <= limit; i++) {
    if (i % 7 === 0 && i % 3 === 0) {
      result.push(i);
    }
  }

  return result;
}

// console.log(getNumbers(1000))

// 3. Write a program for a vending machine that will calculate how much coins should be returned depending on the change.
// You have the following coins available: 50, 20, 10, 5 and 1
// Example: if the change is 376, the result should be [50, 50, 50, 50, 50, 50, 50, 20, 5, 1].
// Bonus: Make the program work with limited amount of coins of each value (ex. 5 - 50$ coins, 8 - 20$ coins, etc.)

// Solution 1 - without bonus

// let defaultChange = 376;
// let allAvailableCoins = [50, 20, 10, 5, 1];

// function coinsCalculator(coins, change) {
//     let result = [];

//     for (let coin of coins) {
//         while (change >= coin) {
//             change -= coin;
//             result.push(coin);
//         }
//     }

//     return result;
// }

// console.log(coinsCalculator(allAvailableCoins, defaultChange))

// Solution 2 - with bonus

// let defaultChange = 376;
// let allAvailableCoins = [
// //TYPE, AMOUNT
//   [50, 5],
//   [20, 8],
//   [10, 12],
//   [5, 45],
//   [1, 250],
// ];

function coinsCalculator(coins, change) {
  let result = [];

  //INDEX 0 === TYPE of coin
  //INDEX 1 === AMOUNT of coin

        //[50, 5]  [[],[]]
  for (let coin of coins) {
      // CHANGE IS MORE THAN COIN TYPE AND COIN AMOUNT IS MORE THAN 0 (WE HAVE COINS AVAILABLE)
      while (change >= coin[0] && coin[1] > 0) {
        change -= coin[0]; // adding the coin to the array to be returned
        coin[1]--; //one less coin available
        result.push(coin[0])
      }
  }

    //   WITH JUST FOR LOOP
    //   for (let i = 0; i < coins.length; i++) {
    //     while (change >= coins[i][0] && coins[i][1] > 0) {
    //         change -= coins[i][0]; // adding the coin to the array to be returned
    //         coins[i][1]--; //one less coin available
    //         result.push(coins[i][0])
    //       }
    //   }

  return result;
}

// console.log(coinsCalculator(allAvailableCoins, defaultChange));

// Solution 3 - with bonus

// let defaultChange = 376;
// let allAvailableCoins = [
//     { type: 50, amount: 5},
//     { type: 20, amount: 8},
//     { type: 10, amount: 12},
//     { type: 5, amount: 45},
//     { type: 1, amount: 250},
// ];

// function coinsCalculator(coins, change) {
//     let result = [];
// //  {type: amount:}  [{}, {}]
//     for (let coin of coins) {
//         while (change >= coin.type && coin.amount > 0) {
//           change -= coin.type; 
//           coin.amount--;
//           result.push(coin.type)
//         }
//     }

//     return result;
// }

// console.log(coinsCalculator(allAvailableCoins, defaultChange));


// Solution 4 - with bonus

let defaultChange = 376;
let allAvailableCoins = [
    // type: amount
    { '50': 5 },
    { '20': 8 },
    { '10': 12 },
    { '5': 45 },
    { '1': 250 },
];

function coinsCalculator(coins, change) {
    let result = [];

    for (let coin of coins) {
        for (let key in coin) {
                            // TYPE            AMOUNT
            while (change >= parseInt(key) && coin[key] > 0) {
                change -= parseInt(key); 
                coin[key]--;
                result.push(parseInt(key))
            }
        }
    }

    return result;
}

console.log(coinsCalculator(allAvailableCoins, defaultChange));

// let animal = {
//     name: 'Boem',
//     'can bark': true
// }

// console.log(animal['can bark'])