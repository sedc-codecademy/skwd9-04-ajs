//Object Destructuring

let person = {
    personName: "Viktor",
    personSurname: "Jakovlev",
    personAge: 31,
    // isLazy: false
}

// without destructuring
let namePerson = person.personName
let lastNamePerson = person.personSurname
let agePerson = person.personAge

// let {personName, personSurname, personAge} = person

// console.log(personName)
// console.log(personSurname)
// console.log(personAge)

//case sensitive
// let {personName, personAge} = person

// console.log(personName)
// console.log(personAge)

//desturcturing with custom names
// let {personName: name, personAge: age} = person

// console.log(name)
// console.log(age)

//desturcturing with default values
let {personName, personAge, isLazy = true} = person

console.log(isLazy)

//Array Destructuring

let hobbies = ["Reading", "Gaming", "Hiking"]

// without array destructuring
let hobby1 = hobbies[0]
let hobby2 = hobbies[1]

let [hobby01, hobby02] = hobbies

console.log(hobby01)
console.log(hobby02)

let color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];

//destructuring to a nested arrays
let [one, [two, three, four], five] = color
console.log(one, two, three, four, five)

// spread operator
let array1 = [1,2,3,4,5]
let coptOfArray1 = [...array1]

let arrayOne = [1,2,3]
let arrayTwo = [5,6]

let fullArray = [...arrayTwo, 4, ...arrayOne]

console.log(fullArray)


let numbers = [1,2,3]

function sumThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3
}

console.log(sumThreeNumbers(...numbers))

//Object Methods

let dog = {
    isHappy: true,
    bark: function() {
        console.log("WOOF")
    }
}

// Object.create()
// Create is a method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument.
let majlo = Object.create(dog)
majlo.name = "Majlo"
majlo.breed = "Husky"

console.log(majlo.isHappy)
console.log(majlo.name)
console.log(dog.name)

// Object.assign()
// Assign is a method that can merge two objects in to one. It accepts two objects and it tries to merge the second object in to the first one.

let addressInfo = {
    street: "Dog Street",
    streetNumber: "24a",
    contactOwner: 123456
}

let majloChip = Object.assign(majlo, addressInfo)

console.log(majloChip)

let anotherAddress = {
    street: "Other Street",
    streetNumber: "22",
    contactOwner: 54321
}

// let majloChipUpdated = Object.assign(majloChip, anotherAddress)
// console.log(majloChipUpdated)

// Object.keys(), Object.values(), Object.entries()
// all of these methods returns an array

// all property names in an array
let majloKeys = Object.keys(majlo)
console.log(majloKeys)

// all values of properties in an array
let majloValues = Object.values(majlo)
console.log(majloValues)

// array of smaller arrays with two elements, one is the property and the other is the value
let majloEntries = Object.entries(majlo)
console.log(majloEntries)

// Dynamically creating properties
let newDog = {}
let nameProperty = "dogName";
newDog[nameProperty] = "Majlo";

newDog["owner"] = "Viktor";

console.log(newDog)

// Object.freeze(), Object.seal()

// Object.freeze completely locks the object.
// We cannot add new properties or change the existing ones.

Object.freeze(majlo)
majlo.newProperty = "new value"
majlo.name = "Rocky"

console.log(majlo.newProperty)
console.log(majlo.name)


// Object.seal() allows us to change values of existing properties, but we cannot add others

let car = {
    name: "Polo"
}

Object.seal(car)

car.name = "passat"
console.log(car.name)

car.horsePower = 240
console.log(car.horsePower)
