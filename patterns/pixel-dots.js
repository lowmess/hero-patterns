import { defaultFill, defaultOpacity } from './_defaults.js'

export const pixelDots = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Epixel-dots%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%200h16v2h-6v6h6v8H8v-6H2v6H0V0zm4%204h2v2H4V4zm8%208h2v2h-2v-2zm-8%200h2v2H4v-2zm8-8h2v2h-2V4z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
