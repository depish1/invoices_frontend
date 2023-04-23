import { View, Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { formatPlCurrency } from 'Helpers/currencyFormatter';
import { invoicePDFstyles } from '../InvoicePDF.style';

interface ISummaryProps {
  taxAmount: number;
  totalNetPrice: number;
  totalGrossPrice: number;
}

export const Summary = ({ taxAmount, totalNetPrice, totalGrossPrice }: ISummaryProps) => {
  const { t } = useTranslation();

  return (
    <View style={invoicePDFstyles.justifyFlexEnd}>
      <View style={invoicePDFstyles.column}>
        <Text style={invoicePDFstyles.defaultText}>{`${t('totalNetPrice')}: ${formatPlCurrency(totalNetPrice)}`}</Text>
        <Text style={invoicePDFstyles.defaultText}>{`${t('taxAmount')}: ${formatPlCurrency(taxAmount)}`}</Text>
        <Text style={invoicePDFstyles.defaultText}>{`${t('totalGrossPrice')}: ${formatPlCurrency(totalGrossPrice)}`}</Text>
      </View>
    </View>
  );
};
