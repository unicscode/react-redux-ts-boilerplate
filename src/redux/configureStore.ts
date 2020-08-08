import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { config as CONFIG } from '../config/default';
import rootReducer from './rootReducer';

const axiosInstance = axios.create({
  baseURL: CONFIG.settings.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const middlewares = [thunk.withExtraArgument(axiosInstance)];

const configureStore = () => {
  const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

  return store;
};

export default configureStore;
