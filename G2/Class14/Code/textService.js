const fs = require("fs");
const fileName = "testFile.txt";
const jsonFile = "animals.json";

module.exports = {
    writeFile: function (text) {
        //creates a file with the content given as second argument
        //if the files exists, it overwrites it
        fs.writeFile(fileName, text, function (param) {
            if (param) {
                console.log(`Error: ${param}`);
                return;
            }
            console.log("The file was saved successfully!");
        })
    },
    appendFile: function (text) {
        //appends [text] at the end of the file on path [fileName]
        fs.appendFile(fileName, text, function (param) {
            if (param) {
                console.log(`Error: ${param}`);
                return;
            }
            console.log("The file was saved successfully!");
        })
    },
    readText: function(){
        //reads the content of the file [fileName]
        return fs.readFileSync(fileName, {encoding: 'utf-8'});
    },
    readAndParseJsonFile: function(){
        let content = fs.readFileSync(jsonFile, {encoding: 'utf-8'});
        console.log(content);
        return JSON.parse(content);
    }
}