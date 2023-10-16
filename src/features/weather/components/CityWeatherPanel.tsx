import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import useGeoStore from '@/features/geo/geo.store.ts'
import { type Language } from '@/features/i18n/i18n.types.ts'
import { useGetWeather } from '@/features/weather/api'
import { HourlyWeather } from '@/features/weather/components'

const CityWeatherPanel = () => {
  const { t, i18n } = useTranslation()
  const selectedCity = useGeoStore((state) => state.selectedCity)
  const selectedLang = i18n.language as Language
  const geoData = selectedCity
    ? { lat: selectedCity.lat, lon: selectedCity.lon }
    : undefined
  const { data: weatherData, isLoading, refetch } = useGetWeather({ geoData })
  const todaysWeather = weatherData?.daily[0]

  // Refetch when the language changes
  useEffect(() => {
    if (!geoData) return
    void refetch()
  }, [selectedLang])

  if (isLoading) return <CityWeatherPanelSkeleton />

  if (!todaysWeather) return

  return (
    <div className='flex flex-col gap-16'>
      <div className='flex justify-center items-center gap-4'>
        <img
          className='w-10 h-10'
          src={`https://flagsapi.com/${selectedCity?.country}/flat/64.png`}
          alt=''
        />
        <h1 className='text-5xl font-bold'>
          {selectedCity?.local_names[selectedLang]}, {selectedCity?.country}
        </h1>
      </div>
      <div className='text-center text-lg'>
        <p>
          {t('minTemp')}:{' '}
          <strong className='text-blue-600'>
            {todaysWeather.temp.min} <sup>°C</sup>
          </strong>
        </p>
        <p>
          {t('maxTemp')}:{' '}
          <strong className='text-orange-600'>
            {todaysWeather.temp.max} <sup>°C</sup>
          </strong>
        </p>
      </div>

      <HourlyWeather hourlyData={weatherData.hourly} />
    </div>
  )
}

const CityWeatherPanelSkeleton = () => (
  <div>
    <div className='bg-gray-300 h-10 w-2/12 mb-14 rounded animate-pulse m-auto' />
    <div className='bg-gray-300 h-5 w-4/12 mb-3 rounded animate-pulse  m-auto' />
    <div className='bg-gray-300 h-5 w-4/12 mb-16 rounded animate-pulse  m-auto' />
    <div className='bg-gray-300 h-5 w-6/12 mb-3 rounded animate-pulse' />
    <div className='relative mt-8'>
      <div className='bg-gray-300 h-32 w-full rounded animate-pulse' />
    </div>
  </div>
)

export default CityWeatherPanel
