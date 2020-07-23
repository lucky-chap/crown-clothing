import { createStore, applyMiddleware } from 'redux';
// Middleware placed between an action and the root reducer. Useful for debugging code
// Check console for more info about it
import logger from 'redux-logger';
import RootReducer from './RootReducer';
// For keeping user session
import { persistStore } from 'redux-persist'

const middlewares = [logger];

export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);


