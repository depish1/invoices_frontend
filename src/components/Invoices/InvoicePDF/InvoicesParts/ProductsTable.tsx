import { View, Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { ProductType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';
import { formatPercent } from 'Helpers/percentFormatter';
import { formatPlCurrency } from 'Helpers/currencyFormatter';
import { invoicePDFstyles } from '../InvoicePDF.style';

interface IProductsTableProps {
  products: ProductType[];
}

const getCellStyles = (width: string) => ({ ...invoicePDFstyles.tableCell, width });

const ProductsTable = ({ products }: IProductsTableProps) => {
  const { t } = useTranslation();

  return (
    <View style={invoicePDFstyles.table}>
      <View style={invoicePDFstyles.tableHeaderRow}>
        <Text style={getCellStyles('48%')}>{t('productName')}</Text>
        <Text style={getCellStyles('14%')}>{t('net_price')}</Text>
        <Text style={getCellStyles('11%')}>{t('quantity')}</Text>
        <Text style={getCellStyles('10%')}>{t('tax_rate')}</Text>
        <Text style={getCellStyles('17%')}>{t('gross_amount')}</Text>
      </View>
      {products.map(({ name, net_price, quantity, tax_rate, gross_amount }, index) => (
        <View key={index} style={invoicePDFstyles.tableRow}>
          <Text style={getCellStyles('48%')}>{name}</Text>
          <Text style={getCellStyles('14%')}>{formatPlCurrency(net_price)}</Text>
          <Text style={getCellStyles('11%')}>{quantity}</Text>
          <Text style={getCellStyles('10%')}>{formatPercent(tax_rate)}</Text>
          <Text style={getCellStyles('17%')}>{formatPlCurrency(gross_amount)}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProductsTable;
