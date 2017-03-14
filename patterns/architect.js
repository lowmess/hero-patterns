import { defaultFill, defaultOpacity } from './_defaults'

export const architect = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20width%3D%22100%22%20height%3D%22199%22%20viewBox%3D%220%200%20100%20199%22%3E%3Cpath%20d%3D%22M0%20199V0h1v1.99L100%20199h-1.12L1%204.22V199H0zM100%202h-.12l-1-2H100v2z%22%2F%3E%3C%2Fsvg%3E')`
