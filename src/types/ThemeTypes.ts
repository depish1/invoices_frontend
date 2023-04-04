export interface ITheme {
  colors: Record<ColorKeyType, HexColorType>;
  fontSizes: Record<FontSizeKeyType, PixelSizeType | RemSizeType>;
}

type FontSizeKeyType = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';

export type PixelSizeType = `${number}px`;
export type RemSizeType = `${number}rem`;

type ColorKeyType =
  | 'primary1'
  | 'primary2'
  | 'primary3'
  | 'primary4'
  | 'background1'
  | 'background2'
  | 'background3'
  | 'text1'
  | 'text2'
  | 'text3'
  | 'text4'
  | 'error'
  | 'errorBg';

export type HexColorType = `#${string}`;
