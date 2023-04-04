import { ProductType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';

export const calculateTotalNetPrice = (products: ProductType[]) => products.reduce((prev, curr) => prev + curr.net_price * curr.quantity, 0);

export const calculateTotalGrossPrice = (products: ProductType[]) => products.reduce((prev, curr) => prev + curr.gross_amount, 0);

export const calculateTaxAmount = (products: ProductType[]) => products.reduce((prev, curr) => prev + curr.tax_rate * curr.net_price, 0);
