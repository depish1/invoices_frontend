import { LabelText, Required, StyledLabel } from './Label.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';

export interface ILabelProps {
  isRequired?: boolean;
  isHidden?: boolean;
  label: string;
  id: string;
}

export const Label = ({ isHidden = false, isRequired, label, id }: ILabelProps) => (
  <StyledLabel htmlFor={id} isHidden={isHidden}>
    <LabelText>{capitalizeFirstLetter(label)}</LabelText>
    {isRequired && <Required>*</Required>}
  </StyledLabel>
);
