import styled from 'styled-components';

import { MainWrapper } from 'Pages/Pages.style';

export const Container = styled(MainWrapper)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: fit-content;
  max-height: 100%;
  max-width: 50rem;
  width: 100%;
`;
