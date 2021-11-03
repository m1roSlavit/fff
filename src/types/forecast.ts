interface IWeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IWeatherMainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWindInfo {
  speed: number;
  deg: number;
}

export interface ICurrentWeather {
  weather: IWeatherInfo[];
  main: IWeatherMainInfo;
  wind: IWindInfo;
  name: string;
}

export interface IDayWeather {
  id: string;
  weather: IWeatherInfo[];
  main: IWeatherMainInfo;
  dt_txt: string;
}

export interface IForecastForWeekRes {
  list: IDayWeather[];
}

export interface ForecastState {
  currentWeather: {
    data: ICurrentWeather | null;
    loading: boolean;
    error: string;
  };
  forecastForWeek: {
    data: IDayWeather[] | null;
    loading: boolean;
    error: string;
  };
}

export enum ForecastActionTypes {
  FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER',
  FETCH_CURRENT_WEATHER_SUCCESS = 'FETCH_CURRENT_WEATHER_SUCCESS',
  FETCH_CURRENT_WEATHER_FAILURE = 'FETCH_CURRENT_WEATHER_FAILURE',
  FETCH_FORECAST_FOR_WEEK = 'FETCH_FORECAST_FOR_WEEK',
  FETCH_FORECAST_FOR_WEEK_SUCCESS = 'FETCH_FORECAST_FOR_WEEK_SUCCESS',
  FETCH_FORECAST_FOR_WEEK_FAILURE = 'FETCH_FORECAST_FOR_WEEK_FAILURE',
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

export interface FetchForecastForWeekAction {
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK;
}

export interface FetchForecastForWeekSuccessAction {
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_SUCCESS;
  payload: IDayWeather[];
}

export interface FetchForecastForWeekFailureAction {
  type: ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_FAILURE;
  payload: string;
}

export type ForecastActions =
  | FetchCurrentWeatherAction
  | FetchCurrentWeatherSuccessAction
  | FetchCurrentWeatherFailureAction
  | FetchForecastForWeekAction
  | FetchForecastForWeekSuccessAction
  | FetchForecastForWeekFailureAction;
