export interface WeatherData {
  lat: number
  long: number
  timezone: string
  timezone_offset: number
  current: TempData
  daily: DailyTempData[]
  hourly: TempData[]
}

interface TempData {
  dt: number
  temp: number
  weather: WeatherIcon[]
}

interface DailyTempData {
  dt: number
  temp: { min: number; max: number }
}

interface WeatherIcon {
  id: number
  main: string
  description: string
  icon: string
}
