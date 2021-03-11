let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let resultDiv = document.getElementById("result");
let currentPage = 1;
let maxPages = 0;
let pageSize = document.getElementById("selectPageSize").value;
let sortBy = document.getElementById("sortBy").value;

document
    .getElementById("selectPageSize")
    .addEventListener("change", function (event) {
        // get selected value
        pageSize = event.target.value;
        // show data with pageSize
        showNumbersPerPage(numbers, pageSize, resultDiv, currentPage, sortBy);
        // get max pages
        maxPages = getMaxPages(numbers, pageSize);
        console.log(maxPages);
    });

document
    .getElementById("prev")
    .addEventListener("click", function () {
        if (currentPage <= 1) {
            return;
        }
        currentPage--;
        showNumbersPerPage(numbers, pageSize, resultDiv, currentPage, sortBy);
    });

document
    .getElementById("next")
    .addEventListener("click", function () {
        if (currentPage >= maxPages) {
            return;
        }
        currentPage++;
        showNumbersPerPage(numbers, pageSize, resultDiv, currentPage, sortBy);
    });

document
    .getElementById("sortBy")
    .addEventListener("change", function (event) {
        sortBy = event.target.value;
        showNumbersPerPage(numbers, pageSize, resultDiv, currentPage, sortBy);
    })

function showNumbersPerPage(numbers, pageSize, element, page, sortBy) {
    let sortedData = sortWithPaging(numbers, page, pageSize, sortBy);
    element.innerHTML = '';
    for (let num of sortedData) {
        element.innerHTML += `${num} <br>`;
    }
}

function getMaxPages(numbers, pageSize) {
    return Math.ceil(numbers.length / pageSize);
}

function sortWithPaging(numbers, page, pageSize, sortBy) {
    let parsedPageSize = Number(pageSize);
    // how much data will be taken
    let skip = (page - 1) * parsedPageSize;
    let take = skip + parsedPageSize;
    // ===
    let sortedData = sortData(numbers, sortBy);
    return sortedData.slice(skip, take);
}

function sortData(numbers, sortBy) {
    switch (sortBy) {
        case "asc":
            return numbers.sort((num, num1) => num - num1);
        case "desc":
            return numbers.sort((num, num1) => num1 - num);
        default:
            throw new Error("Not available sort");
    }
}

// set max pages
maxPages = getMaxPages(numbers, pageSize);
// show data with pagesize
showNumbersPerPage(numbers, pageSize, resultDiv, currentPage, sortBy);

console.log(maxPages);


