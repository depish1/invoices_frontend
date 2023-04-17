import ContextMenu from 'Components/SharedComponents/ContextMenu/ContextMenu';
import { useInvoiceContextMenu } from 'Components/Invoices/InvoiceContextMenu/useInvoiceContextMenu';

interface IInvoiceContextMenuProps {
  id: number;
}

const InvoiceContextMenu = ({ id }: IInvoiceContextMenuProps) => {
  const options = useInvoiceContextMenu(id);

  return <ContextMenu options={options} />;
};

export default InvoiceContextMenu;
