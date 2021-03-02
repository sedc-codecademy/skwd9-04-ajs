//global
console.log(this); //window

console.log("===inside a function===");
function greeting(){
    console.log("Hello from:");
    console.log(this); //window
}
greeting(); //window.greeting()

console.log("===inside an object===");
let someObject = {
    someProperty : this //window
}
console.log(someObject.someProperty);

console.log("===inside an object method===");
let anotherObject = {
    anotherProperty : this, //window
    someMethod: function(){
        console.log(this); //anotherObject
    }
}
console.log(anotherObject.anotherProperty);
anotherObject.someMethod();

console.log("===constructor functions===");
function SomeTemplate(someString){
   console.log(this);
   this.description = someString;
   this.exampleMethod = function(){
       console.log("inside the method");
       console.log(this);
   }
}
//use as normal function
SomeTemplate(); //window
let instance = new SomeTemplate("some text"); //object instance
console.log(instance.description);
instance.exampleMethod();
