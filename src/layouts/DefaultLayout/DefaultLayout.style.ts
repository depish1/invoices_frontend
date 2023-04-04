import styled from 'styled-components';

import { zIndexes } from 'Styles/variables';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background1};
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  height: 100vh;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2vw;
  width: 100%;
  z-index: ${zIndexes.header};
`;

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  width: 100%;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;
