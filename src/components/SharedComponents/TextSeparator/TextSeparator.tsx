import { StyledTextSeparator, Wrapper } from './TextSeparator.style';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';

interface ITextSeparatorProps {
  text: string;
}

const TextSeparator = ({ text }: ITextSeparatorProps) => (
  <Wrapper>
    <StyledTextSeparator>{capitalizeFirstLetter(text)}</StyledTextSeparator>
  </Wrapper>
);

export default TextSeparator;
