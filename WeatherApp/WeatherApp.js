$(document).ready(function() {
    $('form').submit(function() {
        console.log("hello");
        var locateCity = $(this).find("input[id='inputCity']").val();
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + locateCity + "&APPID=a2d200707c5569c89d864ee5ee264686";
        $.get(url, function(res) {
            var resultDynamic = document.getElementById("resultDynamic");

            // City
            var city = res.name;
            console.log("City : " + city);
            $("#resultIncrement").append("<h2>City : " + city + "</h2>");
            resultDynamic.getElementsByClassName("city")[0].innerHTML = "<h2>City : " + city + "</h2>"
            
            // Country
            var country = res.sys.country;
            console.log("Country : " + country);
            $("#resultIncrement").append("<h4>Country : " + country + "</h4>");
            resultDynamic.getElementsByClassName("country")[0].innerHTML = "<h4>Country : " + country + "</h4>"
            
            // Current Temperature
            var currentTemp = kelvinToFarenheit(res.main.temp);
            console.log("Current Temperature : " + currentTemp);
            $("#resultIncrement").append("<h4>Current Temperature : " + currentTemp + "</h4>");
            resultDynamic.getElementsByClassName("currentTemp")[0].innerHTML = "<h4>Current Temperature : " + currentTemp + "</h4>"
            
            // Maximum Temperature
            var maxTemp = kelvinToFarenheit(res.main.temp_max);
            console.log("Maximum Temperature : " + maxTemp);
            $("#resultIncrement").append("<h4>Maximum Temperature : " + maxTemp + "</h4>");
            resultDynamic.getElementsByClassName("maxTemp")[0].innerHTML = "<h4>Maximum Temperature : " + maxTemp + "</h4>"
            
            // Minimum Temperature
            var minTemp = kelvinToFarenheit(res.main.temp_min);
            console.log("Minimum Temperature : " + minTemp);
            $("#resultIncrement").append("<h4>Minimum Temperature : " + minTemp + "</h4>");
            resultDynamic.getElementsByClassName("minTemp")[0].innerHTML = "<h4>Minimum Temperature : " + minTemp + "</h4>"
            
            // Humudity
            var humidity = res.main.humidity;
            console.log("Humidity : " + humidity + "%");
            $("#resultIncrement").append("<h4>Humidity : " + humidity + "%</h4>");
            resultDynamic.getElementsByClassName("humidity")[0].innerHTML = "<h4>Humidity : " + humidity + "%</h4>"
            
            // Weather
            var weather = res.weather[0].main;
            var weatherDescription = res.weather[0].description;
            console.log("Weather : " + weather + ", " + weatherDescription + ".");
            $("#resultIncrement").append("<h4>Weather : " + weather + ", " + weatherDescription + "</h4>");
            resultDynamic.getElementsByClassName("weather")[0].innerHTML = "<h4>Weather : " + weather + ", " + weatherDescription + "</h4>"
            
            //Couds 
            var clouds = res.clouds.all;
            console.log("Clouds Percentage : " + clouds  + "%");
            $("#resultIncrement").append("<h4>Clouds Percentage : " + clouds + "%</h4>");
            resultDynamic.getElementsByClassName("clouds")[0].innerHTML = "<h4>Clouds Percentage : " + clouds + "%</h4>"
            
            // Wind
            var direction = res.wind.deg;
            var speed = meterPSecToMilesPHr(res.wind.speed);
            console.log("Wind : " + direction  + ", " + speed + "mph");
            $("#resultIncrement").append("<h4>Wind : " + direction  + " - " + speed + "mph</h4>");
            resultDynamic.getElementsByClassName("wind")[0].innerHTML = "<h4>Wind : " + direction  + " - " + speed + "mph</h4>"
            
            // Sunrise
            var sunrise = new Date(res.sys.sunrise*1000);
            console.log("Sunrise : " + sunrise);
            $("#resultIncrement").append("<h4>Sunrise : " + sunrise + "</h4>");
            resultDynamic.getElementsByClassName("sunrise")[0].innerHTML = "<h4>Sunrise : " + sunrise + "</h4>"
            
            // Sunset
            var sunset = new Date(res.sys.sunset*1000);
            console.log("Sunset : " + sunset);
            $("#resultIncrement").append("<h4 class='mb-4'>Sunset : " + sunset + "</h4>");
            resultDynamic.getElementsByClassName("sunset")[0].innerHTML = "<h4 class='mb-4'>Sunset : " + sunset + "</h4>"
            
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});

function kelvinToFarenheit(kelvin){
    return ((kelvin-273.15)*(9/5)+32).toFixed(1);
}

function windDirection(degrees){
    var windDirection;
    if(degrees === 0){
        windDirection = "N"
    } else if(degrees === 90){
        windDirection = "E"
    } else if(degrees === 90){
        windDirection = "s"
    } else if(degrees === 180){
        windDirection = "W"
    } else if(degrees > 1 && degrees < 89){
        windDirection = "NE"
    } else if(degrees > 91 && degrees < 179){
        windDirection = "SE"
    } else if(degrees > 181 && degrees < 269){
        windDirection = "SW"
    } else if(degrees > 271 && degrees < 359){
        windDirection = "NW"
    }
    return windDirection;
}

function meterPSecToMilesPHr(meterSpeed){
    return (meterSpeed*2.237).toFixed(1);
}
