//CALL APPLY
let person = {
    firstName: "Marry",
    lastName: "Johnson"
};

function logFullName(){
    console.log(`${this.firstName} - ${this.lastName}`);
}
logFullName(); //window.logFullName();

//CALL
logFullName.call(person); //this => person

//APPLY
logFullName.apply(person); //this => person

//CALL vs APPLY
function logDescription(age){
    console.log(`${this.firstName} - ${this.lastName} - ${age}`);
}
logDescription.call(person, 25);
logDescription.apply(person, [25]);

//BIND
let book1 = {
    title: "Title 1",
    author: "Author 1"
};

let book2 = {
    title: "Title 2",
    author: "Author 2"
};

function logBook(){
    console.log(`${this.title} - ${this.author}`);
}

logBook.call(book1);
logBook.call(book2);

let logFirstBook = logBook.bind(book1);
logFirstBook();
logBook();
logFirstBook();
logFirstBook();
logFirstBook.bind(book2);
logFirstBook(); //nothing changes

//ES 2020
//Nullish coalescing operator

let a = false;
let b = a ? "ok" : "not ok";
console.log(b);

let c = a || "hi";
console.log(c);

let d;
let g = d || "hello";
console.log(g);

let m = null;
let n = m || "hello";
console.log(n);

let message = m ?? "Hello from SEDC";
console.log(message); //Hello from SEDC

let message2 = d ?? "Hello again";
console.log(message2);

let message3 = '' ?? "Goodbye";
console.log(message3);

let message4 = 0 ?? "Goodbye SEDC";
console.log(message4);

//OPTIONAL CHAINING OPERATOR
let first = null;
//console.log(first.name);

console.log(first?.name);

let someObject = {
    someProperty: {
        anotherProp: "Hello"
    }
}

console.log(someObject.someProperty.anotherProp);
let someObj = {

}
//console.log(someObj.someProperty.anotherProp);
console.log(someObj?.someProperty?.anotherProp);