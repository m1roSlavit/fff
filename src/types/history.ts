interface SearchHistoryItem {
  id: string;
  label: string;
}

export interface HistoryState {
  searchHistory: {
    list: SearchHistoryItem[];
  };
}

export enum HistoryActionTypes {
  ADD_ITEM_TO_SEARCH_HISTORY = 'ADD_ITEM_TO_SEARCH_HISTORY',
}

export interface addItemToSearchHistoryAction {
  type: HistoryActionTypes.ADD_ITEM_TO_SEARCH_HISTORY;
  payload: string;
}

export type HistoryActions = addItemToSearchHistoryAction;
