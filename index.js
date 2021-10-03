function search(city) {
  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function submit(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#search-city");
  search(cityElement.value);
}

let startSearch = document.querySelector("#searchForm");
startSearch.addEventListener("submit", submit);

function showTemperature(response) {
  celsiusTemperature = Math.round(response.data.main.temp);
  document.querySelector("#today-temperature").innerHTML = celsiusTemperature;
  document.querySelector("#cityToday").innerHTML = response.data.name;
  document.querySelector("#todayHumidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#todayWind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", `response.data.weather[0].description`);
}

//Uhrzeit
let timeNow = new Date();

//Wochentag + Zeit
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
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let hours = now.getHours();
today.innerHTML = `${currentDay}, ${hours}:${minutes}`;

//Datum
let dateNow = new Date();
let dateToday = document.querySelector("#dateToday");
let currentDate = dateNow.getDate();

let Month = [
  "01",
  "01",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

let currentMonth = Month[dateNow.getMonth()];
let currentYear = dateNow.getFullYear();
dateToday.innerHTML = `0${currentDate}.${currentMonth}.${currentYear}`;

//Celsius + Fahrenheit
//Today;
let temperatureElement = document.querySelector("#today-temperature");
let celsiusTemperature = null;

function convertToFahrenheit(event) {
  event.preventDefault();
  temperatureElement.innerHTML = Math.round((celsiusTemperature * 9) / 5 + 32);
}

function convertToCelsius(event) {
  event.preventDefault();
  temperatureElement.innerHTML = celsiusTemperature;
}

let fahrenheitToday = document.querySelector("#fahrenheit");
fahrenheitToday.addEventListener("click", convertToFahrenheit);

let celsiusToday = document.querySelector("#celsius");
celsiusToday.addEventListener("click", convertToCelsius);

search("Bremen");
