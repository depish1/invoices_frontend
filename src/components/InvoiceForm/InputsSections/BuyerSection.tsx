import { useTranslation } from 'react-i18next';

import { Section, SectionHeader } from './InputsSections.style';
import InputController from 'Components/SharedComponents/FormFieldsControllers/InputController/InputController';
import PatternInputController from 'Components/SharedComponents/FormFieldsControllers/InputController/PatternInputController';

export const BuyerSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionHeader>{t('buyer')}</SectionHeader>
      <InputController id="buyer_name" isLabelHidden isRequired label={t('name')} name="buyer_name" type="text" />
      <InputController id="buyer_address1" isLabelHidden isRequired label={t('address')} name="buyer_address1" type="text" />
      <InputController id="buyer_address2" isLabelHidden label={t('address2')} name="buyer_address2" type="text" />
      <PatternInputController format="###-##-##-###" id="buyer_nip" isLabelHidden isRequired label={t('nip')} name="buyer_nip" type="text" />
    </Section>
  );
};
