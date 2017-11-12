import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const corkScrew = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2216%22%20width%3D%2220%22%20viewBox%3D%220%200%2020%2016%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M0%20.04C2.6.22%204.99%201.1%207%202.5A13.94%2013.94%200%200%201%2015%200h4c.34%200%20.67.01%201%20.04v2A12%2012%200%200%200%207.17%2012h5.12A7%207%200%200%201%2020%207.07V14a5%205%200%200%200-3-4.58A5%205%200%200%200%2014%2014H0V7.07c.86.12%201.67.4%202.4.81.75-1.52%201.76-2.9%202.98-4.05C3.79%202.83%201.96%202.2%200%202.04v-2z%22%2F%3E%3C%2Fsvg%3E')`
