
function hello(name) {
    return `Hey there ${name}`
}

function bye(name) {
    return `bye there ${name}`
}


// module.exports = hello;
// module.exports = bye;
module.exports = {
    hello: hello,
    bye: bye
}