import { useTranslation } from 'react-i18next';

import { ButtonsWrapper, ProductsRowsWrapper, Section, SectionHeader } from './InputsSections.style';
import { useInvoiceFormParams } from 'Components/InvoiceForm/hooks/useInvoiceFormParams';
import { useProducts } from 'Components/InvoiceForm/hooks/useProducts';
import Button from 'Components/SharedComponents/Button/Button';
import { ProductField } from 'Components/InvoiceForm/ProductField/ProductField';
import { ProductsSectionHeader } from 'Components/InvoiceForm/ProductsSectionHeader/ProductsSectionHeader';

export const ProductsSection = () => {
  const { t } = useTranslation();
  const { fields, addProduct, remove } = useProducts();
  const id = useInvoiceFormParams();

  return (
    <Section fullWidth>
      <SectionHeader>{t('products')}</SectionHeader>{' '}
      <ProductsRowsWrapper>
        <ProductsSectionHeader />
        {fields.map((item, index) => (
          <ProductField key={item.id} productIndex={index} removeProduct={remove} showDeleteButton={fields.length > 1} />
        ))}
      </ProductsRowsWrapper>
      <ButtonsWrapper>
        <Button fullWidth={false} isSecondary onClick={addProduct} text={t('addProduct')} />
        <Button fullWidth={false} text={t(id ? 'saveChanges' : 'addInvoice')} type="submit" />
      </ButtonsWrapper>
    </Section>
  );
};
