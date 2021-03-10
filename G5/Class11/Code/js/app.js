
// INHERITANCE in JAVASCRIPT

function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.printVehicle = function () {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`)
    }
}
let vehicle = new Vehicle(111, 'Ford', '252C', 500);
console.log(vehicle);


let wheeledVehicle = Object.create(vehicle);
console.log(wheeledVehicle.batchNo);

let arr = [1, 2, 3, 4, 5];
console.log(arr);

let numbers = new Array();
numbers.push(1, 2, 10, 20)
console.log(numbers);


// EDITING THE Prototype of the main Object in JavaScript - Avoid doing this, it is only for demo purposes

Object.prototype.sayMyName = function (name) {
    console.log('My name is ' + name)
}
let person = {
    id: 1
}

// EDITING THE Prototype of the main Array object in JavaScript - Avoid doing this, it is only for demo purposes

Array.prototype.customMap = function(callback) {
    const newArray = [];
    for (const element of this) {
        const modifiedElement = callback(element);
        newArray.push(modifiedElement);
    }
    return newArray;
}


let existingMap = numbers.map(x => x + 33);
let customMapFunc = numbers.customMap(x => x + 33);
console.log(existingMap);
console.log(customMapFunc);