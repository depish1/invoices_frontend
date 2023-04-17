import { ProductType } from '@/components/InvoiceForm/InvoiceForm/InvoiceForm.types';

export interface IGenericResponse {
  status: string;
  message?: string;
}

export interface IUser {
  user_id: number;
  email: string;
  additionalData?: IUserAdditionalData | null;
}

interface IUserAdditionalData {
  user_id: number;
  name?: string;
  email?: string;
  address1?: string;
  address2?: string;
  nip?: string;
  phone?: string;
}

export interface IApiInvoice {
  id: number;
  user_id: number;
  create_date: string;
  seller_name: string;
  seller_nip: string;
  seller_address1: string;
  seller_address2: string | null;
  buyer_name: string;
  buyer_nip: string;
  buyer_address1: string;
  buyer_address2: string | null;
  gross_sum_amount: number;
}

export interface IApiInvoiceWithProducts extends IApiInvoice {
  products: ProductType[];
}

export type DeleteInvoiceRequestBodyType = {
  id: number;
};
