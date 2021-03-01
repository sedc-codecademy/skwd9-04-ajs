// console.log(typeof(document));
// console.log(typeof(document.getElementById));
// console.log(typeof([]));
// console.log(typeof([].push));
// console.log(typeof(console));
// console.log(typeof(console.log));

// console.log(window);

// console.log("Natasha");
// window.console.log("Darko");

function Dog(name, color, age, food) {
    // console.log(this)
    this.name = name === undefined ? "unnamed" : name;
    this.color = color;
    this.age = age;
    this.food = food;
    this.hasOwner = false;
    this.bark = () => console.log("BARK BARK");
}

// Dog()

let dog1Template = new Dog("Sharko", "white", 2, ["polneti piperki", "bilo kakvo meso"]);
let dog2Template = new Dog();

// console.log("Dog 1 template", dog1Template);
// console.log("Dog 2 template", dog2Template);

// let object1 = {};
// let object2 = new Object();

// this keyword - pointer to the current object

// this in global scope (if we write this in the global scope, we will get the window object)
// console.log("this in global scope", this);

// this in function (if we write this in a function and call the function in our script we would also get the window object. That is because that function is still in the same execution context)
function whatIsThis() {
    console.log("this in function", this);
}

// whatIsThis();

// window.alert("Hey");

// this in object ()
let thisObject = {
    whatsThis: this
}

// console.log("this in object", thisObject.whatsThis);

// this in method inside object 
let thisObj = {
    whatsThis: this,
    whatsThisMethod: function(){ console.log(this) }
}

// console.log(thisObj.whatsThis);
// thisObj.whatsThisMethod();

function ThisTemplate(description) {
    console.log(this);
    this.description = description;
    this.whatsThis = this;
    this.whatsThisMethod = function() { console.log(this) }
}

// Call a function in our script (point to the first connection above (window))
// ThisTemplate();

// Creating new instance (point to the instance object)
// let thisTemplateObject = new ThisTemplate("Test");
// console.log(thisTemplateObject.whatsThis);
// thisTemplateObject.whatsThisMethod();

// Destructuring

// Destructuring in objects
let dog = {
    dogName: "Sharko",
    dogColor: "black",
    dogAge: 4
}

// console.log(dog.dogName);
// console.log(dog.dogColor);
// console.log(dog.dogAge);

const { dogName, dogColor, dogAge } = dog;
// console.log("Des", dogName);
// console.log("Des", dogColor);
// console.log("Des", dogAge);

const student = {
    name: "Pero Perovski",
    age: 19,
    scores: {
        JavaScript: 75,
        AdvanceJS: 95,
    }
}

// Without destructuring
function displaySummary(student) {
    console.log("Hello", student.name);
    console.log("Javascript score", student.scores.JavaScript)
    console.log("Advance Javascript score", student.scores.AdvanceJS)
    console.log("CSharp score", student.scores.CSharp)
}

// displaySummary(student);

// With destructuring
function displaySummaryDes({name, scores: { JavaScript, AdvanceJS, CSharp}}) {
    console.log("Hello", name);
    console.log("Javascript score", JavaScript)
    console.log("Advance Javascript score", AdvanceJS)
    console.log("CSharp score", CSharp)
}

// displaySummaryDes(student);

const { age } = student;
const { AdvanceJS } = student.scores;

// console.log("Destructuring student age", age);
// console.log("Destructuring student AdvanceJS score", AdvanceJS);

// Destructuring in array
const rgb = [255, 16, 9];

const [red, green, blue] = rgb;

// console.log(`The color is R: ${red}, G: ${green} and B: ${blue}`);

const color = ["#FFFFFF", [123, 12, 32], 'rgb(255, 9, 255)'];

const [hex, [redN, greenN, blueN], text] = color;

// console.log(hex, redN, greenN, blueN, text)

// Spread syntax
let numbers = [2, 3, 5];
function sumThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}

// console.log(sumThreeNumbers(...numbers));

// let newArray = numbers;
let newArray = [...numbers];

newArray.splice(1);

// numbers = newArray;

// console.log("Original array", numbers);
// console.log("New array", newArray);

let newNumbersArray = [5, 10, 15];

let combineArray = [...numbers, ...newNumbersArray];

// console.log("Combine array", combineArray);

// Object methods

let newObject = new Object();

// create

let vehicle = {
    color: "red",
    tier: 4
}

let car = Object.create(vehicle);
car.brand = "BMW";

// console.log("Vehicle", vehicle)
// console.log("Car", car);
// console.log("Car tiers number", car.tier);

// assign
let doggy = {
    isHappy: true,
    bark: () => console.log("Bark bark")
}

let toto = Object.create(doggy);
toto.name = "Toto";
toto.age = 6;

let addressInfo = {
    street: "Ulica 1",
    streetNumber: 1,
    contactPerson: "Natasha"
}

let totoChipped = Object.assign(toto, addressInfo);

// console.log("Toto chipped before update", totoChipped);

let anotherAddress = {
    street: "Ulica 2",
    streetNumber: 2,
    contactPerson: "Natasha",
    isAddressChanged: true
}

let totoChippedAfterUpdate = Object.assign({...totoChipped}, anotherAddress);

// console.log("Toto chipped after update", totoChippedAfterUpdate);

// keys
// console.log("Keys method", Object.keys(totoChippedAfterUpdate));

// values
// console.log("Values method", Object.values(totoChippedAfterUpdate));

// entries
// console.log("Entries method", Object.entries(totoChippedAfterUpdate));

// hasOwnProperty
// console.log("HasOwnProperty method", totoChippedAfterUpdate.hasOwnProperty("name"));

let person1 = {
    firstName: "Natasha",
    lastName: "Paneva"
}

let person2 = {
    firstName: "Test",
    lastName: "Test"
}

// Freeze
Object.freeze(person1);
person1["age"] = 23;
person1.firstName = "TEST";

// console.log("Is object freeze?", Object.isFrozen(person1));
// console.log("Frozen object", person1);

// Seal
Object.seal(person2);
person2["age"] = 25;

person2.firstName = "Darko"
person2.lastName = "Panchevski"

// console.log("Is sealed?", Object.isSealed(person2));
// console.log("Sealed object", person2);