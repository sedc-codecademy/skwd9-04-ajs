// Simple callbacks example
function simpleExample() {
    setTimeout(() => {            
        console.log("First thing");
        setTimeout(() => {
            console.log("Second thing")
        }, 1000)
    }, 1000)
}

// simpleExample();

// Complex callbacks example
function complexExample() {
    setTimeout(() => {            
        console.log("First thing");
        setTimeout(() => {
            console.log("Second thing");
            setTimeout(() => {
                console.log("Third thing");
                setTimeout(() => {
                    console.log("Fourth thing");
                    setTimeout(() => {
                        console.log("Fifth thing");
                        setTimeout(() => {
                            console.log("Sixth thing")
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

// complexExample();

// Promises
// Simple Promise
function first(workTime) {
    return new Promise((resolved, rejected) => {
        if (workTime <= 0) {
            rejected("It's too short of a work time. Please try again!")
        }
        else {
            setTimeout(() => { resolved("First thing, preparing second") }, workTime)
        }
    })
}

function second() {
    console.log("Second thing");
}

// first(1000)
//     .then(success => {
//         console.log(success);
//         second();
//     })
//     .catch(error => console.error(error))
//     .finally(() => console.log("No matter the status of the promise this will be logged!"))

// Handling AJAX call with a promise and chaining promises
function getDocuments() {
    // debugger;
    return new Promise((resolved, rejected) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
            success: (response) => {
                // debugger;
                resolved(JSON.parse(response));
            },
            error: (error) => {
                // debugger;
                rejected(error);
            }
        })
    })
}

function checkDocuments(documents) {
    // debugger;
    if (!documents || typeof(documents) !== "object"){
        throw new Error("Problem with the documents!");
    }
    if (documents.length === 0) {
        throw new Error("Problem no documents");
    }
}

function getImportantDocuments(documents) {
    // debugger;
    let importantDocuments = documents.filter(document => document.important);

    return new Promise((resolved, rejected) => {
        if (importantDocuments.length === 0) {
            // debugger;
            rejected("There are no important documents")
        }
        else {
            // debugger;
            setTimeout(() => { resolved(importantDocuments) }, 3000)
        }
    })
}

function printDocuments(documents) {
    documents.forEach((document, index) => {
        console.log(`${index + 1}. ${document.name}.${document.type} (Size: ${document.size}MB)`);
    })
}

// getDocuments()
//     .then(data => {
//         // debugger;
//         console.log("We got the data", data);
//         checkDocuments(data);
//         return getImportantDocuments(data)
//     })
//     .then(importantDocuments => printDocuments(importantDocuments))
//     .catch(error => console.error(error))
//     .finally(() => console.log(`Everything is done in ${new Date()}`))

// Fetch
// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log("We got the data", data);
//         checkDocuments(data);
//         return getImportantDocuments(data)
//     })
//     .then(importantDocuments => printDocuments(importantDocuments))
//     .catch(err => console.error(err))
//     .finally(() => console.log(`Everything is done in ${new Date()}`))


// Async/await
fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(response => response.json())
    
// Simple example (same as the code above)
async function getDataFromFetch(){
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    let data = await response.json();

    console.log(data);
}

// getDataFromFetch()

function print() {
    console.log('LOG ME');
}

async function showImportantDocuments() {
    // debugger;
    let startTime = new Date().getTime();
    let documents = await getDocuments(); 
    checkDocuments(documents);
    let importantDocuments = await getImportantDocuments(documents);
    printDocuments(importantDocuments);
    console.log(`Done in: ${(new Date().getTime() - startTime) / 1000}s`)
}

showImportantDocuments();
print();
console.log("TEXT");