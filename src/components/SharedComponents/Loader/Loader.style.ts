import styled from 'styled-components';

import { zIndexes } from 'Styles/variables';

export const Background = styled.div`
  align-items: center;
  backdrop-filter: blur(0.5rem);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${zIndexes.loader};
`;
