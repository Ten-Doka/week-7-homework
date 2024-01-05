function currentWeather(response) {
  //console.log(response.data.city);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
}
function searchWeatherElement(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let apiKey = "a15064fo064a4647d4a8bf3bt0bb11df";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}`;
  axios.get(apiUrl).then(currentWeather);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchWeatherElement);
