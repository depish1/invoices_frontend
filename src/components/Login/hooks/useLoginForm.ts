import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import { EViewType } from 'Enums/EViewType';
import { LoginFormInputsType } from 'Components/Login/LoginForm/LoginForm.types';
import { isFetchBaseQueryErrorType } from 'Helpers/isFetchBaseQueryErrorType';
import { loginFormValidationSchema } from 'Components/Login/LoginForm/LoginForm.schema';
import { useLoader } from 'Hooks/useLoader';

import { useLoginUserMutation } from 'Api/authApi';

export const useLoginForm = () => {
  const { t } = useTranslation();
  const [formError, setFormError] = useState('');
  const [loginTrigger, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const methods = useForm<LoginFormInputsType>({
    resolver: yupResolver(loginFormValidationSchema),
  });

  useLoader(isLoading);

  const onSubmit = useCallback(
    async (formData: LoginFormInputsType) => {
      setFormError('');
      const resp = await loginTrigger(formData);
      if ('data' in resp) return navigate(`/${EViewType.INVOICES}`);
      else if (isFetchBaseQueryErrorType(resp.error) && resp.error.status === 401) return setFormError(t('loginError'));
      else return setFormError(t('somethingWentWrongError'));
    },
    [loginTrigger, navigate, t],
  );

  return { methods, onSubmit, formError };
};
