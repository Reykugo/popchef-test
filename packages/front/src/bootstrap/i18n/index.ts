import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  defaultLanguage,
  supportedLanguages,
} from 'common-project/dist/technical/i18n/languages';
import FR from './fr.json';
import EN from './en.json';

const translations: { [key: string]: {} } = {
  en: EN,
  fr: FR,
};

const resources = Object.keys(supportedLanguages).reduce(
  (agg, lang) => {
    if (!Object.keys(translations).includes(lang)) {
      throw new Error(`Missing translation for language: ${lang}`);
    }
    return { ...agg, [lang]: { translation: translations[lang] } };
  },
  {} as { [key: string]: { translation: {} } },
);

i18n
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: defaultLanguage,
    whitelist: Object.keys(supportedLanguages),
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export { i18n };
