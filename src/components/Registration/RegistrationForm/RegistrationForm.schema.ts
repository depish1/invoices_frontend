import i18next from 'i18next';
import { object, ref, string } from 'yup';

export const registrationFormValidationSchema = object().shape({
  email: string().trim().email(i18next.t('incorrectEmailFormatError')).required(i18next.t('fieldRequiredError')),
  password: string().trim().required(i18next.t('fieldRequiredError')).min(6, i18next.t('min6lengthError')),
  confirmPassword: string()
    .trim()
    .required(i18next.t('fieldRequiredError'))
    .oneOf([ref('password'), null], i18next.t('passwordsSameError')),
});
