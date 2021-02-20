// Synchronous execution
// console.log('A')
// console.log('C')
// console.log('B')

// Asynchronous execution
// console.log('A')
// setTimeout(() => console.log('B'), 1000)
// console.log('C')

// Callback function
// const callBack = () => console.log('B')

// console.log('A')
// setTimeout(callBack, 1000)
// console.log('C')

// Synchronous and asynchronous executing of functions

// const first = () => console.log('First');

// const second = () => console.log('Second');

// second();
// first();

// const first = () =>
//     setTimeout(() =>
//         console.log('Fist'), 2000);

// const second = () => console.log('Second');

// first();
// second();

//  ------

// const first = callback =>
//     setTimeout(() => {
//         console.log('Fist');
//         callback();
//     }, 3000)

// const second = () => console.log('Second');

// first(second);

const makeCall = url => fetch(url);
const logLuke = () =>
    console.log('CALLBACK LOG', luke)
let luke = null;

makeCall('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(res => {
        luke = res;
        console.log('IN THEN LOG', res);
        logLuke()
    })

console.log('GLOBAL LOG', luke)