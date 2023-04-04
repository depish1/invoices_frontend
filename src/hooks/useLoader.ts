import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setLoaderVisibility } from 'Slices/loaderVisibilitySlice';

export const useLoader = (isLoading: boolean) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoaderVisibility(isLoading));

    return () => {
      dispatch(setLoaderVisibility(false));
    };
  }, [dispatch, isLoading]);
};
