namespace clima.Helpers;

public static class ConsoleHelper
{
    public static void Header()
    {
        Console.Clear();

        Console.ForegroundColor = ConsoleColor.Cyan;

        Console.WriteLine(
            "┌──────────────────────────────────────┐"
        );

        Console.WriteLine(
            "│        WEATHER MONITOR v2.0          │"
        );

        Console.WriteLine(
            "└──────────────────────────────────────┘"
        );

        Console.ResetColor();

        Console.WriteLine();
    }

    public static void Info(string message)
    {
        Console.ForegroundColor = ConsoleColor.DarkCyan;

        Console.Write("[INFO] ");

        Console.ResetColor();

        Console.WriteLine(message);
    }

    public static void Success(string message)
    {
        Console.ForegroundColor = ConsoleColor.Green;

        Console.Write("[OK]   ");

        Console.ResetColor();

        Console.WriteLine(message);
    }

    public static void Error(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;

        Console.Write("[ERROR] ");

        Console.ResetColor();

        Console.WriteLine(message);
    }
}