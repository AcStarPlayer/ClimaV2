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
    `${WEATHER_API}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  if (!response.ok) {
    throw new Error("Error obteniendo clima.");
  }

  const data = await response.json();

  return data.current_weather;
}