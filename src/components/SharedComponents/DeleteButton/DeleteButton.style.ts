import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  height: fit-content;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.background3};
  }
`;
