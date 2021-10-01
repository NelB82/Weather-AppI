let apiKey = "215576bab28022db35e6e64f040e1b56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bremen&appid=${apiKey}&units=metric`;

function searchCity(event) {
  event.preventDefault();
  console.log(inputSearchCity);
}

let startSearch = document.querySelector("#buttonGo");
startSearch.addEventListener("submit", searchCity);

function showTemperature(response) {
  document.querySelector("#todayTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#cityToday").innerHTML = response.data.name;
  document.querySelector("#todayRain").innerHTML = response.data.main.humidity;
  document.querySelector("#todayWind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

axios.get(apiUrl).then(showTemperature);
