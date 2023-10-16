import { Logo } from '@/components/branding'
import { LanguageSelector } from '@/features/i18n/components'

const Header = () => {
  return (
    <nav className='flex items-center justify-between p-3 bg-slate-900 text-white'>
      <Logo />
      <LanguageSelector />
    </nav>
  )
}

export default Header
