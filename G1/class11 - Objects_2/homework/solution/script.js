function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

function Student(academyName, studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))

    this.academyName = academyName
    this.studentId = studentId

    this.study = function() {
        console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
    }
}

function DesignStudent(isStudentOfTheMonth, studentId, firstName, lastName, age) {

    Object.setPrototypeOf(this, new Student("Design", studentId, firstName, lastName, age))

    this.isStudentOfTheMonth = isStudentOfTheMonth
    this.attendAdobeExam  = function() {
        console.log(`The student ${this.firstName} is doing an adobe exam!`)
    }
}

function CodeStudent(studentId, firstName, lastName, age) {
    Object.setPrototypeOf(this, new Student("Code", studentId, firstName, lastName, age))

    this.hasIndividualProject = false 
    this.hasGroupProject  = false 

    this.doProject = function(type) {
        if (type === "individual") {this.hasIndividualProject = true}
        else if (type === "group ") {this.hasGroupProject = true}
        else {console.log("invalid input")}
    }
}

function NetworkStudent(academyPart , studentId, firstName, lastName, age) {

    Object.setPrototypeOf(this, new Student("Network", studentId, firstName, lastName, age))

    this.academyPart = academyPart
    this.attendCiscoExam = function() {
        console.log(`the student ${this.firstName} is doing a cisco exam!`)
    }
}

Person.prototype.checkForAcademy = function() {
    console.log(this.academyName)
}

let student1 = new DesignStudent(false, 1, "Viktor", "Jakovlev", 31) 
let student2 = new CodeStudent(2, "Igor", "Igorovski", 18) 
let student3 = new NetworkStudent(5, 3, "Petar", "Igorovski", 18) 

console.log(student1)
console.log(student2)
console.log(student3)

student3.checkForAcademy()