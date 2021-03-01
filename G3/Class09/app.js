function App() {
    this.dataProcessingService = new DataProcessingService();
    this.result = document.getElementById("result");
    this.allCountries = document.getElementById("allCountries");
    this.searchBtn = document.getElementById("searchBtn");
    this.searchInput = document.getElementById("searchInput");
    this.selectionList = document.getElementById("searchSelection");
    this.searchSelection = "0";
 
    this.init = function () {
        //console.log("Our app is working");
        this.allCountries.addEventListener('click', () => {
            this.dataProcessingService.getAllCountries(this.result);
        });

        this.searchBtn.addEventListener('click', () => {
            this.searchBySelection();
        });

        this.searchInput.addEventListener('keyup', (event) => {
            this.searchBySelection()
        });

        this.selectionList.addEventListener('change', (event) => {
            this.searchSelection = event.target.value;
        });
    }

    this.searchBySelection = function () {
        let name = this.searchInput.value;
        switch (selections[this.searchSelection]) {
            case selections[0]:
                this.dataProcessingService.searchCountriesByName(name, this.result);
                break;
            case selections[1]:
                this.dataProcessingService.searchCountriesByCapitolName(name, this.result);
                break;
            default:
                console.log("ERROR");
                break;
        };
    }
}

let app = new App();
app.init();