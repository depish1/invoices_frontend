import { createSelector } from 'reselect';

import { RootStateType } from 'Store/store';

export const userSliceSelector = (state: RootStateType) => state.user;

export const userSelector = createSelector(userSliceSelector, (state) => state.user);

export const tokenSelector = createSelector(userSliceSelector, (state) => state.token);
