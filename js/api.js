const GEO_API =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast";

export async function getCoordinates(city) {

  const response = await fetch(
    `${GEO_API}?name=${encodeURIComponent(city)}&count=1&language=es&format=json`
  );

  if (!response.ok) {
    throw new Error("Error obteniendo coordenadas.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Ciudad no encontrada.");
  }

  return data.results[0];
}

export async function getWeather(latitude, longitude) {

  const response = await fetch(

    `${WEATHER_API}
    ?latitude=${latitude}
    &longitude=${longitude}

    &current=
    temperature_2m,
    relative_humidity_2m,
    apparent_temperature,
    precipitation,
    weather_code,
    wind_speed_10m,
    wind_direction_10m,
    is_day

    &daily=
    weather_code,
    temperature_2m_max,
    temperature_2m_min,
    sunrise,
    sunset,
    uv_index_max,
    precipitation_probability_max

    &hourly=
    temperature_2m

    &timezone=auto`

    .replace(/\s/g, "")
  );

  if (!response.ok) {
    throw new Error("Error obteniendo clima.");
  }

  return await response.json();
}