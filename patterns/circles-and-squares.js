import { defaultFill, defaultOpacity } from './_defaults'

export const circlesAndSquares = (
  fill = defaultFill,
  opacity = defaultOpacity
) => {
  fill = fill.substring(fill.indexOf('#') + 1)
  return `url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Ecircle-squares%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm10%2017c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm20%200c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zM10%2037c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm10-17h20v20H20V20zm10%2017c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207z%22%20fill%3D%22%23${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
}
