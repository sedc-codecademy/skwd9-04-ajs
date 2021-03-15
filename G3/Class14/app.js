function sayHello(name) {
    console.log(`Hello ${name}`);
}

//sayHello("Trajan");
//console.log(window);

const say = require('./say');

// console.log(say);
// console.log(say.sayHello("Trajan"));
// console.log(say.sayHello("Filip"));
// console.log(say.sayBye("Trajan"));
// console.log(say.sayBye("Filip"));

const calculator = require('./calculator');
const { sum, substract } = require('./calculator');

// console.log(calculator.substract(7, 4));
// console.log(sum(5, 5));


const textService = require("./textService");

// textService.addText("Hello SEDC");
// textService.appendText("We are learning NODE.JS");

// textService.appendText(" We added more text to the file");
// for (let i = 0; i < 5; i++) {
//     textService.appendText(`\nWe are adding more text n times ${i}`);
// }

const text = textService.readText();
console.log(text);