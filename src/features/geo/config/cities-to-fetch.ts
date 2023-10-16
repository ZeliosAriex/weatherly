import { type GetGeoDataParams } from '@/features/geo/api'

export const citiesToFetch: Array<NonNullable<GetGeoDataParams['city']>> = [
  // Europa
  { name: 'madrid', country: 'ES' },
  { name: 'london', country: 'GB' },
  { name: 'rome', country: 'IT' },
  { name: 'berlin', country: 'DE' },

  // Norteamérica
  { name: 'toronto', country: 'CA' },
  { name: 'mexico city', country: 'MX' },
  { name: 'new york', country: 'US' },

  // Asia
  { name: 'singapore', country: 'SG' },
  { name: 'tokyo', country: 'JP' },
  { name: 'beijing', country: 'CN' },
  { name: 'mumbai', country: 'IN' },

  // Sudamérica
  { name: 'bogota', country: 'CO' },
  { name: 'buenos aires', country: 'AR' },
  { name: 'lima', country: 'PE' },

  // África
  { name: 'tangier', country: 'MA' },
  { name: 'cairo', country: 'EG' },

  // Oceanía
  { name: 'sydney', country: 'AU' },
  { name: 'wellington', country: 'NZ' },
]
