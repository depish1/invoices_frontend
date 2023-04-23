import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { useTranslation } from 'react-i18next';

import { EViewType } from 'Enums/EViewType';
import { OptionConfigType } from 'Components/SharedComponents/ContextMenu/ContextMenu.type';
import { useLoader } from 'Hooks/useLoader';
import { useNavigateParams } from 'Hooks/useNavigateParams';
import { InvoicePDF } from 'Components/Invoices/InvoicePDF/InvoicePDF';

import { useDeleteInvoiceMutation, useLazyGetInvoiceQuery } from 'Api/invoicesApi';

export const useInvoiceContextMenu = (id: number) => {
  const { t } = useTranslation();
  const [deleteInvoiceTrigger, { isLoading: isDeleting }] = useDeleteInvoiceMutation();
  const [triggerGetInvoice] = useLazyGetInvoiceQuery();
  const navigateWithParams = useNavigateParams();

  const navigateToEditView = () => navigateWithParams(`/${EViewType.INVOICE_FORM}`, { id: `${id}` });

  const deleteInvoice = () => deleteInvoiceTrigger(id);

  const generateInvoicePDF = async () => {
    try {
      const { data } = await triggerGetInvoice(id);
      const doc = <InvoicePDF data={data} />;
      const blob = await pdf(doc).toBlob();
      saveAs(blob, `${t('invoiceNo')} ${id}.pdf`);
    } catch (e) {
      console.error(`Failed to generate invoice`, e);
    }
  };

  const options: OptionConfigType[] = [
    {
      label: t('deleteInvoice'),
      callback: deleteInvoice,
    },
    {
      label: t('editInvoice'),
      callback: navigateToEditView,
    },
    {
      label: t('downloadInvoice'),
      callback: generateInvoicePDF,
    },
  ];

  useLoader(isDeleting);

  return options;
};
