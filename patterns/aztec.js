import { defaultFill, defaultOpacity } from './_defaults.js'


export const aztec = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2264%22%20viewBox%3D%220%200%2032%2064%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eaztec%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2028h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12%208h20v4H16v24H0v-4h12V36zm16%2012h-4v12h8v4H20V44h12v12h-4v-8zM0%2036h8v20H0v-4h4V40H0v-4z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
