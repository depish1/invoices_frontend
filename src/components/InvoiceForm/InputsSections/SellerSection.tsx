import { useTranslation } from 'react-i18next';

import { Section, SectionHeader } from './InputsSections.style';
import InputController from 'Components/SharedComponents/FormFieldsControllers/InputController/InputController';
import PatternInputController from 'Components/SharedComponents/FormFieldsControllers/InputController/PatternInputController';

export const SellerSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionHeader>{t('seller')}</SectionHeader>
      <InputController id="seller_name" isLabelHidden isRequired label={t('name')} name="seller_name" type="text" />
      <InputController id="seller_address1" isLabelHidden isRequired label={t('address')} name="seller_address1" type="text" />
      <InputController id="seller_address2" isLabelHidden label={t('address2')} name="seller_address2" type="text" />
      <PatternInputController format="###-##-##-###" id="seller_nip" isLabelHidden isRequired label={t('nip')} name="seller_nip" type="text" />
    </Section>
  );
};
