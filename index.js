//function searchCity(event) {
//event.preventDefault();
//let city = document.querySelector("inputSearchcity");
//document.querySelector("inputSearchCity.value").innerHTML = city.value;
//let apiKey = "215576bab28022db35e6e64f040e1b56";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
//axios.get(apiUrl).then(showCity);
//console.log(city);
//}

//let startSearch = document.querySelector("#searchForm");
//startSearch.addEventListener("submit", searchCity);

let city = document.querySelector("inputSearchCity");
let apiKey = "215576bab28022db35e6e64f040e1b56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Jever&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  document.querySelector("#todayTemperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#cityToday").innerHTML = response.data.name;
  document.querySelector("#todayHumidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#todayWind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

axios.get(apiUrl).then(showTemperature);

//Datum

let now = new Date();
let today = document.querySelector("#dayToday");

let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = weekDay[now.getDay()];
today.innerHTML = currentDay;
