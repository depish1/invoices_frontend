import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';

import { EViewType } from 'Enums/EViewType';
import DefaultLayout from 'Layouts/DefaultLayout/DefaultLayout';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import SuspensePage from 'Pages/SuspensePage';
import UserProtectedRoute from 'Components/SharedComponents/ProtectedRoute/UserProtectedRoute';

const LoginPage = lazy(() => import('Pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('Pages/RegistrationPage/RegistrationPage'));
const InvoicesPage = lazy(() => import('Pages/InvoicesPage/InvoicesPage'));
const InvoiceFormPage = lazy(() => import('Pages/InvoiceFormPage/InvoiceFormPage'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route element={<Navigate to={`/${EViewType.LOGIN}`} />} path="/" />
      <Route element={<NotFoundPage />} path="/*" />
      <Route element={<SuspensePage page={<LoginPage />} />} path={`/${EViewType.LOGIN}`} />
      <Route element={<SuspensePage page={<RegistrationPage />} />} path={`/${EViewType.REGISTRATION}`} />
      <Route element={<UserProtectedRoute />}>
        <Route element={<SuspensePage page={<InvoicesPage />} />} path={`/${EViewType.INVOICES}`} />
        <Route element={<SuspensePage page={<InvoiceFormPage />} />} path={`/${EViewType.INVOICE_FORM}`} />
      </Route>
    </Route>,
  ),
);
