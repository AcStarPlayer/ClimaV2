using Newtonsoft.Json;
using clima.Models;

namespace clima.Services;

public class GeocodingService
{
    private readonly HttpClient _httpClient;

    public GeocodingService()
    {
        _httpClient = new HttpClient();
    }

    public async Task<Result?> GetCoordinatesAsync(string city)
    {
        string encodedCity = Uri.EscapeDataString(city);

        string url =
            $"https://geocoding-api.open-meteo.com/v1/search?name={encodedCity}&count=5&language=es&format=json";

        try
        {
            var response = await _httpClient.GetStringAsync(url);

            Console.WriteLine();
            Console.WriteLine("Respuesta API:");
            Console.WriteLine(response);

            var data =
                JsonConvert.DeserializeObject<GeocodingResponse>(response);

            return data?.results?.FirstOrDefault();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error API: {ex.Message}");
            return null;
        }
    }
}