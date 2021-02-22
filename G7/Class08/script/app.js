// Callbacks

// Simple

// const simple = () => {
//     setTimeout(() => {
//         console.log('First log, waiting for the second one.')
//         setTimeout(() => {
//             console.log('Second log')
//         }, 1000)
//     }, 2000)
// }

// simple();

// Complex - CALLBACK HELL

// const complex = () => {
//   setTimeout(() => {
//     console.log("1. First thing, preparing for the second");
//     setTimeout(() => {
//       console.log("2. Second thing, preparing for the third");
//       setTimeout(() => {
//         console.log("3. Third thing, preparing for the forth");
//         setTimeout(() => {
//           console.log("4. Forth thing, preparing for the fifth");
//           setTimeout(() => {
//             console.log("5. Fifth thing, preparing for the Sixth");
//             setTimeout(() => {
//               console.log("6. Sixth and last thing");
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// };

// complex();

// [Promise]
// States:
// Pending
// Fulfilled
// Rejected

// const first = workTime => {
//     return new Promise((resolve, reject) => {
//         if (workTime <= 0) {
//             reject(`It's too short of a work time. Please try again`);
//         }
//         setTimeout(() => {
//             resolve('First log, preparing for the second one');
//         }, workTime)
//     })
// }

// const second = () => console.log('Second log');

// first(-4)
//     .then(success => {
//         console.log('SUCCESS: ', success)
//         second()
//     })
//     .catch(error => {
//         console.log('ERROR', error)
//     })
//     .finally(() => {
//         console.log(`Logging done at ${new Date()}`)
//     })

// Get documents example - version 1

// const getDocuments = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G7/Class08/documents.json')
//             .then(res => {
//                 if (res.ok) {
//                     return res.json();
//                 } else {
//                     throw new Error('ERROR occurred while getting the documents.')
//                 }
//             })
//             .then(documents => resolve(documents))
//             .catch(error => reject(error))
//     })
// }

// const showDocuments = documents => {
//     // making sure we have got an array
//     if (!documents || !Array.isArray(documents)) {
//         throw new Error('Problem with the documents')
//     }

//     // if we have documents inside the array (documents.length === 0)
//     if (!documents.length) {
//         throw new Error('There are no documents available');
//     }

//     // logging all the documents
//     documents.forEach(doc => {
//         console.log(`${doc.name}.${doc.type} (${doc.size}MB)`)
//     });
// }

// let docs = [] // cannot be assigned a proper value

// getDocuments()
//     .then(documents => {
//         // docs = documents;
//         showDocuments(documents)
//     })
//     .catch(error => {
//         console.log('ERROR: ', error)
//     })

// showDocuments(docs) //cannot be used here, as it will execute immediately

// Get documents example - version 2

const getDocuments = () => {
    return new Promise((resolve, reject) => {
        fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd91-04-ajs/main/G7/Class08/documents.json')
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('ERROR occurred while getting the documents.')
                }
            })
            .then(documents => resolve(documents))
            .catch(error => reject(error))
    })
}

const showDocuments = documents => {
    // logging all the documents
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}MB)`)
    });
}

const checkDocuments = documents => {
    // making sure we have got an array
    if (!documents || !Array.isArray(documents)) {
        throw new Error('Problem with the documents')
    }

    // if we have documents inside the array (documents.length === 0)
    if (!documents.length) {
        throw new Error('There are no documents available');
    }
}

const getImportantDocuments = documents => {
    const importantDocuments = documents.filter(doc => doc.important) // doc.important === true
    return new Promise((resolve, reject) => {
        if (!importantDocuments.length) {
            reject('There are no important documents!')
        }
        setTimeout(() => resolve(importantDocuments), 2000)
    })
}

// getDocuments()
//     .then(documents => {
//         checkDocuments(documents);
//         return getImportantDocuments(documents)
//     })
//     .then(importantDocuments => {
//         showDocuments(importantDocuments)
//     })
//     .catch(error => {
//         console.log('ERROR: ', error)
//     })

// Async Await 

const showImportantDocuments = async () => {
    try {   
        const documents = await getDocuments();
        checkDocuments(documents);
        const importantDocuments = await getImportantDocuments(documents);
        showDocuments(importantDocuments);
    } catch (error) {
        console.log(error)
    }
    console.log(`All done at ${new Date()}`);
}

// async function showImportantDocuments() {
//     try {   
//         const documents = await getDocuments();
//         checkDocuments(documents);
//         const importantDocuments = await getImportantDocuments(documents);
//         showDocuments(importantDocuments);
//     } catch (error) {
//         console.log(error)
//     }
//     console.log(`All done at ${new Date()}`);
// }

showImportantDocuments();







// Async await with function keyword

// Async await with arrow functions



