import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { CellContentType } from 'Components/SharedComponents/Table/Table.type';
import { useInvoicesTable } from './useInvoicesTable';
import Table from 'Components/SharedComponents/Table/Table';

const InvoicesTable = () => {
  const { t } = useTranslation();
  const { invoicesDataToShow, isLoading } = useInvoicesTable();
  const gridTemplateColumns = '9rem minmax(20rem,1fr ) 10rem 10rem 4.2rem';

  const headers: CellContentType[] = useMemo(
    () => [
      {
        key: 'id',
        data: t('numberOfInvoices'),
      },
      {
        key: 'buyer_name',
        data: t('buyerDetails'),
      },
      {
        key: 'create_date',
        data: t('invoiceDate'),
      },
      {
        key: 'gross_sum_amount',
        data: t('gross_amount'),
      },
      {
        key: 'actions',
        data: null,
      },
    ],
    [t],
  );

  return <Table data={invoicesDataToShow} gridTemplateColumns={gridTemplateColumns} headers={headers} isLoading={isLoading} />;
};

export default InvoicesTable;
