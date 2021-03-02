// Objects can hold two types of data:
// - properties
// - methods


// let firstName = "Goce";
// console.log(firstName.toUpperCase());
// let lastName = new String("Kabov");
// console.log(lastName.startsWith("ka"));
// console.log(typeof lastName);


// const midleName = "Midle";
// let midleName1 = "Midle1"
// midleName = "Kabov1";
// console.log(lastName)

// console.log(typeof window);
// console.log(typeof document);
// console.log(typeof []);
// console.log(typeof console);
// console.log(typeof console.log);

// console.log("GOCE");
// alert("GOCE");
// console.log(document);

// function sayHi(name) {
//     console.log(`Hi ${name}`);
// }
// window.sayHi("Gordon");

// var something = "something";
// console.log(window.something)

// literal notation

let person = {
    firstName: "Gordon",
    lastName: "Jovanovski",
    sayHi: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};

// person.sayHi();

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHi = function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let person1 = new Person("Goce", "Kabov"); // {firstName:"Goce", lastName:"Kabov", sayHi: function()}
console.log(person1.firstName);
person1.sayHi()
let person2 = new Person("John", "Doe");
let person3 = new Person("Jane", "Doe");
let person4 = new Person("Bob", "Bobsky");


// console.log(this);
function sayHello(name) {
    console.log(this, name);
}

// sayHello("Nikola");

// let dog = {
//     kind: this,
//     sayHi: function() {
//         console.log(this, "from the method")
//     }
// };

// dog.sayHi();

// DESTRUCTURING FOR OBJECTS


let cat = {
    name: "Kitty",
    color: "white",
    age: 3,
    address: {
        street: undefined,
        number: 55
    }
};

// let catName = cat.name;
// let catColor = cat.color;
// let catStreet = cat.address.street;
// let catAddressNumber = cat.address.number;

let { 
    name: catName,
    color: catColor,
    address: { 
        street: catStreet = "KITTY STREET",
        number: catAddressNumber
    }
} = cat;

// console.log(catName, catColor, catStreet, catAddressNumber);

// Default values

// function sayHi1(name = "John") {
//     console.log(name)
// }
// sayHi1("bob")




//DESTRUCTURING FOR ARRAYS

let array = [1,2,3,4,5,6,7,8,9];
let fourthNumber = array[3];
let [firstNumber, secondNumber, thirdNumber, ...unusedNumbers] = array;
// console.log(firstNumber, secondNumber, thirdNumber);
// console.log(unusedNumbers)

let array1 = [2,3,4,5]
let array2 = [...array1]

// function sumThreeNumbers(numbers) {
//     console.log(numbers)
//     let result = numbers.reduce((acc, curr) => acc += curr, 0)
//     console.log(result);
// }

function sumThreeNumbers(number1, number2, number3) {
    let result = number1 + number2 + number3
    console.log(result);
}

sumThreeNumbers(...array1)



let person100 = {
    firstName: "JOHN",
    lastName: "DOE",
    age: 55
}

let { firstName, ...restPropsVariable } = person100;
console.log(firstName, restPropsVariable)