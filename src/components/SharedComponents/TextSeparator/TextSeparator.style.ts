import styled from 'styled-components';

import { zIndexes } from 'Styles/variables';

export const StyledTextSeparator = styled.p`
  background-color: ${({ theme }) => theme.colors.background2};
  color: ${({ theme }) => theme.colors.text3};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: ${zIndexes.textSeparator};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;

  &:before {
    background-color: ${({ theme }) => theme.colors.text3}33;
    content: '';
    display: block;
    height: 0.1rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`;
