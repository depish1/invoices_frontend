import { useTranslation } from 'react-i18next';

import { ProductsHeadline } from './ProductsSectionHeader.style';

export const ProductsSectionHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <ProductsHeadline>{t('name')}</ProductsHeadline>
      <ProductsHeadline>{t('quantity')}</ProductsHeadline>
      <ProductsHeadline>{t('net_price')}</ProductsHeadline>
      <ProductsHeadline>{t('tax_rate')}</ProductsHeadline>
      <ProductsHeadline>{t('gross_amount')}</ProductsHeadline>
      <ProductsHeadline />
    </>
  );
};
