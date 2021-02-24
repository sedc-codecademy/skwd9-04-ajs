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
            weatherService.getData()
        })
    }
}

let weatherService = {
    apiKey: "74e59f6374abe0d9b758877616ae444c",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    getData: function() {
        $.ajax({
            url: `${this.apiUrl}?q=${this.city}&units=metric&appid=${this.apiKey}`,
            success: function(response) {
                console.log(response)
                uiService.loadStatistics(response)
                uiService.loadHourlyTable(response)
                uiService.statisticsCity.innerHTML = response.city.name
                uiService.hdCity.innerHTML = response.city.name
            },
            error: function(error) {
                console.log("The request has failed")
                console.log(error.responseText)
            }
        })
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
    loadHourlyTable: function(data) {
        this.tableResult.innerHTML = ""
        for (let reading of data.list) {
            this.tableResult.innerHTML += `
                <div class="row">
                    <div class="col-md-2">
                        <img src="http://openweathermap.org/img/w/${reading.weather[0].icon}.png" alt="weahter-icon">
                    </div>
                    <div class="col-md-2">${reading.weather[0].description}</div>
                    <div class="col-md-2">${helperService.unixTimeStampToDate(reading.dt).toDateString()}</div>
                    <div class="col-md-2">${reading.main.temp} C (${reading.main.feels_like} C)</div>
                    <div class="col-md-2">${reading.main.humidity}</div>
                    <div class="col-md-2">${reading.wind.speed}</div>
                </div>
            `
        }
    }
}

let helperService = {
    unixTimeStampToDate: function(unixTimeStamp) {
        return new Date(unixTimeStamp * 1000)
    }
}


navService.registerNavListeners()
weatherService.getData()