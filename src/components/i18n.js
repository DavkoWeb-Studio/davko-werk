// src/components/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations'; // zakładam że translations.js jest w tym samym folderze

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: translations.pl },
      nl: { translation: translations.nl },
      en: { translation: translations.en }
    },
    lng: 'nl', // domyślny język
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;