import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';
import { apiMiddleware } from '../middleware/api-middleware';
import { registrationMiddleware } from '../scenes/register/data/middleware/registration-middleware';

const middleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware,
  registrationMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer,
    initialState,
    composeWithDevTools(middleware));
}