import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.text1};
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Header404 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxLarge};
  margin-inline: auto;
`;
