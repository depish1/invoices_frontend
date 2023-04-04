import styled from 'styled-components';

export const ProductsHeadline = styled.h4`
  display: block;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  margin: 0;
  min-height: 1px;
  min-width: 1px;
`;
