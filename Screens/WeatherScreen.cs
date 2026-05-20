using clima.Models;

namespace clima.Screens;

public static class WeatherScreen
{
    public static void Show(Result city, WeatherResponse weather)
    {
        Console.WriteLine();

        Console.ForegroundColor = ConsoleColor.Yellow;

        Console.WriteLine("Location");

        Console.WriteLine(
            "────────────────────────────────────────"
        );

        Console.ResetColor();

        Console.WriteLine($"City        : {city.name}");
        Console.WriteLine($"Country     : {city.country}");
        Console.WriteLine($"Latitude    : {city.latitude}");
        Console.WriteLine($"Longitude   : {city.longitude}");

        Console.WriteLine();

        Console.ForegroundColor = ConsoleColor.Yellow;

        Console.WriteLine("Weather");

        Console.WriteLine(
            "────────────────────────────────────────"
        );

        Console.ResetColor();

        Console.WriteLine(
            $"Temperature : {weather.current_weather.temperature} °C"
        );

        Console.WriteLine(
            $"Wind Speed  : {weather.current_weather.windspeed} km/h"
        );

        Console.WriteLine(
            $"Status      : Operational"
        );

        Console.WriteLine();
    }
}