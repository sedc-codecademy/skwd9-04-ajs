let navService = {
    navItems: document.getElementsByClassName("nav-item"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    activateItem: function(item) {
        for (let navItem of this.navItems) {
            navItem.classList.remove("active")
        }
        item.classList.add("active")
    },
    showPage: function(page) {
        for (let pageElement of this.pages) {
            pageElement.style.display = "none"
        }
        page.style.display = "block"
    },
    registerNavListeners: function() {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener("click", function() {
                navService.activateItem(this)
                navService.showPage(navService.pages[i])
            })
        }
        this.searchBtn.addEventListener("click", function(event) {
            event.preventDefault()
            weatherService.city = navService.navSearch.value
            apiLimiterService.setLimiter(5)
            apiLimiterService.shouldBlockCalls 
                ? alert("the limit is exceeded!")
                : weatherService.getData()
        })
    }
}

let apiLimiterService = {
    shouldBlockCalls: false,
    apiCallsCounter: 0,
    currentMinute: new Date().getMinutes(),
    setLimiter: function(callsPerMinute) {
        if (apiLimiterService.currentMinute === new Date().getMinutes()) {
            apiLimiterService.apiCallsCounter > callsPerMinute
                ? apiLimiterService.shouldBlockCalls = true
                :  apiLimiterService.shouldBlockCalls = false  
        } else {
            apiLimiterService.apiCallsCounter = 0
            apiLimiterService.currentMinute = new Date().getMinutes()
            piLimiterService.shouldBlockCalls = false
        }
    }
}

let weatherService = {
    apiKey: "74e59f6374abe0d9b758877616ae444c",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    cachedData: null,
    getData: function() {
        $.ajax({
            url: `${this.apiUrl}?q=${this.city}&units=metric&appid=${this.apiKey}`,
            success: function(response) {
                apiLimiterService.apiCallsCounter++
                weatherService.cachedData = response
                console.log(response)
                uiService.loadStatistics(response)
                uiService.loadHourlyTable(response, pagingService.from, pagingService.to)
                uiService.statisticsCity.innerHTML = response.city.name
                uiService.hdCity.innerHTML = response.city.name
                pagingService.setTotalPages(response.list)
                pagingService.createPagingButtons()
            },
            error: function(error) {
                console.log("The request has failed")
                console.log(error.responseText)
            }
        })
    },
    getCachedData: function() {
        uiService.loadHourlyTable(weatherService.cachedData, pagingService.from, pagingService.to)
    },
    getSortedData: function() {

        let sortedArray = weatherService.cachedData.list.sort((a, b) => (a.weather[0].description > b.weather[0].description ? 1 : -1))
        weatherService.cachedData.list = sortedArray

        uiService.loadHourlyTable(weatherService.cachedData, pagingService.from, pagingService.to)

    },
    aggregateStatistics: function(data) {
        let temperatureSum = 0;
        let highestTemperature = data.list[0]
        let lowestTemperature = data.list[0]
        let humiditySum = 0
        let highestHumidity = data.list[0]
        let lowestHumidity = data.list[0]

        for (let reading of data.list) {
            temperatureSum += reading.main.temp
            humiditySum += reading.main.humidity

            if (highestTemperature.main.temp < reading.main.temp) {
                highestTemperature = reading
            }

            if (highestTemperature.main.temp > reading.main.temp) {
                lowestTemperature = reading
            }

            if (highestHumidity.main.humidity < reading.main.humidity) {
                highestHumidity = reading
            }

            if (lowestHumidity.main.humidity > reading.main.humidity) {
                lowestHumidity = reading
            }
        }

        return {
            temperature: {
                highest: highestTemperature.main.temp,
                average: temperatureSum/data.list.length,
                lowest: lowestTemperature.main.temp
            },
            humidity: {
                highest: highestHumidity.main.humidity,
                average: humiditySum/data.list.length,
                lowest: lowestHumidity.main.humidity
            },
            warmentsTime: helperService.unixTimeStampToDate(highestTemperature.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemperature.dt)
        }
    }
}

