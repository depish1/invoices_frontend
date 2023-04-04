import styled from 'styled-components';

interface ITextWrapperProps {
  isPrimary?: boolean;
}

export const LogoWrapper = styled.h1`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  margin: 0;
`;

export const TextPart = styled.span<ITextWrapperProps>`
  color: ${({ isPrimary, theme }) => theme.colors[isPrimary ? 'primary3' : 'text1']};
  font-size: ${({ theme }) => theme.fontSizes.xLarge};
  font-weight: 600;
`;
