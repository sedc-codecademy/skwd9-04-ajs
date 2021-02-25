let countryInput = document.getElementById("countryInput");
let getDataBtn = document.getElementById("getData")

const baseUrl = "https://restcountries.eu/rest/v2/alpha/";

function getCountryData(code) {
    debugger;
    return fetch(baseUrl + code)
                .then(response => response.json())
                .catch(error => console.error(error))
}

async function getNeighbors(neighbors) {
    debugger;
    console.log("Neighbors: ")
    for (const neighbor of neighbors) {
        let country = await getCountryData(neighbor)
        console.log(country);
    }
}

getDataBtn.addEventListener('click', () => {
    debugger;
    console.log("Country: ");
    getCountryData(countryInput.value)
        .then(response => {
            debugger;
            console.log(response)
            getNeighbors(response.borders)
        })
})