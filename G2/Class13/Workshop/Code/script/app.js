import {data as dataFromFile} from './data.js';

let promise = new Promise(function(resolve, reject){
    resolve(dataFromFile);
})

const html = {
    searchInput: document.getElementById("searchInput"),
    searchBtn: document.getElementById("searchBtn"),
    resetBtn: document.getElementById("resetBtn"),
    spiner: document.getElementById("spiner"),
    cardContainer: document.getElementById("cardContainer"),
    notification: document.getElementById("notification"),
    btnCurrency: document.getElementById("btnCurrency"),
    btnEnglish: document.getElementById("btnEnglish"),
    btnMacedonia: document.getElementById("btnMacedonia")
}

function createCard(country){
    return `
    <div class="col mb-4">
        <div class="card">
            <img src="${country.flag}" alt="${country.name} Flag">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <p class="card-text">${country.name} is country with population of ${country.population} with the capital city ${country.capital}. Official language is: ${country.languages[0].name}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${createWikiLink(country.name)}" target="_blank">Wikipedia</a></small>
            </div>
        </div>
    </div>`
}

function createWikiLink(name){
    return name.split(" ").join("_");
}

function spinerLoader(state){
    if(state){
        html.spiner.style.display = "block";
    } else {
        html.spiner.style.display = "none";
    }
}

html.searchBtn.addEventListener("click", function(){
    spinerLoader(true);
    fetch(`https://restcountries.eu/rest/v2/name/${html.searchInput.value}`)
    .then(data => data.json())
    .then(function(result){
        spinerLoader(false);
        html.notification.innerHTML = "";
        html.cardContainer.innerHTML = "";
        try{
            for(let country of result){
                html.cardContainer.innerHTML += createCard(country);
            }
        } catch(error){
            html.notification.innerHTML = `
            <div class="alert alert-danger" role="alert">
                You have entered a wrong country name, please try again!
            </div>
            `
        }
    })
})

html.searchInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        spinerLoader(true);
        fetch(`https://restcountries.eu/rest/v2/name/${html.searchInput.value}`)
        .then(data => data.json())
        .then(function(result){
            spinerLoader(false);
            html.cardContainer.innerHTML = "";
            html.notification.innerHTML = "";
            try{
                for(let country of result){
                    html.cardContainer.innerHTML += createCard(country);
                }
            } catch(error){
                html.notification.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    You have entered a wrong country name, please try again!
                </div>`
            }
        })
    }
})

html.resetBtn.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.searchInput.innerHTML = "";
    html.searchInput.value = "";
    html.notification.innerHTML = "";
})

html.btnCurrency.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";

    promise.then(function(dataFromFile){
        let result = dataFromFile.filter(x => x.currencies[0].code === "EUR");
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})

html.btnEnglish.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";

    promise.then(function(dataFromFile){
        let results = dataFromFile.filter(x => x.languages[0].name === "English");
        results.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})

html.btnMacedonia.addEventListener("click", function(){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";

    promise.then(function(dataFromFile){
        let result = dataFromFile.filter(x => x.name.includes("Macedonia"));
        result.forEach(country => {
            html.cardContainer.innerHTML += createCard(country);
        })
    })
})