const fs = require("fs");
const file = "test.txt";

module.exports = {
  addText: function (text) {
    fs.writeFileSync(file, text, err => console.log(err));
  },
  appendText: function (text) {
    fs.appendFileSync(file, text, err => console.log(err));
  },
  readText: function () {
    return fs.readFileSync(file, { encoding: "utf-8" });
  },
};
