import { FormProvider } from 'react-hook-form';

import { ColumnsWrapper, Form } from './InvoiceForm.style';
import { useInvoiceForm } from 'Components/InvoiceForm/InvoiceForm/useInvoiceForm';
import Alert from 'Components/SharedComponents/Alert/Alert';
import BuyerSection from 'Components/InvoiceForm/InputsSections/BuyerSection';
import ProductsSection from 'Components/InvoiceForm/InputsSections/ProductsSection';
import SellerSection from 'Components/InvoiceForm/InputsSections/SellerSection';

export const InvoiceForm = () => {
  const { methods, onSubmit, formError } = useInvoiceForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <ColumnsWrapper>
          <SellerSection />
          <BuyerSection />
        </ColumnsWrapper>
        <ProductsSection />
      </Form>
      {formError && <Alert>{formError}</Alert>}
    </FormProvider>
  );
};
