import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const tinyCheckers = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%228%22%20width%3D%228%22%20viewBox%3D%220%200%208%208%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M0%200h4v4H0V0zm4%204h4v4H4V4z%22%2F%3E%3C%2Fsvg%3E')`
