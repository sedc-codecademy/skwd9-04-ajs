function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
function Student(academyName, id, first, last, age){
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.studentId = id;
    this.study = function(){
        console.log(`The studet ${this.firstName} is studying in ${this.academyName} academy!`);
    }
}

//we have to add it through Person type, since the type of
//each __proto__ is sctually Person in the hierarchy
//we are doing the whole inheritance chain using setPrototypeOf
Person.prototype.checkForAcademy = function(student){
    console.log(student.academyName);
}

function CodeStudent(id, first, last, age){
    Object.setPrototypeOf(this, new Student("Code", id, first, last, age))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type){
        if(type === "individual") this.hasIndividualProject = true;
        if(type === "group") this.hasGroupProject = true;
    }
}

function DesignStudent(first, sOfMonth, id, last, age){
    Object.setPrototypeOf(this, new Student("Design", id, first, last, age));
    this.isStudentOfTheMonth = sOfMonth;
    this.attendAdobeExam = function(){
        console.log(`This student ${this.firstName} is taking an adobe exam!`);
    }
}

function NetworkStudent(first, id, last, age, part){
    Object.setPrototypeOf(this, new Student("Network", id, first, last, age));
    this.academyPart = part;
    this.attendCiscoExam = function(){
        console.log(`This student ${this.firstName} is taking an cisco exam!`);
    }
}

let student3 = new CodeStudent(25,"deko","dekovski", 28);
let student4 = new DesignStudent("Bobi", true, 9, "Basmiegajle", 19);
let student5 = new NetworkStudent("Igor", 23, "Igorovski", 32, 2);

console.log(student3);
console.log(student4);
console.log(student5);

student3.checkForAcademy(student4);