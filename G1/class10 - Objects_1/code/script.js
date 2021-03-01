// console.log()
// window.console.log()

// window.alert("Hello from the window object!")

// let niza = new Array(1,2,3)
// console.log(niza)

//Literal notation template
let person = {
    personName: "Viktor",
    personSurname: "Jakovlev",
    personAge: 31,
    isEmployed: true,
    printInfo: function() {
        console.log(`${personName} ${personSurname} is ${this.isEmployed === true ? "emploeyd" : "not emploeyd"}`)
    }
}

person.favouriteFood = "puding"

let vehicle = {}
vehicle.name = "Passat"
vehicle.drive = function() {
    console.log("car is driving...")
}

let animal = new Object()

// console.log(person.personName)
// person.printInfo()

//Constructor Notation Templates
function Dog(name, color, age, favouriteFood) {
    this.name = name;
    this.color = color;
    this.age = age;
    
    this.favouriteFood = 
        favouriteFood === undefined ? [new Food("Bacon", "Red"), new Food("Chicken breasts", "yellow")] : favouriteFood

    this.bark = function() {
        console.log("BARK BARK BARK")
    }

    this.eat = function(food) {
        this.favouriteFood.forEach(fav => {
            fav.name.toLowerCase() === food.name.toLowerCase() ? 
                console.log("my favourite") : 
                console.log("eww")
        })
    }
}

function Food(name, color) {
    this.name = name;
    this.color = color;
} 

let majlo = new Dog("Majlo", "black", 10, [new Food("Chicken breasts", "yellow")])

// console.log(majlo.name)
// console.log(majlo.favouriteFood)

// majlo.eat(new Food("Chicken breasts", "yellow"))
// majlo.eat(new Food("Apple", "red"))

// majlo.bark()

// this keyword

console.log(this) // points to the window object

function whatIsThis() { // points to the window object
    console.log(this)
}

whatIsThis()

let testObj = {
    whatIsThis: this,
    whatIsThisMethod: function() {
        console.log(this)
    }
}

console.log(testObj.whatIsThis)
testObj.whatIsThisMethod()
