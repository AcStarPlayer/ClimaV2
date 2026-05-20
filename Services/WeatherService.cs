using Newtonsoft.Json;
using clima.Models;

namespace clima.Services;

public class WeatherService
{
    private readonly HttpClient _httpClient;

    public WeatherService()
    {
        _httpClient = new HttpClient();
    }

    public async Task<WeatherResponse?> GetWeatherAsync(
        double latitude,
        double longitude
    )
    {
        string lat = latitude.ToString(
            System.Globalization.CultureInfo.InvariantCulture
        );

        string lon = longitude.ToString(
            System.Globalization.CultureInfo.InvariantCulture
        );

        string url =
            $"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true";

        Console.WriteLine();
        Console.WriteLine("URL CLIMA:");
        Console.WriteLine(url);

        try
        {
            var response = await _httpClient.GetStringAsync(url);

            Console.WriteLine();
            Console.WriteLine("Respuesta clima API:");
            Console.WriteLine(response);

            return JsonConvert.DeserializeObject<WeatherResponse>(response);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error clima API: {ex.Message}");
            return null;
        }
    }
}