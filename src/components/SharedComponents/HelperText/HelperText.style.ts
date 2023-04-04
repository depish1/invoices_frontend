import styled from 'styled-components';

interface IStyledHelperProps {
  isError: boolean;
}

export const StyledHelperText = styled.p<IStyledHelperProps>`
  color: ${({ isError, theme }) => theme.colors[isError ? 'error' : 'text3']};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  line-height: 1.4rem;
  margin: 0;
  min-height: 1.4rem;
  width: 100%;
`;
