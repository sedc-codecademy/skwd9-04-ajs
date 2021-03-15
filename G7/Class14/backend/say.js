function hello(name) {
    return `Hello ${name}`;
}

function bye(name) {
    return `Bye ${name}`;
}

const animal = 'Dog'

// module.exports = animal;

// module.exports = {
//     hello: hello,
//     bye: bye,
//     animal: animal
// }

module.exports = {
    hello,
    bye,
    animal
}