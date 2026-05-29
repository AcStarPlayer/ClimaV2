import {
  getCoordinates,
  getWeather
} from "./api.js";

import {
  saveToCache,
  getFromCache
} from "./cache.js";

import {
  showWeather,
  showError,
  hideError,
  showLoading,
  hideLoading
} from "./ui.js";

const searchBtn =
  document.getElementById("searchBtn");

searchBtn.addEventListener(
  "click",
  async () => {

    const city =
      document.getElementById("cityInput")
        .value
        .trim();

    if (!city) {
      showError("Debes ingresar una ciudad.");
      return;
    }

    hideError();

    try {

      showLoading();

      const cacheKey =
        `weather_${city.toLowerCase()}`;

      const cachedWeather =
        getFromCache(cacheKey);

      if (cachedWeather) {

        showWeather(
          city,
          cachedWeather
        );

        hideLoading();

        return;
      }

      const coordinates =
        await getCoordinates(city);

      const weather =
        await getWeather(
          coordinates.latitude,
          coordinates.longitude
        );

      saveToCache(
        cacheKey,
        weather
      );

      showWeather(city, weather);

    } catch (error) {

      showError(error.message);

    } finally {

      hideLoading();

    }

  }
);