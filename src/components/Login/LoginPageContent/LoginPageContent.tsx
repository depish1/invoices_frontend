import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Container } from './LoginPageContent.style';
import { EViewType } from 'Enums/EViewType';

import { Button } from 'Components/SharedComponents/Button/Button';
import LoginForm from 'Components/Login/LoginForm/LoginForm';
import { ViewHeader } from 'Components/SharedComponents/ViewHeader/ViewHeader';
import { TextSeparator } from 'Components/SharedComponents/TextSeparator/TextSeparator';
import { AccountIcon } from 'Icons/AccountIcon';

const LoginPageContent = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigate = useNavigate();

  const navigateToRegistrationForm = () => navigate(`/${EViewType.REGISTRATION}`);

  return (
    <Container>
      <ViewHeader icon={<AccountIcon color={colors.primary3} height="3.6rem" width="3.6rem" />} marginBottom="1rem" text={t('loginSectionName')} />
      <LoginForm />
      <TextSeparator text={t('loginFormSeparator')} />
      <Button isSecondary onClick={navigateToRegistrationForm} text={t('register')} />
    </Container>
  );
};

export default LoginPageContent;
