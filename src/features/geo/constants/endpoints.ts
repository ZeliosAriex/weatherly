import { API_KEY, GEOCODING_API_URL } from '@/constants/envs.ts'
import { type GetGeoDataParams } from '@/features/geo/api'

export const generateGeoDataURL = (
  city: NonNullable<GetGeoDataParams['city']>,
): string => {
  return `${GEOCODING_API_URL}?q=${city.name},${city.country}&limit=1&appid=${API_KEY}`
}
