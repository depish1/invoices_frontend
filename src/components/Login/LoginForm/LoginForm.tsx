import { FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form } from 'Components/Login/LoginForm/LoginForm.style';
import { useLoginForm } from 'Components/Login/hooks/useLoginForm';
import Alert from 'Components/SharedComponents/Alert/Alert';
import Button from 'Components/SharedComponents/Button/Button';
import InputController from 'Components/SharedComponents/FormFieldsControllers/InputController/InputController';

const LoginPageContent = () => {
  const { t } = useTranslation();
  const { methods, onSubmit, formError } = useLoginForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputController id="email" isLabelHidden isRequired label={t('email')} name="email" type="email" />
        <InputController id="password" isLabelHidden isRequired label={t('password')} name="password" type="password" />
        <Button text={t('login')} type="submit" />
        {formError && <Alert>{formError}</Alert>}
      </Form>
    </FormProvider>
  );
};

export default LoginPageContent;
