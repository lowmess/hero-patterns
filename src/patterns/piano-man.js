import { defaultFill, defaultOpacity } from './_defaults'
import { unhex } from './_utils'

export const pianoMan = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2270%22%20height%3D%2246%22%20viewBox%3D%220%200%2070%2046%22%3E%3Cpath%20d%3D%22M68%2044h-6v2h-6v-2h-4v2h-6v-2h-6v2h-2v-2h-6v2h-6v-2h-4v2h-6v-2h-4v2H6v-2H0v-2h8V28H6V0h6v28h-2v14h8V28h-2V0h6v28h-2v14h8V28h-2V0h6v28h-2v14h8V0h2v42h8V28h-2V0h6v28h-2v14h8V28h-2V0h6v28h-2v14h8V0h2v46h-2z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
