import { MouseEventHandler } from 'react';
import { useTheme } from 'styled-components';

import { StyledButton } from './Button.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';
import LoaderIcon from 'Assets/LoaderIcon';

interface IButtonProps {
  isLoading?: boolean;
  isSecondary?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium';
  text: string;
  type?: 'button' | 'submit';
}

const Button = ({ isLoading, fullWidth = true, isSecondary = false, onClick, text, type = 'button', size = 'medium' }: IButtonProps) => {
  const theme = useTheme();
  const loaderColor = theme.colors[isSecondary ? 'primary4' : 'text1'];
  const loaderSize = size === 'small' ? '1.2rem' : '2rem';

  return (
    <StyledButton disabled={isLoading} fullWidth={fullWidth} isSecondary={isSecondary} onClick={onClick} size={size} type={type}>
      {isLoading ? <LoaderIcon color={loaderColor} height={loaderSize} width={loaderSize} /> : capitalizeFirstLetter(text)}
    </StyledButton>
  );
};

export default Button;
