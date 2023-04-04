import { Cell, HeaderRow, Row, TableWrapper, TBody } from './Table.style';
import { CellContentType, RowDataType } from './Table.type';
import Loader from 'Components/SharedComponents/Loader/Loader';

interface ITableProps {
  data?: RowDataType[];
  headers: CellContentType[];
  gridTemplateColumns: string;
  isLoading?: boolean;
}

const Table = ({ data, headers, gridTemplateColumns, isLoading }: ITableProps) => {
  const loader = isLoading ? <Loader /> : null;

  return (
    <TableWrapper>
      <HeaderRow gridTemplateColumns={gridTemplateColumns}>
        {headers.map(({ data, key }) => (
          <Cell key={key}>{data}</Cell>
        ))}
      </HeaderRow>
      <TBody>
        {data
          ? data.map(({ rowData, key, handleRowClick }) => (
              <Row key={key} gridTemplateColumns={gridTemplateColumns} onClick={handleRowClick}>
                {rowData.map(({ data, key }) => (
                  <Cell key={key}>{data}</Cell>
                ))}
              </Row>
            ))
          : loader}
      </TBody>
    </TableWrapper>
  );
};

export default Table;
