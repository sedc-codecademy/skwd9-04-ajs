// JSON
// JS object => JSON | Stringifying

// const groupOne = {
//     academy: 'Code',
//     trainer: 'Peter',
//     assistant: 'Josh',
//     students: [
//         'Mike',
//         'Samantha',
//         'Greg'
//     ],
//     isActive: true,
//     numberOfClasses: 48,
//     options: {
//         online: true,
//         workshops: 3,
//     }
// }

// console.log(groupOne);
// const stringifiedGroupOne = JSON.stringify(groupOne);
// console.log(stringifiedGroupOne);
// console.log(typeof stringifiedGroupOne);

// JSON => JS Object | Parsing

const groupOneJson = `{
	"academy": "Code",
	"trainer": "Peter",
	"assistant": "Josh",
	"students": [
		"Mike",
		"Samantha",
		"Greg"
	],
	"isActive": true,
	"numberOfClasses": 48,
	"options": {
		"online": true,
		"workshops": 3
	}
}`

// console.log(groupOneJson);
// const parsedGroupOne = JSON.parse(groupOneJson);
// console.log(parsedGroupOne);
// console.log(typeof parsedGroupOne)

// Plain Javascript (up to ES5)

// const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 300) {
//         console.log('The request succeeded');
//         console.log(xhr.response)
//         let parsedResponse = JSON.parse(xhr.response)
//         console.log(xhr.response.academy)
//         console.log(parsedResponse.academy)
//         console.log(parsedResponse)
//     } else {
//         console.log('The request has failed');
//         console.log(xhr.responseText)
//     }
// }

// xhr.open('GET', "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G5/Class03/group-one.json")

// xhr.send();

// AJAX (jQuery)

// let codeAcademy;

// $.ajax({
//     url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G7/Class03/group-one.json",
//     success: function (response) {
//         console.log('The request succeeded');
//         // console.log(response);
//         // const parsedResponse = JSON.parse(response);
//         // console.log(parsedResponse)
//         codeAcademy = JSON.parse(response);
//         logAcademy();
//     },
//     error: function (error) {
//         console.log('Request has failed')
//         console.log(error.responseText)
//     },
// })

// console.log('All done');
// console.log('GLOBAL', codeAcademy)

// function logAcademy() {
//     console.log('INSIDE FUNC', codeAcademy)
// }

// Fetch

// let codeAcademy;

// const test = function (name) {
//     console.log('testing', name)
// }

// test('ivo');

const parseJson = function (response) {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('request failed')
    }
}

const logResponse = function (parsedResponse) {
    codeAcademy = parsedResponse
    console.log(parsedResponse)
}

const handleError = function (error) {
    console.log(error)
}

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/G5/Class03/group-one.json")
    .then(parseJson)
    .then(logResponse)
    .catch(handleError)

// console.log(codeAcademy)

// Calling my own function
// logResponse({})

// Using a callback function
// A reference to a function some other method will call
// .then(logResponse)