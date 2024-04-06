import get from 'lodash.get';
import {createSelector} from 'reselect';

const baseSelector = (state: TReduxState) => state.app;

const getData = createSelector(baseSelector, state => state.data);

export const getListData = createSelector(getData, app =>
  get(app, 'listdata', {}),
);

export const getSearchText = createSelector(getData, app =>
  get(app, 'searchText', ''),
);

export const getSearchKey = createSelector(getData, app =>
  get(app, 'searchKey', ''),
);

export const getModalVisibility = createSelector(getData, app =>
  get(app, 'modalVisibility', false),
);
