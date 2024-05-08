import { combineReducers, configureStore } from '@reduxjs/toolkit';
import teaApi from '@/lib/services/teaService';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from './redux/user/user.slice';

const rootReducer = combineReducers({
    user: userSlice.reducer,
   // [teaApi.reducerPath]: teaApi.reducer, 
})

export const store = configureStore({
  reducer: rootReducer,
 // middleware: (getDefaultMiddleware) =>
  //  getDefaultMiddleware().concat(teaApi.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof rootReducer>