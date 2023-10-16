import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import SpanishFlagIcon from '@/assets/svgs/cf_es.svg?react'
import EnglishFlagIcon from '@/assets/svgs/cf_uk.svg?react'
import { type Language } from '@/features/i18n/i18n.types.ts'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const currentSelectedLang = i18n.language as Language
  const commonClassNames = 'w-6 h-6'
  const notActiveLangClassNames = 'opacity-40'
  const languages = [
    {
      id: 'en',
      icon: EnglishFlagIcon,
    },
    {
      id: 'es',
      icon: SpanishFlagIcon,
    },
  ]

  const handleLangChange = (language: Language) => {
    void i18n.changeLanguage(language)
  }

  return (
    <div className='flex gap-2'>
      {languages.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => {
            handleLangChange(id as Language)
          }}
        >
          <Icon
            className={twMerge(
              commonClassNames,
              currentSelectedLang !== id && notActiveLangClassNames,
            )}
          />
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
