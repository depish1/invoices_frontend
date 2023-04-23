import { StyledHelperText } from './HelperText.style';

export interface IHelperTextProps {
  isError?: boolean;
  helperText?: string;
}

export const HelperText = ({ isError = false, helperText }: IHelperTextProps) => <StyledHelperText isError={isError}>{helperText}</StyledHelperText>;
