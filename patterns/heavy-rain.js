import { defaultFill, defaultOpacity } from './_defaults'

export const heavyRain = (fill = defaultFill, opacity = defaultOpacity) => {
  fill = fill.substring(fill.indexOf('#') + 1)
  return `url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20viewBox%3D%220%200%2012%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2%200h2v12H2V0zm1%2020c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM9%208c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zm-1%204h2v12H8V12z%22%20fill%3D%22%23${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
}
