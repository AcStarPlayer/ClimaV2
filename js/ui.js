function getWeatherDescription(code) {

  const weatherCodes = {

    0: "☀️ Soleado",
    1: "🌤️ Parcialmente nublado",
    2: "☁️ Nublado",
    3: "☁️ Muy nublado",

    45: "🌫️ Niebla",

    51: "🌦️ Llovizna",
    61: "🌧️ Lluvia",
    71: "❄️ Nieve",

    95: "⛈️ Tormenta"

  };

  return weatherCodes[code] || "Clima desconocido";
}

function getWeatherIcon(code) {

  document.body.classList.remove(
    "lightning"
  );

  if (code === 0)
    return "assets/animations/sun.gif";

  if (code <= 3)
    return "assets/animations/cloud.gif";

  if (code >= 61 && code <= 67)
    return "assets/animations/rain.gif";

  if (code >= 95) {

    document.body.classList.add(
      "lightning"
    );

    return "assets/animations/storm.gif";
  }

  if (code >= 71 && code <= 77)
    return "assets/animations/snow.gif";

  return "assets/animations/cloud.gif";
}

export function showWeather(city, data) {

  const current = data.current;

    if (!current) {

        showError(
            "No se pudieron obtener datos del clima."
        );

        return;
    }
  const daily = data.daily;

  document.getElementById("weatherResult")
    .classList.remove("hidden");

  document.getElementById("cityName")
    .textContent = city;

  document.getElementById("weatherDescription")
    .textContent =
      getWeatherDescription(current.weather_code);

    document.getElementById("weatherIcon")
    .src =
        getWeatherIcon(
        current.weather_code
        );

  document.getElementById("temperature")
    .textContent =
      `${current.temperature_2m}°C`;

  document.getElementById("feelsLike")
    .textContent =
      `${current.apparent_temperature}°C`;

  document.getElementById("humidity")
    .textContent =
      `${current.relative_humidity_2m}%`;

  document.getElementById("windSpeed")
    .textContent =
      `${current.wind_speed_10m} km/h`;

  document.getElementById("windDirection")
    .textContent =
      `${current.wind_direction_10m}°`;

  document.getElementById("rain")
    .textContent =
      `${current.precipitation} mm`;

  document.getElementById("uv")
    .textContent =
      daily.uv_index_max[0];

  document.getElementById("sunrise")
    .textContent =
      new Date(daily.sunrise[0])
      .toLocaleTimeString();

  document.getElementById("sunset")
    .textContent =
      new Date(daily.sunset[0])
      .toLocaleTimeString();

  updateTheme(
    current.is_day,
    current.weather_code
    );

    updateWeatherEffects(
  current.weather_code
);

  renderForecast(daily);

  /* RADAR METEOROLÓGICO */

renderMap(
  data.latitude,
  data.longitude
);

  renderHourly(data.hourly);
}

function updateTheme(
  isDay,
  weatherCode
) {

  document.body.className = "";

  if (!isDay) {

    document.body.classList.add("night");

  }

  if (
    weatherCode >= 61 &&
    weatherCode <= 67
  ) {

    document.body.classList.add("rainy");
  }

  if (weatherCode >= 95) {

    document.body.classList.add("storm");
  }

  if (
    weatherCode >= 71 &&
    weatherCode <= 77
  ) {

    document.body.classList.add("snow");
  }
}

function renderForecast(daily) {

  const container =
    document.getElementById("forecast");

  container.innerHTML = "";

  daily.time.forEach((day, index) => {

    const card = document.createElement("div");

    card.className = "forecast-card";

    card.innerHTML = `
      <h4>
        ${new Date(day)
          .toLocaleDateString("es-ES", {
            weekday: "short"
          })}
      </h4>

      <p>
        🌡️ ${daily.temperature_2m_max[index]}°
      </p>

      <p>
        🌙 ${daily.temperature_2m_min[index]}°
      </p>

      <p>
        🌧️ ${daily.precipitation_probability_max[index]}%
      </p>
    `;

    container.appendChild(card);
  });
}

export function showError(message) {

  const error =
    document.getElementById("errorMessage");

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

function renderHourly(hourly) {

  const container =
    document.getElementById(
      "hourlyForecast"
    );

  container.innerHTML = "";

  hourly.time
    .slice(0, 12)
    .forEach((hour, index) => {

      const card =
        document.createElement("div");

      card.className =
        "forecast-card";

      card.innerHTML = `

        <h4>
          ${new Date(hour)
            .toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
        </h4>

        <p>
          🌡️
          ${hourly.temperature_2m[index]}°
        </p>

      `;

      container.appendChild(card);

    });
}

function updateWeatherEffects(code) {

  const effects =
    document.getElementById(
      "weatherEffects"
    );

  effects.innerHTML = "";

  document.body.classList.remove(
    "lightning"
  );

  /* LLUVIA */

  if (code >= 61 && code <= 67) {

    for (let i = 0; i < 100; i++) {

      const drop =
        document.createElement("div");

      drop.className = "rain-drop";

      drop.style.left =
        Math.random() * 100 + "vw";

      drop.style.animationDuration =
        0.5 + Math.random() + "s";

      drop.style.opacity =
        Math.random();

      effects.appendChild(drop);
    }
  }

  /* TORMENTA */

  if (code >= 95) {

    document.body.classList.add(
      "lightning"
    );

    for (let i = 0; i < 120; i++) {

      const drop =
        document.createElement("div");

      drop.className = "rain-drop";

      drop.style.left =
        Math.random() * 100 + "vw";

      drop.style.animationDuration =
        0.3 + Math.random() + "s";

      effects.appendChild(drop);
    }
  }
}

let map;
let marker;

function renderMap(
  latitude,
  longitude
) {

  if (!map) {

    map = L.map("map")
      .setView(
        [latitude, longitude],
        7
      );

      setTimeout(() => {
  map.invalidateSize();
}, 100);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          "&copy; OpenStreetMap"
      }
    ).addTo(map);

  } else {

    map.setView(
      [latitude, longitude],
      7
    );
  }

  if (marker) {

  map.removeLayer(marker);
}

marker = L.marker(
  [latitude, longitude]
).addTo(map);
}