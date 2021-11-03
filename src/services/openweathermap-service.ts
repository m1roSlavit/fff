import axios from 'axios';
import moment from 'moment';

import {
  ICurrentWeather,
  IDayWeather,
  IForecastForWeekRes,
} from '../types/forecast';

export class OpenWeatherMapService {
  private static _baseUrl = 'https://api.openweathermap.org/data/2.5';
  private static _apiAccessKey = '180d82c2575ed2156e2bf4a23fe4da14';

  private static _normalizeForecastForWeek = (
    data: IForecastForWeekRes
  ): IDayWeather[] => {
    const filteredDays: number[] = [];

    return data.list
      .filter((item) => {
        const dayNumber = moment(item.dt_txt).day();
        if (!filteredDays.includes(dayNumber)) {
          filteredDays.push(dayNumber);
          return true;
        }
        return false;
      })
      .slice(0, 5);
  };

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

  public static async getForecastForWeek(cityName: string) {
    const response = await axios
      .get<IForecastForWeekRes>(
        `${OpenWeatherMapService._baseUrl}/forecast?q=${cityName}&units=metric&appid=${OpenWeatherMapService._apiAccessKey}`
      )
      .catch((err) => {
        throw err.response.data.message;
      });

    return OpenWeatherMapService._normalizeForecastForWeek(response.data);
  }
}
