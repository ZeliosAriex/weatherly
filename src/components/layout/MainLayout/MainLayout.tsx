import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Header } from '@/components/navigation'

interface MainLayoutProps {
  children: ReactNode
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 overflow-y-auto'>{children}</main>
      <footer className='text-center text-xs p-4'>
        {t('madeWithLove')}{' '}
        <a
          href='https://github.com/ZeliosAriex'
          target='_blank'
          rel='noopener noreferrer'
          className='text-orange-500 hover:text-orange-600 underline hover:underline transition duration-150 ease-in-out'
        >
          Zelios Ariex
        </a>
      </footer>
    </div>
  )
}

export default MainLayout
