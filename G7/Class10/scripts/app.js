// Objects

// Everything is an object
// console.log(typeof document);
// console.log(typeof []);
// [].push()
// console.log(typeof console)
// console.log()
// console.table()
// console.log(typeof window)

// Shorthand method calls

// console.log('hey');
// window.console.log('hey2');
// console.log(document)
// console.log(window.document)
// alert('anything')
// window.alert('anything')

// Global scope

// function sayHello(name) {
//     console.log(`Hi, ${name}`)
// }

// sayHello('Ivo');
// window.sayHello('Ivan');
// let letVariable = 'let variable';
// const constVariable = 'const variable'
// var varVariable = 'var variable'
// console.log(letVariable);
// console.log(window.letVariable);
// console.log(constVariable);
// console.log(window.constVariable);
// console.log(varVariable);
// console.log(window.varVariable);

// Constructor functions

// function Dog(name, color, age, favoriteFood, ownerName, city) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.favoriteFood = favoriteFood;
//     this.ownerName = ownerName;
//     this.hasOwner = !!ownerName;
//     this.city = city || 'Skopje';
// }

// let sparky = new Dog('Sparky', 'White', 3, ['meat', 'biscuits'], 'Peter', 'Prilep');
// console.log(sparky)

// let buck = new Dog('Buck', 'Black', 4, ['oranges']);
// console.log(buck)

// let emptyDog = new Dog();
// console.log(emptyDog)

// let badDog = new Dog(34, ['meat'], 'Spark', 'Brown', 'Bitola', 'Dragan');
// console.log(badDog)

// options for setting hasOwner
// option 1
// if (!ownerName) {
//     this.hasOwner = false;
// } else {
//     this.hasOwner = true;
// }
// option 2
// this.hasOwner = !ownerName ? false : true;
// option 3 - look up top

// options for setting city
// option 1
// !city ? 'Skopje' : city
// option 2 - look up top

// This

// console.log(this);

// function whatIsThis() {
//     console.log(this)
// }

// whatIsThis();

// let thisObj = {
//     whatsThis: this
// }

// console.log(thisObj.whatsThis)

// let thisObj = {
//     whatIsThis: this, //this is the window object
//     whatIsThisMethod: function() {
//         console.log('Inside method with Function keyword', this) // this is thisObj
//         thisObj.name1 = 'testing name';
//         this.name2 = 'testing name 2'
//     },
//     whatIsThisArrow: () => {
//         console.log('Inside an arrow', this) // referring to the window object
//     }
// }

// console.log(thisObj.whatIsThis);
// thisObj.whatIsThisMethod();
// thisObj.whatIsThisArrow();

// inside a constructor function

// function ThisTemplate(description) {
//     console.log('PLAIN Console log', this);
//     this.description = description;
//     this.whatIsThis = this;
//     this.whatIsThisFunc = function () {
//         console.log('whatIsThisFunc', this)
//         console.log('Global This', globalThis)
//     }
//     this.arrowMethod = () => {
//         console.log('ARROW', this)
//     }
// }

// let obj = new ThisTemplate('just testing');
// console.log(obj);
// obj.whatIsThisFunc();
// obj.arrowMethod();

// Destructuring

// let dog = {
//     dogName: 'Bugsy',
//     dogColor: 'black',
//     dogAge: 4
// }

// console.log(dog.dogName) // Bugsy
// console.log(dog.dogColor) // black
// console.log(dog.dogAge) // 4
// // console.log(dogName)

// let { dogName, dogColor, dogAge } = dog;

// console.log(dogName)
// console.log(dogColor)
// console.log(dogAge)

// let { ownerName } = dog;
// console.log(ownerName)

const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        javaScript: 74,
        advancedJS: 63,
        net: 85
    }
}

const otherStudent = {
    name: 'John Doe',
    age: 19,
    scores: {}
}

// function displaySummary(student) {
//     console.log('Hello', student.name);
//     console.log('Your JavaScript score is ' + (student.scores.javaScript || 0));
//     console.log('Your AdvancedJS score is ' + (student.scores.advancedJS || 0));
//     console.log('Your .Net score is ' + (student.scores.net || 0));
// }
// displaySummary(otherStudent)

// displaySummary(student);

// with destructuring
// function displaySummary({ name, scores: { javaScript = 0, advancedJS = 0, net = 0 }}) {
//     console.log('Hello', name);
//     console.log('Your JavaScript score is ' + javaScript);
//     console.log('Your AdvancedJS score is ' + advancedJS);
//     console.log('Your .Net score is ' + net);
// }

// displaySummary(student);
// displaySummary(otherStudent);

// Default value
let person = {
    name: 'John Snow',
    country: 'Canada'
}

const { name, country, age = 25 } = person;

// console.log(age)

// let person2 = {
//     age: 50,
//     name: 'Ivan Lazarevski'
// }

// const { name, age = 25 } = person2

// console.log(age);

// Array Destructuring

// const rgb = [255, 200, 100];

// const [red, green, blue] = rgb;

// let red = rgb[0]
// let green = rgb[1]
// let blue = rgb[2]

// console.log(red)
// console.log(green)
// console.log(blue)

// Nested arrays

// const colors = ['#F0F0F0', [255, 0, 125]];

// // let red = colors[1][0];

// const [hex, [ red, green, blue ]] = colors;

// console.log(green);

// Spread syntax

// let a = { name: 'Ivo' };
// let b = {...a};
// let c = a;

// let a = [ 'Ivo' ];
// let b = [...a];
// let c = a;

// console.log('A', a);
// console.log('B', b);
// console.log('C', c);

// console.log('A === B', a === b);
// console.log('A === C', a === c);
// console.log('B === C', b === c);

// let colors = ['white', 'black'];
// // colors.push('yellow')
// console.log(colors);
// colors = [...colors, 'yellow'] // push
// console.log(colors);
// colors = ['orange', ...colors] // unshift
// console.log(colors);

// let numbers = [2, 3, 5];

// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// // console.log(sumThree(2, 3, 5))

// console.log(sumThree(...numbers));

// let a = [ 'a', '1' ];
// let b = [ 'b', '2' ];

// let c = [...a, ...b]

// console.log(c);

