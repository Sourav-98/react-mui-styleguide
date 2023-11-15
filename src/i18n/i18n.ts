import i18n from 'i18next';
// import commonConfig from './common.config.json';
// import toastConfig from './toast.config.json'
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// const resources = {
//   ...commonConfig,
// };

// declare module 'react-i18next' {
//   interface CustomTypeOptions {
//     defaultNS: 'common';
//     resources: {
//       common: typeof commonConfig;
//       toast: typeof toastConfig;
//     };
//   }
// }

i18n
  .use(Backend)
  .use(initReactI18next).init({
  // ns: ['common', 'toast'],
  // defaultNS: 'common',
  // resources,
  fallbackLng: 'en_US'
});

export default i18n;
