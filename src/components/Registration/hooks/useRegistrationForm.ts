import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import { EViewType } from 'Enums/EViewType';
import { RegistrationFormInputsType } from 'Components/Registration/RegistrationForm/RegistrationForm.types';
import { isFetchBaseQueryErrorType } from 'Helpers/isFetchBaseQueryErrorType';
import { registrationFormValidationSchema } from 'Components/Registration/RegistrationForm/RegistrationForm.schema';
import { useLoader } from 'Hooks/useLoader';

import { useRegisterUserMutation } from 'Api/authApi';

export const useRegistrationForm = () => {
  const { t } = useTranslation();
  const [formError, setFormError] = useState('');
  const [registerTrigger, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  const methods = useForm<RegistrationFormInputsType>({
    resolver: yupResolver(registrationFormValidationSchema),
  });

  useLoader(isLoading);

  const onSubmit = useCallback(
    async (formData: RegistrationFormInputsType) => {
      setFormError('');
      const resp = await registerTrigger(formData);
      if ('data' in resp) return navigate(`/${EViewType.LOGIN}`);
      else if (isFetchBaseQueryErrorType(resp.error) && resp.error.status === 409) return setFormError(t('emailAlreadyExistsError'));
      else return setFormError(t('somethingWentWrongError'));
    },
    [navigate, registerTrigger, t],
  );

  return { methods, onSubmit, formError };
};
