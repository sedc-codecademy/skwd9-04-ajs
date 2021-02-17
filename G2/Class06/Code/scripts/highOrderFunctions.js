function Student(fname, lName, age, averageGrade) {
    this.firstName = fname;
    this.lastName = lName;
    this.age = age;
    this.averageGrade = averageGrade;
}
let students = [new Student("Bob", "Johnson", 17, 2), new Student("Petko", "Petkovski", 23, 5), new Student("Kate", "Markovska", 20, 4)];
//regular for of
for (let student of students) {
    console.log(`${student.firstName} ${student.lastName}`);
}
console.log("===HOF for each===");
function logFullName(student) {
    console.log(`${student.firstName} ${student.lastName}`);
}
students.forEach(logFullName);
console.log("==anonymous function==")
students.forEach(function (student) { console.log(`${student.firstName} ${student.lastName}`); });
console.log("==arrow function==")
students.forEach(s => console.log(`${s.firstName} ${s.lastName}`));

console.log("===FILTER===");
function checkAge(student) {
    return student.age > 18;
}
let studentsAbove18 = students.filter(checkAge); //studentsAbove18 is an array
console.log("Students above 18");
studentsAbove18.forEach(logFullName);
console.log("Students");
students.forEach(logFullName); //filter does not alter the existing array
console.log("==arrow function==");
let studentsAb18 = students.filter(student => student.age > 18);
//let studentsAb18 = students.filter(function(student){return student.age > 18});
studentsAb18.forEach(logFullName);

console.log("===MAP===");
let studentsDescriptions = [];
for (let student of students) {
    if (student.averageGrade > 3) {
        studentsDescriptions.push(`${student.firstName} ${student.lastName} ${student.age}`);
    }
}
//filter and map operate on each member of the array and return a result array
let studentsDescs = students.filter(s => s.averageGrade > 3)
    .map(student => `${student.firstName} ${student.lastName} ${student.age + 10}`);
console.log(studentsDescs);
students.forEach(student => console.log(student.age));

function returnFullName(student) {
    return `${student.firstName} ${student.lastName}`;
}
let studentsFullNames = students.map(returnFullName);
console.log(studentsFullNames);
//studentsDescs is an array of strings
let studentsDescsLength = studentsDescs.map(s => s.length);
console.log(studentsDescsLength);

console.log(studentsDescs.map(s => "Description: " + s));

console.log("===REDUCE===");
let studentsWithGradeAbove2 = students.filter(s => s.averageGrade > 2); //studentsWithGradeAbove2 is an array of Student objects
let studentsGradesAbove2 = studentsWithGradeAbove2.map(s => s.averageGrade);
console.log(studentsGradesAbove2);
function aggregate(sum, grade) {
    return sum += grade;
}
//reduce has two parameters:
// - a function
// - an initial value
//the function (first param), takes the initial value as her first param, and each array member as second param
console.log(studentsGradesAbove2.reduce(aggregate, 0));

let sumOfAverageGrades = students.filter(s => s.averageGrade > 2)
    .map(s => s.averageGrade)
    .reduce(aggregate, 0);
console.log(sumOfAverageGrades);

//2 5 4
console.log("before sort");
students.forEach(s=> console.log(s.averageGrade));
students.sort((s1, s2) => s1.averageGrade - s2.averageGrade); //asc
console.log("after sort asc");
students.forEach(s=> console.log(s.averageGrade));

students.sort((s1, s2) => s2.averageGrade - s1.averageGrade); //desc
console.log("after sort desc");
students.forEach(s=> console.log(s.averageGrade));

function copyArray(array){
    let copied = [];
    array.forEach(x => copied.push(x));
    return copied;
}
let studentsCopy = copyArray(students);
studentsCopy.sort((s1, s2) => s1.averageGrade - s2.averageGrade); 
console.log("after copy students");
students.forEach(s=> console.log(s.averageGrade));
console.log("after copy studentsCopy");
studentsCopy.forEach(s=> console.log(s.averageGrade));

let students2 = students; //by reference
//when we pass by reference, by using the two variables we alter the same location in memory

console.log("students");
students.forEach(s=> console.log(s.averageGrade));
console.log("students2");
students2.forEach(s=> console.log(s.averageGrade));

students2.sort((s1, s2) => s1.averageGrade - s2.averageGrade);

console.log("students");
students.forEach(s=> console.log(s.averageGrade));
console.log("students2");
students2.forEach(s=> console.log(s.averageGrade));


console.log("==SPREAD==");
function sumThreeNumbers(x, y, z){
    return x + y + z;
};
let arrayOfNumbers = [2, 3, 5, 6, 7];
console.log(sumThreeNumbers(...arrayOfNumbers));


