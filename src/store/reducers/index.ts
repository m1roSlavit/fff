import { combineReducers } from "redux";
import { forecastReducer } from "./forecastReducer";
import { historyReducer } from "./historyReducer";

export const rootReducer = combineReducers({
  forecast: forecastReducer,
  history: historyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
