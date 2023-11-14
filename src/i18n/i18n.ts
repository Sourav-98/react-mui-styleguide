import i18n from 'i18next';
import i18nConfig from './i18n.config.json';
import { initReactI18next } from 'react-i18next';


const resources = {
  ...i18nConfig
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'de-DE'
    })

export default i18n;
