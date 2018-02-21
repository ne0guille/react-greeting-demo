import { combineReducers } from 'redux';

import { registrationReducer, countriesReducer } from './registration/reducer';
import { visitorReducer } from './visitors/reducer';

export const reducer = combineReducers({
  data: registrationReducer,
  currentVisitor: visitorReducer,
  countries: countriesReducer,
});