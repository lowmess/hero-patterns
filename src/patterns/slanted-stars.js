import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const slantedStars = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Etriangles%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2015l15%2015H0V15zM15%200l15%2015V0H15z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
