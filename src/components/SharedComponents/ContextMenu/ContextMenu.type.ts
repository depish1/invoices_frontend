import { MouseEvent } from 'react';

export type OptionConfigType = {
  callback: (e?: MouseEvent<HTMLButtonElement>) => void;
  label: string;
};
