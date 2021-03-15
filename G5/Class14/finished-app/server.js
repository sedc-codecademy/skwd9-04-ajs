const http = require('http');
const textService = require('./textService');

/*
Every API is based on CRUD
Create
Read
Update
Delete
*/
const server = http.createServer((req, res) => {
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*'); // This means that ALL sources are fine.
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    res.setHeader('Access-Control-Max-Age', 2592000);
    /*
    Every server works the same. The idea is that a server stays active at all
    times and it listens to requests. (req)
    As soon as a request arrives, and the server listens to it,
    the code enters this block and from here, we can decide what to do with
    the request, and how to respond to it.
    */

    /* 
    Every request has several important properties.
    Two of the most important properties are the METHOD (GET, POST, PUT, DELETE)
    and the URL (/posts, /users etc)

    Using these properties we can decide the logic of the API.
    In our example, when the server listens to a GET request on http://localhost:8080/posts
    We set up a block of code that will use the Text Service to retrieve data from the Database (db.json)
    and return that data to the browser (or wherever the request was made from)
    using res.write(data);
    
    The request must be ended, otherwise it will stay open until it is timed-out.
    We end a request by using req.end();
    */
    const method = req.method;
    const url = req.url;
    console.log(method, url);

    if(url === '/posts') {
        if(method === 'GET') {
            /* 
            Here, we reuse the Text Service module that we wrote on our last class
            In order to retrieve data from our db.json file.
            Do keep in mind that the request does NOT reach the file.
            Rather, the request reaches this block of code, 
            and within the code block, we retrieve the data from  the database
            and return it to the front end.
            */
            const data = textService.readDataFromDb('db.json');
            res.write(data); // This is how you return data to the front end.
            res.end();
        }
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log('Server active at http://localhost:8080');
});

