// Selecting elements

const peopleCard = $("#getPeople");
const shipsCard = $("#getShips");
const spinner = $("#loader");
const resultDiv = $("#result");
const nextBtn = $("#next");
const previousBtn = $("#prev");
const paginationDiv = $("#pagination")

const baseUrl = "https://swapi.dev/api/";
let peoplePage = 1;
let shipsPage = 1;
let activeCard = '';

const peopleColumns = [
    "Name",
    "Height",
    "Mass",
    "Gender",
    "Birth Year",
    "Appearances",
];

const starShipsColumns = [
    "Name",
    "Model",
    "Manufacturer",
    "Cost",
    "People Capacity",
    "Class"
];

function Person(data) {
    this.name = data.name;
    this.height = data.height;
    this.mass = data.mass;
    this.gender = data.gender;
    this.birthYear = data.birth_year;
    this.appearances = data.films.length;
}

function StarShip(data) {
    this.name = data.name;
    this.model = data.model;
    this.manufacturer = data.manufacturer;
    this.cost = data.cost_in_credits;
    this.peopleCapacity = data.passengers;
    this.class = data.starship_class;
}

// With VANILA JS

function showSpinnerVanilaJS (show) {
    if (show) {
        document.getElementById("loader").style.display = "block"
    } else {
        document.getElementById("loader").style.display = "none"
    }
}


// WITH JQUERY
function showSpinner(show) {
    if (show) {
        spinner.css("display", "block");
    } else {
        spinner.css("display", "none");
    }
}


// Function for getting people with JQUERY
const getPeople = () => {
    // we want to show the spinner while request is processing
    showSpinner(true);
    // leave result div empty while request is processing
    resultDiv.html("");
    // hide the buttons while request is processing
    paginationDiv.css("display", "none");
    // with setTimeout we simulate the request is taking 1.5 sec to see clearly the point of the spinner
    setTimeout(() => {
        // getting people
        fetch(`${baseUrl}people/?page=${peoplePage}`)
        // converting response in json => returns promise
        .then(res => res.json())
        // where we have the actual response that we can work with
        .then(response => {
            // we map people in response to use only properties that we need
            let people = response.results.map(person => new Person(person));
            // we want to hide spinner when request is processed
            showSpinner(false);
            console.log(response);

            // we check previous and next properties in response if they have truthy values or not
            // with what we can know if we should disable prev or next butons
            // Think about how can you improve this by your self till next workshop to be reusable
            if(!response.previous) {
                console.log("PREV BUTTON SHOULD BE DISABLED");
                previousBtn.attr("disabled", true);
            } else {
                console.log("PREV BUTTON SHOULD BE ENABLED");
                previousBtn.attr("disabled", false);
            }
            if(!response.next) {
                console.log("NEXT BUTTON SHOULD BE DISABLED");
                nextBtn.attr("disabled", true);
            } else {
                console.log("NEXT BUTTON SHOULD BE ENABLED");
                nextBtn.attr("disabled", false);
            }
            // show pagination buttons again
            paginationDiv.css("display", "flex");
            generateTable(people, peopleColumns);
        })
        .catch(error => {
            showSpinner(false);
            console.log(error);
        })
    }, 1500)
}

// Function for getting people with VANILA JS
const getPeopleVanilaJS = () => {
    // we want to show the spinner while request is processing
    showSpinner(true);
    // leave result div empty while request is processing
    document.getElementById("result").innerHTML = "";
    // hide the buttons while request is processing
    document.getElementById("pagination").style.display = "none";
    // with setTimeout we simulate the request is taking 1.5 sec to see clearly the point of the spinner
    setTimeout(() => {
        // getting people
        fetch(`${baseUrl}people/?page=${peoplePage}`)
        // converting response in json => returns promise
        .then(res => res.json())
        // where we have the actual response that we can work with
        .then(response => {
            // we map people in response to use only properties that we need
            let people = response.results.map(person => new Person(person));
            // we want to hide spinner when request is processed
            showSpinner(false);
            console.log(response);

            // we check previous and next properties in response if they have truthy values or not
            // with what we can know if we should disable prev or next butons
            // Think about how can you improve this by your self till next workshop to be reusable
            if(!response.previous) {
                console.log("PREV BUTTON SHOULD BE DISABLED");
                document.getElementById("prev").setAttribute("disabled", true);
            } else {
                console.log("PREV BUTTON SHOULD BE ENABLED");
                document.getElementById("prev").setAttribute("disabled", false);
            }
            if(!response.next) {
                console.log("NEXT BUTTON SHOULD BE DISABLED");
                document.getElementById("next").setAttribute("disabled", true);
            } else {
                console.log("NEXT BUTTON SHOULD BE ENABLED");
                document.getElementById("next").setAttribute("disabled", false);
            }
            // show pagination buttons again
            document.getElementById("pagination").style.display = "flex";
            generateTable(people, peopleColumns);
        })
        .catch(error => {
            showSpinner(false);
            console.log(error);
        })
    }, 1500)
}


