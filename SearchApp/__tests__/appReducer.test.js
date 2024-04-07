import {appReducer} from './appReducer';
import {
  APP_UPDATE_SEARCHED_DATA,
  APP_UPDATE_SEARCH_TEXT,
  APP_UPDATE_SEARCH_KEY,
  APP_UPDATE_MODAL_VISIBILITY,
  SORT_BY_NAME,
  RESET_REDUCER,
} from 'state/action-types/app';

describe('Redux Reducer Tests', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      data: {
        listdata: [],
        searchText: '',
        searchKey: '',
        modalVisibility: false,
      },
    };
  });

  it('should handle APP_UPDATE_SEARCHED_DATA action', () => {
    const action = {
      type: APP_UPDATE_SEARCHED_DATA,
      payload: {search: 'test'},
    };
    const newState = appReducer(initialState, action);
    expect(newState.data.modalVisibility).toEqual(true);
  });

  it('should handle APP_UPDATE_SEARCH_TEXT action', () => {
    const action = {
      type: APP_UPDATE_SEARCH_TEXT,
      payload: 'test',
    };
    const newState = appReducer(initialState, action);
    expect(newState.data.searchText).toEqual('test');
  });

  it('should handle APP_UPDATE_SEARCH_KEY action', () => {
    const action = {
      type: APP_UPDATE_SEARCH_KEY,
      payload: 'test',
    };
    const newState = appReducer(initialState, action);
    expect(newState.data.searchKey).toEqual('test');
  });

  it('should handle APP_UPDATE_MODAL_VISIBILITY action', () => {
    const action = {
      type: APP_UPDATE_MODAL_VISIBILITY,
      payload: true,
    };
    const newState = appReducer(initialState, action);
    expect(newState.data.modalVisibility).toEqual(true);
  });

  it('should handle SORT_BY_NAME action', () => {
    const action = {type: SORT_BY_NAME};
    const newState = appReducer(initialState, action);
    expect(newState.data.listdata).toEqual([]);
  });

  it('should handle RESET_REDUCER action', () => {
    const action = {type: RESET_REDUCER};
    const newState = appReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
