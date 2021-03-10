function helloGreeting(name){
    return `Hello ${name}`;
}

function goodbyeGreting(name){
    return `Goodbye ${name}`;
}

function sum(num1, num2){
    return num1 + num2;
}
let result = sum(2,3);

//EXPORT
module.exports = {
    helloGreeting: helloGreeting,
    goodbyeGreting: goodbyeGreting,
    result: result
};
//module.exports = helloGreeting;