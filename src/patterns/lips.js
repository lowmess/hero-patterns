import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const lips = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2292%22%20width%3D%22112%22%20viewBox%3D%220%200%20112%2092%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M72%2010H40L16%2020H0v8h16l24-14h32l24%2014h16v-8H96L72%2010zm0-8H40L16%204H0v8h16l24-6h32l24%206h16V4H96L72%202zm0%2084H40l-24-6H0v8h16l24%202h32l24-2h16v-8H96l-24%206zm0-8H40L16%2064H0v8h16l24%2010h32l24-10h16v-8H96L72%2078zm0-12H40L16%2056H0v4h16l24%2014h32l24-14h16v-4H96L72%2066zm0-16H40l-24-2H0v4h16l24%206h32l24-6h16v-4H96l-24%202zm0-16H40l-24%206H0v4h16l24-2h32l24%202h16v-4H96l-24-6zm0-16H40L16%2032H0v4h16l24-10h32l24%2010h16v-4H96L72%2018z%22%2F%3E%3C%2Fsvg%3E')`
