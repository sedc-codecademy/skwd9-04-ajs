const http = require("http");


const server = http.createServer((req, res) => {
    res.write("<h1> MY FIRST NODE APP, WOWW THIS IS AWOSOME</h1>");
    res.write("<div> DESCRIPTION ABOUT MY APP </div>")
    res.end();
})

server.listen(3000);