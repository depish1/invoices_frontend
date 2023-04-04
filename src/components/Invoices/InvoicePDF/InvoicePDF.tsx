import { IApiInvoiceWithProducts } from '@/types/ApiTypes';
import { Page, View, Document } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { calculateTaxAmount, calculateTotalGrossPrice, calculateTotalNetPrice } from 'Helpers/calculateProductsPrice';
import { invoicePDFstyles } from 'Components/Invoices/InvoicePDF/InvoicePDF.style';
import DataColumn from 'Components/Invoices/InvoicePDF/components/DataColumn';
import InvoiceDate from 'Components/Invoices/InvoicePDF/components/InvoiceDate';
import InvoiceHeader from 'Components/Invoices/InvoicePDF/components/InvoiceHeader';
import ProductsTable from 'Components/Invoices/InvoicePDF/components/ProductsTable';
import Summary from 'Components/Invoices/InvoicePDF/components/Summary';

interface IInvoicePDFProps {
  data: IApiInvoiceWithProducts;
}

const InvoicePDF = ({ data }: IInvoicePDFProps) => {
  const { t } = useTranslation();

  const totalNetPrice = calculateTotalNetPrice(data.products);
  const totalGrossPrice = calculateTotalGrossPrice(data.products);
  const taxAmount = calculateTaxAmount(data.products);

  return (
    <Document pageLayout="oneColumn" pageMode="useNone">
      <Page size="A4">
        <View style={invoicePDFstyles.layout}>
          <InvoiceDate date={data.create_date} />
          <InvoiceHeader id={data.id} />
          <View style={invoicePDFstyles.dataWrapper}>
            <DataColumn
              address={data.seller_address1}
              address2={data.seller_address2}
              headline={t('seller')}
              name={data.seller_name}
              nip={data.seller_nip}
            />
            <DataColumn
              address={data.buyer_address1}
              address2={data.buyer_address2}
              headline={t('buyer')}
              name={data.buyer_name}
              nip={data.buyer_nip}
            />
          </View>
          <ProductsTable products={data.products} />
          <Summary taxAmount={taxAmount} totalGrossPrice={totalGrossPrice} totalNetPrice={totalNetPrice} />
        </View>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
