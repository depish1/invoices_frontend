import { FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form } from 'Components/Registration/RegistrationForm/RegistrationForm.style';
import { useRegistrationForm } from 'Components/Registration/RegistrationForm/useRegistrationForm';
import Alert from 'Components/SharedComponents/Alert/Alert';
import Button from 'Components/SharedComponents/Button/Button';
import InputController from 'Components/SharedComponents/FormFieldsControllers/InputController/InputController';

const AccountDataStep = () => {
  const { t } = useTranslation();
  const { methods, onSubmit, formError } = useRegistrationForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputController id="email" isLabelHidden isRequired label={t('email')} name="email" type="email" />
        <InputController id="password" isLabelHidden isRequired label={t('password')} name="password" type="password" />
        <InputController id="confirmPassword" isLabelHidden isRequired label={t('confirmPassword')} name="confirmPassword" type="password" />
        <Button text={t('register')} type="submit" />
      </Form>
      {formError && <Alert>{formError}</Alert>}
    </FormProvider>
  );
};

export default AccountDataStep;
