//properties and methods in the window object
// console.log(typeof(document));//object
// console.log(typeof(document.getElementById));//function
// console.log(typeof([]));
// console.log(typeof([].push));
// console.log(typeof(console));

// console.log("hey");//hey
// window.console.log("hey");//hey

// alert("this is some message");
// window.alert("this is some message part2");

// function SayHello(text){
//     console.log(`Hello there ${text}`);
// }

// SayHello("G3");
// window.SayHello("G3");

// let obj= new Object();//one way
// let temp={
// };
// function TempObjec(firstName,lastName....)

//Constructor notation of creating objects
function Dog(name,color,age,favoriteFood){
    this.name = name === undefined? "no name":name;
    this.color = color;
    this.age = age;
    this.hasOwner = false;
    this.favoriteFood=favoriteFood;
    this.bark = function(){
        console.log("BARK BARK BARK")
    };
    this.eat = function(){
        favoriteFood.forEach(food => console.log(food));
    }
}

let sparky = new Dog("Sparky","Brown",1,["Chicken","Bones","Dog food","Hot Dog"]);//object with values
//console.log(sparky);
sparky.hasOwner=true;
//console.log(sparky.hasOwner);
//sparky.eat();
let doggo=new Dog();//new instance of object with default value for properties if they have
//console.log(doggo);

//this keyword
//console.log(this);

//this in function
function whatIsThis(){
    console.log(this);//here this is pointing to the windows object
}
//whatIsThis();
//this in object
let thisObj={
    globalScope:this,//this points to the global scope(window object)
    someMethodInObject:function(){
        console.log(this);//this points to the object that we have created(thisObj)
    }
};

//console.log(thisObj.globalScope);
//thisObj.someMethodInObject();
//this in constructor template object
function ThisTemplate(description){
    console.log(this);
    this.description=description;
    this.someObjectFunction=function(){
        console.log(this)
    };
}

//let instanceOfObject= new ThisTemplate("this is some dummy test");
//instanceOfObject.someObjectFunction();

//desctructuring of objects
let trainer = {
    name: "Filip",
    assistent:{
        fName:"John",
        hair:"Black",
        eyes:"brown",
        // assistent:{
        //     name:"John Smith",
        //     hair:"Blue",
        //     eyes:"green"
        // }
    }
}
//console.log(trainer.assistent.hair);
const {name, assistent: { fName,hair,eyes}} = trainer;
//console.log(name);
//console.log(hair);
//console.log(eyes);
//console.log(trainer);

let person={
    personName:"John Doe",
    country:"Macedonia"
};
//destructing of object and adding new property with value
const { personName,country, age = 25 } = person;
console.log(age);

//destructuring of array
let rgb = [255,200,0];

// const [red, green, blue] = rgb;
// console.log(`R:${red}, G:${green}, B:${blue}`);

let color=["#FF00FF",[120,130,0],'rgb(122,122,122)'];

const [hex,[red,green,blue]]=color;

console.log(hex);
console.log(red);
console.log(green);

//some dummy complex object
// let person={
//     name:{
//         name:{
//             name:{
//                 name:{
//                     hair:"Black"
//                 }
//             }
//         }
//     }
// }

//spread syntax
let numbers=[1,2,3];

function sumNumbers(number1,number2,number3){
    return number1 + number2 + number3;
}
console.log(sumNumbers(...numbers));

//manipulating with objects
let dog = {
    isHappy: true,
    bark: function(){
        console.log("BARK BARK BARK");
    }
}

let reks = Object.create(dog);//creates object and this object is having the same properties and values as the dog object 
reks.age=1;
reks.color="Black";
console.log(dog);
console.log(reks);

//assign one object to another
//this is the second object
let addressInfo = {
    street:"Dog Street",
    streetNumber:24,
    contactPerson:"111222333"
}

let sumOfTwoObjects=Object.assign(dog,addressInfo);
//console.log(sumOfTwoObjects);
let reksOwner = Object.assign(reks,addressInfo);
console.log(reksOwner); 