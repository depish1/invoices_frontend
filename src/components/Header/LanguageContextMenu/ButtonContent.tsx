import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { ButtonContentWrapper, TextWrapper } from './LanguageContextMenu.style';
import { ChevronDownIcon } from 'Icons/ChevronDownIcon';
import { ChevronUpIcon } from 'Icons/ChevronUpIcon';

interface IButtonContentProps {
  isMenuOpen: boolean;
}

export const ButtonContent = ({ isMenuOpen }: IButtonContentProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <ButtonContentWrapper>
      {isMenuOpen ? (
        <ChevronUpIcon color={colors.text1} height="2.4rem" width="2.4rem" />
      ) : (
        <ChevronDownIcon color={colors.text1} height="2.4rem" width="2.4rem" />
      )}
      <TextWrapper>{t('currentLanguageShort')}</TextWrapper>
    </ButtonContentWrapper>
  );
};
