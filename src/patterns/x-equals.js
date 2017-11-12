import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const xEquals = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20width%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M5%203.59L1.46.05.05%201.46%203.59%205%20.05%208.54l1.41%201.41L5%206.41l3.54%203.54%201.41-1.41L6.41%205l3.54-3.54L8.54.05%205%203.59zM17%202h24v2H17V2zm0%204h24v2H17V6zM2%2017h2v24H2V17zm4%200h2v24H6V17z%22%2F%3E%3C%2Fsvg%3E')`
