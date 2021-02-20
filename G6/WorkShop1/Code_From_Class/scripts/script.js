// Selecting elements

const peopleCard = $("#getPeople");
const shipsCard = $("#getShips");
const spinner = $("#loader");
const resultDiv = $("#result");

const baseUrl = "https://swapi.dev/api/";
let peoplePage = 1;
let shipsPage = 1;


// Function for getting people
const getPeople = () => {
    const url = `${baseUrl}people/?page=${peoplePage}`;
    $.ajax({
        url,
        success: response => {
            // for now just log the response
            console.log(response);
        },
        error: error => {
            console.log(error);
        }
    })
}

// function for getting ships
const getShips = () => {
    const url = `${baseUrl}starships/?page=${shipsPage}`;
    $.ajax({
        url,
        success: response => {
            // for now just log the response
            console.log(response);
        },
        error: error => {
            console.log(error);
        }
    })
}

peopleCard.click(() => {
    // adding active-card class to people card and removing it from ships card so with css we will set different background color to the selected one
    peopleCard.addClass("active-card");
    shipsCard.removeClass("active-card")
    // call getPeople function to get people on clicking people card
    getPeople();
})

shipsCard.click(() => {
    // adding active-card class to ships card and removing it from people card so with css we will set different background color to the selected one
    shipsCard.addClass("active-card");
    peopleCard.removeClass("active-card");
    // call getShips function to get ships when ships card is clicked
    getShips();
})







// THIS IS EXTRA FROM QUESTIONS FROM THE END OF THE CLASS ABOUT HOMEWORKS
// HINT: MAYBE WE CAN REUSE IT LATER IN THIS APP ?


function Person(data) {
    this.name = data.name;
    this.height = data.height;
    this.weight = data.mass;
    this.eyeColor = data.eye_color;
}

// imagine that we have this in response from API
const person = { name: "Goce", height: "190", mass: "80", eye_color: "brown" }

//function for creating the table
function createTable(person) {
    // by this we are filtering only desired properties from the response
    let newPerson = new Person(person);

    //columns that the table should have (hardcoded, note we can do this dinamically with Object.keys() like bellow in the code)
    const columns= ["name", "height", "weight", "eyeColor"];

    // creating table html element 
    // let table = document.createElement("table") // without JQUERY
    let table = $("<table>");

    // adding class on the table se we can use styling for table from bootstrap
    table.addClass("table")

    //setting all texts in the table with white color
    table.css("color", "white")
        
    //creating <thead> </thead> element
    let tablehead = $("<thead>");

    // creating row for the header
    let headerRow = $("<tr>");

    // creating <th> elements for every element in columns set element's value as text to that <th> and append it to the header row
    columns.forEach(column => {
        let th = $("<th>")
        th.text(column);
        headerRow.append(th);
    })

    // append header row to <thead>
    tablehead.append(headerRow);

    // append <thead> to table
    table.append(tablehead);

    // creating <tbody></tbody> for the table
    let tableBody = $("<tbody>");

    // as it is one person we need to create only one row for <tbody>
    let bodyRow = $("<tr>");


    // Object.keys(object here) => this returns new array with the object keys (the object properties names) => [name, height, weight, eyeColor]
    // We iterate through this array returned to create <td> elements for every object property and add it to the row
    Object.keys(newPerson).forEach(propertyName => {
        let td = $("<td>");
        td.text(newPerson[propertyName]);
        bodyRow.append(td);
    })

    // append the row to <tbody>
    tableBody.append(bodyRow);

    // append the <tbody> to the table
    table.append(tableBody);

    //apend table to div with id result
    resultDiv.append(table)
}


// createTable(person)