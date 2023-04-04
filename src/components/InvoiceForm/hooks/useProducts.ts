import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { ProductType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';

const emptyProductObj: ProductType = { name: undefined, quantity: undefined, net_price: undefined, tax_rate: undefined, gross_amount: undefined };

export const useProducts = () => {
  const { control, watch, reset } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'products',
  });

  const addProduct = useCallback(() => {
    append(emptyProductObj);
    const values = watch();
    reset(values);
  }, [append, watch, reset]);

  return { fields, addProduct, remove };
};
