import {
  APP_UPDATE_SEARCH_TEXT,
  APP_UPDATE_SEARCHED_DATA,
  APP_UPDATE_MODAL_VISIBILITY,
  SORT_BY_NAME,
} from '@store/action-types/app';
import {RESET_REDUCER} from 'state/action-types/common';

export const updateSearchText =
  (payload: string) =>
  async (dispatch: IDispatch): Promise<allAnyTypes> => {
    dispatch({
      type: APP_UPDATE_SEARCH_TEXT,
      payload,
    });
  };

export const updateSearchList =
  (payload: allAnyTypes) =>
  async (dispatch: IDispatch): Promise<allAnyTypes> => {
    dispatch({
      type: APP_UPDATE_SEARCHED_DATA,
      payload,
    });
  };

export const updateModalModalVisibility =
  (payload: boolean) =>
  async (dispatch: IDispatch): Promise<allAnyTypes> => {
    dispatch({
      type: APP_UPDATE_MODAL_VISIBILITY,
      payload,
    });
  };

export const resetListData = (): IAction => ({
  type: RESET_REDUCER,
});

export const sortByName = (): IAction => ({
  type: SORT_BY_NAME,
});
