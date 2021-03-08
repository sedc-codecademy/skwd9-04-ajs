// console.log("Hello G4");

const say = require("./say");

// console.log(say);

// console.log(say.sayHello("Natasha"));
// console.log(say.sayBye("Darko"));
// console.log(say.sum(1, 2)); // TypeError: say.sum is not a function

const textService = require("./textService");

// console.log(textService);

// textService.addText(text) will add the text if the file is empty. In case there is content it will be overwritten by the text we send as argument
textService.addText("Hello G4, this text will be added in db.txt");
textService.addText("Hello G4, this text will be added in db.txt, but it will overwrite the last one.");

textService.appendText(" This text will be appended.");
textService.appendText("\nMORE TEXT!");

console.log(textService.readText());