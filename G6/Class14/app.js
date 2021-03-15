// Node comes with interactive mode (REPL) => read-eval-print-loop
// Some of core modules that comes with NODE
//  - http (for launching servers or sending requests)
//  - https (for launching ssl encrypted servers)
//  - fs (file system)
//  - path (for creating paths)
//  - os (operative system)

const say = require("./script");
const textService = require("./textService");


textService.addText("First time I am writing in file using node");
textService.appendText("\nThis is my second line written in file using Node");
console.log(textService.readText());



// function goLive() {
//     console.log("WE ARE LIVE NOWWWWWWWW!")
// }

// goLive();

// let helloResult = say.hello("JOHN DOE");
// let byeResult = say.bye("BOB BOBSKY");
// console.log(helloResult, byeResult);

