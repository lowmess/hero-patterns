import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const overlappingDiamonds = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2248%22%20height%3D%2264%22%20viewBox%3D%220%200%2048%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eoverlapping-diamonds%3C%2Ftitle%3E%3Cpath%20d%3D%22M48%2028v-4L36%2012%2024%2024%2012%2012%200%2024v4l4%204-4%204v4l12%2012%2012-12%2012%2012%2012-12v-4l-4-4%204-4zM8%2032l-6-6%2010-10%2010%2010-6%206%206%206-10%2010L2%2038l6-6zm12%200l4-4%204%204-4%204-4-4zm12%200l-6-6%2010-10%2010%2010-6%206%206%206-10%2010-10-10%206-6zM0%2016L10%206%204%200h4l4%204%204-4h4l-6%206%2010%2010L34%206l-6-6h4l4%204%204-4h4l-6%206%2010%2010v4L36%208%2024%2020%2012%208%200%2020v-4zm0%2032l10%2010-6%206h4l4-4%204%204h4l-6-6%2010-10%2010%2010-6%206h4l4-4%204%204h4l-6-6%2010-10v-4L36%2056%2024%2044%2012%2056%200%2044v4z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
