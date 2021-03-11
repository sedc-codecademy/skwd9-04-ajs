//we must install node-fetch npm package and then use it if we run the script
//with node.js
const fetch = require("node-fetch");
fetch("http://localhost:3000/")
.then(res=> res.json())
.then(data => console.log(data))
.catch(err => console.log(err));