import { Dispatch } from 'react';
import { OpenWeatherMapService } from '../../services/openweathermap-service';

import {
  FetchCurrentWeatherAction,
  FetchCurrentWeatherFailureAction,
  FetchCurrentWeatherSuccessAction,
  FetchForecastForWeekAction,
  FetchForecastForWeekFailureAction,
  FetchForecastForWeekSuccessAction,
  ForecastActions,
  ForecastActionTypes,
  ICurrentWeather,
  IDayWeather,
} from '../../types/forecast';

export const currentWeatherRequested = (): FetchCurrentWeatherAction => ({
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER,
});

export const currentWeatherRequestedSuccess = (
  payload: ICurrentWeather
): FetchCurrentWeatherSuccessAction => ({
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
  payload,
});

export const currentWeatherRequestedFailure = (
  payload: string
): FetchCurrentWeatherFailureAction => ({
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER_FAILURE,
  payload,
});

export const fetchCurrentWeather =
  (cityName: string) => (dispatch: Dispatch<ForecastActions>) => {
    dispatch(currentWeatherRequested());
    return OpenWeatherMapService.getCurrentWeather(cityName)
      .then((data) => {
        dispatch(currentWeatherRequestedSuccess(data));
      })
      .catch((err) => {
        dispatch(currentWeatherRequestedFailure(err));
      });
  };

export const forecastForWeekRequested = (): FetchForecastForWeekAction => ({
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK,
});

export const forecastForWeekRequestedSuccess = (
  payload: IDayWeather[]
): FetchForecastForWeekSuccessAction => ({
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_SUCCESS,
  payload,
});

export const forecastForWeekRequestedFailure = (
  payload: string
): FetchForecastForWeekFailureAction => ({
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_FAILURE,
  payload,
});

export const fetchForecastForWeek =
  (cityName: string) => (dispatch: Dispatch<ForecastActions>) => {
    dispatch(forecastForWeekRequested());
    return OpenWeatherMapService.getForecastForWeek(cityName)
      .then((data) => {
        dispatch(forecastForWeekRequestedSuccess(data));
      })
      .catch((err) => {
        dispatch(forecastForWeekRequestedFailure(err));
      });
  };
