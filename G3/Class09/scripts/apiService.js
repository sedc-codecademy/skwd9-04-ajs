function ApiService() {
    this.baseUrl = "https://restcountries.eu/rest/v2/";
    
    // api calls
    this.getAll = function () {
        let url = `${this.baseUrl}all`;
        return fetch(url);
    };

    this.searchByName = function (name) {
        let url = `${this.baseUrl}name/${name}`;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (response) {
                    resolve(response);
                },
                error: function (error) {
                    reject(error);
                }
            })
        });
    };

    this.searchByCapitolName = async function (capital) {
        // TODO: implement with async till end
        let url = `${this.baseUrl}capital/${capital}`;
        let response = await fetch(url);
        return await response.json();
    }
}