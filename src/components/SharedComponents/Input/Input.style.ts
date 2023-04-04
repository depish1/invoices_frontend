import styled from 'styled-components';

interface IStyledInputProps {
  defaultValue?: string;
  isError?: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  background-color: ${({ theme }) => theme.colors.background3};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.background3)};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  padding: 1.2rem;
  width: 100%;

  &:hover:not([readonly]) {
    border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.error : `${theme.colors.text3}55`)};
    transition: border 0.1s ease-in;
  }

  &:focus:not([readonly]) {
    border: 1px solid ${({ isError, theme }) => theme.colors[isError ? 'error' : 'primary1']};
  }

  &[readonly] {
    background-color: ${({ theme }) => theme.colors.background1};
    border: 1px solid ${({ theme }) => `${theme.colors.text3}44`};
    color: ${({ theme }) => theme.colors.text3};
    cursor: default;
  }
`;
