import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { EViewType } from 'Enums/EViewType';
import { InvoiceFormInputsType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';
import { invoiceFormValidationSchema } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.schema';
import { useInvoiceFormDefaultValues } from 'Components/InvoiceForm/hooks/useInvoiceFormDefaultValues';
import { useLoader } from 'Hooks/useLoader';

import { useSubmitInvoiceFormMutation } from './useSubmitInvoiceFormMutation';

export const useInvoiceForm = () => {
  const { t } = useTranslation();
  const { submitInvoiceFormMutation, isLoading: isSubmitInvoiceLoading } = useSubmitInvoiceFormMutation();
  const [formError, setFormError] = useState('');
  const [defaultValues, isDefaultValuesLoading] = useInvoiceFormDefaultValues();
  const navigate = useNavigate();
  const methods = useForm<InvoiceFormInputsType>({
    resolver: yupResolver(invoiceFormValidationSchema),
    defaultValues,
  });

  const isLoading = isSubmitInvoiceLoading || isDefaultValuesLoading;

  useLoader(isLoading);

  useEffect(() => {
    methods.reset({ ...defaultValues });
  }, [defaultValues, methods]);

  const onSubmit = useCallback(
    async (formData: InvoiceFormInputsType) => {
      setFormError('');
      const resp = await submitInvoiceFormMutation(formData);
      if ('data' in resp) return navigate(`/${EViewType.INVOICES}`);
      else return setFormError(t('somethingWentWrongError'));
    },
    [navigate, submitInvoiceFormMutation, t],
  );

  return { methods, onSubmit, formError, isLoading };
};
