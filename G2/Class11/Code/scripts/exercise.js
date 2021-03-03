function Academy(name, students, subjects, start, end){
    this.name = name;
    //this.students is an array of Student objects
    this.students = students === undefined ? [] : students;
    //this.subjects is an array of Subject objects
    this.subjects = subjects === undefined ? [] : subjects;
    this.start = new Date(start);
    this.end = new Date(end);
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function(){
        this.students.forEach(student => {
            console.log(student);
        })
    };
    this.printSubjects = function(){
        this.subjects.forEach(subject => {
            console.log(subject);
        });
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    //this.academy is an Academy object
    this.academy = academy;
    //this.students is an array of Student objects
    this.students = students;
    this.overideClasses = function(classes){
        this.numberOfClasses = classes <= 3 
        ? console.log("error") : classes;
    }
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //this.completedSubjects is an array of Subject objects
    this.completedSubjects = [];
    //this.academy is an Academy object
    this.academy = null;
    //this.currentSubject is a Subject object
    this.currentSubject = null;
    this.startAcademy = function(someAcademy){
        //someAcademy is an academyObject
        //we set academy property to someAcademy
        this.academy = someAcademy;
        //someAcademy as Academy object contains property students (array of student objects)
        //we use this because we want to add the current student, on which the method startAcademy is called
        //to the students array of someAcademy (object of type Academy)
        someAcademy.students.push(this);
    }
    this.startSubject = function(someSubject){
        if(this.academy === null){
            console.log("You can't enrol on a subject without academy!");
        } else if(this.academy.subjects
            .filter(sub => sub.title === someSubject.title) === []){
                //this.academy as Academy object contains property subjects (array of Subject objects)
                //we went through them looking for subject with same title as someSubject
                console.log("There is no subject like that in your academy!");
            } else if(this.currentSubject !== null){
                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = someSubject;
                //someSubject as object of type Subject contains students property (array of Student objects)
                //we use this because we want to add the current student, on which the method StartSubject is called
                //to the students array of someSubject (object of type Subject)
                someSubject.students.push(this);
            } else {
                this.currentSubject = someSubject;
                someSubject.students.push(this);
            }
    }
}

let javascript = new Subject("javascript", false, undefined, []);
let html = new Subject("html", false, undefined, []);
let cSharp = new Subject("C#", false, undefined, []);
let codeCademy = new Academy("Code", [], [javascript, html, cSharp], "12/10/2019","12/10/2020");
let bob = new Student("Bob", "Bobsky", 35);
let jill = new Student("Jill", "Riely", 29);
// console.log(codeCademy);
// console.log(javascript);
// console.log(html);
// console.log(cSharp);
// console.log(bob);
// console.log(jill);
// codeCademy.printStudents();
// codeCademy.printSubjects();
// cSharp.overideClasses(8);

//in startAcademy, the this keyword will be actually our bob object
bob.startAcademy(codeCademy);
// bob.startSubject(javascript);

//in startSubject, the this keyword will be actually our bob object
bob.startSubject(javascript);
bob.startSubject(cSharp);
bob.startSubject(html);
console.log(bob);