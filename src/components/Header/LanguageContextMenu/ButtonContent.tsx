import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { ButtonContentWrapper, TextWrapper } from './LanguageContextMenu.style';
import ChevronDownIcon from 'Assets/ChevronDownIcon';
import ChevronUpIcon from 'Assets/ChevronUpIcon';

interface IButtonContentProps {
  isMenuOpen: boolean;
}

const ButtonContent = ({ isMenuOpen }: IButtonContentProps) => {
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

export default ButtonContent;