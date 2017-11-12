import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const texture = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20width%3D%224%22%20height%3D%224%22%20viewBox%3D%220%200%204%204%22%3E%3Cpath%20d%3D%22M1%203h1v1H1V3zm2-2h1v1H3V1z%22%2F%3E%3C%2Fsvg%3E')`
