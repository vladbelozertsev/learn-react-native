import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import en from './en.json';
import ru from './ru.json';

/**
 * Usage guide:
 * https://www.geeksforgeeks.org/multi-language-support-in-react-native/
 *
 * Error (i18next::pluralResolver):
 * https://stackoverflow.com/questions/70493788/i18nextpluralresolver-your-environment-seems-not-to-be-intl-api-compatible-u
 *
 * i18n configuration options:
 * https://www.i18next.com/overview/configuration-options
 *
 * This file is imported to root index.js
 **/

export const DEFAULT_LANG = 'ru';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: DEFAULT_LANG,
  fallbackLng: 'en',
  resources: { ru, en },
  interpolation: { escapeValue: false },
});

export default i18n;
