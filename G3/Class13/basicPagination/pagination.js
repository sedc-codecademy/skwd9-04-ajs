let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let resultDiv = document.getElementById("result");
let currentPage = 1;
let maxPages = 0;
let pageSize = 0;

document
    .getElementById("selectPageSize")
    .addEventListener("change", function (event) {
        // get selected value
        pageSize = event.target.value;
        // show data with pageSize
        showNumbersPerPage(numbers, pageSize, resultDiv);
        // get max pages
        maxPages = getMaxPages(numbers, pageSize);
        console.log(maxPages);
    });

document
    .getElementById("prev")
    .addEventListener("click", function () {
        if (currentPage < 1) {
            return;
        }
        showNumbersPerPage(numbers, pageSize, resultDiv);
    });

document
    .getElementById("next")
    .addEventListener("click", function () {
        console.log("Im Next");
    });


function showNumbersPerPage(numbers, pageSize, element, page) {
    
    let numbersToBeShown = numbers.slice(0, pageSize);
    element.innerHTML = '';
    for (let num of numbersToBeShown) {
        element.innerHTML += `${num} <br>`;
    }
}

function getMaxPages(numbers, pageSize) {
    return Math.ceil(numbers.length / pageSize);
}

// get initial page size
let initialPageSize = document.getElementById("selectPageSize").value;
// set max pages
maxPages = getMaxPages(numbers, initialPageSize);
// show data with pagesize
showNumbersPerPage(numbers, initialPageSize, resultDiv);

console.log(maxPages);


