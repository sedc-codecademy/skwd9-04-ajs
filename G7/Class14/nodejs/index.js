var helloWorld = 'Hello World';
console.log(helloWorld);
var sparky = {
    name: 'Sparky',
    age: 5,
    children: [],
    hasTail: true
};
console.log(sparky);
var Side;
(function (Side) {
    Side[Side["left"] = 0] = "left";
    Side[Side["right"] = 1] = "right";
    Side[Side["top"] = 2] = "top";
    Side[Side["bottom"] = 3] = "bottom";
})(Side || (Side = {}));
console.log(Side.left);
var id = 1;
