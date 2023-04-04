import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

import { logout } from 'Slices/userSlice';

export const handleUnauthorizedMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401) {
      api.dispatch(logout());
    }
  }
  return next(action);
};
