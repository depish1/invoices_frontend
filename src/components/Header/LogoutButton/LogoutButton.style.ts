import styled from 'styled-components';

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background2};
    transition: all 0.2s ease-in-out;

    path {
      stroke: ${({ theme }) => theme.colors.text1};
      transition: all 0.2s ease-in-out;
    }
  }
`;
