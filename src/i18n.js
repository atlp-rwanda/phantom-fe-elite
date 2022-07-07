import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationKINY from './locales/kiny.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    },
    kiny: {
        translation: translationKINY
    },
}



i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'kiny',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;