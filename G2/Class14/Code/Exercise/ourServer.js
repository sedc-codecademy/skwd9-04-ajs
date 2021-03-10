const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
let books = [
    {
        title:"Title 1",
        author:"Author 1"
    },
    {
        title:"Title 2",
        author:"Author 2"
    }
];
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(books));
    res.end();
});
server.listen(port, hostname, ()=>{
    console.log(`Server listening on ${hostname} - ${port}`);
});