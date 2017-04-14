import {defaultFill, defaultOpacity} from './_defaults'

export const zigZag = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2212%22%20viewBox%3D%220%200%2040%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Ezig-zag%3C%2Ftitle%3E%3Cpath%20d%3D%22M0%206.172L6.172%200h5.656L0%2011.828V6.172zm40%205.656L28.172%200h5.656L40%206.172v5.656zM6.172%2012l12-12h3.656l12%2012h-5.656L20%203.828%2011.828%2012H6.172zm12%200L20%2010.172%2021.828%2012h-3.656z%22%20fill%3D%22${fill}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`
