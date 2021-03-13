const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

let counter = 0;

let testObj = {
    name: "Trajan",
    lastName: "Stevkovksi",
    age: 33,
    canSing: false
}

const server = http.createServer((req, res) => {
    counter++;
    console.log("Request is received " + counter);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
    res.end(JSON.stringify(testObj));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});