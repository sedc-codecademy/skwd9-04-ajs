//Everything is an object
console.log("Document type:");
console.log(typeof (document)); //object
console.log("Get element by id:");
console.log(typeof (document.getElementById)); //function
console.log("Empty array:");
console.log(typeof ([])); //object
console.log("push:");
console.log(typeof ([].push)); //function
console.log("Console:");
console.log(typeof (console)); //object
console.log("console.log:");
console.log(typeof (console.log)); //function
console.log('Window:');
console.log(typeof (window)); //object

console.log("===Predefined js belongs to window===");
console.log("Hello"); //window.console.log("Hello");
window.console.log("Hello");

//alert("Hi"); //window.alert("Hi");
//window.alert("Hi");

console.log(window.JSON.stringify({ a: 5 })); //console.log(JSON.stringify({a: 5}));

console.log("=====Functions=====");
function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("Ana");
window.sayHello("Ana");

console.log("=== var vs let ===");
var someVariable = "Some text";
console.log(someVariable);
console.log(window.someVariable);

let someNumber = 5;
console.log(someNumber);
console.log(window.someNumber); //undefined

console.log("===CONSTRUCTORS===");
function Food(name, color) {
    this.name = name;
    this.color = color;
    this.compare = function(food){
        return this.name === food.name && this.color === food.color;
    }
}
function Dog(name, color, age, favouriteFood) {
    this.name = !name ? "unnamed" : name;
    this.color = color;
    this.age = age;
    this.hasOwner = false; //default value
    this.favouriteFood = !favouriteFood ? [new Food("Bacon", "red")]
        : favouriteFood;
    this.bark = function () {
        console.log("Bark bark");
    }
    this.doIEat = function(food){
        let flag = this.favouriteFood.filter(f=> f.name === food.name).length > 0 ;
        if(flag){
            console.log(`I eat ${food.name}`);
        }
        else{
            console.log(`I do not eat ${food.name}`);
        }
        /* let flag = this.favouriteFood.filter(f=> f.name === food.name).length > 0 ?
        console.log(`I eat ${food.name}`) :
        console.log(`I do not eat ${food.name}`); */
    }

}

let barnie = new Dog("Barnie", "brown", 3, 
    [new Food("apple", "red"), new Food("Beef", "red")]);
barnie.doIEat(new Food("apple", "red"));

let doggie = new Dog("Doggie", "black", 5, new Food("pear", "yellow"));
barnie.bark();
doggie.bark();

doggie.bark = function(){
    console.log("AF AF");
}
barnie.bark();
doggie.bark(); //overwritten

console.log("===COMPARISON===");
//reference comparison
console.log(new Food("apple", "red") === new Food("apple", "red")); //false
let areIdentical = (new Food("apple", "red")).compare(new Food("apple", "red"));
console.log(`are identical: ${areIdentical}`);


