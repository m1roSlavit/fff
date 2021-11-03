import {
  addItemToSearchHistoryAction,
  HistoryActionTypes,
} from '../../types/history';

export const addItemToSearchHistory = (
  payload: string
): addItemToSearchHistoryAction => ({
  type: HistoryActionTypes.ADD_ITEM_TO_SEARCH_HISTORY,
  payload,
});
