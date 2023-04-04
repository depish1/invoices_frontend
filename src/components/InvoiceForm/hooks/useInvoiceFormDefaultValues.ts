import { useCallback, useEffect, useState } from 'react';

import { InvoiceFormInputsType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';
import { useInvoiceFormParams } from 'Components/InvoiceForm/hooks/useInvoiceFormParams';

import { useLazyGetInvoiceQuery } from 'Store/api/invoicesApi';

const baseDefaultValues: Partial<InvoiceFormInputsType> = {
  products: [{ name: undefined, quantity: undefined, net_price: undefined, tax_rate: undefined, gross_amount: undefined }],
};

export const useInvoiceFormDefaultValues = () => {
  const id = useInvoiceFormParams();
  const [trigger, { isLoading, isUninitialized }] = useLazyGetInvoiceQuery();
  const [defaultValues, setDefaultValues] = useState<Partial<InvoiceFormInputsType>>(baseDefaultValues);

  const setAsyncDefaultValues = useCallback(async () => {
    const { data } = await trigger(id);
    setDefaultValues(data);
  }, [id, trigger]);

  useEffect(() => {
    if (id && isUninitialized) setAsyncDefaultValues();
  }, [id, isUninitialized, setAsyncDefaultValues]);

  return [defaultValues, isLoading] as const;
};
