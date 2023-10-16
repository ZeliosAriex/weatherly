import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { type City } from '@/features/geo/geo.types.ts'

interface GeoState {
  selectedCity?: City
}

interface GeoActions {
  setSelectedCity: (selectedCity: City) => void
}

type StateAndActions = GeoState & GeoActions

const initialState: GeoState = {
  selectedCity: undefined,
}

const useGeoStore = create(
  immer<StateAndActions>((set) => ({
    ...initialState,

    setSelectedCity: (selectedCity) => {
      set({ selectedCity })
    },
  })),
)

export default useGeoStore
