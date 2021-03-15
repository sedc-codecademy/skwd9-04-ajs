// requre module to work with file system
const fs = require('fs');

// file path that we will use
const filePath = "./test.txt"; // c:/sedc/data/students.txt

// create add, append and read text methods
module.exports = {
    addText: function (text) {
        fs.writeFile(filePath, text, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("The file is saved");
        })
    },
    appendText: function (text) {
        fs.appendFile(filePath, text, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("The text is added tothe file");
        });
    },
    readText: function () {
        return fs.readFileSync(filePath, { encoding: 'utf-8' });
    }
}
