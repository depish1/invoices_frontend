import i18next from 'i18next';
import { object, string } from 'yup';

export const loginFormValidationSchema = object().shape({
  email: string().trim().email(i18next.t('incorrectEmailFormatError')).required(i18next.t('fieldRequiredError')),
  password: string().trim().required(i18next.t('fieldRequiredError')),
});
