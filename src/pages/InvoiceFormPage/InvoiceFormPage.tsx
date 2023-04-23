import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import { InvoiceFormContent } from 'Components/InvoiceForm/InvoiceFormContent/InvoiceFormContent';

const InvoiceFormPage = () => {
  useActiveViewSetter(EViewType.INVOICE_FORM);

  return <InvoiceFormContent />;
};

export default InvoiceFormPage;
