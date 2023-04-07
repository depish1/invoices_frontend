import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

export const useGrossAmount = (productIndex: number) => {
  const { setValue, trigger, watch } = useFormContext();
  const quantity = watch(`products.${productIndex}.quantity`);
  const net_price = watch(`products.${productIndex}.net_price`);
  const tax_rate = watch(`products.${productIndex}.tax_rate`);
  const shouldResetField = !quantity || !net_price || !tax_rate;

  useEffect(() => {
    if (shouldResetField) return setValue(`products.${productIndex}.gross_amount`, '');
    const newGrossAmount = (net_price * quantity + (net_price * quantity * tax_rate) / 100).toFixed(2);
    setValue(`products.${productIndex}.gross_amount`, newGrossAmount);
    trigger(`products.${productIndex}.gross_amount`);
  }, [net_price, productIndex, quantity, setValue, shouldResetField, tax_rate, trigger]);
};
