const apiKey = "356d119aa780b8a68edfc43233471ead";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const card = document.querySelector(".card");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkWeather(city) {
    const response = await fetch (apiUrl + city +`&appid=${apiKey}`);

        if (response.status == 404) {
            error.style.display = "block";
            weather.style.display = "none";
        } 
        else {
            var data = await response.json();
      
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
            if ( data.weather[0].main == "Clouds"){
                card.style.backgroundImage = "url('cloudy.png')";
                weather.style.marginTop = "10vw";
                document.querySelector(".weather-name").innerText = "Cloudy";
            }

            else if ( data.weather[0].main == "Rain"){
                card.style.backgroundImage = "url('rain.png')";
                document.querySelector(".weather-name").innerText = "Rainy";
            }

            else if ( data.weather[0].main == "Mist"){
                card.style.backgroundImage = "url('mist.png')";
                document.querySelector(".weather-name").innerText = "Mist";
            }

            else if ( data.weather[0].main == "Snow"){
                card.style.backgroundImage = "url('snow.png')";
                document.querySelector(".weather-name").innerText = "Snowy";
            }

            else if ( data.weather[0].main == "Drizzle"){
                card.style.backgroundImage = "url('drizzle.png')";
                document.querySelector(".weather-name").innerText = "Drizzling";
            }

            else if ( data.weather[0].main == "Clear"){
                card.style.backgroundImage = "url('sunny.png')";
                weather.style.marginTop = "5vw";
                document.querySelector(".weather-name").innerText = "Clear";
            }
            error.style.display = "none";
            weather.style.display = "block";
        }
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
