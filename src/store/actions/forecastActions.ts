import { Dispatch } from "react";
import { OpenWeatherMapService } from "../../services/openweathermap-service";

import {
  FetchCurrentWeatherAction,
  FetchCurrentWeatherFailureAction,
  FetchCurrentWeatherSuccessAction,
  ForecastActions,
  ForecastActionTypes,
  ICurrentWeather,
} from "../../types/forecast";
import { HistoryActions } from "../../types/history";
import { addItemToSearchHistory } from "./historyActions";

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
  (cityName: string, saveToHistory?: boolean) =>
  (dispatch: Dispatch<ForecastActions | HistoryActions>) => {
    dispatch(currentWeatherRequested());
    return OpenWeatherMapService.getCurrentWeather(cityName)
      .then((data) => {
        dispatch(currentWeatherRequestedSuccess(data));
        if (saveToHistory) {
          dispatch(addItemToSearchHistory(data.name));
        }
      })
      .catch((err) => {
        dispatch(currentWeatherRequestedFailure(err));
      });
  };
