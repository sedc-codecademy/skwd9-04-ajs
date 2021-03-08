let data = fetch("https://restcountries.eu/rest/v2/all")
.then(data => data.json())
.then(function(result){
    data = result;
    return data;
})

export {data};