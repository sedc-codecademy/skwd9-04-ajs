const fs = require('fs');
// const FILE_PATH = 'data.txt';

// Add Text To File
const addText = (filePath, text) => {
    // Three parameters
    // First Param is the path to the file we want to write in
    // Second Param is the data (text) that we want to write in the file
    // Third parameter is a callback function that will execute once the file write is completed
    // Callback function takes a parameter, error

    if(!text) {
        console.log('Please enter valid text!');
        return;
    }

    fs.writeFileSync(filePath, text, (err) => {
        if(err) {
            return console.log(err);
        } 
            console.log('The file was saved!');    
    });
};
// Append Text To File

// Read Text


const textService = { 
    addTextToFile: addText,
//  filePath: FILE_PATH
};

module.exports = textService;
