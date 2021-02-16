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
const baseUrl = "https://swapi.dev/api/"  

// Get all people
const getPeople = () => {
    // debugger;
    const peopleUrl = `${baseUrl}people/`
    toggleLoader(true);

    $.ajax({
        url: peopleUrl,
        success: (people) => {
            toggleLoader(false);
            console.log("All people", people);
        },
        error: (error) => {
            toggleLoader(false);
            console.error(error);
        }
    })
}

// Get all ships
const getShips = () => {
    const shipsUrl = `${baseUrl}starships/`;
    toggleLoader(true);

    $.ajax({
        url: shipsUrl,
        success: (ships) => {
            toggleLoader(false);
            console.log("Ships", ships);
        },
        error: (error) => {
            toggleLoader(false);
            console.error(error);
        }
    })
}

// toggle loader
const toggleLoader = toggle => {
    // debugger;
    if (toggle)
        loader.style.display = "block";
    else
        loader.style.display = "none";
}

getPeople();
// getShips();