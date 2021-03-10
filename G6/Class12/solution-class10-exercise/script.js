function Academy(name, students, subjects, startDate, endDate) {
  this.name = name;
  this.students = students || [];
  this.subjects = subjects || [];
  this.start = startDate.toLocaleDateString("fr-FR");
  this.end = endDate.toLocaleDateString("fr-FR");
  this.numberOfClasses = subjects.length * 10; 

  this.printStudents = function () {
    if (this.students.length) {
      console.log(`This are the students of the ${this.name} academy:`);
      this.students.forEach((student) => {
        console.log(`${student.firstName} ${student.lastName}`);
      });
    } else {
      console.log("There are not students in the academy yet.");
    }
  };

  this.printSubjects = function () {
    if (this.subjects.length) {
      console.log(`This are the subjects of the ${this.name} academy:`);
      this.subjects.forEach((subject) => {
        console.log(subject.title);
      });
    } else {
      console.log("There are not subjects in the academy yet.");
    }
  };
  // bonus method 
  this.updatedNumberOfClasses = function() {
    // ex.1
    // let result = 0;
    // this.subjects.forEach(subject => result += subject.numberOfClasses);
    // this.numberOfClasses = result;

    // ex.2 using reduce
    this.numberOfClasses = this.subjects.reduce((result, currentSubject) => result += currentSubject.numberOfClasses, 0);
  };
};

function Subject(title, isElective, students, academy) {
  this.title = title;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.numberOfClasses = 10;

  this.overrideClasses = function (updatedNumberOfClasses) {
    if (updatedNumberOfClasses >= 3) {
      this.numberOfClasses = updatedNumberOfClasses;
    } else {
      console.log("You inserted smaller number than 3");
    };
  };
};

function Student( firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;

  this.startAcademy = function (academy) {
      if (this.academy !== null) {
          console.log(`The student is already on academy ${this.academy.name}`)
      } else {
        this.academy = academy;
        academy.students.push(this);
      };
  };

  this.startSubject = function (subject) {
    // let doesSubjectExistInAcademy = this.academy.subjects.filter(sub => sub.title === subject.title).length > 0;
    let doesSubjectExistInAcademy = this.academy && this.academy.subjects.some((sub) => sub.title === subject.title);
    // console.log("DOES SUBJECT EXIST IN ACADEMY: ", doesSubjectExistInAcademy);
    if (doesSubjectExistInAcademy) {
        if (this.currentSubject) {
            this.completedSubjects.push(this.currentSubject);
            console.log(`The student ${this.firstName} ${this.lastName} has started to listen ${subject.title}`)
        };
        subject.students.push(this);
        this.currentSubject = subject;
    } else {
      console.log(
        `${subject.title} doesnt exist in academy that you are learning in`
      );
    };
  };
};

// Creating students
let student1 = new Student("John", "Doe", 18);
let student2 = new Student("Bob", "Bobsky", 25);
let student3 = new Student("Jane", "Doe", 22);

// Creating subjects
let subject1 = new Subject("HTML", false, [student1], new Academy("SEDC", [], [], new Date(), new Date("03-09-2022")));
let subject2 = new Subject("JS", true, [student1], new Academy("SEDC", [], [], new Date(), new Date("03-09-2022")));
let subject3 = new Subject("Pyton", true, [student3], new Academy("SEGC", [], [], new Date(), new Date("03-09-2022")));

// Creating academy
let sedc =  new Academy("SEDC", [student1], [subject1, subject2], new Date(), new Date("03-09-2022"));
console.log(sedc);

// Calling student methods
student2.startAcademy(sedc);
student2.startSubject(subject1);
student2.startSubject(subject2);
student2.startSubject(subject3); 

console.log(student2);
//calling subject method
subject2.overrideClasses(15);
// calling academy methods
sedc.updatedNumberOfClasses();
sedc.printStudents();
sedc.printSubjects();