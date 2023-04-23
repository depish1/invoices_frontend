import { useTranslation } from 'react-i18next';

import { ButtonContent } from './ButtonContent';
import { ContextMenu } from 'Components/SharedComponents/ContextMenu/ContextMenu';

type LanguageType = 'pl' | 'en';

export const LanguageContextMenu = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: LanguageType) => i18n.changeLanguage(lang);

  const options = [
    {
      label: t('polish'),
      callback: () => changeLanguage('pl'),
    },
    {
      label: t('english'),
      callback: () => changeLanguage('en'),
    },
  ];

  return <ContextMenu options={options} renderReferenceContent={(isMenuOpen) => <ButtonContent isMenuOpen={isMenuOpen} />} />;
};
