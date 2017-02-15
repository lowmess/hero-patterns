import { defaultFill, defaultOpacity } from './_defaults'

export const curtain = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2244%22%20height%3D%2212%22%20viewBox%3D%220%200%2044%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eup-down%3C%2Ftitle%3E%3Cpath%20d%3D%22M20%2012v-2L0%200v10l4%202h16zm18%200l4-2V0L22%2010v2h16zM20%200v8L4%200h16zm18%200L22%208V0h16z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
