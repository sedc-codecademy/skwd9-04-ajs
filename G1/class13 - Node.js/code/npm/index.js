const axios = require("axios")
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');

// let url = "https://jsonplaceholder.typicode.com/users";
// axios.get(url)
//     .then(response => console.log(response.data))


let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9]

let result = _.concat(arr1, arr2)
console.log(result)

for (const number of result) {
    console.log(number)
}
