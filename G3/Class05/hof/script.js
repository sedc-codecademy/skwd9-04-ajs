// use of other script data
// console.log(students.map(x => x.firstName));


let students1 = [
    { firstName: "Bob", lastName: "H", grade: 5, age: 19 },
    { firstName: "Mel", lastName: "B", grade: 2, age: 33 },
    { firstName: "Jill", lastName: "M", grade: 3, age: 15 },
    { firstName: "Lucky", lastName: "J", grade: 5, age: 18 },
    { firstName: "Strike", lastName: "K", grade: 4, age: 16 },
    { firstName: "Eric", lastName: "I", grade: 1, age: 17 }
];

// for (let student of students1) {
//     console.log(`${student.firstName} ${student.lastName}`);
// }

function logFullName(student) {
    console.log(`${student.firstName} ${student.lastName}`);
}

// students1.forEach(logFullName);

// students1.forEach(function (student) {
//     console.log(`${student.firstName} ${student.lastName}`);
// });

// filter
let above18 = [];
for (let i = 0; i < students1.length; i++){
    if (students1[i].age >= 18) {
        above18.push(students1[i]);
    }
}
// console.log(above18);

function above18Check(student) {
    return student.age >= 18;
}

let studentsAbove18 = students1.filter(above18Check);
// console.log(studentsAbove18);

let studentsAbove18v1 = students1.filter(student => student.age >= 18);
// console.log(studentsAbove18v1);

let studentsAbove18WithGradeBiggerThatFour = students1
    .filter(student => student.age >= 18)
    .filter(student => student.grade > 4);
// console.log(studentsAbove18WithGradeBiggerThatFour);

let students2 = [
    {
        firstName: "Bob", lastName: "H", grades: [
            { subject: "Math", grade: 2 },
            { subject: "Science", grade: 3 }
        ], age: 19
    },
    {
        firstName: "Mel", lastName: "B", grades: [
            { subject: "Math", grade: 3 },
            { subject: "Science", grade: 5 }
        ], age: 33
    }
];

students2
    .forEach(student =>
        student.grades.filter(grade =>
            grade.grade === 5)
            .forEach(grade1 =>
                console.log(`${grade1.subject}: ${grade1.grade}`)));

// map
let mapedData = [];
for (let student of students2) {
    let mapedStudent = {
        fisrtName: student.firstName,
        age: student.age
    };
    mapedData.push(mapedStudent);
}

// console.log(mapedData);

let mappedStudents = students2.map(student => {
    return {
        fisrtName: student.firstName,
        age: student.age
    };
});
// console.log(mappedStudents);


let studentss = [
	{name: "Bob", grade: 2},
	{name: "Jill", grade: 3},
	{name: "Greg", grade: 1},
	{name: "Ann", grade: 5},
	{name: "Bill", grade: 4},
	{name: "Jane", grade: 4},
];

// reduce
let sumOfGrades = studentss.reduce((sum, student) => sum += student.grade, 0);
// console.log(sumOfGrades);

let result111 = students1
    .filter(student => student.grade > 1)
    .map(student => student.grade)
    .reduce((sum, grade) => sum += grade, 0);

// console.log(result111);

// sorting
function sorfFunc(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i].grade < arr[j].grade) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let sorted = sorfFunc(students1);
// console.log(sorted);

let descStudent = students1.sort((student1, student2) => student2.grade - student1.grade) // Descending
console.log(descStudent);
let ascStudents = students1.sort((student1, student2) => student1.grade - student2.grade); // Ascending
console.log(ascStudents);

let sortByName = students1.sort((student1, student2) =>
    student1.firstName.localeCompare(student2.firstName));
console.log(sortByName);

