import 'dayjs/locale/pl';
import { initReactI18next } from 'react-i18next';
import dayjs from 'dayjs';
import i18next from 'i18next';

import { getKeys } from 'Helpers/getKeys';
import translations from './translations';

let english = {};
let polish = {};

getKeys(translations).forEach((key) => {
  english = { ...english, [key]: translations[key].en };
  polish = { ...polish, [key]: translations[key].pl };
});

i18next.use(initReactI18next).init({
  lng: navigator.language.includes('pl') ? 'pl' : 'en',
  returnNull: false,
  resources: {
    en: { translation: english },
    pl: { translation: polish },
  },
});

dayjs.locale(navigator.language.includes('pl') ? 'pl' : 'en');

export default i18next;
