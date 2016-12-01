import { defaultFill, defaultOpacity } from './_defaults.js'


export const fancyRectangles = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2248%22%20viewBox%3D%220%200%2060%2048%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M6%2012h6v12H6V12zm12%200h6v12h-6V12zm6-12h6v12h-6V0zM12%200h6v12h-6V0zm0%2024h6v12h-6V24zM0%200h6v12H0V0zm6%2036h6v12H6V36zm12%200h6v12h-6V36zm12-12h6v12h-6V24zM42%200h6v12h-6V0zm-6%2012h6v12h-6V12zm12%200h6v12h-6V12zM36%2036h6v12h-6V36zm12%200h6v12h-6V36zm-6-12h6v12h-6V24zm12%200h6v12h-6V24z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
