export function getDayName(seconds) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let d = new Date(seconds * 1000)
  return days[d.getDay()]
}

export function convertKelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15)
}
