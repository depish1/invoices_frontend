export type InvoiceFormInputsType = {
  products: ProductType[];
  //seller
  seller_name: string;
  seller_address1: string;
  seller_address2?: string;
  seller_nip: string;
  //buyer
  buyer_name: string;
  buyer_address1: string;
  buyer_address2?: string;
  buyer_nip: string;
};

export type ProductType = {
  name: string;
  quantity: number;
  net_price: number;
  tax_rate: number;
  gross_amount: number;
};
