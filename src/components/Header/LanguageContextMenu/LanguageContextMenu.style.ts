import styled from 'styled-components';

export const TextWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
`;

export const ButtonContentWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
`;
