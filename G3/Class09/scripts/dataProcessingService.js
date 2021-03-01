function DataProcessingService() {
    this.apiService = new ApiService();

    // data processing methods
    this.getAllCountries = function (element) {
        this.apiService.getAll()
            .then(response => response.json())
            .then(data => this.mapCountries(data))
            .then(countries => {
                // we slice the array for demo presentation
                // TODO: implement pagination
                let someCountries = countries.slice(0, 16); 
                this.showCountries(someCountries, element)
            })
            .catch(error => {
                // TODO: implement error handling
                console.log(error);
            });
    };

    this.searchCountriesByName = function (name, element) {
        this.apiService.searchByName(name)
            .then(data => this.mapCountries(data))
            .then(countries => this.showCountries(countries, element))
            .catch(error => {
                // TODO: implement error handling
                console.log(error);
            });
    }

    this.searchCountriesByCapitolName = async function (capitol, element) {
        let data = await this.apiService.searchByCapitolName(capitol);
        let countries = await this.mapCountries(data);
        this.showCountries(countries, element);
    }

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
                    <img src="${country.flag}" height="200" class="card-img-top" alt="${country.name} national flag">
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