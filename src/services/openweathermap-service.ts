import axios from "axios";
import { ICurrentWeather } from "../types/forecast";

export class OpenWeatherMapService {
  private static _baseUrl = "https://api.openweathermap.org/data/2.5";
  private static _apiAccessKey = "180d82c2575ed2156e2bf4a23fe4da14";

  public static async getCurrentWeather(cityName: string) {
    const response = await axios
      .get<ICurrentWeather>(
        `${OpenWeatherMapService._baseUrl}/weather?q=${cityName}&units=metric&appid=${OpenWeatherMapService._apiAccessKey}`
      )
      .catch((err) => {
        throw err.response.data.message;
      });

    return response.data;
  }
}
