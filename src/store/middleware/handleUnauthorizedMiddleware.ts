import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';

import { logout } from 'Slices/userSlice';

const unauthorizedStatus = 401;

export const handleUnauthorizedMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === unauthorizedStatus) {
      api.dispatch(logout());
    }
  }
  return next(action);
};
