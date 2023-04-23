import { RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loader } from 'Components/SharedComponents/Loader/Loader';
import { router } from './router';

import { isLoaderVisibleSelector } from 'Selectors/loaderVisibility';

export const App = () => {
  const isLoaderVisible = useSelector(isLoaderVisibleSelector);

  return (
    <>
      {isLoaderVisible && <Loader />}
      <RouterProvider router={router} />
    </>
  );
};
