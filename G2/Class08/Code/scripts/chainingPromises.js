$(document).ready(function () {
    function getDocuments(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    console.log(response);
                    debugger;
                    resolve(JSON.parse(response));
                },
                error: function (errorResponse) {
                    reject(errorResponse);
                }
            })
        })
    };
    function printDocuments(documents) {
        debugger
        documents.forEach(doc => console.log(`${doc.name}.${doc.type} - ${doc.size}`));
    };
    function validateDocuments(documents) {
        debugger
        if (!documents || documents.length === 0) {
            //console.log("There are no documents in the input");
            //return;
            throw new Error("There are no documents in the input");
        }
    }
    function getImportantDocuments(documents) {
        debugger
        let importantDocuments = documents.filter(x => x.important);
        return new Promise((resolve, reject) => {
            if (importantDocuments.length == 0) {
                reject("There are no important documents");
            }
            setTimeout(function () {
                resolve(importantDocuments);
            }, 5000);

        })
    }

  /*   getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
        .then(documents => {
            debugger
            validateDocuments(documents);
            return getImportantDocuments(documents);
        })
        .then(importantDocs => {
            debugger;
            printDocuments(importantDocs)
        })
        .catch(error => console.log(error)); */

    // using fetch
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(response => {
        debugger;
        return response.json(); //returns promise
    })
    .then(data => printDocuments(data))
    .catch(error => console.log(error))
    .finally(()=> console.log("Everything is done!"));
})