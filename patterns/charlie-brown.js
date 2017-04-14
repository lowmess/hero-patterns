import {defaultFill, defaultOpacity} from './_defaults'

export const charlieBrown = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2212%22%20viewBox%3D%220%200%2020%2012%22%3E%3Cpath%20d%3D%22M9.8%2012L0%202.2V.8l10%2010%2010-10v1.4L10.2%2012h-.4zm-4%200L0%206.2V4.8L7.2%2012H5.8zm8.4%200L20%206.2V4.8L12.8%2012h1.4zM9.8%200l.2.2.2-.2h-.4zm-4%200L10%204.2%2014.2%200h-1.4L10%202.8%207.2%200H5.8z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
