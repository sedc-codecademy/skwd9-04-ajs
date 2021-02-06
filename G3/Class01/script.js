let obj = {
    /// props
}

let obj1 = {
    /// props
}

let obj2 = {
    /// props
}

let objConstructor = new Object();
objConstructor // prop


function Person(fName, lName, yob) {
    this.firstName = fName;
    this.lastName = lName;
    this.yearOfBirth = yob;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

    this.getAge = function () {
        let currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }
}

let person = new Person("Trajan", "Stevkovski", 1987);
// let person1 = new Person()
// console.log(`Full name of person is ${person.getFullName()} and the age is ${person.getAge()}`);

// console.log(`Full name of person is ${this.firstName[0]}.${this.lastName}`);
// console.log(`Full name of person is ${this.firstName[0]}.${this.lastName}`);
// console.log(`Full name of person is ${this.firstName[0]}.${this.lastName}`);
// console.log(`Full name of person is ${person.getFullName()}`);
// console.log(`Full name of person is ${person.getFullName()}`);
// console.log(`Full name of person is ${person.getFullName()}`);
// console.log(`Full name of person is ${person.getFullName()}`);
// console.log(`Full name of person is ${person.getFullName()}`);



let width = 300;

let shape = {
    width: 600
}

function getWidth() {
    console.log(this);
}

shape.getWidth = getWidth;

// getWidth();

// shape.getWidth();


function windowSize() { 
	let width= this.innerWidth; 
	let height = this.innerHeight; 
	return [height, width]; 
}

console.log(windowSize());

let counter = 0;
do {
    console.log(counter);
} while (counter !== 0);


let counter1 = 0;
while (counter1 <= 10000) {
    console.log(counter1);
    if (counter1 === 99) {
        break;
    }

    counter1++;
}

for (let i = 0; i < 10000; i++) {
    console.log(counter1);
    if (counter1 === 99) {
        break;
    }
}