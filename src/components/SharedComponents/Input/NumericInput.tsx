import { ControllerRenderProps } from 'react-hook-form';
import { NumberFormatValues, NumericFormat, NumericFormatProps } from 'react-number-format';
import { useEffect, useState } from 'react';

import { IInputProps } from './Input';
import { StyledInput } from './Input.style';

type NumericFormatInputPropsType = IInputProps & NumericFormatProps & Pick<ControllerRenderProps, 'onChange'>;

const NumericInput = ({ value, onChange, ...rest }: NumericFormatInputPropsType) => {
  const [localValue, setLocalValue] = useState(value);

  const changeHandler = (target: NumberFormatValues) => {
    setLocalValue(target.formattedValue);
    onChange(target.floatValue);
  };

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return <NumericFormat customInput={StyledInput} onValueChange={changeHandler} value={localValue} {...rest} />;
};

export default NumericInput;
