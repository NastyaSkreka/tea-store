import { configureStore } from '@reduxjs/toolkit';
import teaApi from '@/lib/services/teaService';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [teaApi.reducerPath]: teaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(teaApi.middleware),
});

setupListeners(store.dispatch);
