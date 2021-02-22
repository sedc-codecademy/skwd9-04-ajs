//simple callback
function simple() {  
    setTimeout(() => {
        console.log("1st thing, preparing for the 2nd")
        setTimeout(() => {
            console.log("2nd thing")
        }, 2000)
    }, 2000)
}

//simple()

//complex callback
function complex() {
    setTimeout(() => {
        console.log("1st thing, preparing for the 2nd")
        setTimeout(() => {
            console.log("2nd thing, preparing for the 3rd")
            setTimeout(() => {
                console.log("3rd thing, preparing for the 4th")
                setTimeout(() => {
                    console.log("4th thing, preparing for the 5th")
                    setTimeout(() => {
                        console.log("5th thing")
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

// complex()


// ---- PROMISES ----

// CREATING promise
function first(workTime) {
    return new Promise((resolve, reject) => {

        if (workTime <= 0) {
            reject("This is too short of a work time. Please try again!")
        }

        if (workTime > 1000) {
            reject("This is too long of a work time. Please try again!")
        }

        setTimeout(() => {

            let data = {
                name: "Viktor",
                surname: "Jakovlev",
                age: 31
            }

            resolve(data)

        }, workTime)

    })
}

function second() {
    console.log("Second thing")
}

// RESOLVIN promise
// first(500)
//     .then(response => {
//         console.log(response)
//         second()
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => {
//         console.log("Finally has been invoked!")
//     }) 

// Handling AJAX call with a promise
function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json",
            success: response => {
                resolve(JSON.parse(response))
            }, 
            error: error => {
                reject(error)
            }
        })
    })
}

// function showDocuments(documents) {
//     if(!documents && typeof(documents) != "object") {
//         console.log("error")
//         return
//     }

//     if(documents.length === 0) {
//         console.log("error")
//         return
//     }

//     documents.forEach(doc => {
//         console.log(`${doc.name}.${doc.type}.${doc.size}mb`)
//     })
// }

// getDocuments()
//     .then(data => {
//         console.log("We got the documents")
//         showDocuments(data)
//     })
//     .catch(error => console.warn(error))

//Handling AJAX call with multiple promises

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important)

    return new Promise((resolve, reject) => {

        if (importantDocuments.length === 0) {
            reject("There are no important documents!")
        }

        setTimeout(() => {
            resolve(importantDocuments)
        }, 3000)
    })
}

function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type}.${doc.size}mb`)
    })
}

// getDocuments()
//     .then(data => {
//         console.log("We got the documents")
//         return getImportantDocuments(data)
//     })
//     .then(data => showDocuments(data))
//     .catch(error => console.warn(error))


//using FETCH
fetch("https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class7/documents.json")
    .then(response => response.json())
    .then(response => {
        console.log("We got the documents")
        return getImportantDocuments(response)
    })
    .then(response => showDocuments(response))
    .catch(error => console.warn(error))
    .finally(() => console.log("DONE!"))