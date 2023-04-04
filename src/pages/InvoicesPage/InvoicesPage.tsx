import { EViewType } from 'Enums/EViewType';
import { useActiveViewSetter } from 'Hooks/useActiveViewSetter';
import InvoicesContent from 'Components/Invoices/InvoicesContent/InvoicesContent';

const InvoicesPage = () => {
  useActiveViewSetter(EViewType.INVOICES);

  return <InvoicesContent />;
};

export default InvoicesPage;
