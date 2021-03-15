class App {
  constructor() {
    this.getAllCountries();
  }

  countries = [];
  dataContainer = document.querySelector("#data-container");
  loader = document.querySelector("#loader");

  async getAllCountries() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();
    this.countries = countries.map(
      country =>
        new Country(
          country.name,
          country.borders,
          country.capital,
          country.flag,
          country.region,
          country.subregion,
          country.nativeName,
          country.alpha3Code,
          country.population,
          country.area,
          country.languages
        )
    );
    this.renderCountries(this.countries);
  }

  async renderCountries(countries) {
    this.loader.style.display = "block";
    this.dataContainer.style.display = "none";

    for (const country of countries) {
      this.dataContainer.innerHTML += `
        <div class="col-md-4">
          <div class="card" id="${country.alpha3Code}">
            <img src="${country.flag}" class="card-img-top" alt="Flag for ${
        country.name
      }" />
            <div class="card-body">
              <h5 class="card-title">${country.name} (${
        country.nativeName
      })</h5>
              <p class="card-text">Located in ${country.region}, ${
        country.subregion
      }</p>
            </div>
            <ul class="list-group list-group-flush">
             ${(await this.getNeighbors(country.borders)).join('')}
            </ul>
            <div class="card-body">
              <p>Population: ${country.population}</p>
              <p>Area: ${country.area}</p>
            </div>
          </div>
        </div>
        `;
    }

    this.loader.style.display = "none";
    this.dataContainer.style.display = "flex";
  }

  // code => country => list item
  async getNeighbors(codes) {
    const neighbors = await Promise.all(codes.map(async (code) => {
        let country = this.countries.find(country => country.alpha3Code === code);
        if (country?.name) {
            return `<li class="list-group-item"><a href="#${country.alpha3Code}">${country.name}</a></li>`
        }
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
        country = await response.json();
        console.log(code, country)
        return `<li class="list-group-item"><a href="#${country.alpha3Code}">${country.name}</a></li>`
    }))
    return neighbors;
  }
}

// bootstrap
const app = new App();

class Country {
  constructor(
    name,
    borders,
    capital,
    flag,
    region,
    subregion,
    nativeName,
    alpha3Code,
    population,
    area,
    languages
  ) {
    this.name = name;
    this.borders = borders;
    this.capital = capital;
    this.flag = flag;
    this.region = region;
    this.subregion = subregion;
    this.nativeName = nativeName;
    this.alpha3Code = alpha3Code;
    this.population = population;
    this.area = area;
    this.languages = languages;
  }
}
