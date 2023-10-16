import { type UseQueryOptions, useQueries, useQuery } from 'react-query'

import { generateGeoDataURL } from '@/features/geo/constants/endpoints.ts'
import { type City } from '@/features/geo/geo.types.ts'
import { HttpClient } from '@/lib/axios.ts'

export interface GetGeoDataParams {
  city?: Pick<City, 'name' | 'country'>
}

export type GetGeoDataResponse = City[]

export const getGeoData = async ({ city }: GetGeoDataParams) => {
  if (!city) throw new Error('City is not defined!')
  return await HttpClient.get<GetGeoDataResponse>(generateGeoDataURL(city))
}

export const getGeoDataQueryKey = ({ city }: GetGeoDataParams) => [
  'getGeoData',
  city?.name,
]
export const useGetGeoData = (
  { city }: GetGeoDataParams,
  options?: UseQueryOptions<GetGeoDataResponse>,
) =>
  useQuery({
    queryKey: getGeoDataQueryKey({ city }),
    queryFn: async () => await getGeoData({ city }),
    enabled: !!city,
    ...options,
  })

export const useGetGeoDataForCities = ({
  cities,
}: {
  cities: Array<NonNullable<GetGeoDataParams['city']>>
}) => {
  const queries = cities.map((city) => ({
    queryKey: getGeoDataQueryKey({ city }),
    queryFn: async () => await getGeoData({ city }),
    enabled: !!city,
  }))

  return useQueries(queries)
}
