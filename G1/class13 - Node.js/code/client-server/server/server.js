const http = require("http");
const logger = require("./logger")

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/json");
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Request-Method", "*")
    res.setHeader("Access-Control-Allow-Methods", "OPTION, GET");
    res.setHeader("Access-Control-Allow-Headers", '*')

    //in real scenario, here some real services will be called that will return some data from the database
    let users = [
        {
            name: "Viktor",
            age: 31
        },
        {
            name: "Igor",
            age: 29
        }
    ]

    logger.log("\nthis api was pinged once")

    res.write(JSON.stringify(users))
    res.end()
})

server.listen(port, hostName, () => {

    logger.log(`server has started at ${Date.now()}`)
    console.log(`Server running on hostname: ${hostName} and listen on port: ${port}`)
})