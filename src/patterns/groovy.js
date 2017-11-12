import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const groovy = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2240%22%20viewBox%3D%220%200%2024%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Egroovy%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2040c5.523%200%2010-4.477%2010-10V0C4.477%200%200%204.477%200%2010v30zm22%200c-5.523%200-10-4.477-10-10V0c5.523%200%2010%204.477%2010%2010v30z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
