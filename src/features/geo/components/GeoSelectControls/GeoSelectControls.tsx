import { CityComboBox } from '@/features/geo/components'
import useGeoStore from '@/features/geo/geo.store.ts'

const GeoSelectControls = () => {
  const selectedCity = useGeoStore((state) => state.selectedCity)
  const setSelectedCity = useGeoStore((state) => state.setSelectedCity)

  return <CityComboBox city={selectedCity} onSelectedCity={setSelectedCity} />
}

export default GeoSelectControls
