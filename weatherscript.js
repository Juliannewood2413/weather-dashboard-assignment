$(document).ready(function(){

    $("#search-button").click(function(e){
        e.preventDefault()
        var city = $("#search-box").val();
        var cityList = JSON.parse(localStorage.getItem("cityList"))
        cityArr.push(city);
        localStorage.setItem("citiesSearched", JSON.stringify(cityArr))
        if (city !== ''){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=68f6a7a10076ae7929e68098c3a0d344" + "&units=imperial",
                type: "GET",
                dataType: "json", 
            }).then(function(data) {  //callback
                    console.log(data)
                    var currentDisplay = weatherData(data); //passes in returned data into cards
                    $("#search-list").html()
                    $("#weather-info").html(currentDisplay); // displays weather info into html section
                    $("#search-box").val('');
                    $("#city-list").append("<button>" + data.name + "</button>")
                    // 
                    var lat = data.coord.lat
                    var lon = data.coord.lon
                    $.ajax({
                        url: `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=68f6a7a10076ae7929e68098c3a0d344`, //template literals - get rid of concatonations
                        type: `GET`,
                        dataType: `json`
                    }).then(function(nestedData) {
                        console.log(nestedData)
                        $("#uvIndex").text(nestedData.value)
                            if(nestedData.value <= 3) {
                                nestedData.attr("style", "color:rgb(100, 197, 100);");
                            } else if (nestedData.value >= 3) {
                                nestedData.attr("style", "color:yellow;");
                            } else {
                                nestedData.attr("style", "color:red;");
                            }
                    })
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                for(var i=0 ; i<40 ; i+=8){
                var forecastDisplay = forecastData(data)
                $("#cards").html(forecastDisplay)
                function forecastData(data){
                    return  "<h6> " + data.list[0].dt_txt + "</h6>" +
                            "<h6><img src='http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png' "+ "alt='"+ data.list[0].weather[0].description + "' />" +"</h6>" +
                            "<h6>Weather: " + data.list[0].main.temp  + "</h6>" +
                            "<h6> Humidity " + data.list[0].main.humidity + "</h6>";
                }
                    
                    
                }
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                for(var i=0 ; i<40 ; i+=8){
                var forecastDisplay = forecastData(data)
                $("#cardsD2").html(forecastDisplay)
                function forecastData(data){
                    return  "<h6> " + data.list[8].dt_txt + "</h6>" +
                            "<h6><img src='http://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png' "+ "alt='"+ data.list[8].weather[0].description + "' />" +"</h6>" +
                            "<h6>Weather: " + data.list[8].main.temp  + "</h6>" +
                            "<h6> Humidity " + data.list[8].main.humidity + "</h6>";
                }
                    
                    
                }
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                for(var i=0 ; i<40 ; i+=8){
                var forecastDisplay = forecastData(data)
                $("#cardsD3").html(forecastDisplay)
                function forecastData(data){
                    return  "<h6> " + data.list[16].dt_txt + "</h6>" +
                            "<h6><img src='http://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png' "+ "alt='"+ data.list[16].weather[0].description + "' />" +"</h6>" + 
                            "<h6>Weather: " + data.list[16].main.temp  + "</h6>" +
                            "<h6> Humidity " + data.list[16].main.humidity + "</h6>";
                }
                    
                    
                }
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                for(var i=0 ; i<40 ; i+=8){
                var forecastDisplay = forecastData(data)
                $("#cardsD4").html(forecastDisplay)
                function forecastData(data){
                    return  "<h6> " + data.list[24].dt_txt + "</h6>" +
                            "<h6><img src='http://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png' "+ "alt='"+ data.list[24].weather[0].description + "' />" +"</h6>" +
                            "<h6>Weather: " + data.list[24].main.temp  + "</h6>" +
                            "<h6> Humidity " + data.list[24].main.humidity + "</h6>";
                }
                    
                    
                }
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                for(var i=0 ; i<40 ; i+=8){
                var forecastDisplay = forecastData(data)
                $("#cardsD5").html(forecastDisplay)
                function forecastData(data){
                    return  "<h6> " + data.list[32].dt_txt + "</h6>" +
                            "<h6><img src='http://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png' "+ "alt='"+ data.list[32].weather[0].description + "' />" +"</h6>" + 
                            "<h6>Weather: " + data.list[32].main.temp  + "</h6>" +
                            "<h6> Humidity " + data.list[32].main.humidity + "</h6>";
                }
                    
                    
                }
            })
                }else {
                $("#error").html('Please enter a city to search');
                }
    })
    if(localStorage.getItem("citiesSearched")){
        var cityArr = JSON.parse(localStorage.getItem("citiesSearched"))
    } else{
        var cityArr = []
    }
 //PULL FROM LOCAL STORAGE TO POPULATE INTO SEARCH LIST
 //ADD CONDITIONAL FOR IF MULTIPLE SEARCHES FOR SAME CITY
 //ADD STYLE FOR GOOD, MODERATE, SEVERE UV INDEX
 //STYLE!!!!!// 

});

function weatherData(data){ //passing in data from click event
    return "<h4>Current Weather for " + data.name + "</h4>" +
           "<h6><strong>Weather</strong>: "+ data.weather[0].main +"</h6>" +//returns weather parameters from array
           "<h6><img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' "+ "alt='"+ data.weather[0].description + "' />" +"</h6>" + 
           "<h6><strong>Temperature</strong>: "+ data.main.temp + "&deg F</h6>" +
           "<h6><strong>Humidity</strong>: "+ data.main.humidity + " %</h6>" +
           "<h6><strong>Low Temp</strong>: "+ data.main.temp_min + "&deg F</h6>" +
           "<h6><strong>High Temp</strong>: "+ data.main.temp_max + "&deg F</h6>" +
           "<h6><strong>Wind Speed</strong>: "+ data.wind.speed + " miles/hour</h6>" +
           "<h6><strong>UV Index</strong>: <span id='uvIndex'></span></h6>"; 
  
}

// function cityHistory() {
//     for (var i = 0; i <localStorage.length; i++) {
//         localStorage
//     }
// }

// $("button").on("click", cityHistory);

// $("button").click()///GET THIS BUTTON TO WORK





