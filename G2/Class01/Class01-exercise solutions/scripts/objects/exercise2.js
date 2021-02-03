let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let birthYearInput = document.getElementById("birthYear");
let academyInput = document.getElementById("academy");
let btnAdd = document.getElementById("btnAdd");

function Student(firstName, lastName, birthYear, academy){
    this.firstName = !firstName ? "unnamed" : firstName;
    this.lastName = !lastName ? "unnamed" : lastName;
    this.birthYear = birthYear;
    this.academy = !academy ? "unnamed" : academy;
    this.getAge = function(){
        if(!this.birthYear){
            return 'Student has no birth year';
        }
        else{
           return (new Date()).getFullYear - this.birthYear;
        }
    },
    this.getInfo = function(){
        return `This is student ${this.firstName}* ${this.lastName}* from the academy ${this.academy}*!`;
    }
}
let students = [];
btnAdd.addEventListener("click", function(){
    if(!firstNameInput.value){
        console.log("You must enter first name");
        return;
    }
    if(!lastNameInput.value){
        console.log("You must enter last name");
        return;
    }
    if(!birthYearInput.value){
        console.log("You must enter birth year");
        return;
    }
    if(!academyInput.value){
        console.log("You must enter academy");
        return;
    }
  students.push(new Student(firstNameInput.value, lastNameInput.value, birthYearInput.value, academyInput.value));
  console.log(students.length);
});
console.log(students.length);