import { NumericFormatProps } from 'react-number-format';
import { useController, useFormContext } from 'react-hook-form';

import { InputTextType } from '@/types/FormFields';
import { Wrapper } from './InputController.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';
import { HelperText } from 'Components/SharedComponents/HelperText/HelperText';
import { Label } from 'Components/SharedComponents/Label/Label';
import { NumericInput } from 'Components/SharedComponents/Input/NumericInput';

type NumericInputControllerPropsType = {
  defaultValue?: string;
  id: string;
  isError?: boolean;
  name: string;
  placeholder?: string;
  readOnly?: boolean;
  type?: InputTextType;
  value?: string;
  isRequired?: boolean;
  label: string;
  helperText?: string;
  isLabelHidden?: boolean;
} & NumericFormatProps;

export const NumericInputController = ({
  id,
  name,
  isRequired,
  label,
  helperText,
  isLabelHidden,
  placeholder,
  ...props
}: NumericInputControllerPropsType) => {
  const { control } = useFormContext();
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Wrapper>
      {label && <Label id={id} isHidden={isLabelHidden} isRequired={isRequired} label={capitalizeFirstLetter(label)} />}
      <NumericInput
        id={id}
        isError={!!error}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value ?? ''}
        {...props}
        placeholder={isLabelHidden ? label : placeholder}
      />
      <HelperText helperText={error?.message ?? helperText} isError={!!error} />
    </Wrapper>
  );
};
