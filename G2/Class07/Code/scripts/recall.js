//by reference

let someObject = {
    firstProperty: "firstProperty",
    secondProperty: "secondProperty"
};

//obj is an object
//obj = someObject
function setFirstProperty(obj){
    obj.firstProperty = "First property updated!";
};
console.log(someObject.firstProperty);
setFirstProperty(someObject);
console.log(someObject.firstProperty);

let firstArray = [1, 2, 3];
let secondArray = firstArray; //by reference
secondArray[0] = 4;
console.log(firstArray[0]);

console.log("===by value===");
let a = 5;
function changeValue(val){
    val = 7;
};
console.log(`A: ${a}`);
//val = a;
changeValue(a);
console.log(`A: ${a}`);

let b = "code";
let c = b; //by value
c = "academy";
console.log(`b: ${b}`);

console.log("===CONST===");
const x = 3;
//x = 4;
console.log(x);

const ourObject = {
    firstProperty: "firstProperty",
    secondProperty: "secondProperty"
};
//ourObject = {}; - not allowed
ourObject.firstProperty = "updated first property";
console.log(ourObject.firstProperty);

const ourArray = [2, 3, 5];
ourArray.pop();
console.log(ourArray);
ourArray[0] = 7;
console.log(ourArray);
//ourArray = [6, 6, 6]; - not allowed

console.log("===sort array of strings===");
let people = ["Petar", "Dejan", "Ana"];
people.sort(); // ascending
console.log(people);

let products = ["Banana", "Mango", "Apple"];
products.sort().reverse();
console.log(products);