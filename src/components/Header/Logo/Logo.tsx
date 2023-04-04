import { useTheme } from 'styled-components';

import { LogoWrapper, TextPart } from './Logo.style';
import ListIcon from 'Assets/ListIcon';

const Logo = () => {
  const { colors } = useTheme();

  return (
    <LogoWrapper>
      <ListIcon color={colors.text1} height="3.2rem" width="3.2rem" />
      <TextPart>
        <TextPart isPrimary>My</TextPart>Invoices
      </TextPart>
    </LogoWrapper>
  );
};

export default Logo;
