/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { ITheme } from '@/types/Theme';

export const theme: ITheme = {
  colors: {
    primary1: '#1a7431',
    primary2: '#208b3a',
    primary3: '#2dc653',
    primary4: '#1b4332',
    background1: '#0b0c0c',
    background2: '#1b1c1c',
    background3: '#2a2e34',
    text1: '#ededed',
    text2: '#d3d3d3',
    text3: '#b0b0b0',
    text4: '#2a2e34',
    error: '#D2001A',
    errorBg: '#FA9494',
  },
  fontSizes: {
    xSmall: '12px',
    small: '16px',
    medium: '20px',
    large: '24px',
    xLarge: '28px',
    xxLarge: '56px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
