import { API_KEY, WEATHER_API_URL } from '@/constants/envs'
import { type Language } from '@/features/i18n/i18n.types.ts'
import { type GetWeatherParams } from '@/features/weather/api/getWeather'
import i18n from '@/lib/i18n.ts'

export const generateWeatherURL = (
  geoData: NonNullable<GetWeatherParams['geoData']>,
): string => {
  const currentLang = (i18n.language as Language) ?? 'en'
  return `${WEATHER_API_URL}?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&exclude=minutely,alerts&lang=${currentLang}&appid=${API_KEY}`
}
