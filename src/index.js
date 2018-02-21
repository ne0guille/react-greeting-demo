import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import { initialState } from './store/initialState';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const appStore = configureStore(initialState);

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
  );

ReactDOM.render(
  <Root store={appStore} />, 
  document.getElementById('root')
);
registerServiceWorker();
