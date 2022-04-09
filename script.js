function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-picture");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("todays-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
}
// API key by openweathermap 
const APIKey = "e397c0ad290977cba948a64734ab37cd";
const FORECAST_URL = "api.openweathermap.org/data/2.5/forecast?cnt=5&appid=e397c0ad290977cba948a64734ab37cd&units=imperial&q=";
const CURRENT_URL = "";
//  When search button is clicked, read the city name typed by the user

function todayWeather(cityName) {
    let forecastQuery = FORECAST_URL + cityName;
    $.getJSON(forecastQuery, function(data, status) {
        if(status !== 200) {
            // show error message
        } else {
            // extract information from JSON´
            //data.list[0].main.temp
            // for loop -> printForecastCard(getElementById(index), data[index]);
        }
    });
}

function printForecastCard(card, forecast) {
    let forecastDate = moment.unix(forecast.dt).format("MM/DD/YYYY");
    let temperature = forecast.main.temp;
    let humidity = forecast.main.humidity;
    let weather = forecast.weather[0].description;
    let weatherIcon = forecast.weather[0].icon;

}