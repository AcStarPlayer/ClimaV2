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

window.addEventListener(
  "DOMContentLoaded",
  () => {

    getCurrentLocationWeather();

  }
);

async function getCurrentLocationWeather() {

  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(

    async (position) => {

      const latitude =
        position.coords.latitude;

      const longitude =
        position.coords.longitude;

      try {

        showLoading();

        const weather =
          await getWeather(
            latitude,
            longitude
          );

        showWeather(
          "Tu ubicación",
          weather
        );

      } catch (error) {

        showError(error.message);

      } finally {

        hideLoading();
      }
    }
  );
}

/* FAVORITOS */

function saveFavorite(city) {

  let favorites =
    JSON.parse(
      localStorage.getItem("favorites")
    ) || [];

  if (!favorites.includes(city)) {

    favorites.push(city);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
}

/* HISTORIAL */

function saveHistory(city) {

  let history =
    JSON.parse(
      localStorage.getItem("history")
    ) || [];

  history.unshift(city);

  history = [...new Set(history)];

  history = history.slice(0, 5);

  localStorage.setItem(
    "history",
    JSON.stringify(history)
  );
}