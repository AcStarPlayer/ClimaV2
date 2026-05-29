export function showWeather(city, weather) {

  document.getElementById("weatherResult")
    .classList.remove("hidden");

  document.getElementById("cityName")
    .textContent = city;

  document.getElementById("temperature")
    .textContent =
      `${weather.temperature}°C`;

  document.getElementById("windSpeed")
    .textContent =
      `${weather.windspeed} km/h`;
}

export function showError(message) {

  const error = document.getElementById("errorMessage");

  error.textContent = message;

  error.classList.remove("hidden");
}

export function hideError() {

  document.getElementById("errorMessage")
    .classList.add("hidden");
}

export function showLoading() {

  document.getElementById("loading")
    .classList.remove("hidden");
}

export function hideLoading() {

  document.getElementById("loading")
    .classList.add("hidden");
}