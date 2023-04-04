import styled, { css } from 'styled-components';

import { zIndexes } from 'Styles/variables';

interface IRowProps {
  gridTemplateColumns: string;
  onClick?: () => void;
}

const clickableRowStyles = css`
  &:hover {
    background: ${({ theme }) => theme.colors.background1};
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  color: ${({ theme }) => theme.colors.text1};
  font-size: ${({ theme }) => theme.fontSizes.xSmall};
  height: 100%;
  overflow: auto;
  padding-right: 0.4rem;
  position: relative;
  width: 100%;
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Row = styled.div<IRowProps>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text4};
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  ${({ onClick }) => !!onClick && clickableRowStyles};
`;

export const HeaderRow = styled(Row)`
  background: ${({ theme }) => theme.colors.background2};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text4};
  border-top: 2px solid ${({ theme }) => theme.colors.text4};
  font-weight: 600;
  top: -1px;
  z-index: ${zIndexes.tableHeaderRow};
  position: sticky;
`;

export const Cell = styled.div`
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.text4};
  display: flex;
  min-height: 4rem;
  padding: 0.5rem;

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.colors.text4};
  }
`;
