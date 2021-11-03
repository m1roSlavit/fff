export interface ICurrentWeather {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
}

export interface ForecastState {
  currentWeather: {
    data: ICurrentWeather | null;
    loading: boolean;
    error: string;
  };
  forecastForWeek: {
    data: any | null;
    loading: boolean;
    error: string;
  };
}

export enum ForecastActionTypes {
  FETCH_CURRENT_WEATHER = "FETCH_CURRENT_WEATHER",
  FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS",
  FETCH_CURRENT_WEATHER_FAILURE = "FETCH_CURRENT_WEATHER_FAILURE",
}

export interface FetchCurrentWeatherAction {
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER;
}

export interface FetchCurrentWeatherSuccessAction {
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER_SUCCESS;
  payload: ICurrentWeather;
}

export interface FetchCurrentWeatherFailureAction {
  type: ForecastActionTypes.FETCH_CURRENT_WEATHER_FAILURE;
  payload: string;
}

export type ForecastActions =
  | FetchCurrentWeatherAction
  | FetchCurrentWeatherSuccessAction
  | FetchCurrentWeatherFailureAction;
