import { defaultFill, defaultOpacity } from './_defaults.js'

const rails = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2210%22%20viewBox%3D%220%200%2020%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Erails%3C%2Ftitle%3E%3Cpath%20d%3D%22M16%206H6v4H4V6H2V4h2V0h2v4h10V0h2v4h2v2h-2v4h-2V6z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`

export default rails
