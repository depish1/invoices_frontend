import { View, Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { invoicePDFstyles } from '../InvoicePDF.style';

interface IInvoiceHeaderProps {
  id: number;
}

export const InvoiceHeader = ({ id }: IInvoiceHeaderProps) => {
  const { t } = useTranslation();

  return (
    <View style={invoicePDFstyles.invoiceHeader}>
      <Text style={invoicePDFstyles.invoiceHeadline}>{`${t('invoiceNo')} ${id}`}</Text>
    </View>
  );
};
