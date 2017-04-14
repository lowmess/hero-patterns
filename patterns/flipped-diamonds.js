import {defaultFill, defaultOpacity} from './_defaults'

export const flippedDiamonds = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2220%22%20viewBox%3D%220%200%2016%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eflipped-diamonds%3C%2Ftitle%3E%3Cg%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M8%200v20L0%2010zM16%200v10L8%200zM16%2010v10H8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`
