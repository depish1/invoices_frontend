import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  fullWidth: boolean;
  isSecondary: boolean;
  size: 'small' | 'medium';
}

const getButtonCSSBySize = (isSecondary: boolean) => ({
  small: css`
    border: 0.2rem solid ${({ theme }) => theme.colors[isSecondary ? 'primary3' : 'primary1']};
    font-size: ${({ theme }) => theme.fontSizes.xSmall};
    line-height: 1.2rem;
    padding: 0.6rem 1.2rem;
  `,
  medium: css`
    border: 0.3rem solid ${({ theme }) => theme.colors[isSecondary ? 'primary3' : 'primary1']};
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2rem;
    padding: 1rem 2rem;
  `,
});

export const StyledButton = styled.button<IStyledButtonProps>`
  align-items: center;
  background-color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'background2' : 'primary1']};
  border-radius: 1rem;
  color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'primary3' : 'text1']};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  transition: 0.1s all ease-in;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};

  ${({ isSecondary, size }) => getButtonCSSBySize(isSecondary)[size]};

  &:disabled {
    background-color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'background2' : 'primary4']};
    border-color: ${({ theme }) => theme.colors.primary4};
    color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'primary4' : 'text3']};
    cursor: default;
  }

  &:hover:not([disabled]) {
    background-color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'background2' : 'primary2']};
    border-color: ${({ theme }) => theme.colors.primary2};
    color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'primary2' : 'text1']};
  }

  &:active:not([disabled]) {
    background-color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'background2' : 'primary3']};
    border-color: ${({ theme }) => theme.colors.primary3};
    color: ${({ isSecondary, theme }) => theme.colors[isSecondary ? 'primary3' : 'text1']};
  }
`;
