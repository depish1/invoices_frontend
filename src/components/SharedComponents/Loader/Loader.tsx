import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { Background } from './Loader.style';
import { LoaderIcon } from 'Icons/LoaderIcon';

export const Loader = () => {
  const { colors } = useTheme();
  const loaderColor = colors.text1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <Background>
      <LoaderIcon color={loaderColor} height="10rem" width="10rem" />
    </Background>
  );
};
