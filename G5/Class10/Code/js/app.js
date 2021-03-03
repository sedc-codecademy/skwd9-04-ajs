// objects - everything is an object in JS

// console.log(typeof (document));
// console.log(typeof (document.getElementById));
// console.log(typeof ([]));
// console.log(typeof ([].push));
// console.log(typeof (console));
// console.log(typeof (window));


// console.log('Hi there!');
// window.console.log('Hi there again!');
// window.confirm('Are you sure you want to continue?');
// window.alert('Are you sure you want to continue?');

// console.log(document);
// console.log(window.document);

function sayHi(name) {
    console.log(`Hi there ${name}`);
}

let fruit = 'Apple';

// window.sayHi('Martin');
// console.log(window.fruit);  // This will be undefined because the fruit is declared with let keyword and has its own block scope


function Dog(name, color, age, favoriteFood) {
    this.name = name === undefined ? "unnamed" : name;
    this.color = color;
    this.age = age;
    this.favoriteFood = favoriteFood;
    this.bark = function () {
        console.log(this.name + " says: Woof, woof, woof!");
    }
    this.eat = function () {
        console.log('The dog is eating.');
    }
}

let sparky = new Dog('Sparky', 'brown', 1, 'Chicken');
let bucky = new Dog();

// console.log(sparky);
// console.log(bucky);


// The 'this' keyword
// console.log(this);

function whatIsThis() {
    console.log(this);
}
// whatIsThis();


let person = {
    whatIsThis: this,
    whatIsThisMethod: function () {
        console.log(this);
    }
}

// console.log(person.whatIsThis);
// person.whatIsThisMethod();



let trainer = {
    firstName: 'Ivan',
    lastName: 'Lazarevski',
    age: 29
}

console.log(trainer.firstName);
console.log(trainer.lastName);
console.log(trainer.age);


const student = {
    fullName: 'Martin Panovski',
    age: 27,
    scores: {
        javaScript: 75,
        advancedJavaScript: 60,
        cSharp: 89
    },
    subjects: [
        {
            subjectName: 'BJS',
            numOfClasses: 10
        },
        {
            subjectName: 'AJS',
            numOfClasses: 15
        },
        {
            subjectName: 'CSharp',
            numOfClasses: 10
        }
    ]
}
const student2 = {
    fullName: 'Dejan Jovanov',
    age: 28,
    scores: {
        javaScript: 55,
        advancedJavaScript: 90,
        cSharp: 99
    },
    subjects: [
        {
            subjectName: 'BJS',
            numOfClasses: 10
        },
        {
            subjectName: 'AJS',
            numOfClasses: 15
        },
        {
            subjectName: 'CSharp',
            numOfClasses: 10
        }
    ]
}

// function displaySummary(student) {
//     console.log(`Hello ${student.fullName}`);
//     console.log(`Your JavaScript score is ${(student.scores.javaScript || 0)}`);
//     console.log(`Your AdvancedJS score is ${(student.scores.advancedJavaScript || 0)}`);
//     console.log(`Your CSharp score is ${(student.scores.cSharp || 0)}`);
//     console.log(student.subjects.filter(sub => sub.subjectName === 'AJS'));
// }
// displaySummary(student);


// The same function as previous displaySummary() but by using object destructuring 

function displaySummary({ fullName, scores: { javaScript = 0, advancedJavaScript = 0, cSharp = 0 } }) {
    console.log(`Hello ${fullName}`);
    console.log(`Your JavaScript score is ${javaScript}`);
    console.log(`Your AdvancedJS score is ${advancedJavaScript}`);
    console.log(`Your CSharp score is ${cSharp}`);
}

displaySummary(student);
displaySummary(student2);


// Destructuring 

const { firstName, lastName, age } = trainer;
const trainerAge = trainer.age;
console.log('Trainers age:' + age);
console.log(firstName);
console.log(lastName);


let ivo = {
    name: 'Ivo Kostovski',
    country: {
        countryName: 'Macedonia',
        capital: 'Skopje',
    },
    hobbies: ['Reading', 'Swimming']
}

// When destructuring an object the order of the props doesn't matter
const { country: { countryName, capital }, name,  hobbies: [ firstHobby ]} = ivo;
console.log(`${name} is from ${capital} the capital of ${countryName} and one of his hobbies is ${firstHobby}`);
// Array Destructuring
console.log(" ======================= Array Destructuring =======================");

const rgb = [255, 200, 0];

// const [red, green, blue] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

//When destructuring an array the order of the variables matter

const color = ['#FF00FF', [255, 0, 255], 'rgb(255, 0, 255)'];
const [hex, [red, green, blue]] = color;
//const [, [red, green, blue]] = color; // If I don't need to destructor the first element of the color array
console.log(hex, red, green, blue);



// Spread operator
let numbers = [1, 2, 3, 4];
console.log(...numbers);

function sumThreeNums(num1, num2, num3) {
    return num1 + num2 + num3;
}

let nums = [1, 10, 20];
console.log(sumThreeNums(...nums));



// Make another trainer object by using the spread operator so that you will reuse the same props from 'trainer' object
let trainer2 = {
    ...trainer,
    newProp: 'Test'
}
console.log(trainer2);



let arrayOfArray = [
    [1, 2, 3, 4, 5, 6]
];
console.log(arrayOfArray);
console.log(...arrayOfArray);

const [oneDimensionArr] = arrayOfArray;
console.log(oneDimensionArr);

