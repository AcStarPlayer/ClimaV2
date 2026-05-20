using clima.Helpers;
using clima.Services;
using clima.Screens;

ConsoleHelper.Header();

Console.Write("Enter city name: ");

Console.ForegroundColor = ConsoleColor.Cyan;

string? cityName = Console.ReadLine();

Console.ResetColor();

if (string.IsNullOrWhiteSpace(cityName))
{
    ConsoleHelper.Error("City name cannot be empty.");
    return;
}

Console.WriteLine();

ConsoleHelper.Info("Resolving city coordinates...");

var geocodingService = new GeocodingService();

var city = await geocodingService.GetCoordinatesAsync(cityName);

if (city == null)
{
    ConsoleHelper.Error("City not found.");
    return;
}

ConsoleHelper.Success("Location resolved successfully.");

ConsoleHelper.Info("Requesting weather data...");

var weatherService = new WeatherService();

var weather = await weatherService.GetWeatherAsync(
    city.latitude,
    city.longitude
);

if (weather == null)
{
    ConsoleHelper.Error("Failed to retrieve weather data.");
    return;
}

ConsoleHelper.Success("Weather data retrieved successfully.");

WeatherScreen.Show(city, weather);

Console.ForegroundColor = ConsoleColor.Green;

Console.WriteLine(
    "Request completed successfully."
);

Console.ResetColor();