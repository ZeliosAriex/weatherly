import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ComboBox from '@/components/input/Combobox'
import { useGetGeoDataForCities } from '@/features/geo/api'
import { citiesToFetch } from '@/features/geo/config/cities-to-fetch.ts'
import { type City } from '@/features/geo/geo.types.ts'
import { type Language } from '@/features/i18n/i18n.types.ts'

interface CityComboBoxProps {
  city?: City
  onSelectedCity?: (city: City) => void
}

const CityComboBox = (props: CityComboBoxProps) => {
  const { city, onSelectedCity } = props
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language as Language

  // Fetch geo data for a list of cities
  const fetchedCities = useGetGeoDataForCities({ cities: citiesToFetch })

  // Check the loading and success states for the fetched cities
  const citiesLoading = fetchedCities.some((query) => query.isLoading)
  const citiesSuccess = fetchedCities.some((query) => query.isSuccess)

  // State to hold the valid list of cities
  const [citiesList, setCitiesList] = useState<City[]>([])

  useEffect(() => {
    if (citiesLoading && !citiesSuccess) return

    // Filter out cities without data or with empty data, then map to their required structure
    const validCities: City[] = fetchedCities
      .filter((fetchedCity) => fetchedCity.data && fetchedCity.data.length > 0)
      .map((fetchedCity) => {
        const cityData = fetchedCity.data![0] // Non-null assertion ensures data exists

        return {
          name: cityData.name,
          local_names: {
            en: cityData.local_names.en,
            es: cityData.local_names.es,
          },
          country: cityData.country,
          lon: cityData.lon,
          lat: cityData.lat,
        }
      })
    // Update the local state with the list of valid cities
    setCitiesList(validCities)
  }, [citiesLoading, citiesSuccess])

  // Helper function to display city names with their countries
  const displayValue = (city: City) =>
    city ? `${city.local_names[currentLang]}, ${city.country}` : ''

  return (
    <ComboBox
      label={t('city')}
      items={citiesList}
      itemToString={displayValue}
      itemToKey={(city) => `${city.country}_${city.name}`}
      value={city}
      onChange={(city) => onSelectedCity?.(city)}
      loading={citiesLoading}
      selectOnFocus
    />
  )
}

export default CityComboBox
