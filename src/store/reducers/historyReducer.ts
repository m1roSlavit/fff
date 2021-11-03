import { v4 as uuid4 } from 'uuid';

import {
  HistoryActions,
  HistoryActionTypes,
  HistoryState,
} from '../../types/history';

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
    case HistoryActionTypes.ADD_ITEM_TO_SEARCH_HISTORY: {
      const isAlreadyExist = state.searchHistory.list.find(
        (item) => item.label === action.payload
      );

      if (isAlreadyExist) {
        return state;
      }

      const newSearchItem = { id: uuid4(), label: action.payload };
      return {
        ...state,
        searchHistory: {
          list: [newSearchItem, ...state.searchHistory.list.slice(0, 9)],
        },
      };
    }
    default:
      return state;
  }
};
