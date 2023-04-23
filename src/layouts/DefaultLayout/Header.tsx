import { HeaderWrapper } from './DefaultLayout.style';
import { Logo } from 'Components/Header/Logo/Logo';
import { Navigation } from 'Components/Header/Navigation/Navigation';

export const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navigation />
  </HeaderWrapper>
);
