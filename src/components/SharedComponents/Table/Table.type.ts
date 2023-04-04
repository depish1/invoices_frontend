type KeyType = string | number;

export type CellContentType = {
  key: KeyType;
  data: number | string | JSX.Element | null;
};

export type RowDataType = {
  key: KeyType;
  rowData: CellContentType[];
  handleRowClick?: () => void;
};
