import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGenericResponse, IUser } from '@/types/Api';
import { LoginFormInputsType } from 'Components/Login/LoginForm/LoginForm.types';
import { RegistrationFormInputsType } from 'Components/Registration/RegistrationForm/RegistrationForm.types';
import { store } from '../store';
import { invoicesApi } from './invoicesApi';

type LoginResponseBodyType = { access_token: string; status: string; user: IUser };

const BASE_URL = import.meta.env.VITE_API;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/auth/`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, RegistrationFormInputsType>({
      query({ password, email }) {
        return {
          url: 'register',
          method: 'POST',
          body: { password, email },
          mode: 'cors',
        };
      },
    }),
    loginUser: builder.mutation<LoginResponseBodyType, LoginFormInputsType>({
      query(data) {
        store.dispatch(invoicesApi.util.invalidateTags(['Invoices']));
        return {
          url: 'login',
          method: 'POST',
          body: data,
          mode: 'cors',
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
