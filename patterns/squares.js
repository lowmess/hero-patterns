import { defaultFill, defaultOpacity } from './_defaults'

export const squares = (fill = defaultFill, opacity = defaultOpacity) => {
  fill = fill.substring(fill.indexOf('#') + 1)
  return `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M6%2018h12V6H6v12zM4%204h16v16H4V4z%22%20fill%3D%22%23${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fsvg%3E')`
}
