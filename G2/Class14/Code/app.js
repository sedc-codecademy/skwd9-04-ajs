//IMPORT
const functions = require("./functions");
console.log(functions);

console.log(functions.result + 3);
console.log(functions.helloGreeting("Ana"));
console.log(functions.goodbyeGreting("Billy"));
//console.log(functions.sum(6,5));

//FILE SYSTEM
const txtService = require("./textService");
//txtService.writeFile("Hello SEDC!");
//txtService.writeFile("Hello SEDC again!");
//txtService.appendFile("Goodbye");
console.log(txtService.readText());
console.log(txtService.readAndParseJsonFile());