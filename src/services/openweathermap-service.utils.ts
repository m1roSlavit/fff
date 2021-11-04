import moment from 'moment';
import {
  ICurrentWeather,
  ICurrentWeatherRes,
  IDayWeather,
  IDayWeatherRes,
  IForecastForWeekRes,
  IWeatherMainInfo,
  IWeatherMainInfoRes,
} from '../types/forecast';

export const normalizeWeatherMainInfo = (
  data: IWeatherMainInfoRes
): IWeatherMainInfo => {
  return {
    temp: data.temp,
    tempMin: data.temp_min,
    tempMax: data.temp_max,
    pressure: data.pressure,
  };
};

export const normalizeDayWeather = (data: IDayWeatherRes): IDayWeather => {
  return {
    id: data.id,
    weather: data.weather,
    main: normalizeWeatherMainInfo(data.main),
    dtTxt: data.dt_txt,
  };
};

export const normalizeForecastForWeek = (
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
    .slice(0, 5)
    .map(normalizeDayWeather);
};

export const normalizeCurrentWeather = (
  data: ICurrentWeatherRes
): ICurrentWeather => ({
  weather: data.weather,
  main: normalizeWeatherMainInfo(data.main),
  wind: data.wind,
  name: data.name,
});
