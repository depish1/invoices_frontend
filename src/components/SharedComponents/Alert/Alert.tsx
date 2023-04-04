import { useTheme } from 'styled-components';

import { StyledAlert } from './Alert.style';
import ErrorIcon from 'Assets/ErrorIcon';

interface IAlertProps {
  children: string;
}

const Alert = ({ children }: IAlertProps) => {
  const { colors } = useTheme();

  return (
    <StyledAlert>
      <ErrorIcon color={colors.error} height="24px" width="24px" />
      {children}
    </StyledAlert>
  );
};

export default Alert;
