import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background3};
    transition: background 0.2s ease-in;
  }
`;

export const ContextMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background2};
  border: ${({ theme }) => `2px solid ${theme.colors.text4}`};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 15px rgba(150, 150, 150, 0.05);
  display: flex;
  flex-direction: column;
  min-width: 13.2rem;
  overflow: hidden;
`;

export const Option = styled.button`
  background: transparent;
  border: none;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.text4}`};
  color: ${({ theme }) => theme.colors.text1};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  padding: 0.8rem 0.8rem;
  text-align: left;
  width: 100%;

  &:last-child {
    border: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background1};
    transition: background 0.2s ease-in;
  }
`;
