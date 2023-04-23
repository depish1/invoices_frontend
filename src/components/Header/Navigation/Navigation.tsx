import { useSelector } from 'react-redux';

import { EViewType } from 'Enums/EViewType';
import { Nav } from './Navigation.style';
import { LanguageContextMenu } from 'Components/Header/LanguageContextMenu/LanguageContextMenu';
import { LogoutButton } from 'Components/Header/LogoutButton/LogoutButton';

import { activeViewSelector } from 'Slices/activeViewSlice';

const viewsWithLogoutButton = [EViewType.INVOICES, EViewType.INVOICE_FORM];

export const Navigation = () => {
  const activeView = useSelector(activeViewSelector);
  const isLogoutButtonVisible = viewsWithLogoutButton.includes(activeView);

  return (
    <Nav>
      <LanguageContextMenu />
      {isLogoutButtonVisible && <LogoutButton />}
    </Nav>
  );
};
