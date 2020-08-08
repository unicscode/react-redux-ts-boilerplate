import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './App/routes';
import configureStore from './redux/configureStore';

import '@assets/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
