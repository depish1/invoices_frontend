import { EViewType } from 'Enums/EViewType';
import { IconPropsType } from 'Types/IconTypes';

export type NavConfigType = NavConfigElementType[];

export type NavConfigElementType = NavLinkType;

export type NavLinkType = {
  name: string;
  path: `/${EViewType}`;
  Icon?: ({ color, height, width }: IconPropsType) => JSX.Element;
};
