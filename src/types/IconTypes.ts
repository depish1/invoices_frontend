import { HexColorType, PixelSizeType, RemSizeType } from 'Types/ThemeTypes';

export type IconPropsType = {
  color: HexColorType;
  height: PixelSizeType | RemSizeType;
  width: PixelSizeType | RemSizeType;
};
