let tbody = document.getElementById("tbody");

// [DOM Selectors for filtering]
const filterSelect = document.querySelector("#filter-type");
const filterInput = document.querySelector("#filter-input");

// [Dom selectors for population filtering]
const popFilterSelect = document.querySelector("#population-filter");
const popForm = document.querySelector("#pop-form");

// We pulled the data in the global scope. This way, we no longer have to make additional API calls every time we filter or sort the data.
// Instead we can simply filter and sort the data, without altering it.
// Storing the data in the global scope like this is also called caching. (Putting it in the cache.)
let initialArray = [];

const fetchData = () => {
  let url = "https://restcountries.eu/rest/v2/all";
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      // We can use .map() to create a new array,
      // on line 22 we add a entirely new property called index
      //   initialArray = data.map((item, index) => {
      //     item.index = index + 1;
      //     return item;
      //   });

      // Mapping the data Part 2. Detailed comments on line 196
      initialArray = mapNecessaryData(data);
      console.log(initialArray);
      initPagination(initialArray, tbody);
    },
    error: function (error) {
      console.log(error);
    },
  });
};

const displayItems = (data, element) => {
  let tableData = "";
  // let i = 1;
  element.innerHTML = "";
  // OLD WAY
  //   for (const country of data) {
  //     tableData += `
  //             <tr>
  //                 <td>${country.index}</td>
  //                 <td>
  //                     <img src="${country.flag}" width="50px" />
  //                 </td>
  //                 <td>${country.name}</td>
  //                 <td>${country.capital}</td>
  //                 <td>${country.area} km <sup>2</sup> </td>
  //                 <td>${country.population}</td>
  //                 <td>${country.region}</td>
  //             </tr>
  //         `;
  //   }

  // NEW WAY
  data.forEach((country) => {
    tableData += `
            <tr>
                <td>${country.index}</td>
                <td>
                    <img src="${country.flag}" width="50px" />
                </td>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.area} km <sup>2</sup> </td>
                <td>${country.population}</td>
                <td>${country.region}</td>
            </tr>
        `;
  });
  element.innerHTML = tableData;
};

const initPagination = (data, element) => {
  $("#paginator").pagination({
    dataSource: data,
    pageSize: 10,
    showPageNumbers: false,
    showNavigator: true,
    callback: function (data, pagination) {
      console.log(pagination);
      displayItems(data, element);
    },
  });
};

fetchData();

filterInput.addEventListener("keyup", (e) => {
  // This event fires with every character that we add or remove
  // from the filter input

  const filterValue = e.target.value; // Equivalent to filterInput.value;
  const filterType = filterSelect.value;
  /* 
  We always declare a new empty array that we will eventually
  fill with the filtered data.
  We never want to alter the initial data.
   */
  let filteredArray = [];

  console.log("Event fired!");
  console.log("Filter by", filterType);
  console.log("Filter Value", filterValue);

  /* 
  We use switch here because we know all the values that can come
  from the filter type select.
  */
  switch (filterType) {
    case "filter-name":
      filteredArray = initialArray.filter(
        (country) =>
          country.name.toLowerCase().includes(filterValue.toLowerCase())
        /* We use toLowerCase to avoid working with case sensitive strings
         .includes() is a string & array method that checks whether a certain value
         is contained within a string (or array)
         Ex.
            const str = 'banana';
            arr.includes('ana') -- returns true;
            arr.includes('azr') -- returns false;
         */
      );
      initPagination(filteredArray, tbody);
      break;
    case "filter-region":
      filteredArray = initialArray.filter((country) =>
        country.region.toLowerCase().includes(filterValue.toLowerCase())
      );
      initPagination(filteredArray, tbody);
      break;
  }
});

popForm.addEventListener("submit", (event) => {
  // Prevent default behavior of browser
  event.preventDefault();
  let filteredArray = [];
  // Get the values for filtering (from the Select)
  const filterVal = popFilterSelect.value;

  // Splits a string into an array, with an optional separator.
  // If the separator isn't provided, it will split by ""
  const range = filterVal.split("-");

  const fromVal = parseInt(range[0]);
  let toVal;

  // We use this to go around the error that would be thrown
  // if we try to parse Infinity into an integer (with parseInt)
  if (range[1] !== "Infinity") {
    toVal = parseInt(range[1]);
  } else {
    toVal = range[1];
  }

  filteredArray = initialArray.filter((country) => {
    // Filter using the values we got from the Select
    // IS Population BETWEEN fromVal AND toVal
    if (country.population >= fromVal && country.population <= toVal) {
      return true;
    } else {
      return false;
    }
  });
  initPagination(filteredArray, tbody);
});

// [Filter works like this in the background (pseudo)]
// initialArray.forEach((country) => {
//     if (country.population >= range[0] && country <= range[1]) {
//         // return true;
//         filteredArray.push(country);
//       } else {
//         return false;
//       }
// })

// [How to concatenate an array with separators] - [Array.join() method showcase]
// const arr = [1, 2, 3, 4, 5];
// const str = arr.join("-");
// console.log(str);

// [How to split a string into an array] - [String.split() showcase]
// const banana = "banana";
// const banArr = banana.split("");
// console.log(banArr);

/*
Often the data that we receive from the backend will not be structured in a way that we can or want to use,
or it will contain a lot of unnecessary data.
Therefore .map() provides an excellent way to iterate an array and make elegant changes to every object 
in the data structure. 

In the example below, we take only the country properties 

*/

const mapNecessaryData = (countryArray) => {
  const mappedCountryArray = countryArray.map((country, index) => {
    const newCountry = {
      index: index + 1,
      flag: country.flag,
      name: country.name,
      capital: country.capital,
      area: country.area,
      population: country.population,
      region: country.region,
    };
    return newCountry;
  });
  return mappedCountryArray;
};

const starterArray = [2, 4, 1, 3, 6, 5, 7, 10, 9, 8];

// How .filter() works
const filtered = starterArray.filter((element) => {
  if (element % 2 === 0) {
    return true;
    // In the background returning true in the callback means
    // filtered.push(element)
  }
});

// How .sort() works
const sorted = starterArray.sort((first, second) => {
  console.log(`Is ${first} GREATER or LESSER than ${second}`);

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  if (first === second) {
    return 0;
  }
});
