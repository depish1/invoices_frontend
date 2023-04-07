import { useCallback, useMemo } from 'react';
import dayjs from 'dayjs';

import { EViewType } from 'Enums/EViewType';
import { IApiInvoice } from 'Types/ApiTypes';
import { RowDataType } from 'Components/SharedComponents/Table/Table.type';
import { formatPlCurrency } from 'Helpers/currencyFormatter';
import { useNavigateParams } from 'Hooks/useNavigateParams';
import InvoiceContextMenu from 'Components/Invoices/InvoiceContextMenu/InvoiceContextMenu';

import { useGetInvoicesQuery } from 'Api/invoicesApi';

export const useInvoicesTable = () => {
  const navigateWithParams = useNavigateParams();
  const { data, isLoading, isSuccess } = useGetInvoicesQuery({});

  const navigateToEditView = useCallback(
    (id: number) => {
      navigateWithParams(`/${EViewType.INVOICE_FORM}`, { id: `${id}` });
    },
    [navigateWithParams],
  );

  const mapInvoicesToShow = useCallback(
    ({ id, buyer_name, create_date, gross_sum_amount }: IApiInvoice): RowDataType => ({
      key: id,
      rowData: [
        { key: 'id', data: id },
        { key: 'buyer_name', data: buyer_name },
        { key: 'create_date', data: dayjs(create_date).format('YYYY-MM-DD') },
        { key: 'gross_sum_amount', data: formatPlCurrency(gross_sum_amount) },
        {
          key: 'context',
          data: <InvoiceContextMenu id={id} />,
        },
      ],
      handleRowClick: () => navigateToEditView(id),
    }),
    [navigateToEditView],
  );

  const invoicesDataToShow = useMemo(() => (isSuccess ? data.map(mapInvoicesToShow) : []), [data, isSuccess, mapInvoicesToShow]);

  return { invoicesDataToShow, isLoading };
};
