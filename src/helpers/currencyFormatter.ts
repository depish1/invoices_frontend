const currencyFormatter = new Intl.NumberFormat('pl', {
  style: 'currency',
  currency: 'PLN',
});

export const formatPlCurrency = (value: number): string => currencyFormatter.format(value);
