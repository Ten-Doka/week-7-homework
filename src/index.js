function currentWeather(response) {
  console.log(response.data);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let weatherConditionElement = document.querySelector(".description");
  weatherConditionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="">`;
}

function searchWeatherElement(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let apiKey = "a15064fo064a4647d4a8bf3bt0bb11df";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeather);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchWeatherElement);
