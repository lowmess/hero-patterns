import { defaultFill, defaultOpacity } from './_defaults.js'

const floorTile = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Efloor-tile%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%2010h10v10H0V10zM10%200h10v10H10V0z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`

export default floorTile
