const fs = require("fs");

const textFile = "test.txt"

function writeInFile(text) {
    fs.writeFileSync(textFile, text, error => {
        if(error) {
            return console.log(error);
        }
        console.log("The file was saved");
    })
}

function appendTextInFile(text) {
    fs.appendFileSync(textFile, text, error => {
        if(error) {
            return console.log(error);
        }
        console.log("The file was saved");
    })
}

function readFromTextFile() {
    return fs.readFileSync(textFile, { encoding: "utf-8" })
}

module.exports = {
    addText: writeInFile,
    appendText: appendTextInFile,
    readText: readFromTextFile
}