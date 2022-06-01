import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import cartReducer from "./cartSlice";
import  productReducer from "./productSlice";
import userReducer from "./userSlice";

const rootPersistConfig ={ 
  key: 'root',
  storage: storage, 
  blacklist: ['user']
}

const userPersistConfig = { 
  key: 'user',
  storage: storage,
  blacklist: ['error', 'status']
}

const rootReducers = combineReducers({
  cart: cartReducer,
  user:  persistReducer(userPersistConfig, userReducer),
  products: productReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducers);

const store = configureStore({ 
  reducer: persistedReducer,
  middleware: [thunk] 
})

export let persistor = persistStore(store);



export default store;