import styled from 'styled-components';

import { PixelSizeType, RemSizeType } from 'Types/ThemeTypes';

interface IHeadlineProps {
  isSecondaryTextColor: boolean;
}

interface IHeaderProps {
  isButton: boolean;
  marginBottom?: PixelSizeType | RemSizeType;
}

export const Header = styled.header<IHeaderProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  position: relative;

  @media (max-width: 500px) {
    justify-content: ${({ isButton }) => isButton && 'flex-start'};
  }
`;

export const Headline = styled.h2<IHeadlineProps>`
  color: ${({ isSecondaryTextColor, theme }) => (isSecondaryTextColor ? theme.colors.background1 : theme.colors.text1)};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;
