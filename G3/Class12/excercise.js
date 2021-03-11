// # Exercises
// ## Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be:
// Academy
// * Name - string
// * Students - array of Students
// * Subjects - array of Subjects
// * Start - Date when it starts
// * End - Date when it ends
// * NumberOfClasses - number of subjects * 10, not settable
// * PrintStudents - method that prints all students in console
// * PrintSubjects - method that prints all subjects in console
// Subject
// * Title - string
// * NumberOfClasses - default 10, not settable
// * isElective - boolean
// * Academy - Academy object
// * Students - array of Students
// * OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. 
// The number can't be smaller than 3.
// Student
// * FirstName - string
// * LastName - string
// * Age - number
// * CompletedSubjects - emptyArray as default, not settable
// * Academy - null as default, not settable 
// * CurrentSubject - null as default, not settable
// * StartAcademy - accepts Academy object that it sets to the Academy property of the student
// * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student 
//has an Academy object in the Academy property and that subject exists in the academy.
// If not, give error in console and do not set the CurrentSubject property
// ## Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// * StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students 
// (The academy that he is starting )
// * StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). 
// If there was another subject in the CurrentSubject property, that subject should be transferred to
// CompletedSubjects and then add the new Subject

//Homework from Class10
//exercise 1/2 from class10
function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = function () {
        console.log(this.subjects.length * 10);
    }

    this.printStudents = function () {
        console.log(this.students);
    };

    this.printSubjects = function () {
        console.log(this.subjects);
    };

};

let instnaceAcademy = new Academy(
    "SEDC",
    ["Ana", "Petar", "Marija"],
    ["Math", "English", "Biology", "Fizicko"],
    new Date(10 / 02 / 2020), new Date(10 / 02 / 2021)
);

function Subject(title, isElective, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = instnaceAcademy;
    this.students = students;

    this.overrideClasses = function (number) {
        if (number === this.overrideClasses && number > 3) {
            this.numberOfClasses = number
        }
    };
};

let instanceSubject = new Subject("Math", true, ["sara", "ana", "petar"]);
//console.log(instanceSubject);

function Student(firstName, lastName, age, completedSubjects) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function () {
        this.academy = instnaceAcademy;
    };

    // * StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student 
    // has an Academy object in the Academy property and that subject exists in the academy.

    // * StartSubject - When the student calls StartSubject the student should also be added to the 
    // Subject property Students(The subject that he is starting). 
    // If there was another subject in the CurrentSubject property, that subject should be transferred to
    // CompletedSubjects and then add the new Subject

    this.startSubject = function (subject) {
        // debugger; // calls the debugger into bbrowser 
        if (this.academy) {
            // let hasSub = false;
            // for (const sub of this.academy.subjects) {
            //     if (sub === subject.title) {
            //         hasSub = true;
            //         break;
            //     }
            // }
            let hasSubject = this.academy.subjects.filter(sub => sub === subject.title).length > 0;
            if (hasSubject) {
                subject.students.push(this.firstName);
                if (!this.currentSubject) {
                    this.currentSubject = subject;
                    return;
                }

                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = subject;
            }
        } else {
            throw new Error("That subject does not exists in the current accademy!");
        }
    };
};

let trajan = new Student(
    "Trajan",
    "Stevkovski",
    33,
    [new Subject("Math", false, ["Filip", "Olga"]), new Subject("Science", true, ["Petar", "Angel"])]
);
trajan.startAcademy(instnaceAcademy);



let biology = new Subject("Biology", true, ["sara", "ana", "petar"]);
trajan.startSubject(biology);

let fizicko = new Subject("Fizicko", false, ["sara_", "ana_", "petar_"]);
trajan.startSubject(fizicko);
console.log(trajan);