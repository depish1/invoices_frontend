import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Container } from './RegistrationPageContent.style';
import { EViewType } from 'Enums/EViewType';
import { AccountPlusIcon } from 'Icons/AccountPlusIcon';
import { Button } from 'Components/SharedComponents/Button/Button';
import RegistrationForm from 'Components/Registration/RegistrationForm/RegistrationForm';
import { ViewHeader } from 'Components/SharedComponents/ViewHeader/ViewHeader';
import { TextSeparator } from 'Components/SharedComponents/TextSeparator/TextSeparator';

const RegistrationPageContent = () => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const navigate = useNavigate();

  const navigateToLoginForm = useCallback(() => navigate(`/${EViewType.LOGIN}`), [navigate]);

  return (
    <Container>
      <ViewHeader
        icon={<AccountPlusIcon color={colors.primary3} height="3.6rem" width="3.6rem" />}
        marginBottom="1rem"
        text={t('registrationSectionName')}
      />
      <RegistrationForm />
      <TextSeparator text={t('registrationFormSeparator')} />
      <Button isSecondary onClick={navigateToLoginForm} text={t('login')} />
    </Container>
  );
};

export default RegistrationPageContent;
