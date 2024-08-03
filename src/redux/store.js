// src/redux/store.js

import { createStore } from 'redux';
import plantReducer from './reducers';

const store = createStore(
    plantReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
