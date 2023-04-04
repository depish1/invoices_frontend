import { ChangeEvent, MouseEvent, Ref, forwardRef } from 'react';

import { InputTextType } from 'Types/FormFieldsTypes';
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

const Input = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => {
  return <StyledInput ref={ref} {...props}></StyledInput>;
});

export default Input;