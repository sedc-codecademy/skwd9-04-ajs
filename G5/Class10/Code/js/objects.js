// let person = new Object() // The main Object() constructor in JS


// Create method 

let dog = {
    isHappy: true,
    bark: function() {
        console.log('BARK BARK!!!')
    }
}

let barnie = Object.create(dog);
console.log(barnie);
barnie.name = 'Barnie';
barnie.color = 'white',
barnie.age = 2;
console.log(barnie);

let barnieTwinBrother = Object.create(barnie);
barnieTwinBrother.name = 'Spyke';
console.log(barnieTwinBrother);



// Assign method

let addressInfo = {
    street: 'Dogge Street',
    streetNumber: 24,
    contactPerson: '070222111'
}

let barnieChip = Object.assign(barnie, addressInfo);
console.log(barnieChip);

let anotherAddress = {
    street: 'Other Street',
    streetNumber: 12,
    contactPerson: '072222333'
}

let barnieChipUpdate = Object.assign(barnieChip, anotherAddress);
console.log(barnieChipUpdate);

let barnieChipUpdateReversed = Object.assign(anotherAddress, barnieChip);
console.log(barnieChipUpdateReversed);


// KEYS and VALUES

let anotherDog = {
    name: 'Bucky',
    age: 1,
    bark: function() {
        console.log('BARK!!!');
    },
    printProperties: function() {
        Object.keys(this).forEach(key => console.log('PropName:' + key));
    },
    printValues: function() {
        Object.values(this).forEach(val => console.log('PropValue:' + val));
    }
}

anotherDog.printProperties();
anotherDog.printValues();





let ivo = {
    name: 'Ivo Kostovski',
    country: {
        countryName: 'Macedonia',
        capital: 'Skopje',
    },
    hobbies: ['Reading', 'Swimming']
}

// When destructuring an object the order of the props doesn't matter
const { country: { countryName, capital }, name,  ...hobbies } = ivo;
// console.log(hobbies['hobbies'][999]);