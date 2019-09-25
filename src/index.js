/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

const logger = (store) => (next) => (action) => {
  console.log('[Middleware], Dispatching', action);
  const result = next(action);
  console.log('[Middleware] next state', store.getState());
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
