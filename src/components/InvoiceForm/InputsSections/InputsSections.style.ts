import styled from 'styled-components';

interface ISectionProps {
  fullWidth?: boolean;
}

export const Section = styled.section<ISectionProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: ${({ fullWidth }) => fullWidth && `1/-1`};
`;

export const SectionHeader = styled.h3`
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
`;

export const ProductsRowsWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(20rem, 1fr) 10rem repeat(3, 13rem) 4rem;
  width: 100%;
  overflow-x: scroll;
`;
