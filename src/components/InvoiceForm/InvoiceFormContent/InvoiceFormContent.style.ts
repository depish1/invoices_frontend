import styled from 'styled-components';

import { MainWrapper } from 'Pages/Pages.style';

export const Container = styled(MainWrapper)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  max-width: 100rem;

  width: 100%;

  @media (max-width: 700px) {
    padding: 4rem 2rem;
  }
`;
