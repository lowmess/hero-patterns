import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const bamboo = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2232%22%20width%3D%2216%22%20viewBox%3D%220%200%2016%2032%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M0%2024h4v2H0v-2zm0%204h6v2H0v-2zm0-8h2v2H0v-2zM0%200h4v2H0V0zm0%204h2v2H0V4zm16%2020h-6v2h6v-2zm0%204H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0%204h-4v2h4V4zm-2%2012h2v2h-2v-2zm0-8h2v2h-2V8zM2%208h10v2H2V8zm0%208h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0%2016h6v2H4v-2zM6%200h2v2H6V0zm0%2024h2v2H6v-2z%22%2F%3E%3C%2Fsvg%3E')`
