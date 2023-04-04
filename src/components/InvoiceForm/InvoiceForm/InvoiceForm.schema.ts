import { array, number, object, string } from 'yup';
import i18next from 'i18next';

const nipRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}$/;

export const invoiceFormValidationSchema = object().shape({
  seller_name: string().required(i18next.t('fieldRequiredError')),
  seller_address1: string().required(i18next.t('fieldRequiredError')),
  seller_nip: string().required(i18next.t('fieldRequiredError')).matches(nipRegExp, i18next.t('incorrectNipError')),
  buyer_name: string().required(i18next.t('fieldRequiredError')),
  buyer_address1: string().required(i18next.t('fieldRequiredError')),
  buyer_nip: string().required(i18next.t('fieldRequiredError')).matches(nipRegExp, i18next.t('incorrectNipError')),
  products: array()
    .of(
      object().shape({
        name: string().trim().required(i18next.t('fieldRequiredError')),
        quantity: number().required(i18next.t('fieldRequiredError')),
        net_price: number().required(i18next.t('fieldRequiredError')),
        tax_rate: number().max(99, 'Max is 99').required(i18next.t('fieldRequiredError')),
        gross_amount: number().required(i18next.t('fieldRequiredError')),
      }),
    )
    .required(i18next.t('fieldRequiredError')),
});
