import { useCallback } from 'react';

import { InvoiceFormInputsType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';
import { useInvoiceFormParams } from './useInvoiceFormParams';
import { useLoader } from 'Hooks/useLoader';

import { useAddInvoiceMutation, useEditInvoiceMutation } from 'Store/api/invoicesApi';

export const useSubmitInvoiceFormMutation = () => {
  const [addInvoiceTrigger, { isLoading: isAddInvoiceMutationLoading }] = useAddInvoiceMutation();
  const [editInvoiceTrigger, { isLoading: isEditInvoiceMutationLoading }] = useEditInvoiceMutation();
  const id = useInvoiceFormParams();

  const isLoading = isAddInvoiceMutationLoading || isEditInvoiceMutationLoading;

  useLoader(isAddInvoiceMutationLoading || isEditInvoiceMutationLoading);

  const submitInvoiceFormMutation = useCallback(
    (data: InvoiceFormInputsType) => (id ? editInvoiceTrigger({ data, id }) : addInvoiceTrigger(data)),
    [addInvoiceTrigger, editInvoiceTrigger, id],
  );

  return { submitInvoiceFormMutation, isLoading };
};
