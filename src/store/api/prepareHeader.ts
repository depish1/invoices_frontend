import { BaseQueryApi } from '@reduxjs/toolkit/dist/query';

import { RootStateType } from 'Store/store';

export const prepareHeader = (headers: Headers, { getState }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>) => {
  const token = (getState() as RootStateType).user.token;
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  return headers;
};
