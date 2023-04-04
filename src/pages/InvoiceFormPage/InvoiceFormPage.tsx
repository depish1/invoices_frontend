import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import InvoiceContent from 'Components/InvoiceForm/InvoiceFormContent/InvoiceFormContent';

const InvoiceFormPage = () => {
  useActiveViewSetter(EViewType.INVOICE_FORM);

  return <InvoiceContent />;
};

export default InvoiceFormPage;
