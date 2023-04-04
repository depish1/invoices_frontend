import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Button, ButtonText } from './LogoutButton.style';
import LogoutIcon from 'Assets/LogoutIcon';

import { logout } from 'Slices/userSlice';

const LogoutButton = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logout());

  return (
    <Button onClick={logoutHandler}>
      <LogoutIcon color={colors.text1} height="2.4rem" width="2.4rem" />
      <ButtonText> {t('logout')}</ButtonText>
    </Button>
  );
};

export default LogoutButton;
