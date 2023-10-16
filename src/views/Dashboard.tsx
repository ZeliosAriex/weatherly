import { useTranslation } from 'react-i18next'

import { MainLayout } from '@/components/layout'
import { GeoSelectControls } from '@/features/geo/components'
import { CityWeatherPanel } from '@/features/weather/components'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <div className='container mx-auto mt-6 text-slate-700'>
        <div className='mx-4 my-8 '>
          <h1 className='text-3xl mb-8 font-bold'>{t('welcome')}</h1>
          <h2 className='text-xl leading-relaxed '>{t('intro')}</h2>
        </div>
        <div className='flex flex-col mx-4 gap-10'>
          <GeoSelectControls />

          <CityWeatherPanel />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard
