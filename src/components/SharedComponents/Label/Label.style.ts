import styled, { css } from 'styled-components';

interface IStyledLabelProps {
  isHidden: boolean;
}

const hideCSS = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const StyledLabel = styled.label<IStyledLabelProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.small};
  gap: 1rem;

  ${({ isHidden }) => isHidden && hideCSS}
`;

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.text1};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
`;
