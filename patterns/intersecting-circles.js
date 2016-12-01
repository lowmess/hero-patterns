import { defaultFill, defaultOpacity } from './_defaults.js'


export const intersectingCircles = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eintersecting-circles%3C%2Ftitle%3E%3Cpath%20d%3D%22M15%200C6.716%200%200%206.716%200%2015c8.284%200%2015-6.716%2015-15zM0%2015c0%208.284%206.716%2015%2015%2015%200-8.284-6.716-15-15-15zm30%200c0-8.284-6.716-15-15-15%200%208.284%206.716%2015%2015%2015zm0%200c0%208.284-6.716%2015-15%2015%200-8.284%206.716-15%2015-15z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
