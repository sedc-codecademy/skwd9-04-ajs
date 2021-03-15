const fs = require('fs');

// Add Text To File
const addText = (filePath, text) => {
    if(!text) {
        console.log('Please enter valid text!');
        return;
    }
    // fs.WriteFileSync() has three parameters
    // First Param is the path to the file we want to write in
    // Second Param is the data (text) that we want to write in the file
    // Third parameter is a callback function that will execute once the file write is completed
    // Callback function takes a parameter, error
    fs.writeFileSync(filePath, text, (err) => {
        if(err) {
            return console.log(err);
        } 
            console.log('The file was saved!');    
    });
};
// Append Text To File
const appendText = (filePath, text) => {
    if(!text) {
        console.log('Please enter valid text!');
        return;
    };

    fs.appendFileSync(filePath, text, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Data sucessfully appended.');
        }
    });

}
// Read Text
const readText = (filePath) => {
    const textFromFile = fs.readFileSync(filePath, {encoding: 'utf-8'});
    return textFromFile;
};

const textService = { 
    addTextToFile: addText,
    appendTextToFile: appendText,
    readTextFromFile: readText
};

module.exports = textService;
