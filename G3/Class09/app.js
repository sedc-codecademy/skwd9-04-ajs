function App() {
    this.dataProcessingService = new DataProcessingService();
    this.result = document.getElementById("result");
    this.allCountries = document.getElementById("allCountries");
 
    this.init = function () {
        //console.log("Our app is working");
        this.allCountries.addEventListener('click', () => {
            this.dataProcessingService.getAllCountries(this.result);
        });
    }
}

function DataProcessingService() {
    this.apiService = new ApiService();

    // data processing methods
    this.getAllCountries = function (element) {
        this.apiService.getAll()
            .then(response => response.json())
            .then(data => this.mapCountries(data))
            .then(countries => {
                let someCountries = countries.slice(0, 16); 
                this.showCountries(someCountries, element)
            });
    };

    this.mapCountries = function (countries) {
        return new Promise((resolve, reject) => {
            if (!countries || countries.length === 0) {
                reject("Something went wrong!");
            }
            let mapedCountries = countries.map(country => {
                return {
                    name: country.name,
                    capital: country.capital,
                    flag: country.flag,
                    area: country.area,
                    population: country.population
                }
            });
            resolve(mapedCountries);
        });
    };

    this.showCountries = function (countries, element) {
        element.innerHTML = "";
        let html = `<div class="row">`;

        for (let country of countries) {
            let col = `<div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="${country.flag}" class="card-img-top" alt="${country.name} national flag">
                    <div class="card-body">
                        <h5 class="card-title">${country.name}</h5>
                        <p class="card-text">
                            Capital: ${country.capital},
                            Population: ${country.population},
                            Area: ${country.area}
                        </p>
                    </div>
                </div>
            </div>`;
            html += col;
        }

        html += "</div>";
        element.innerHTML = html;
    }
}

function ApiService() {
    this.baseUrl = "https://restcountries.eu/rest/v2/";
    
    // api calls
    this.getAll = function () {
        let url = `${this.baseUrl}all`;
        return fetch(url);
    }
}



let app = new App();
app.init();