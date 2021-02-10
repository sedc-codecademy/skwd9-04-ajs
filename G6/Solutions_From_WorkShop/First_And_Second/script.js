// First Exercise Solution

var namesArray = ["Bill", "Ana", "Jospehine", "Elena"];
var namesLengthArray = [];

for (var i = 0; i < namesArray.length; i++) {
  namesLengthArray.push(namesArray[i].length);
}

console.log(namesLengthArray);

// Second Exercise Solution

var startingArray = [];
for (var i = 0; i <= 100; i++) {
  startingArray.push(i);
}

var resultArray = [];
for (var i = 0; i < startingArray.length; i++) {
    if (startingArray[i] % 7 === 0 && startingArray[i] % 3 === 0) {
        resultArray.push(startingArray[i]);
    }
}   
console.log(resultArray);