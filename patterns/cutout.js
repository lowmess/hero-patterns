import { defaultFill, defaultOpacity } from './_defaults'

export const cutout = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%3E%3Cpath%20d%3D%22M12%200h18v6h6v6h6v18h-6v6h-6v6H12v-6H6v-6H0V12h6V6h6V0zm12%206h-6v6h-6v6H6v6h6v6h6v6h6v-6h6v-6h6v-6h-6v-6h-6V6zm-6%2012h6v6h-6v-6zm24%2024h6v6h-6v-6z%22%2F%3E%3C%2Fsvg%3E')`
