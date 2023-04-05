import styled from 'styled-components';

export const MainWrapper = styled.main`
  background: ${({ theme }) => theme.colors.background2};
  border-radius: 2rem;
  max-height: 100%;
  max-width: 100%;
  overflow-y: scroll;
  padding: 4rem;
`;
