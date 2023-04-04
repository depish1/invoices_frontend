import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const loaderVisibilitySlice = createSlice({
  name: 'loaderVisibility',
  initialState,
  reducers: {
    setLoaderVisibility: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setLoaderVisibility } = loaderVisibilitySlice.actions;

export default loaderVisibilitySlice.reducer;