// function for getting ships with JQUERY
const getShips = () => {
    // we want to show the spinner while request is processing
    showSpinner(true);
    // leave result div empty while request is processing
    resultDiv.html("");
    // hide the buttons while request is processing
    paginationDiv.css("display", "none");
    // with setTimeout we simulate the request is taking 1.5 sec to see clearly the point of the spinner
    setTimeout(() => {
        // getting ships
        fetch(`${baseUrl}starships/?page=${shipsPage}`)
        // converting response in json => returns promise
        .then(res => res.json())
        // where we have the actual response that we can work with
        .then(response => {
            // we map ships in response to use only properties that we need
            let starShips = response.results.map(ship => new StarShip(ship));
            // we want to hide spinner when request is processed
            showSpinner(false);

            // we check previous and next properties in response if they have truthy values or not
            // with what we can know if we should disable prev or next butons

            // Think about how can you improve this by your self till next workshop to be reusable
            if(!response.previous) {
                console.log("PREV BUTTON SHOULD BE DISABLED");
                previousBtn.attr("disabled", true);
            } else {
                console.log("PREV BUTTON SHOULD BE ENABLED");
                previousBtn.attr("disabled", false);
            }
            if(!response.next) {
                console.log("NEXT BUTTON SHOULD BE DISABLED");
                nextBtn.attr("disabled", true);
            } else {
                console.log("NEXT BUTTON SHOULD BE ENABLED");
                nextBtn.attr("disabled", false);
            }
            // show pagination buttons again
            paginationDiv.css("display", "flex");
            //call function to generate table with ships on screen
            generateTable(starShips, starShipsColumns)
        })
        .catch(error => {
            showSpinner(false);
            console.log(error);
        })
    }, 1500)   
}

// function for getting ships with VANILA JS
const getShipsVanilaJS = () => {
    // we want to show the spinner while request is processing
    showSpinner(true);
    // leave result div empty while request is processing
    document.getElementById("result").innerHTML = ""
    // hide the buttons while request is processing
    document.getElementById("pagination").style.display = "none";
    // with setTimeout we simulate the request is taking 1.5 sec to see clearly the point of the spinner
    setTimeout(() => {
        // getting ships
        fetch(`${baseUrl}starships/?page=${shipsPage}`)
        // converting response in json => returns promise
        .then(res => res.json())
        // where we have the actual response that we can work with
        .then(response => {
            // we map ships in response to use only properties that we need
            let starShips = response.results.map(ship => new StarShip(ship));
            // we want to hide spinner when request is processed
            showSpinner(false);

            // we check previous and next properties in response if they have truthy values or not
            // with what we can know if we should disable prev or next butons

            // Think about how can you improve this by your self till next workshop to be reusable
            if(!response.previous) {
                console.log("PREV BUTTON SHOULD BE DISABLED");
                document.getElementById("prev").setAttribute("disabled", true);
            } else {
                console.log("PREV BUTTON SHOULD BE ENABLED");
                document.getElementById("prev").setAttribute("disabled", false);
            }
            if(!response.next) {
                console.log("NEXT BUTTON SHOULD BE DISABLED");
                document.getElementById("next").setAttribute("disabled", true);
            } else {
                console.log("NEXT BUTTON SHOULD BE ENABLED");
                document.getElementById("next").setAttribute("disabled", false);
            }
            // show pagination buttons again
            document.getElementById("pagination").style.display = "flex";
            //call function to generate table with ships on screen
            generateTable(starShips, starShipsColumns)
        })
        .catch(error => {
            showSpinner(false);
            console.log(error);
        })
    }, 1500)   
}

// WITH VANILA JS
// document.getElementById("getPeople").addEventListener("click", () => {
//     document.getElementById("getPeople").classList.add("active-card");
//     document.getElementById("getShips").classList.remove("active-card");
//     activeCard = "peopleCard";
//     peoplePage = 1;
//     // call getPeople function to get people on clicking people card
//     getPeople();
// })

// With JQUERY
peopleCard.click(() => {
    // adding active-card class to people card and removing it from ships card so with css we will set different background color to the selected one
    peopleCard.addClass("active-card");
    shipsCard.removeClass("active-card");
    activeCard = "peopleCard";
    peoplePage = 1;
    // call getPeople function to get people on clicking people card
    getPeople();
})


//With Vanila KS

// document.getElementById("getShips").addEventListener("click", () => {
//     document.getElementById("getPeople").classList.remove("active-card");
//     document.getElementById("getShips").classList.add("active-card");
//     activeCard = "shipsCard";
//     shipsPage = 1;
//     // call getShips function to get ships when ships card is clicked
//     getShips();
// })


// with JQUERY
shipsCard.click(() => {
    // adding active-card class to ships card and removing it from people card so with css we will set different background color to the selected one
    shipsCard.addClass("active-card");
    peopleCard.removeClass("active-card");
    activeCard = "shipsCard";
    shipsPage = 1;
    // call getShips function to get ships when ships card is clicked
    getShips();
})

// with vanila JS

// document.getElementById("next").addEventListener("click", () => {
//     if(activeCard === "peopleCard") {
//         peoplePage++;
//         getPeople();
//     } else if(activeCard === "shipsCard") {
//         shipsPage++;
//         getShips();
//     }
// })

