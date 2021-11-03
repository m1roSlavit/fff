import {
  HistoryActions,
  HistoryActionTypes,
  HistoryState,
} from "../../types/history";

const initialState: HistoryState = {
  searchHistory: {
    list: [],
  },
};

export const historyReducer = (
  state: HistoryState = initialState,
  action: HistoryActions
): HistoryState => {
  switch (action.type) {
    case HistoryActionTypes.ADD_ITEM_TO_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: {
          list:
            state.searchHistory.list[0] === action.payload
              ? state.searchHistory.list
              : [action.payload, ...state.searchHistory.list.slice(0, 9)],
        },
      };
    default:
      return state;
  }
};
