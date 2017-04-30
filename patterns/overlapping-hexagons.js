import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const overlappingHexagons = (
  fill = defaultFill,
  opacity = defaultOpacity
) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2240%22%20viewBox%3D%220%200%2050%2040%22%3E%3Cpath%20d%3D%22M40%2010L36.67%200h-2.11l3.33%2010H20l-2.28%206.84L12.11%200H10l6.67%2020H10l-2.28%206.84L2.11%2010%205.44%200h-2.1L0%2010l6.67%2020-3.34%2010h2.11l2.28-6.84L10%2040h20l2.28-6.84L34.56%2040h2.1l-3.33-10H40l2.28-6.84L47.89%2040H50l-6.67-20L50%200h-2.1l-5.62%2016.84L40%2010zm1.23%2010l-2.28-6.84L34%2028h4.56l2.67-8zm-10.67%208l-2-6h-9.12l2%206h9.12zm-12.84-4.84L12.77%2038h15.79l2.67-8H20l-2.28-6.84zM18.77%2020H30l2.28%206.84L37.23%2012H21.44l-2.67%208zm-7.33%202H16l-4.95%2014.84L8.77%2030l2.67-8z%22%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(fill)}%22%20fill-opacity%3D%22${opacity}%22%2F%3E%3C%2Fsvg%3E')`
