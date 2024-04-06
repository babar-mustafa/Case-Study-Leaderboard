import {combineReducers} from 'redux';
import {appReducer} from './app';

export const mainReducer = combineReducers({
  app: appReducer,
});
