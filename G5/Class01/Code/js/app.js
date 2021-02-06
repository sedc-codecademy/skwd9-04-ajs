// 1. Arrays

// let randomArray = [1, 2, 3, "Martin", "Ivan", undefined, null, true, 20.5];
// console.log(randomArray);

// let names = ["Martin", "Ivan", "Anja", "Ivo", "Robert"];
// let numbers = [1, 2, 3];

// let fruit = "Orange";

// // for (let i = 0; i < randomArray.length; i++) {
// //     console.log(randomArray[i]);
// // }

// // for (let i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }

// // for (let i = 0; i < numbers.length; i++) {
// //     console.log(numbers[i]);
// // }


// // 2. Functions 
// function printItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// function printNestedArrays(array) {
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){
//             console.log(array[i][j]);
//         }
//     }
// }

// printItems(names);
// printItems(randomArray);
// printItems(numbers);
// printItems(fruit);


// let allArrays = [numbers, names];
// console.log(allArrays);
// printItems(allArrays);
// printNestedArrays(allArrays);

// 3. Objects

// By using object literal
let student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    birthYear: 1999,
    subjects: ["HTML/CSS", "BJS", "AJS"],
    currentSubject: "AJS",
    printSubjects: function () {
        for (let sub of this.subjects) {
            console.log(sub);
        }
    }
}
console.log(student);
console.log("The student's name is " + student.firstName);

student.isHardWorking = true;
console.log(student);

student.getAge = function () {
    let date = new Date();
    let currentYear = date.getFullYear();
    return currentYear - this.birthYear;
}

console.log(student);
student.printSubjects();
console.log(student.getAge());

if (student.age === student.getAge()) {
    console.log("My method works fine!");
}




function Student(fName, lName, birthYear, subjects, academy,  currentSubject = "AJS", age = 20) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.currentSubject = currentSubject;
    this.birthYear = birthYear;
    this.subjects = subjects;
    this.academy = academy;

    this.getInfo = function () {
        return `This is ${this.firstName} ${this.lastName}`
    }

    this.getAge = function () {
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.birthYear;
    }
}

function Academy(city, address, phoneNumber, numberOfStudents) {
    this.city = city;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.numberOfStudents = numberOfStudents;

    this.getLocation = function (city) {
        if (city === this.city) {
            console.log(`The location of this SEDC object is on ${this.address} in ${this.city}`);
        } else {
            console.log(`There is no SEDC in ${city} yet!`);
        }
    }
}

let SEDCSkopje = new Academy("Skopje", "Test address 1", "070/222-333", 130);
let SEDCNis = new Academy("Nis", "Test address 2", "070/222-444", 40);
let SEDCOhrid = new Academy("Ohrid", "Test address 3", "070/222-666", 80);


let slavko = new Student("Slavko", "Nikolovski", 26, 1994, ["HTML/CSS", "BJS", "AJS"], "AJS", SEDCSkopje);
let martin = new Student("Martin", "Panovski", 27, 1993, ["HTML/CSS", "BJS", "AJS", "C#", "AC#"], "AJS", SEDCOhrid);
let ivan = new Student("Ivan", "Lazarevski", 29, 1991, ["HTML/CSS", "BJS", "AJS", "Angular", "NodeJS"], "AJS", SEDCNis);

if (slavko.currentSubject === "C#") {
    console.log("Slavko is learning C#");
} else {
    console.log("Slavko is still in the first semester of the Academy");
}


console.log(slavko);
console.log(ivan);
console.log(martin);


// Show/Hide of forms buttons
let btnNewStudent = document.getElementById("btnNewStudent");
let btnNewAcademy = document.getElementById("btnNewAcademy");

// Forms itself
let formStudent = document.getElementById("formStudent");
let formAcademy = document.getElementById("formAcademy");

// Add buttons
let btnAddStudent = document.getElementById("addStudent");
let btnAddAcademy = document.getElementById("addAcademy");

btnNewStudent.addEventListener('click', function () {
    formStudent.style.display = 'block';
    formAcademy.style.display = 'none';
});

btnNewAcademy.addEventListener('click', function () {
    formAcademy.style.display = 'block';
    formStudent.style.display = 'none';
});

let students = [martin, ivan, slavko];

btnAddStudent.addEventListener('click', function (event) {
    event.preventDefault();
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let birthYear = document.getElementById("birthYear").value;
    let academy = document.getElementById("academy").value;
    let subjects = document.getElementById("subjects").value;

    let newStudent = new Student(fName, lName, birthYear, subjects, academy);
    students.push(newStudent);
    console.log(students);
    //printStudens(students);

});

btnAddAcademy.addEventListener('click', function () {
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let numOfStudents = document.getElementById("numOfStudents").value;
    

});