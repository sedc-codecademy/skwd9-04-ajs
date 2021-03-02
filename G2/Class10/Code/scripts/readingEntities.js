let dog = {
    name: "Sparky",
    age: 3,
    isHappy: true,
    bark: function(){
        console.log("BARK BARK");
    },
    printMembers: function(){
        Object.keys(this).forEach(key => console.log(key));
    }
}
console.log("hasOwnProperty");
console.log(dog.hasOwnProperty("bark"));
//KEYS
console.log(Object.keys(dog));
dog.printMembers();
//VALUES
console.log(Object.values(dog));
dog.printValues = function(){
    Object.values(this).forEach(v => console.log(v));
}
dog.printValues();

//ENTRIES
console.log(Object.entries(dog));
Object.entries(dog)[5][1]();

//ASSIGN
let someObject = {};
//someObject.someProperty ="something";
someObject["someProperty"] = "something";
console.log(someObject["someProperty"]);

//FREEZE - can't change values or structure
let barnie = {
    name: "Barnie",
    friend: "Sparky"
}
Object.freeze(barnie);
barnie.friend = "Amy";
console.log(barnie.friend);
barnie.age = 10;
console.log(barnie.age);

//SEAL - can't change structure
let doggie = {
    name: "Doggie",
    friend: "Annie"
}
Object.seal(doggie);
doggie.friend = "Sparky";
console.log(doggie.friend );
doggie.age = 10;
console.log(doggie.age);