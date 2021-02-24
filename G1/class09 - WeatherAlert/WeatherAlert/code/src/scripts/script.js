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
        this.searchBtn.addEventListener("click", function() {
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
                uiService.loadHourlyTable(response)
            },
            error: function(error) {
                console.log("The request has failed")
                console.log(error.responseText)
            }
        })
    }

}

let uiService = {
    statisticResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
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