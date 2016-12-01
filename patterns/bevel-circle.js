import { defaultFill, defaultOpacity } from './_defaults.js'


export const bevelCircle = (fill = defaultFill, opacity = defaultOpacity) => `url('data:image/svg+xml,%3Csvg%20width%3D%2238%22%20height%3D%2238%22%20viewBox%3D%220%200%2038%2038%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.414%2029l-8%208h33.172l-8-8H10.414zM9%2027.586l-8%208V2.414l8%208v17.172zM10.414%209l-8-8h33.172l-8%208H10.414zM29%2010.414l8-8v33.172l-8-8V10.414zM11%2011h16v16H11V11zm8%2014c3.314%200%206-2.686%206-6s-2.686-6-6-6-6%202.686-6%206%202.686%206%206%206zm0-2c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zM0%200h38v38H0V0z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
