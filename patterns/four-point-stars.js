import { defaultFill, defaultOpacity } from './_defaults.js'

export const fourPointStars = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20d%3D%22M8%204l4%202-4%202-2%204-2-4-4-2%204-2%202-4%202%204z%22%2F%3E%3C%2Fsvg%3E')`
