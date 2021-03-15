fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then(res => res.json())
.then(data => {
    //the object that will accumulate data from the array
    let result = {
        studentWithHighestAvg: null,
        highestAvgGrade: -Infinity,
        sumOfAverageGrades: 0,
        sumOfAge: 0
    }
    let filteredData = data
    .filter(x=>x.age > 20);
    //result is passed to the function in reduce in order to be
    //altered and transfered each iteration
    let res = filteredData
    .reduce(function(accumulator, current){
        //accumulator is actually result
        console.log(accumulator);
        //current is each member of the filteredData array
        console.log(current);
        if(current.averageGrade > accumulator.highestAvgGrade){
            accumulator.studentWithHighestAvg = current;
            accumulator.highestAvgGrade = current.averageGrade;
        }
        accumulator.sumOfAge += current.age;
        accumulator.sumOfAverageGrades += current.averageGrade;
        return accumulator;
    }, result);
    console.log(`Student with highest avg grade is ${res.studentWithHighestAvg.firstName} - ${res.studentWithHighestAvg.lastName}`);
    console.log(`Average age is ${res.sumOfAge/filteredData.length}`);
    console.log(`Average avg grade is ${res.sumOfAverageGrades/filteredData.length}`);
})