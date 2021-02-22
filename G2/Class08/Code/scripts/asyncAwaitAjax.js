$(document).ready(function () {
    function getDocuments(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    console.log(response);
                    resolve(JSON.parse(response));
                },
                error: function (errorResponse) {
                    reject(errorResponse);
                }
            })
        })
    };
    function printDocuments(documents) {
        documents.forEach(doc => console.log(`${doc.name}.${doc.type} - ${doc.size}`));
    };
    function validateDocuments(documents) {
        if (!documents || documents.length === 0) {
            //console.log("There are no documents in the input");
            //return;
            throw new Error("There are no documents in the input");
        }
    }
    function getImportantDocuments(documents) {
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

    async function printImportantDocuments() {
        try {
            debugger;
            let data = await getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
            validateDocuments(data);
            let importantDocs = await getImportantDocuments(data);
            printDocuments(importantDocs);
        }
        catch(error){
            console.error(error);
        }
    }
    printImportantDocuments();
})