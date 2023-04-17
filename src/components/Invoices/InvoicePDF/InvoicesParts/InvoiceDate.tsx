import { View, Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

import { invoicePDFstyles } from '../InvoicePDF.style';

interface IInvoiceDateProps {
  date: string;
}

const InvoiceDate = ({ date }: IInvoiceDateProps) => {
  const { t } = useTranslation();

  return (
    <View style={invoicePDFstyles.justifyFlexEnd}>
      <Text style={invoicePDFstyles.defaultText}>{`${t('invoiceDate')} ${dayjs(date).format('YYYY-MM-DD')}`}</Text>
    </View>
  );
};

export default InvoiceDate;
