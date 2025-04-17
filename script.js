const apiKey = "356d119aa780b8a68edfc43233471ead";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const card = document.querySelector(".card");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");
const weatherIcon = document.querySelector(".weather-icon");

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
                weatherIcon.src = "clouds.png";
                card.style.background = "#808080";
                document.querySelector(".weather-name").innerText = "Cloudy";
            }
            else if ( data.weather[0].main == "Rain"){
                weatherIcon.src = "rain.png";
                card.style.background = "#28628f";
                document.querySelector(".weather-name").innerText = "Rainy";
            }
            else if ( data.weather[0].main == "Mist"){
                weatherIcon.src = "mist.png";
                card.style.background = "#a5c0c2";
                document.querySelector(".weather-name").innerText = "Mist";
            }
            else if ( data.weather[0].main == "Snow"){
                weatherIcon.src = "snow.png";
                card.style.background = "#7dcef7";
                document.querySelector(".weather-name").innerText = "Snowy";
            }
            else if ( data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png";
                card.style.background = "#8dafac";
                document.querySelector(".weather-name").innerText = "Dizzling";
            }
            else if ( data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png";
                card.style.background = "#009bfc";
                document.querySelector(".weather-name").innerText = "Clear";
            }
            error.style.display = "none";
            weather.style.display = "block";
        }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
