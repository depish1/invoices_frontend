import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '@/types/Api';

import { authApi } from 'Api/authApi';

type IUserStateType = {
  user: IUser | null;
  token: string | null;
};

const initialState: IUserStateType = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.loginUser.matchFulfilled, (state, { payload: { access_token, user } }) => {
      state.token = access_token;
      state.user = user;
    });
  },
});

export default userSlice.reducer;

export const { logout } = userSlice.actions;
