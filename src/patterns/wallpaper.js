import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const wallpaper = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2284%22%20height%3D%2216%22%20viewBox%3D%220%200%2084%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eplus-lines%3C%2Ftitle%3E%3Cpath%20d%3D%22M78%207V4h-2v3h-3v2h3v3h2V9h3V7h-3zM30%207V4h-2v3h-3v2h3v3h2V9h3V7h-3zM10%200h2v16h-2V0zm6%200h4v16h-4V0zM2%200h4v16H2V0zm50%200h2v16h-2V0zM38%200h2v16h-2V0zm28%200h2v16h-2V0zm-8%200h6v16h-6V0zM42%200h6v16h-6V0z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
