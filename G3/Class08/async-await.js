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

function checkDocuments(documents) {
    if (!documents && typeof (documents) != "object") {
        throw new Error("Problem with documents!");
    }
    if (documents.length === 0) {
        throw new Error("There is no documents!");
    }
}

function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`);
    });
    // throw new Error("We are throwing this error at the end of the function");
}

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important);
    return new Promise((resolve, reject) => {
        if (importantDocuments.length === 0) {
            reject("There are no important documents!");
        }
        setTimeout(() => {
            resolve(importantDocuments);
        }, 3000)
    })
}


// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
//     .then(response => response.json())
//     .then(data => showDocuments(data))
//     .catch(error => console.log(error.message))
//     .finally(() => console.log(`Everything is done ar: ${new Date()}`));

let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";
let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
    

async function getDataFromFetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

// getDataFromFetch(url);
// getDataFromFetch(studentsUrl);

function first(worktime) {
    return new Promise((resolve, reject) => {
        if (worktime <= 100) {
            reject("It's to short of a work time. Please try again!");
        }
        setTimeout(() => {
            resolve("First thing, preparing for second");
        }, worktime);
    });
}

function second() {
    console.log("second thing!");
}

async function runFunctions() {
    console.log(await first(3000));
    second();
    console.log(`Everything is done at: ${new Date()}`);
}

// runFunctions();
// console.log("After function run");


async function showImportantDocuments() {
    let documents = await getDocuments(url);
    checkDocuments(documents);
    let importantDocuments = await getImportantDocuments(documents);
    showDocuments(importantDocuments);
}

showImportantDocuments();
console.log("This does not wait for the async to finish!");