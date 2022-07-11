import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationKINY from './locales/kiny.json';

const resources = {
    en: {
        translation: translationEN
    },
    kiny: {
        translation: translationKINY
    },
}



i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;