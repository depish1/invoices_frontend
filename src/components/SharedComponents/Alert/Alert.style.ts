import styled from 'styled-components';

export const StyledAlert = styled.p`
  align-items: center;
  background: ${({ theme }) => theme.colors.errorBg};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.error};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  gap: 1rem;
  padding: 1rem;
`;
