let dog = {
    dogName: "Barnie",
    dogColor: "brown",
    dogAge: 3
};
console.log("dog:");
console.log(dog.dogName);
console.log(dog.dogColor);

const {dogName, dogColor, dogAge} = dog;
console.log("after destructuring:");
console.log(dogName);
console.log(dogColor);

function Dog(name, color, age){
    this.name = name;
    this.color = color;
    this.age = age;
}
let anotherDog = new Dog("Doggie", "black", 5);
const {name, color, age} = anotherDog;
console.log(anotherDog.name);
console.log(name);

console.log("===another example===");
let newStudent ={
    name: "John",
    age: 20,
    grades: {
        JavaScript: 9,
        CSharp: 10
    }
}

function printStudent(student){
  console.log(student.name);
  console.log(student.age);
  console.log(student.grades.JavaScript);
}
printStudent(newStudent);

function displaySummary({name, grades: {JavaScript = 0, CSharp = 0}}){
    console.log(name);
    console.log(`JS grade ${JavaScript}`);
    console.log(dogName);
}
displaySummary(newStudent);

console.log("==default values===");
let person = {
    fullName: "John Doe",
    country: "USA",
    personAge: 0
}

let {fullName, country, personAge = 25} = person;
console.log(person.personAge);
console.log(personAge);

console.log("===Array destructuring===");
let rgb = [255, 200, 0, 10];
let [r, g, b] = rgb;
console.log(`r: ${r}`);
console.log(`b: ${b}`);
console.log(`g: ${g}`);

let numbers = [2, 4, 6, 7, 8];
//SPREAD operator
let [c, d, ...rest] = numbers;
console.log(`c: ${c}`);
console.log(`rest: ${rest}`);

function sum(n1, n2, n3){
    return n1 + n2 + n3;
}
console.log(sum(...numbers));