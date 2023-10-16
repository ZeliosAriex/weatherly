import { type UseQueryOptions, useQuery } from 'react-query'

import { type City } from '@/features/geo/geo.types.ts'
import { generateWeatherURL } from '@/features/weather/constants/endpoints.ts'
import { type WeatherData } from '@/features/weather/weather.types.ts'
import { HttpClient } from '@/lib/axios.ts'

export interface GetWeatherParams {
  geoData?: Pick<City, 'lat' | 'lon'>
}

export type GetWeatherResponse = WeatherData

export const getWeather = async ({ geoData }: GetWeatherParams) => {
  if (!geoData) throw new Error('Geo data is not defined!')
  return await HttpClient.get<GetWeatherResponse>(generateWeatherURL(geoData))
}

export const getWeatherQueryKey = ({ geoData }: GetWeatherParams) => [
  'getWeather',
  geoData?.lat,
  geoData?.lon,
]

export const useGetWeather = (
  { geoData }: GetWeatherParams,
  options?: UseQueryOptions<GetWeatherResponse>,
) =>
  useQuery({
    queryKey: getWeatherQueryKey({ geoData }),
    queryFn: async () => await getWeather({ geoData }),
    enabled: !!geoData,
    ...options,
  })
