import { createStore, applyMiddleware } from 'redux';
// Middleware placed between an action and the root reducer. Useful for debugging code
// Check console for more info about it
import logger from 'redux-logger';
import RootReducer from './RootReducer';

const middlewares = [logger];

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
