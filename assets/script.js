var requestWeatherForecast = "https://api.openweathermap.org/data/2.5/onecall?lat=32.2228765&lon=-110.9748477&exclude=minutely,hourly,alerts&appid=6a202ea5d0a43bfb26d59423436d6323";
var requestGeoCodingUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Tucson,US&appid=6a202ea5d0a43bfb26d59423436d6323";

//city..weather conditions, city name, date, weather conditions, temp, humidity, wind speed and UV index.
//(Weather Key) 6a202ea5d0a43bfb26d59423436d6323
// lat: 32.2228765, lon: -110.9748477 - Tucson

fetch(requestWeatherForecast)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });