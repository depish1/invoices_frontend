import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { EViewType } from 'Enums/EViewType';

import { setActiveView } from 'Slices/activeViewSlice';

export const useActiveViewSetter = (activeView: EViewType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveView(activeView));
  }, [dispatch, activeView]);
};
