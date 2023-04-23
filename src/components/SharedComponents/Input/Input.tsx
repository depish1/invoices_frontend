import { ChangeEvent, MouseEvent, Ref, forwardRef } from 'react';

import { InputTextType } from '@/types/FormFields';
import { StyledInput } from './Input.style';

export interface IInputProps {
  defaultValue?: string;
  id: string;
  isError?: boolean;
  maxLength?: number;
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  type?: InputTextType;
  value?: string;
}

export const Input = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => {
  return <StyledInput ref={ref} {...props}></StyledInput>;
});
