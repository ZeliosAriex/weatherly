import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { enGB, esES } from '@/assets/locales'

const resources = {
  en: enGB,
  es: esES,
}

void i18n
  .use(initReactI18next) // Passes i18n down to react-i18next this will make it available for all the components via the context api.
  .init({
    resources,
    lng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // Escape passed in values to avoid xss injection
    },
  })

export default i18n
