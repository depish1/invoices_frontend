import { useController, useFormContext } from 'react-hook-form';

import { InputTextType } from '@/types/FormFields';
import { Wrapper } from './InputController.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';
import { HelperText } from 'Components/SharedComponents/HelperText/HelperText';
import { Input } from 'Components/SharedComponents/Input/Input';
import { Label } from 'Components/SharedComponents/Label/Label';

type InputControllerPropsType = {
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
};

export const InputController = ({ id, name, isRequired, label, helperText, isLabelHidden, placeholder, ...props }: InputControllerPropsType) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <Wrapper>
      {label && <Label id={id} isHidden={isLabelHidden} isRequired={isRequired} label={capitalizeFirstLetter(label)} />}
      <Input id={id} isError={!!error} {...field} value={field.value ?? ''} {...props} placeholder={isLabelHidden ? label : placeholder} />
      <HelperText helperText={error?.message ?? helperText} isError={!!error} />
    </Wrapper>
  );
};
