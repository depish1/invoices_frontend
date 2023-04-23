import { useTheme } from 'styled-components';

import { StyledAlert } from './Alert.style';
import ErrorIcon from 'Icons/ErrorIcon';

interface IAlertProps {
  children: string;
}

export const Alert = ({ children }: IAlertProps) => {
  const { colors } = useTheme();

  return (
    <StyledAlert>
      <ErrorIcon color={colors.error} height="24px" width="24px" />
      {children}
    </StyledAlert>
  );
};
