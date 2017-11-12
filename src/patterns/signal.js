import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const signal = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2284%22%20height%3D%2248%22%20viewBox%3D%220%200%2084%2048%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Esignal%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%200h12v6H0V0zm28%208h12v6H28V8zm14-8h12v6H42V0zm14%200h12v6H56V0zm0%208h12v6H56V8zM42%208h12v6H42V8zm0%2016h12v6H42v-6zm14-8h12v6H56v-6zm14%200h12v6H70v-6zm0-16h12v6H70V0zM28%2032h12v6H28v-6zM14%2016h12v6H14v-6zM0%2024h12v6H0v-6zm0%208h12v6H0v-6zm14%200h12v6H14v-6zm14%208h12v6H28v-6zm-14%200h12v6H14v-6zm28%200h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14%208h12v6H70v-6zm0%208h12v6H70v-6zM14%2024h12v6H14v-6zm14-8h12v6H28v-6zM14%208h12v6H14V8zM0%208h12v6H0V8z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
