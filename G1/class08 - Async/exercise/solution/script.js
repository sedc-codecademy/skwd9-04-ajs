let countryCodeInput = document.getElementById("countryCodeInput")
let getInfoBtn = document.getElementById("getInfo")

function getCountryByCode(code) {
    return fetch("https://restcountries.eu/rest/v2/alpha/" + code).then(res => res.json())
}

async function getBorderingCountries(countries) {
    for (let code of countries) {
        let country = await getCountryByCode(code)
        console.log(country)
    }
}

getInfoBtn.addEventListener("click", async () => {
    let result = await getCountryByCode(countryCodeInput.value)
    await getBorderingCountries(result.borders)
})