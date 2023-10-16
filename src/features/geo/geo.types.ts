import { type Language } from '@/features/i18n/i18n.types.ts'

export interface City {
  /** The name of the city */
  name: string

  local_names: Record<Language, string>

  /** The country code of the city in ISO 3166-1 alpha-2 format */
  country: string

  /** Latitude of the city in decimal degrees format */
  lat: number

  /** Longitude of the city in decimal degrees format */
  lon: number
}
