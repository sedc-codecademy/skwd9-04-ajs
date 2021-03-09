const fs = require('fs')

// console.log(fs);

let filePath = "db.txt";

module.exports = {
    addText: (text) => {
        fs.writeFileSync(filePath, text, (error) => {
            if (error)
                console.error(error);

            console.log("The file was saved");
        })
    },
    appendText: (text) => {
        fs.appendFileSync(filePath, text, (error) => {
            if (error)
                console.error(error);
            
            console.log("The file was edited");
        })
    },
    readText: () => {
        return fs.readFileSync(filePath, { encoding: "utf-8" });
    }
}