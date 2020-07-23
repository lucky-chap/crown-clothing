import { combineReducers } from 'redux';
// For storing user session
import { persistReducer } from 'redux-persist';
// For local storage from redux-persist
import storage from 'redux-persist/lib/storage'

import userReducer from './user/UserReducer';
import cartReducer from './cart/CartReducer';
import directoryReducer from './directory/DirectoryReducer';
import shopReducer from './shop/ShopReducer';

// Now you define the persist config
const persistConfig = {
  key: 'root',
  storage: storage,
  // whitelist is an array containing the reducers you want to persist for users
  // In this case i want to persist only the cart, since the user is handled by firebase
  // The properties are passed in as strings
  // 'cart' here refers to the key pointing to the cartReducer in the export of combineReducers
  whitelist: ['cart']
}

// Instead of this:
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer
// });
// YOU NOW DO THIS:
// Now root reducer becomes like so
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

// Finally you export persistReducer, which takes two parameters,
// first is the persistConfig and second is the rootReducer 
export default persistReducer(persistConfig, rootReducer)
