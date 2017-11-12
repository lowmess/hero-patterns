import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const fallingTriangles = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2236%22%20height%3D%2272%22%20viewBox%3D%220%200%2036%2072%22%3E%3Cpath%20d%3D%22M2%206h12L8%2018%202%206zm18%2036h12l-6%2012-6-12z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
