function hello(name) {
    return "Hello there " + name;
}

const bye = (name) => "Bye " + name;

function sum(num1, num2) {
    return num1 + num2;
}

// module.exports = hello // only export hello
// module.exports = bye // only export bye

module.exports = {
    sayHello: hello,
    sayBye: bye,
    numberTest: 1
}