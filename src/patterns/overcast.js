import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const overcast = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20width%3D%2280%22%20height%3D%2280%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20d%3D%22M15%2015h50l-5%205H20v40l-5%205V15zm0%2050h50V15L80%200v80H0l15-15zm32.07-32.07l3.54-3.54A15%2015%200%200%201%2029.4%2050.6l3.53-3.53a10%2010%200%201%200%2014.14-14.14zM32.93%2047.07a10%2010%200%201%201%2014.14-14.14L32.93%2047.07z%22%2F%3E%3C%2Fsvg%3E')`
