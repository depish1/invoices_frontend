import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { zIndexes } from 'Styles/variables';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    background-color: transparent;
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
 
  body {
    font-family: 'Poppins', sans-serif;
    height: 100%;
    user-select: none;
  }

  #root {
    height: 100%;
  }

  *[data-floating-ui-portal] {
    position: absolute;
    z-index: ${zIndexes.floatingUiPortal};
    top: 0;
  }
  

  *, *:before, *:after {
    box-sizing: inherit;
  }

  scrollbar-gutter: stable both-edges;

  &::-webkit-scrollbar {
    height: 1rem;
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background1}88;   
     border-radius: 2rem;
 

    &:hover {
      background: ${({ theme }) => theme.colors.primary1};
    }
  }
  
  &::-webkit-scrollbar-corner {background-color: transparent;}

`;
