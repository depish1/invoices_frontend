import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { EViewType } from 'Enums/EViewType';
import { RootStateType } from 'Store/store';

const initialState: EViewType = null;

export const activeViewSlice = createSlice({
  name: 'activeView',
  initialState,
  reducers: {
    setActiveView: (state, action: PayloadAction<EViewType>) => {
      state = action.payload;

      return state;
    },
  },
});

export const { setActiveView } = activeViewSlice.actions;

export const activeViewSelector = (state: RootStateType) => state.activeView;

export default activeViewSlice.reducer;
