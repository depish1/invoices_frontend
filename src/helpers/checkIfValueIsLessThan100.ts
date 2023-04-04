import { NumberFormatValues } from 'react-number-format';

export const checkIfValueIsLessThan100 = (values: NumberFormatValues): boolean => {
  const { formattedValue, floatValue } = values;
  return formattedValue === '' || floatValue <= 100;
};
