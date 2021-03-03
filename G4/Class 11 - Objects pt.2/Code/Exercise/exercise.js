function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => console.log(`${this.firstName} ${this.lastName}`);
}

function Student(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => console.log(`The student ${this.firstName} is studying in ${this.academyName} academy!`);
}

let student1 = new Student("Code", 1, "Natasha", "Paneva", 23);
let student2 = new Student("Design", 2, "Darko", "Panchevski", 25);

console.log("Student 1", student1);
console.log("Student 2", student2);

function CodeStudent(id, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student("Code", id, firstName, lastName, age));

    this.hasIndividualProject = false;
    this.hasGroupProject = false;

    this.doProject = (type) => {
        if (type === "individual") {
            this.hasIndividualProject = true;
            this.hasGroupProject = false;
        }
        else if (type === "group") {
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
        }
        else {
            this.hasIndividualProject = false;
            this.hasGroupProject = false;
        }

        // type === "individual" ? this.hasIndividualProject = true : type === "group" ? this.hasGroupProject = true : this.hasIndividualProject = false; this.hasGroupProject = false;
    }
}

function DesignStudent (id, firstName, lastName, age, STM) {
    Object.setPrototypeOf(this, new Student("Design", id, firstName, lastName, age));

    this.isStudentOfTheMonth = STM;
    this.attendAdobeExam = () => console.log(`The student ${this.firstName} is taking adobe exam!`);
}

function NetworkStudent(id, firstName, lastName, age, part) {
    Object.setPrototypeOf(this, new Student("Network", id, firstName, lastName, age))

    this.academyPart = part;
    this.attendCiscoExam = () => console.log(`The student ${this.firstName} is taking an cisco exam!`);
}

Person.prototype.checkForAcademy = (student) => console.log(student.academyName);

let student3 = new CodeStudent(3, "Pero", "Perovski", 99);
let student4 = new DesignStudent(4, "Blazo", "Blazovski", 999, true);
let student5 = new NetworkStudent(5, "Trpe", "Trpevski", 9999, 6);

student3.doProject("individual");
console.log("Student 3", student3);

student4.attendAdobeExam();
console.log(`${student4.isStudentOfTheMonth ? "The student is student of the month" : "The student is not student of the month"}`)
console.log("Student 4", student4);

student5.attendCiscoExam();
console.log(`${student5.academyPart > 5 ? "Way to much parts" : ""}`)
console.log("Student 5", student5);

console.log(student3);
console.log(student4);

student4.checkForAcademy(student5);

// let newPerson = new student5.constructor("Test new Person FN", "Test new Person LN", 1);
// console.log("New person", newPerson);
