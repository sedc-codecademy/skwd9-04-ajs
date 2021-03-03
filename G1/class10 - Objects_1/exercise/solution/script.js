function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students === undefined ? [] : students;
    this.subjects = subjects === undefined ? [] : subjects;
    this.start = new Date(start);
    this.end = new Date(end);
    this.numberOfClasses = this.subjects.length * 10;
    this.printStudents = function() {
        this.students.forEach(student => console.log(student))
    };
    this.printSubjects = function() {
        this.subjects.forEach(subject => console.log(subject))
    };
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students === undefined ? [] : students;
    this.overrideClasses = function(cls) {
        this.numberOfClasses = cls <= 3 
            ? console.warn("error")
            : cls
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(someAcademy) {
        this.academy = someAcademy;
        someAcademy.students.push(this)
    }
    this.startSubject = function(someSubject) {
        if (this.academy === null) {
            console.warn("There is not active academy for this studnet!")
        } else if (this.academy.subjects
            .filter(subject => subject.title === someSubject.title) === []){
                console.warn("This subject does not exist in this academy!")
        } else if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject)
            this.currentSubject = someSubject
            someSubject.students.push(this)
        }
        else {
            this.currentSubject = someSubject
            someSubject.students.push(this)
        }
    }
}