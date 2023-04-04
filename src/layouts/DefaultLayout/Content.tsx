import { Outlet } from 'react-router';

import { ContentWrapper } from './DefaultLayout.style';

export const Content = () => (
  <ContentWrapper>
    <Outlet />
  </ContentWrapper>
);
