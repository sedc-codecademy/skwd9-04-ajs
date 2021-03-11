const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");

    console.log('Server pinged');

    const obj = {
        name: 'Ivo',
        job: 'Developer'
    }

    res.write(JSON.stringify(obj));
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}, and listens on port ${port}`)
})