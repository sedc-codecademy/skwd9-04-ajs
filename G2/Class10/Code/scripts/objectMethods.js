let dog = {
    isHappy: true,
    bark: function(){
        console.log("BARK BARK");
    }
}
console.log(dog);

//different reference from dog
let barnie = Object.create(dog);
console.log(barnie);
barnie.name = "Barnie";
barnie.age = 2;
barnie.color = "white";
console.log(barnie.color);
console.log(barnie.isHappy);
console.log(dog.color);
barnie.birthday = function(){
    console.log('Birthday!');
    this.age++;
}
console.log(barnie.age); //2
barnie.birthday();
console.log(barnie.age); //3
console.log(dog.age); //undefined

//different reference from dog and barnie
let barnieTwin = Object.create(barnie);
barnieTwin.name = "Barnie Twin";
console.log(barnie.name);
console.log(barnieTwin.name);

let addressInfo = {
    street: "Dog street",
    streetNumber: 50
};


//we are working with the same reference
//we are working with an object instance
let barnieUpdate = Object.assign(barnie, addressInfo);
//Object.assign(barnie, addressInfo);
//barnie.street = "Dog street";
//barnie.streetNumber = 50;
//barnieUpdate = barnie;
console.log(barnie.street);
console.log(barnieUpdate.street);

let anotherAddress = {
    street: "Doggie street 2",
    streetNumber: 30
}

let barnieDoubleUpdate = Object.assign(barnieUpdate, anotherAddress);
console.log(barnie.street);
console.log(barnieUpdate.street);
console.log(barnieDoubleUpdate.street);
console.log("Barnie:");
console.log(barnie.isHappy);
console.log(barnie.name);


