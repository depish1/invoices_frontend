import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IApiInvoice, IApiInvoiceWithProducts, IGenericResponse } from 'Types/Api';
import { InvoiceFormInputsType } from 'Components/InvoiceForm/InvoiceForm/InvoiceForm.types';

import { prepareHeader } from 'Api/prepareHeader';

const BASE_URL = import.meta.env.VITE_API;

type EditInvoiceType = {
  id: number;
  data: InvoiceFormInputsType;
};

export const invoicesApi = createApi({
  reducerPath: 'invoicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/invoices/`,
    prepareHeaders: prepareHeader,
  }),
  tagTypes: ['Invoices'],

  endpoints: (builder) => ({
    getInvoices: builder.query<IApiInvoice[], unknown>({
      query: () => ({ url: '', mode: 'cors' }),
      providesTags: ['Invoices'],
    }),
    getInvoice: builder.query<IApiInvoiceWithProducts, number>({
      query: (id) => ({ url: `/${id}`, mode: 'cors' }),
      providesTags: ['Invoices'],
    }),
    addInvoice: builder.mutation<IGenericResponse, InvoiceFormInputsType>({
      query(data) {
        return {
          url: '',
          method: 'POST',
          body: data,
          mode: 'cors',
        };
      },
      invalidatesTags: ['Invoices'],
    }),
    editInvoice: builder.mutation<IGenericResponse, EditInvoiceType>({
      query({ data, id }) {
        return {
          url: `/${id}`,
          method: 'PUT',
          body: data,
          mode: 'cors',
        };
      },
      invalidatesTags: ['Invoices'],
    }),
    deleteInvoice: builder.mutation<IGenericResponse, number>({
      query(id) {
        return {
          url: `/${id}`,
          method: 'DELETE',
          body: { id },
          mode: 'cors',
        };
      },
      invalidatesTags: ['Invoices'],
    }),
  }),
});

export const {
  useAddInvoiceMutation,
  useEditInvoiceMutation,
  useGetInvoicesQuery,
  useGetInvoiceQuery,
  useLazyGetInvoiceQuery,
  useDeleteInvoiceMutation,
} = invoicesApi;
