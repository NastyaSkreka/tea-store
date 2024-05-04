import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from './redux/user/user.slice';
import { cartSlice } from './redux/cart/cart.slice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filtersSlice } from './redux/filters/filters.slice';


const persistConfig = {
    key: 'tea', 
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer, 
  filters: filtersSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

setupListeners(store.dispatch);
export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>;
