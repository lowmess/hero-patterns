import { defaultFill, defaultOpacity } from './_defaults.js'

const volcanoLamp = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2248%22%20height%3D%2232%22%20viewBox%3D%220%200%2048%2032%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M27%2032c0-3.314%202.686-6%206-6%205.523%200%2010-4.477%2010-10S38.523%206%2033%206c-3.314%200-6-2.686-6-6h2c0%202.21%201.79%204%204%204%206.627%200%2012%205.373%2012%2012s-5.373%2012-12%2012c-2.21%200-4%201.79-4%204h-2zm-6%200c0-3.314-2.686-6-6-6-5.523%200-10-4.477-10-10S9.477%206%2015%206c3.314%200%206-2.686%206-6h-2c0%202.21-1.79%204-4%204C8.373%204%203%209.373%203%2016s5.373%2012%2012%2012c2.21%200%204%201.79%204%204h2z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`

export default volcanoLamp
