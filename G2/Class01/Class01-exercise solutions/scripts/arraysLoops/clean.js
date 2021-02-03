function cleanAllButStrings(inputArray){
    let result = [];
    for(let item of inputArray){
        if(typeof(item) === "string"){
            result.push(item);
        }
    }
    return result;
}
console.log(cleanAllButStrings([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]));

function cleanAllButNumbers(inputArray){
    let result = [];
    for(let item of inputArray){
        if(typeof(item) === "number"){
            result.push(item);
        }
    }
    return result;
}
console.log(cleanAllButNumbers([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]));


function cleanArray(inputArray){
    let result = [];
    for(let item of inputArray){
        if(item!== undefined && item!== null && !Number.isNaN(item) && item !== ""){
            result.push(item);
        }
    }
    return result;
}
console.log(cleanArray([true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]));

//more optimal way is to do the cleaning with one for and three arrays as in the
//first exercise