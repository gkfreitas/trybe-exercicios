// ./src/redux/index.js
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;
