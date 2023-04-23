import { StyledTextSeparator, Wrapper } from './TextSeparator.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';

interface ITextSeparatorProps {
  text: string;
}

export const TextSeparator = ({ text }: ITextSeparatorProps) => (
  <Wrapper>
    <StyledTextSeparator>{capitalizeFirstLetter(text)}</StyledTextSeparator>
  </Wrapper>
);
