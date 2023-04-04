import styled from 'styled-components';

import { MainWrapper } from 'Pages/Pages.style';

export const Container = styled(MainWrapper)`
  display: grid;
  grid-template-rows: min-content 1fr;
  gap: 2rem;
  height: 100%;
  max-width: 100rem;
  width: 100%;

  @media (max-width: 700px) {
    padding: 4rem 2rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;
