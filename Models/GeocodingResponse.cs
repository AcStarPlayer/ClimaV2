namespace clima.Models;

public class GeocodingResponse
{
    public List<Result> results { get; set; } = new();
}

public class Result
{
    public string name { get; set; } = string.Empty;

    public double latitude { get; set; }

    public double longitude { get; set; }

    public string country { get; set; } = string.Empty;
}