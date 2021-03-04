
function Academy(name, students, subjects, startDate, endDate) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = startDate;
    this.end = endDate;
    this.numberOfClasses = subjects.length * 10;

    this.printStudents = function() {
        console.log("I am printing students");
    }

    this.printSubjects = function() {
        console.log("I am printing subjects");
    }
}

function Subject(title, isElective, students, numberOfClasses = 10, academy = null) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.numberOfClasses = numberOfClasses;

    this.overrideClasses = function(updatedNumberOfClasses) {
        if(updatedNumberOfClasses >= 3) {
            this.numberOfClasses = updatedNumberOfClasses;
        } else {
            console.log("You inserted smaller number than 3");
        }
    }
}


function Student(firstName, lastName, age, completedSubjects = [], academy = null, currentSubject = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = academy;
    this.currentSubject = currentSubject;

    this.startAcademy = function(academy) {
        this.academy = academy;
    }
    this.startSubject = function(subject) {
        // let doesSubjectExistInAcademy = this.academy.subjects.filter(sub => sub.title === subject.title).length > 0;
        let doesSubjectExistInAcademy = this.academy && this.academy.subjects.some(sub => sub.title === subject.title);
        console.log("DOES SUBJECT EXIST IN ACADEMY: ", doesSubjectExistInAcademy);
        if (doesSubjectExistInAcademy) {
            this.currentSubject = subject;
        } else {
            console.log(`${subject.title} doesnt exist in academy that you are learning in`);
        }
    }
}

let student1 = new Student("John", "Doe", 18);
let student2 = new Student("Bob", "Bobsky", 25);
let student3 = new Student("Jane", "Doe", 22);

let subject1 = new Subject("HTML", false, [student1, student2], 20);
let subject2 = new Subject("JS", true, [student2, student3], 50);

// console.log(Date.now()) => return unic time (number)
let startDate = new Date().toDateString();
let endDate = new Date("2022/08/11").toDateString();
// console.log(endDate);

let academy = new Academy("SEDC", [student1, student2, student3], [subject1, subject2], startDate, endDate);

subject1.academy = academy;
subject2.academy = academy;
