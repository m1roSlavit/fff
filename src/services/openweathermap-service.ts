import axios from 'axios';

import { ICurrentWeatherRes, IForecastForWeekRes } from '../types/forecast';

import {
  normalizeCurrentWeather,
  normalizeForecastForWeek,
} from './openweathermap-service.utils';

export class OpenWeatherMapService {
  private static _baseUrl = 'https://api.openweathermap.org/data/2.5';
  private static _apiAccessKey = '180d82c2575ed2156e2bf4a23fe4da14';

  public static async getCurrentWeather(cityName: string) {
    const response = await axios
      .get<ICurrentWeatherRes>(
        `${OpenWeatherMapService._baseUrl}/weather?q=${cityName}&units=metric&appid=${OpenWeatherMapService._apiAccessKey}`
      )
      .catch((err) => {
        throw err.response.data.message;
      });

    return normalizeCurrentWeather(response.data);
  }

  public static async getForecastForWeek(cityName: string) {
    const response = await axios
      .get<IForecastForWeekRes>(
        `${OpenWeatherMapService._baseUrl}/forecast?q=${cityName}&units=metric&appid=${OpenWeatherMapService._apiAccessKey}`
      )
      .catch((err) => {
        throw err.response.data.message;
      });

    return normalizeForecastForWeek(response.data);
  }
}
