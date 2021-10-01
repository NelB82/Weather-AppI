let apiKey = "215576bab28022db35e6e64f040e1b56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  console.log(Math.round(response.data.main.temp));
  let temperature = document.querySelector("#todayTemperature");
  temperature.innerHtml = Math.round(response.data.main.temp);
}

axios.get(apiUrl).then(showTemperature);
