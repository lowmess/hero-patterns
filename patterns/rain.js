import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const rain = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2216%22%20viewBox%3D%220%200%2012%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Erain%3C%2Ftitle%3E%3Cpath%20d%3D%22M4%20.99C4%20.445%204.444%200%205%200c.552%200%201%20.451%201%20.99v4.02C6%205.555%205.556%206%205%206c-.552%200-1-.451-1-.99V.99zm6%208c0-.546.444-.99%201-.99.552%200%201%20.451%201%20.99v4.02c0%20.546-.444.99-1%20.99-.552%200-1-.451-1-.99V8.99z%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
