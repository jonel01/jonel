import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