// with JQUERY
nextBtn.click(() => {
    if(activeCard === "peopleCard") {
        peoplePage++;
        getPeople();
    } else if(activeCard === "shipsCard") {
        shipsPage++;
        getShips();
    }
})

// with Vanila JS

// document.getElementById("prev").addEventListener("click", () => {
//     if(activeCard === "peopleCard") {
//         peoplePage--;
//         getPeople();
//     } else if(activeCard === "shipsCard") {
//         shipsPage--;
//         getShips();
//     }
// })

// with JQUERY
previousBtn.click(() => {
    if(activeCard === "peopleCard") {
        peoplePage--;
        getPeople();
    } else if(activeCard === "shipsCard") {
        shipsPage--;
        getShips();
    }
})

// with Vanila JS
// explanation for all lines what they do in this function you can find in the function commented bellow this one
// named createTable, because they are the same
function generateTableVanilaJS(data, columns) {
    let table = document.createElement("table");
    table.classList.add("table");
    table.style.color = "white";
    let tableHead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    columns.forEach(column => {
        let th = $("<th>");
        th.textContent = column;
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
    let tableBody = document.createElement("tbody");
    data.forEach(item => {
        let tableRow = document.createElement("tr");
        Object.keys(item).forEach(key => {
            let td = document.createElement("td");
            td.textContent = item[key];
            tableRow.appendChild(td);
        })
        tableBody.appendChild(tableRow);
    })
    table.appendChild(tableBody);
    resultDiv.innerHTML = table;
}

// with JQEURY
// explanation for all lines what they do in this function you can find in the function commented bellow this one
// named createTable, because they are the same
function generateTable(data, columns) {
    let table = $("<table>");
    table.addClass("table");
    table.css("color", "white");
    let tableHead = $("<thead>");
    let headerRow = $("<tr>");
    columns.forEach(column => {
        let th = $("<th>");
        th.text(column);
        headerRow.append(th);
    });
    tableHead.append(headerRow);
    table.append(tableHead);
    let tableBody = $("<tbody>");
    data.forEach(item => {
        let tableRow = $("<tr>");
        Object.keys(item).forEach(key => {
            let td = $("<td>");
            td.text(item[key])
            tableRow.append(td);
        })
        tableBody.append(tableRow);
    })
    table.append(tableBody);
    resultDiv.html(table);
}

// THIS IS EXTRA FROM QUESTIONS FROM THE END OF THE CLASS ABOUT HOMEWORKS
// HINT: MAYBE WE CAN REUSE IT LATER IN THIS APP ?


// function Person(data) {
//     this.name = data.name;
//     this.height = data.height;
//     this.weight = data.mass;
//     this.eyeColor = data.eye_color;
// }

// imagine that we have this in response from API
// const person = { name: "Goce", height: "190", mass: "80", eye_color: "brown" }

//function for creating the table
// function createTable(person) {
//     // by this we are filtering only desired properties from the response
//     let newPerson = new Person(person);

//     //columns that the table should have (hardcoded, note we can do this dinamically with Object.keys() like bellow in the code)
//     const columns= ["name", "height", "weight", "eyeColor"];

//     // creating table html element 
//     // let table = document.createElement("table") // without JQUERY
//     let table = $("<table>");

//     // adding class on the table se we can use styling for table from bootstrap
//     table.addClass("table")

//     //setting all texts in the table with white color
//     table.css("color", "white")
        
//     //creating <thead> </thead> element
//     let tablehead = $("<thead>");

//     // creating row for the header
//     let headerRow = $("<tr>");

//     // creating <th> elements for every element in columns set element's value as text to that <th> and append it to the header row
//     columns.forEach(column => {
//         let th = $("<th>")
//         th.text(column);
//         headerRow.append(th);
//     })

//     // append header row to <thead>
//     tablehead.append(headerRow);

//     // append <thead> to table
//     table.append(tablehead);

//     // creating <tbody></tbody> for the table
//     let tableBody = $("<tbody>");

//     // as it is one person we need to create only one row for <tbody>
//     let bodyRow = $("<tr>");


//     // Object.keys(object here) => this returns new array with the object keys (the object properties names) => [name, height, weight, eyeColor]
//     // We iterate through this array returned to create <td> elements for every object property and add it to the row
//     Object.keys(newPerson).forEach(propertyName => {
//         let td = $("<td>");
//         td.text(newPerson[propertyName]);
//         bodyRow.append(td);
//     })

//     // append the row to <tbody>
//     tableBody.append(bodyRow);

//     // append the <tbody> to the table
//     table.append(tableBody);

//     //apend table to div with id result
//     resultDiv.append(table)
// }


// createTable(person)

async function fetchUsersAsync() {
    try {
        console.log("BEFORE MAKING THE CALL");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.status)
        }
        let users = await response.json();
        console.log(users)
    } catch (error) {
        console.log(`Error Status ${error}`)
    }
}

fetchUsersAsync();
console.log("I DONT CARE ABOUT ASYNC");