import { configureStore } from '@reduxjs/toolkit';

import { authApi } from 'Api/authApi';
import { handleUnauthorizedMiddleware } from 'Middleware/handleUnauthorizedMiddleware';
import { invoicesApi } from 'Api/invoicesApi';
import activeView from 'Slices/activeViewSlice';
import loaderVisibility from 'Slices/loaderVisibilitySlice';
import user from 'Slices/userSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [invoicesApi.reducerPath]: invoicesApi.reducer,
    activeView,
    loaderVisibility,
    user,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([authApi.middleware, invoicesApi.middleware, handleUnauthorizedMiddleware]),
});

export type RootStateType = ReturnType<typeof store.getState>;
