// Get elements
const btnPeople = document.getElementById("btnPeople");
const btnShips = document.getElementById("btnShips");
const loader = document.getElementById("loader");
const result = document.getElementById("result");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

// If there was div with id="navigationButtons"
// const navigation = document.getElementById("navigationButtons");
// window.addEventListener("load", () => {
//     navigation.style.display = "none";
// });

// Global variables for dynamic manipulation of fetching the data
const baseUrl = "https://swapi.dev/api/";
let currentPage = 1; 

// Get all people
const getPeople = (page) => {
    // debugger;
    const peopleUrl = `${baseUrl}people/?page=${page}`
    toggleLoader(true);

    $.ajax({
        url: peopleUrl,
        success: (people) => {
            toggleLoader(false);
            console.log("All people", people);
            displayPeople(people.results)
        },
        error: (error) => {
            toggleLoader(false);
            console.error(error);
        }
    })
}

// Get all ships
const getShips = (page) => {
    const shipsUrl = `${baseUrl}starships/?page=${page}`;
    toggleLoader(true);

    $.ajax({
        url: shipsUrl,
        success: (ships) => {
            toggleLoader(false);
            console.log("Ships", ships);
            displayShips(ships.results)
        },
        error: (error) => {
            toggleLoader(false);
            console.error(error);
        }
    })
}

// #region Display Data
// Display People
const displayPeople = people => {
    if (people !== null) {
        result.innerHTML = '';
        result.innerHTML += `
            <div class="row">
                <div class="col-md-3">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth year</div>
                <div class="col-md-1">Films</div>
            </div>
        `;

        for (const person of people) {
            // debugger;
            result.innerHTML += `
                    <div class="row">
                    <div class="col-md-3">${person.name}</div>
                    <div class="col-md-2">${person.height}</div>
                    <div class="col-md-2">${person.mass}</div>
                    <div class="col-md-2">${person.gender}</div>
                    <div class="col-md-2">${person.birth_year}</div>
                    <div class="col-md-1">${person.films.length}</div>
                </div>
            `
        }

    }
    else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}

// Display Ships
const displayShips = ships => {
    if (ships !== null) {
        result.innerHTML = "";
        result.innerHTML += `
            <div class="row">
                <div class="col-md-2">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">People Capacity</div>
                <div class="col-md-2">Class</div>
            </div>
        `;
        for (const ship of ships) {
            let shipCrew = ship.crew.split("-");
            debugger;
            result.innerHTML += `
                <div class="row">
                    <div class="col-md-2">${ship.name}</div>
                    <div class="col-md-2">${ship.model}</div>
                    <div class="col-md-2">${ship.manufacturer}</div>
                    <div class="col-md-2">${ship.cost_in_credits}</div>
                    <div class="col-md-2">${parseInt(ship.passengers) + Number(shipCrew[shipCrew.length - 1])}</div>
                    <div class="col-md-2">${ship.starship_class}</div>
                </div>
            `;
        }

    }
    else {
        result.innerHTML += `<h2 color="red">There is something wrong with the data!</h2>`
    }
}
// #endregion

// toggle loader
const toggleLoader = toggle => {
    // debugger;
    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}

btnPeople.addEventListener("click", () => {
    currentPage = 1;
    getPeople(currentPage);
})

btnShips.addEventListener("click", () => {
    currentPage = 1;
    getShips(currentPage);
})