$(document).ready(function(){

    $("#search-button").click(function(e){
        e.preventDefault()
        var city = $("#search-box").val();
        cityArr.push(city);
        localStorage.setItem("citiesSearched", JSON.stringify(cityArr))
        if (city !== ''){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=68f6a7a10076ae7929e68098c3a0d344" + "&units=imperial",
                type: "GET",
                dataType: "json", // json p = json padding
            }).then(function(data) {  //callback
                    console.log(data)
                    var currentDisplay = weatherData(data); //passes in returned data into cards

                    $("#weather-info").html(currentDisplay); // displays weather info into html section
                
                    $("#search-box").val('');
                    var lat = data.coord.lat
                    var lon = data.coord.lon
                    $.ajax({
                        url: `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=68f6a7a10076ae7929e68098c3a0d344`, //template literals - get rid of concatonations
                        type: `GET`,
                        dataType: `json`
                    }).then(function(nestedData) {
                        console.log(nestedData)
                        $("#uvIndex").text(nestedData.value)
                            // if(nestedData.value <= 3) {
                            //     nestedData.attr("style", "color:green;");
                            // } else if (nestedData.value >= 6) {
                            //     nestedData.attr("style", "color:yellow;");
                            // } else {
                            //     nestedData.attr("style", "color:red;");
                            // }
                    })
            })
            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68f6a7a10076ae7929e68098c3a0d344&units=imperial`,
                type: `GET`,
                dataType: `json`
            }).then(function(data){
                console.log(data)
                var cardsDiv = ("#cards");
                for(var i=0 ; i<40 ; i+=8){
                    var outerDiv = $("<div>", { class: "col-md-4 test" });
                    var newDiv = $("<div>", { class: "card mb-3 shadow-sm" });
                    var cardsDiv = $("<div>", { class: "card border-primary mb-3" });
                    var cardHeader = $("<div>", { class: "card-header"});
                    var cardBody = $("<div>", { class: "card-body text-primary" });
                    var cardTitle = $("<h5>", { class: "card-title" });
                    var cardText = $("<p>", { class: "card-text" });

                    
                    cardText.text("Hello")
                    // cardImage.attr("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' "+ "alt='"+ data.weather[0].description)
                    
                    cardsDiv.append(outerDiv);
                    outerDiv.append(newDiv);
                    newDiv.append(cardsDiv);
                    cardsDiv.append(cardBody);
                    cardBody.append(cardTitle);
                    cardBody.append(cardText);
                    cardsDiv.append(cardHeader);
                    
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
 //ADD CARDS FOR DAILY WEATHER - AJAX - FOR LOOP
 //ADD STYLE FOR GOOD, MODERATE, SEVERE UV INDEX
 //STYLE!!!!!// 

});

function weatherData(data){ //passing in data from click event
    return "<h4>Current Weather</h4>" +
           "<h4><strong>Weather</strong>: "+ data.weather[0].main +"</h4>" +//returns weather parameters from array
           "<h4><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' "+ "alt='"+ data.weather[0].description + "' />" +"</h4>" + 
           "<h4><strong>Temperature</strong>: "+ data.main.temp + "&deg F</h4>" +
           "<h4><strong>Humidity</strong>: "+ data.main.humidity + " %</h4>" +
           "<h4><strong>Low Temp</strong>: "+ data.main.temp_min + "&deg F</h4>" +
           "<h4><strong>High Temp</strong>: "+ data.main.temp_max + "&deg F</h4>" +
           "<h4><strong>Wind Speed</strong>: "+ data.wind.speed + " miles/hour</h4>" +
           "<h4><strong>UV Index</strong>: <span id='uvIndex'></span></h4>"; 
  
}




// function renderRecent () { //renders a new recent search 
    
//     cityName.forEach( button => {
//       button.addEventListener("click", renderRecent)
    
//         var cityText = weatherInput.value.trim();
    
//         if (cityText === "") {
//             return;
//         }
    
//         cities.push(cityText);
//         weatherInput.value = "";
    
//         renderRecent()
//     })
// } 
