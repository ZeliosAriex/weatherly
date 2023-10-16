import { useTranslation } from 'react-i18next'

import { type WeatherData } from '@/features/weather/weather.types.ts'
import { timestampToLocale } from '@/util'

interface CityWeatherCardsProps {
  hourlyData: WeatherData['hourly']
}

const HourlyWeather = (props: CityWeatherCardsProps) => {
  const { hourlyData } = props
  const { t } = useTranslation()

  // Render a single hourly forecast item
  const renderHourlyItem = (data: WeatherData['hourly'][0]) => {
    return (
      <div
        key={data.dt}
        className='flex flex-col gap-4 p-4 min-w-[130px] items-center text-center'
      >
        <div>{timestampToLocale(data.dt)}</div>
        <img
          className='w-16'
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
        <div className='flex-1 text-sm'>{data.weather[0].description}</div>
        <strong>
          {data.temp} <sup>°C</sup>
        </strong>
      </div>
    )
  }

  return (
    <div>
      <h1 className='text-xl text-center font-bold'>
        {t('next24hTempForecast')}
      </h1>

      <div className='flex overflow-auto gap-4 p-4'>
        {hourlyData.slice(0, 25).map(renderHourlyItem)}
      </div>
    </div>
  )
}

export default HourlyWeather