let uiService = {
    statisticResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
    hdCity: document.getElementById("hdCity"),
    statisticsCity: document.getElementById("statisticsCity"),
    loadStatistics: function(data) {
        let statisticsData = weatherService.aggregateStatistics(data)
        this.statisticResult.innerHTML = `
            <div class="mb-5">
                <div class="row">
                    <div class="col-md-6">MAX TEMP: ${Math.round(statisticsData.temperature.highest)} C</div>
                    <div class="col-md-6">MAX HUMD: ${statisticsData.humidity.highest} %</div>
                </div>
                <div class="row">
                    <div class="col-md-6">AVG TEMP: ${statisticsData.temperature.average.toFixed(1)} C</div>
                    <div class="col-md-6">AVG HUMD: ${statisticsData.humidity.average} %</div>
                </div>
                <div class="row">
                    <div class="col-md-6">LOW TEMP: ${Math.round(statisticsData.temperature.lowest)} C</div>
                    <div class="col-md-6">LOW HUMD: ${statisticsData.humidity.lowest} %</div>
                </div>
            </div>
            <h4>Warmest time of the following period: ${statisticsData.warmentsTime.toDateString()} </h4>
            <h4>Coldest time of the following period: ${statisticsData.coldestTime.toDateString()} </h4>
        `
    },
    loadHourlyTable: function(data, from = 0, to = 10) {
        this.tableResult.innerHTML = ""
        for (let i = from; i < to; i++) {
            this.tableResult.innerHTML += `
                <div class="row">
                    <div class="col-md-2">
                        <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="weahter-icon">
                    </div>
                    <div class="col-md-2">${data.list[i].weather[0].description}</div>
                    <div class="col-md-2">${helperService.unixTimeStampToDate(data.list[i].dt).toDateString()}</div>
                    <div class="col-md-2">${data.list[i].main.temp} C (${data.list[i].main.feels_like} C)</div>
                    <div class="col-md-2">${data.list[i].main.humidity}</div>
                    <div class="col-md-2">${data.list[i].wind.speed}</div>
                </div>
            `
        }
    }
}

let pagingService = {
    pagePrev: document.getElementById("previousPageButton"),
    pageNext: document.getElementById("nextPageButton"),
    pagingButtonsContainer: document.getElementById("pagingButtons"),
    currentPageContainer: document.getElementById("currnetPage"),
    from: 0,
    to: 10,
    page: 1,
    totalPages: 0,
    registerPagingListeners: function() {
        this.pagePrev.addEventListener("click", function() {
            if (pagingService.page > 1) {
                pagingService.from -= 10
                pagingService.to -= 10
                pagingService.page--
            }

            pagingService.adaptPageButtons()
            weatherService.getCachedData()
        })

        this.pageNext.addEventListener("click", function() {
            if (pagingService.page < pagingService.totalPages) {
                pagingService.from += 10
                pagingService.to += 10
                pagingService.page++
            }

            pagingService.adaptPageButtons()
            weatherService.getCachedData()
        })
    },
    adaptPageButtons: function() {
        pagingService.page <= 1
            ? pagingService.pagePrev.style.display = "none"
            : pagingService.pagePrev.style.display = "inline"

        pagingService.page >= pagingService.totalPages
            ? pagingService.pageNext.style.display = "none"
            : pagingService.pageNext.style.display = "inline"

        pagingService.currentPageContainer.innerHTML = `<p>currnet page - ${pagingService.page}</p>`;
    },
    setTotalPages: function(list) {
        pagingService.totalPages = Math.ceil(list.length) / 10
    },
    createPagingButtons: function() {
        pagingService.pagingButtonsContainer.innerHTML = ""

        for (let i = 0; i < pagingService.totalPages; i++) {
            pagingService.pagingButtonsContainer.innerHTML += `
                <button class="btn btn-primary" id="page${i + 1}">${i + 1}</button>
            `
        }

        for (let i = 0; i < pagingService.totalPages; i++) {
            document.getElementById(`page${i + 1}`).addEventListener("click", function() {
                pagingService.from = i * 10;
                pagingService.to = (i + 1) * 10;
                pagingService.page = i + 1
                pagingService.adaptPageButtons()
                weatherService.getCachedData()
            })
        }
    }

}

let sortService = {
    descriptionSort: document.getElementById("sort"),
    registerSortListeners: function() {
        sortService.descriptionSort.addEventListener("click", function() {
            weatherService.getSortedData()
        })
    }

} 

let helperService = {
    unixTimeStampToDate: function(unixTimeStamp) {
        return new Date(unixTimeStamp * 1000)
    }
}

navService.registerNavListeners()
pagingService.registerPagingListeners()
sortService.registerSortListeners()
weatherService.getData()