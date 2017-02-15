import { defaultFill, defaultOpacity } from './_defaults'

export const houndstooth = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Ehoundstooth%3C%2Ftitle%3E%3Cg%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2018h6l6-6v6h6l-6%206H0zM24%2018v6h-6zM24%200l-6%206h-6l6-6zM12%200v6L0%2018v-6l6-6H0V0z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`
