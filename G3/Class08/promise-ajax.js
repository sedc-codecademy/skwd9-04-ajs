let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function getDocumentsCallback(resolve, reject) {
    $.ajax({
        url: url,
        success: function (response) {
            resolve(JSON.parse(response))
        },
        error: function () {
            reject(error);
        }
    });
}

function getDocuments(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: function (response) {
                resolve(JSON.parse(response));
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

function showDocuments(documents) {
    if (!documents && typeof (documents) != "object") {
        throw new Error("Problem with documents!");
    }
    if (documents.length === 0) {
        throw new Error("There is no documents!");
    }
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
    throw new Error("We are throwing this error at the end of the function");
}

let documents = getDocuments(url);
// getDocuments(studentsUrl)
//     .then(data => {
//         // console.log(data);
//         let averageGradeGreaterThat3 = data.filter(function (student) {
//             return student.averageGrade > 3;
//         });
//         let averageGradeGreaterThat3SecondWay = data.filter(student => student.averageGrade > 3);
//         console.log(averageGradeGreaterThat3);
//         console.log(averageGradeGreaterThat3SecondWay);
//     });

console.log(documents);
//promise one
documents
    .then(data => {
        console.log("We got the documents");
        showDocuments(data);
    })
    .catch(error => console.log(error));

// callback one
getDocumentsCallback(data => {
    console.log("We got the documents callback");
    showDocuments(data);
}, error => {
    console.log(error)
});