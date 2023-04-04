import { PatternFormatProps, PatternFormat } from 'react-number-format';

import { IInputProps } from './Input';
import { StyledInput } from './Input.style';

type PatternFormatInputPropsType = PatternFormatProps & IInputProps;

const PatternInput = (props: PatternFormatInputPropsType) => <PatternFormat customInput={StyledInput} {...props} />;

export default PatternInput;
