class App {
  constructor() {
    this.getAllCountries();
    this.setEventHandlers();
  }

  countries = [];
  allLanguages = new Set();
  isAsc = true;
  sortBy = "area";

  dataContainer = document.querySelector("#data-container");
  loader = document.querySelector("#loader");
  languagesSelect = document.querySelector("#languages");
  regionInputs = document.querySelectorAll('input[name="region"]');
  sortDirectionInputs = document.querySelectorAll(
    'input[name="sort-direction"]'
  );
  sortByInputs = document.querySelectorAll('input[name="sort"]');

  setEventHandlers() {

    // filter by region
    this.regionInputs.forEach(input =>
      input.addEventListener("input", e => {
        if (e.target.id === "All") {
          this.renderCountries(this.countries);
          return;
        }
        const countries = this.countries.filter(
          country => country.region === e.target.id
        );
        this.renderCountries(countries);
      })
    );

    // sort by area or population
    this.sortByInputs.forEach(input =>
      input.addEventListener("input", e => {
        this.sortBy = e.target.id;
        this.sortCountries(this.isAsc, e.target.id);
      })
    );

    // sort by ascending or descending
    this.sortDirectionInputs.forEach(input =>
      input.addEventListener("input", e => {
        this.isAsc = e.target.id === "asc" && e.target.checked; // if the radio ascending is checked = true, if not false
        this.sortCountries(this.isAsc, this.sortBy);
      })
    );

    // get the countries where the languages property, contains the selected language
    this.languagesSelect.addEventListener("input", e => {
      const countries = this.countries.filter(
        country =>
          !!country.languages.filter(
            language => language.name === e.target.value
          ).length // case 1: [] - false case 2: ['lang'] = true
      );
      this.renderCountries(countries);
    });
  }

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
    this.countries.forEach(country =>
      country.languages.forEach(language =>
        this.allLanguages.add(language.name) // add all the languages to the total list of languages
      )
    );
    this.renderCountries(this.countries);
  }

  listLanguages() { //add option for each language
    this.allLanguages.forEach(language => {
      this.languagesSelect.innerHTML += `<option value="${language}">${language}</option>`;
    });
  }

  async renderCountries(countries) {
    this.loader.style.display = "block";
    this.dataContainer.style.display = "none";

    this.dataContainer.innerHTML = ""; //reset the countries list in the DOM

    for (const country of countries) { // forEach does not work with async await, so we need to go back to for of
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
             ${(await this.getNeighbors(country.borders)).join("") /* we need to await as the function returns a promise */}
            </ul>
            <div class="card-body">
              <p>Population: ${country.population}</p>
              <p>Area: ${country.area}</p>
            </div>
          </div>
        </div>
        `;
    }

    this.listLanguages();
    this.loader.style.display = "none";
    this.dataContainer.style.display = "flex";
  }

  // mapping: code => country => list item
  async getNeighbors(codes) {
    // wait for the promise all to return value
    const neighbors = await Promise.all( //wait for all promises to resolve to return a single promise
      codes.map(async code => { // needs to be async as we make a call to get the country for each code
        let country = this.countries.find(
          country => country.alpha3Code === code
        );
        // if we already have stored the country, no need to make a call to be API
        if (country?.name) {
          return `<li class="list-group-item"><a href="#${country.alpha3Code}">${country.name}</a></li>`;
        }
        const response = await fetch(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );
        country = await response.json();
        console.log(code, country);
        return `<li class="list-group-item"><a href="#${country.alpha3Code}">${country.name}</a></li>`;
      })
    );
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
