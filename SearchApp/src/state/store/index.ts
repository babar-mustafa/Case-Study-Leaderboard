import {createStore, applyMiddleware} from 'redux';
import {mainReducer} from '../reducers';
import {thunk} from 'redux-thunk';

const middlewares = [thunk];

export const store = createStore(
  mainReducer,
  {},
  applyMiddleware(...middlewares),
);

export type ReduxState = ReturnType<typeof store.getState>;

export default () => {
  return store;
};
