function Person(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;

    this.info = function () {
        return `Name: ${this.firstName} ${this.lastName} Age: ${this.age}`;
    } 
}


let persons = [];

let saveBtn = document.getElementById("saveBtn");
let result = document.getElementById("result");

let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let ageInput = document.getElementById("age");

let msg = document.getElementById("msg"); 

saveBtn.addEventListener("click", function (event) {

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;

    if (!firstName || !lastName || !age) {
        showMessage("Please enter valid values.", msg);
    } else {
        // persons.push(new Person(firstName, lastName, age));
        let person = new Person(firstName, lastName, age);
        persons.push(person);
        printPersons(persons, result);
        clearForm();
        showMessage("Successfuly added person", msg);
    }
});

function printPersons(persons, element) {
    element.innerHTML = '';

    let html = "";
    for (let i = 0; i < persons.length; i++){
        html += `<li>ID: ${i + 1} ${persons[i].info()}</li>`;
    }
    element.innerHTML = html;
}

function clearForm() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
}

function showMessage(message, element) {
    element.innerHTML = "";
    element.innerHTML = `<p>${message}</p>`;
}