function sayHello(name) {
    return `Hello, ${name}`
}

function sayBye(name) {
    return `Bye, ${name}`
}

const me = {
    name: "Viktor",
    lastName: "Jakovlev",
    age: 31
}

// module.exports = sayHello;

module.exports = {
    hello: sayHello,
    bye: sayBye,
    me
}