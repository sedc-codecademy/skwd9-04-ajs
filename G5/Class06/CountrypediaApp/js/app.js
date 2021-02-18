let tbody = document.getElementById('tbody');

const fetchData = () => {
    let url = 'https://restcountries.eu/rest/v2/all';
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            initPagination(data, tbody);
        },
        error: function (error) {
            console.log(error);
        }
    });
}

const displayItems = (data, element) => {
    let tableData = '';
    let i = 1;
    element.innerHTML = '';
    for (const country of data) {
        tableData += `
            <tr>
                <td>${i++}</td>
                <td>
                    <img src="${country.flag}" width="50px" />
                </td>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.area} km <sup>2</sup> </td>
                <td>${country.population}</td>
                <td>${country.region}</td>
            </tr>
        `
    }
    element.innerHTML = tableData;
}

const initPagination = (data, element) => {
    $('#paginator').pagination({
        dataSource: data,
        pageSize: 10,
        showPageNumbers: false,
        showNavigator: true,
        callback: function(data, pagination) {
            console.log(pagination);
            displayItems(data, element);
        }
    });
}

fetchData();