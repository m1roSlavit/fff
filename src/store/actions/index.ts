import * as CurrentWeatherActions from './forecastActions';
import * as HistoryActions from './forecastActions';

export default {
  ...CurrentWeatherActions,
  ...HistoryActions,
};
