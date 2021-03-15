// const hello = require('./say');
// console.log(hello('John'))

// const animal = require('./say');
// console.log(animal)

// const say = require('./say');
// console.log(say.hello('John'))
// console.log(say.bye('John'))
// console.log(say.animal)

const textService = require('./text-service');

textService.addText('This is a test.')

textService.appendText('\nThis text is appended.')

console.log(
    textService.readText()
)